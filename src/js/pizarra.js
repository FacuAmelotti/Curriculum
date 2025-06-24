// Estado global de la aplicación
let currentTool = 'select';
let selectedObject = null;
let objects = [];
let objectIdCounter = 0;
let isDrawing = false;
let startX, startY;
let zoom = 1;
let panX = 0, panY = 0;
let isDragging = false;
let dragStartX, dragStartY;
let isPanning = false;
let isResizing = false;
let resizeHandle = null;
let renderQueue = new Set();
let renderScheduled = false;
let mouseMoveThrottle = null;
let transformUpdateScheduled = false;
let updateComponentsDebounce = null;
let textCreationAttempted = false;
let messageTimeout = null;

// Referencias a elementos DOM
const whiteboard = document.getElementById('whiteboard');
const whiteboardContent = document.getElementById('whiteboard-content');
const componentsList = document.getElementById('components-list');
const objectProperties = document.getElementById('object-properties');

// Eventos de la pizarra
whiteboard.addEventListener('mousedown', handleMouseDown);
whiteboard.addEventListener('mousemove', handleMouseMove);
whiteboard.addEventListener('mouseup', handleMouseUp);
whiteboard.addEventListener('wheel', handleWheel);

// Establecer herramienta activa
function setTool(tool) {
    currentTool = tool;
    document.querySelectorAll('.tool-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // Cambiar cursor según herramienta
    switch(tool) {
        case 'select':
            whiteboard.style.cursor = 'default';
            break;
        case 'text':
            whiteboard.style.cursor = 'text';
            break;
        case 'pan':
            whiteboard.style.cursor = 'grab';
            break;
        default:
            whiteboard.style.cursor = 'crosshair';
    }
}

// Función para ir al CV
function goToCV() {
    // Cambia esta URL por la de tu página CV
    window.location.href = './index.html'; // o la ruta correcta a tu CV
    
    // Alternativa si quieres abrir en nueva pestaña:
    // window.open('../index.html', '_blank');
}

//Arrastrar objeto
function handleMouseDown(e) {
    const rect = whiteboard.getBoundingClientRect();
    startX = (e.clientX - rect.left - panX) / zoom;
    startY = (e.clientY - rect.top - panY) / zoom;

    if (currentTool === 'pan') {
        isPanning = true;
        dragStartX = e.clientX;
        dragStartY = e.clientY;
        whiteboard.style.cursor = 'grabbing';
    } else if (currentTool === 'select') {
        const clickedObject = getObjectAt(startX, startY);
        if (clickedObject) {
            selectObject(clickedObject);
            isDragging = true;
            dragStartX = startX;
            dragStartY = startY;
            whiteboard.style.cursor = 'move';
        } else {
            deselectAll();
        }
    } else {
        // NUEVA LÓGICA PARA TEXTO: Solo permitir si no es un simple clic
        if (currentTool === 'text') {
            textCreationAttempted = true;
            // No crear objeto inmediatamente, esperar movimiento del mouse
        } else {
            isDrawing = true;
            createObject(currentTool, startX, startY);
        }
    }
}

function handleMouseMove(e) {
    if (mouseMoveThrottle) {
        cancelAnimationFrame(mouseMoveThrottle);
    }
    
    mouseMoveThrottle = requestAnimationFrame(() => {
        handleMouseMoveCore(e);
    });
}

function handleMouseUp(e) {
    if (isPanning) {
        isPanning = false;
        whiteboard.style.cursor = currentTool === 'pan' ? 'grab' : 'default';
        return;
    }

    // NUEVA LÓGICA: Si se intentó crear texto pero no hubo arrastre
    if (textCreationAttempted && currentTool === 'text') {
        textCreationAttempted = false;
        // Mostrar mensaje en la posición del mouse
        const rect = whiteboard.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        showTemporaryMessage(e.clientX, e.clientY, 'Arrastra el mouse para crear el cuadro de texto');
        return;
    }

    if (isDrawing) {
        finalizeObject();
        isDrawing = false;
        setToolByName('select');
    }
    isDragging = false;
}

function handleWheel(e) {
    e.preventDefault();
    
    const rect = whiteboard.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Calcular posición del mouse en coordenadas del canvas
    const worldX = (mouseX - panX) / zoom;
    const worldY = (mouseY - panY) / zoom;
    
    const delta = e.deltaY > 0 ? 0.9 : 1.1;
    const newZoom = Math.max(0.1, Math.min(3, zoom * delta));
    
    // Ajustar pan para mantener el punto del mouse fijo
    panX = mouseX - worldX * newZoom;
    panY = mouseY - worldY * newZoom;
    
    zoom = newZoom;
    updateTransform();
}

function handleMouseMoveCore(e) {
    if (isPanning) {
        const deltaX = e.clientX - dragStartX;
        const deltaY = e.clientY - dragStartY;
        
        panX += deltaX;
        panY += deltaY;
        
        updateTransform();
        
        dragStartX = e.clientX;
        dragStartY = e.clientY;
        return;
    }

    const rect = whiteboard.getBoundingClientRect();
    const currentX = (e.clientX - rect.left - panX) / zoom;
    const currentY = (e.clientY - rect.top - panY) / zoom;

    // NUEVA LÓGICA: Si se intentó crear texto y se mueve el mouse, entonces crear
    if (textCreationAttempted && currentTool === 'text') {
        const deltaX = Math.abs(currentX - startX);
        const deltaY = Math.abs(currentY - startY);
        
        // Si se movió lo suficiente, crear el objeto
        if (deltaX > 5 || deltaY > 5) {
            textCreationAttempted = false;
            isDrawing = true;
            createObject('text', startX, startY);
        }
    }

    if (isDragging && selectedObject) {
        const deltaX = currentX - dragStartX;
        const deltaY = currentY - dragStartY;
        
        selectedObject.x += deltaX;
        selectedObject.y += deltaY;
        
        scheduleRender(selectedObject);
        updatePropertiesPanel(selectedObject);
        dragStartX = currentX;
        dragStartY = currentY;
    } else if (isDrawing) {
        updateDrawingObject(currentX, currentY);
    }
}

// Función auxiliar para cambiar herramienta por nombre
function setToolByName(toolName) {
    currentTool = toolName;
    document.querySelectorAll('.tool-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.onclick && btn.onclick.toString().includes(toolName)) {
            btn.classList.add('active');
        }
    });
    
    switch(toolName) {
        case 'select':
            whiteboard.style.cursor = 'default';
            break;
        case 'text':
            whiteboard.style.cursor = 'text';
            break;
        case 'pan':
            whiteboard.style.cursor = 'grab';
            break;
        default:
            whiteboard.style.cursor = 'crosshair';
    }
}

// Función para generar ID inteligente basado en el tipo
function generateSmartId(type) {
    const existingObjects = objects.filter(obj => obj.type === type);
    const existingNumbers = existingObjects.map(obj => {
        const match = obj.name ? obj.name.match(new RegExp(`${type}(\\d+)`)) : null;
        return match ? parseInt(match[1]) : 0;
    });
    
    let number = 1;
    while (existingNumbers.includes(number)) {
        number++;
    }
    
    return number;
}

// Crear objetos
function createObject(type, x, y) {
    const smartId = generateSmartId(type);
    
    const obj = {
        id: objectIdCounter++,
        type: type,
        name: `${type}${smartId}`,
        x: x,
        y: y,
        width: 100,
        height: type === 'line' ? 3 : 100,
        rotation: 0,
        zIndex: 1, // NUEVO: Z-index por defecto
        backgroundColor: document.getElementById('bg-color') ? document.getElementById('bg-color').value : '#ffffff',
        borderColor: document.getElementById('border-color') ? document.getElementById('border-color').value : '#000000',
        borderWidth: document.getElementById('border-width') ? parseInt(document.getElementById('border-width').value) : 3,
        text: type === 'text' ? 'Nuevo texto' : ''
    };

    objects.push(obj);
    renderObject(obj);
    
    setTimeout(() => {
        selectObject(obj);
        const element = document.getElementById(`object-${obj.id}`);
        if (element) {
            element.classList.add('newly-created');
            setTimeout(() => {
                element.classList.remove('newly-created');
            }, 500);
        }
    }, 10);
    
    updateComponentsList();
}


function renderObject(obj) {
    const element = document.createElement('div');
    element.className = `wb-object wb-${obj.type}`;
    element.id = `object-${obj.id}`;
    
    // Aplicar estilos base
    element.style.position = 'absolute';
    element.style.cursor = 'pointer';
    element.style.userSelect = 'none';
    element.style.zIndex = obj.zIndex || 1; // NUEVO: Aplicar z-index
    
    switch(obj.type) {
        case 'text':
            element.innerHTML = obj.text;
            element.contentEditable = true;
            element.style.padding = '8px';
            element.style.fontSize = '16px';
            element.style.fontFamily = 'Arial, sans-serif';
            element.style.minWidth = '50px';
            element.style.minHeight = '30px';
            element.addEventListener('input', () => {
                obj.text = element.innerHTML;
            });
            element.addEventListener('blur', () => {
                updateComponentsList();
            });
            break;
        case 'rectangle':
            element.style.minWidth = '20px';
            element.style.minHeight = '20px';
            break;
        case 'circle':
            element.style.borderRadius = '50%';
            element.style.minWidth = '20px';
            element.style.minHeight = '20px';
            break;
        case 'line':
            element.style.minWidth = '20px';
            element.style.minHeight = '2px';
            element.style.transformOrigin = 'left center';
            break;
    }

    updateObjectPosition(obj);
    updateObjectStyle(obj);
    
    element.addEventListener('click', (e) => {
        e.stopPropagation();
        selectObject(obj);
    });

    element.addEventListener('mouseenter', () => {
        if (currentTool === 'select') {
            element.style.outline = '1px dashed #007bff';
        }
    });
    
    element.addEventListener('mouseleave', () => {
        if (!element.classList.contains('selected')) {
            element.style.outline = 'none';
        }
    });

    whiteboardContent.appendChild(element);
}

function updateObjectPosition(obj) {
    const element = document.getElementById(`object-${obj.id}`);
    if (element) {
        element.style.left = obj.x + 'px';
        element.style.top = obj.y + 'px';
        element.style.width = obj.width + 'px';
        element.style.height = obj.height + 'px';
        element.style.transform = `rotate(${obj.rotation}deg)`;
        element.style.zIndex = obj.zIndex || 1; // NUEVO: Actualizar z-index
    }
}

// FUNCIÓN CORREGIDA - Esta es la clave del problema
function updateObjectStyle(obj) {
    const element = document.getElementById(`object-${obj.id}`);
    if (!element) return;
    
    // Limpiar estilos previos para evitar conflictos
    element.style.backgroundColor = '';
    element.style.borderColor = '';
    element.style.borderWidth = '';
    element.style.borderStyle = '';
    element.style.border = '';
    
    // Aplicar estilos según el tipo de objeto
    if (obj.type === 'line') {
        // Para líneas: usar el color de borde como color de fondo
        element.style.backgroundColor = obj.borderColor;
        element.style.height = obj.borderWidth + 'px';
        element.style.border = 'none';
        element.style.transformOrigin = 'left center';
    } else {
        // Para todos los demás objetos
        element.style.backgroundColor = obj.backgroundColor;
        element.style.borderColor = obj.borderColor;
        element.style.borderWidth = obj.borderWidth + 'px';
        element.style.borderStyle = 'solid';
    }
    
    // Forzar el repintado del elemento
    element.style.display = 'none';
    element.offsetHeight; // Trigger reflow
    element.style.display = 'block';
}

// CORRECCIÓN 1: Modificar la función togglePropertiesPanel para usar clases CSS
function togglePropertiesPanel(show) {
    const propertiesPanel = document.querySelector('.properties-panel');
    if (!propertiesPanel) return;
    
    if (show) {
        propertiesPanel.classList.add('visible');
    } else {
        propertiesPanel.classList.remove('visible');
    }
}

// CORRECCIÓN 2: Modificar la función createObject para selección automática
function createObject(type, x, y) {
    const smartId = generateSmartId(type);
    
    const obj = {
        id: objectIdCounter++,
        type: type,
        name: `${type}${smartId}`,
        x: x,
        y: y,
        width: 100,
        height: type === 'line' ? 3 : 100,
        rotation: 0,
        backgroundColor: document.getElementById('bg-color') ? document.getElementById('bg-color').value : '#ffffff',
        borderColor: document.getElementById('border-color') ? document.getElementById('border-color').value : '#000000',
        borderWidth: document.getElementById('border-width') ? parseInt(document.getElementById('border-width').value) : 3,
        text: type === 'text' ? 'Nuevo texto' : ''
    };

    objects.push(obj);
    renderObject(obj);
    
    // SELECCIÓN AUTOMÁTICA: Seleccionar inmediatamente el objeto recién creado
    setTimeout(() => {
        selectObject(obj);
        // Agregar clase para animación de objeto recién creado
        const element = document.getElementById(`object-${obj.id}`);
        if (element) {
            element.classList.add('newly-created');
            // Remover la clase después de la animación
            setTimeout(() => {
                element.classList.remove('newly-created');
            }, 500);
        }
    }, 10); // Pequeño delay para asegurar que el DOM esté listo
    
    updateComponentsList();
}

// CORRECCIÓN 3: Mejorar updateDrawingObject para rotación de líneas
function updateDrawingObject(currentX, currentY) {
    if (objects.length === 0) return;
    
    const obj = objects[objects.length - 1];
    
    if (obj.type === 'line') {
        // Para líneas: calcular longitud y ángulo dinámicamente
        const deltaX = currentX - startX;
        const deltaY = currentY - startY;
        
        obj.width = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        obj.height = obj.borderWidth;
        obj.x = startX;
        obj.y = startY;
        
        // Calcular ángulo en grados y actualizar rotación
        obj.rotation = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
        
        // Actualizar inmediatamente las propiedades si está seleccionado
        if (selectedObject && selectedObject.id === obj.id) {
            updatePropertiesPanel(obj);
        }
    } else {
        // Para otros objetos: comportamiento normal
        obj.width = Math.abs(currentX - startX);
        obj.height = Math.abs(currentY - startY);
        obj.x = Math.min(startX, currentX);
        obj.y = Math.min(startY, currentY);
    }
    
    updateObjectPosition(obj);
}

function finalizeObject() {
    updateComponentsList();
}

// CORECCIÓN 1: Función para mostrar/ocultar panel de propiedades
function togglePropertiesPanel(show) {
    const propertiesPanel = document.querySelector('.properties-panel');
    if (!propertiesPanel) return;
    
    if (show) {
        propertiesPanel.classList.add('visible');
    } else {
        propertiesPanel.classList.remove('visible');
    }
}

// Selección de objetos
function selectObject(obj) {
    deselectAll();
    selectedObject = obj;
    const element = document.getElementById(`object-${obj.id}`);
    element.classList.add('selected');
    element.style.outline = '2px solid #007bff';
    element.style.outlineOffset = '2px';
    
    // CORECCIÓN 1: Mostrar panel de propiedades al seleccionar
    togglePropertiesPanel(true);
    updatePropertiesPanel(obj);
    highlightComponent(obj.id);
    
    // Sincronizar los controles principales con el objeto seleccionado
    syncMainControls(obj);
}

function deselectAll() {
    selectedObject = null;
    document.querySelectorAll('.wb-object').forEach(el => {
        el.classList.remove('selected');
        el.style.outline = 'none';
        el.style.outlineOffset = '0';
    });
    document.querySelectorAll('.component-item').forEach(el => el.classList.remove('selected'));
    
    // CORECCIÓN 1: Ocultar panel de propiedades al deseleccionar
    togglePropertiesPanel(false);
    updatePropertiesPanel(null);
}

function getObjectAt(x, y) {
    // Ordenar por z-index descendente para seleccionar objetos superiores primero
    const sortedObjects = [...objects].sort((a, b) => (b.zIndex || 1) - (a.zIndex || 1));
    
    for (let obj of sortedObjects) {
        if (obj.type === 'line') {
            const centerX = obj.x + obj.width / 2;
            const centerY = obj.y + obj.height / 2;
            
            const angle = -obj.rotation * Math.PI / 180;
            const cos = Math.cos(angle);
            const sin = Math.sin(angle);
            
            const localX = cos * (x - centerX) - sin * (y - centerY) + centerX;
            const localY = sin * (x - centerX) + cos * (y - centerY) + centerY;
            
            if (localX >= obj.x && localX <= obj.x + obj.width &&
                localY >= obj.y - obj.height/2 && localY <= obj.y + obj.height/2) {
                return obj;
            }
        } else if (obj.type === 'circle') {
            const centerX = obj.x + obj.width / 2;
            const centerY = obj.y + obj.height / 2;
            const distance = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));
            
            if (distance <= obj.width / 2) {
                return obj;
            }
        } else {
            if (x >= obj.x && x <= obj.x + obj.width &&
                y >= obj.y && y <= obj.y + obj.height) {
                return obj;
            }
        }
    }
    return null;
}

// NUEVA FUNCIÓN: Sincronizar controles principales
function syncMainControls(obj) {
    const bgColorInput = document.getElementById('bg-color');
    const borderColorInput = document.getElementById('border-color');
    const borderWidthInput = document.getElementById('border-width');
    
    if (bgColorInput) bgColorInput.value = obj.backgroundColor;
    if (borderColorInput) borderColorInput.value = obj.borderColor;
    if (borderWidthInput) borderWidthInput.value = obj.borderWidth;
}

// Panel de propiedades
// ACTUALIZACIÓN DE createObject - Agregar zIndex por defecto
function createObject(type, x, y) {
    const smartId = generateSmartId(type);
    
    const obj = {
        id: objectIdCounter++,
        type: type,
        name: `${type}${smartId}`,
        x: x,
        y: y,
        width: 100,
        height: type === 'line' ? 3 : 100,
        rotation: 0,
        zIndex: 1, // NUEVO: Z-index por defecto
        backgroundColor: document.getElementById('bg-color') ? document.getElementById('bg-color').value : '#ffffff',
        borderColor: document.getElementById('border-color') ? document.getElementById('border-color').value : '#000000',
        borderWidth: document.getElementById('border-width') ? parseInt(document.getElementById('border-width').value) : 3,
        text: type === 'text' ? 'Nuevo texto' : ''
    };

    objects.push(obj);
    renderObject(obj);
    
    setTimeout(() => {
        selectObject(obj);
        const element = document.getElementById(`object-${obj.id}`);
        if (element) {
            element.classList.add('newly-created');
            setTimeout(() => {
                element.classList.remove('newly-created');
            }, 500);
        }
    }, 10);
    
    updateComponentsList();
}

// ACTUALIZACIÓN DE renderObject - Aplicar zIndex al elemento
function renderObject(obj) {
    const element = document.createElement('div');
    element.className = `wb-object wb-${obj.type}`;
    element.id = `object-${obj.id}`;
    
    // Aplicar estilos base
    element.style.position = 'absolute';
    element.style.cursor = 'pointer';
    element.style.userSelect = 'none';
    element.style.zIndex = obj.zIndex || 1; // NUEVO: Aplicar z-index
    
    switch(obj.type) {
        case 'text':
            element.innerHTML = obj.text;
            element.contentEditable = true;
            element.style.padding = '8px';
            element.style.fontSize = '16px';
            element.style.fontFamily = 'Arial, sans-serif';
            element.style.minWidth = '50px';
            element.style.minHeight = '30px';
            element.addEventListener('input', () => {
                obj.text = element.innerHTML;
            });
            element.addEventListener('blur', () => {
                updateComponentsList();
            });
            break;
        case 'rectangle':
            element.style.minWidth = '20px';
            element.style.minHeight = '20px';
            break;
        case 'circle':
            element.style.borderRadius = '50%';
            element.style.minWidth = '20px';
            element.style.minHeight = '20px';
            break;
        case 'line':
            element.style.minWidth = '20px';
            element.style.minHeight = '2px';
            element.style.transformOrigin = 'left center';
            break;
    }

    updateObjectPosition(obj);
    updateObjectStyle(obj);
    
    element.addEventListener('click', (e) => {
        e.stopPropagation();
        selectObject(obj);
    });

    element.addEventListener('mouseenter', () => {
        if (currentTool === 'select') {
            element.style.outline = '1px dashed #007bff';
        }
    });
    
    element.addEventListener('mouseleave', () => {
        if (!element.classList.contains('selected')) {
            element.style.outline = 'none';
        }
    });

    whiteboardContent.appendChild(element);
}

// ACTUALIZACIÓN DE updateObjectPosition - Incluir zIndex
function updateObjectPosition(obj) {
    const element = document.getElementById(`object-${obj.id}`);
    if (element) {
        element.style.left = obj.x + 'px';
        element.style.top = obj.y + 'px';
        element.style.width = obj.width + 'px';
        element.style.height = obj.height + 'px';
        element.style.transform = `rotate(${obj.rotation}deg)`;
        element.style.zIndex = obj.zIndex || 1; // NUEVO: Actualizar z-index
    }
}

// ACTUALIZACIÓN DE updatePropertiesPanel - Agregar control de Z-index
function updatePropertiesPanel(obj) {
    const objectProperties = document.getElementById('object-properties');
    if (!objectProperties) return;
    
    if (!obj) {
        objectProperties.innerHTML = '<p>Selecciona un objeto para ver sus propiedades</p>';
        return;
    }

    const rotationControl = obj.type === 'line' ? `
        <div class="property-group">
            <label class="property-label">Rotación:</label>
            <div class="rotation-control">
                <input type="number" class="rotation-input" value="${Math.round(obj.rotation)}" 
                       onchange="updateObjectProperty('rotation', this.value)" 
                       min="-360" max="360" step="1">
                <input type="range" class="rotation-slider" value="${obj.rotation}" 
                       onchange="updateObjectProperty('rotation', this.value)"
                       oninput="updateObjectProperty('rotation', this.value)"
                       min="-360" max="360" step="1">
            </div>
        </div>
    ` : `
        <div class="property-group">
            <label class="property-label">Rotación:</label>
            <input type="number" class="property-input" value="${Math.round(obj.rotation)}" 
                   onchange="updateObjectProperty('rotation', this.value)" 
                   min="-360" max="360">
        </div>
    `;

    objectProperties.innerHTML = `
        <div class="panel-section">
            <div class="panel-title">Propiedades</div>
            <div class="property-group">
                <label class="property-label">Nombre:</label>
                <input type="text" class="property-input" value="${obj.name}" 
                       onchange="updateObjectProperty('name', this.value)">
            </div>
            <div class="property-group">
                <label class="property-label">Posición X:</label>
                <input type="number" class="property-input" value="${Math.round(obj.x)}" 
                       onchange="updateObjectProperty('x', this.value)">
            </div>
            <div class="property-group">
                <label class="property-label">Posición Y:</label>
                <input type="number" class="property-input" value="${Math.round(obj.y)}" 
                       onchange="updateObjectProperty('y', this.value)">
            </div>
            <div class="property-group">
                <label class="property-label">Ancho:</label>
                <input type="number" class="property-input" value="${Math.round(obj.width)}" 
                       onchange="updateObjectProperty('width', this.value)" min="1">
            </div>
            <div class="property-group">
                <label class="property-label">Alto:</label>
                <input type="number" class="property-input" value="${Math.round(obj.height)}" 
                       onchange="updateObjectProperty('height', this.value)" min="1">
            </div>
            ${rotationControl}
            <div class="property-group">
                <label class="property-label">Profundidad (Z):</label>
                <div class="z-index-control">
                    <input type="number" class="property-input" value="${obj.zIndex || 1}" 
                           onchange="updateObjectProperty('zIndex', this.value)" 
                           min="1" max="50" step="1">
                    <input type="range" class="property-slider" value="${obj.zIndex || 1}" 
                           onchange="updateObjectProperty('zIndex', this.value)"
                           oninput="updateObjectProperty('zIndex', this.value)"
                           min="1" max="50" step="1">
                </div>
                <div class="z-index-buttons">
                    <button type="button" class="z-btn" onclick="bringToFront()">Al frente</button>
                    <button type="button" class="z-btn" onclick="sendToBack()">Al fondo</button>
                </div>
            </div>
            <div class="property-group">
                <label class="property-label">Color de fondo:</label>
                <input type="color" class="color-picker" value="${obj.backgroundColor}" 
                       onchange="updateObjectProperty('backgroundColor', this.value)">
            </div>
            <div class="property-group">
                <label class="property-label">Color de borde:</label>
                <input type="color" class="color-picker" value="${obj.borderColor}" 
                       onchange="updateObjectProperty('borderColor', this.value)">
            </div>
            <div class="property-group">
                <label class="property-label">Grosor de borde:</label>
                <input type="number" class="property-input" value="${obj.borderWidth}" 
                       onchange="updateObjectProperty('borderWidth', this.value)" 
                       min="1" max="20">
            </div>
            ${obj.type === 'text' ? `
            <div class="property-group">
                <label class="property-label">Texto:</label>
                <textarea class="property-input" 
                          onchange="updateObjectProperty('text', this.value)" 
                          rows="3">${obj.text}</textarea>
            </div>
            ` : ''}
        </div>
    `;
}

function bringToFront() {
    if (!selectedObject) return;
    
    // Encontrar el z-index más alto
    const maxZ = Math.max(...objects.map(obj => obj.zIndex || 1));
    const newZ = Math.min(50, maxZ + 1);
    
    selectedObject.zIndex = newZ;
    updateObjectPosition(selectedObject);
    updatePropertiesPanel(selectedObject);
}

function sendToBack() {
    if (!selectedObject) return;
    
    // Encontrar el z-index más bajo
    const minZ = Math.min(...objects.map(obj => obj.zIndex || 1));
    const newZ = Math.max(1, minZ - 1);
    
    selectedObject.zIndex = newZ;
    updateObjectPosition(selectedObject);
    updatePropertiesPanel(selectedObject);
}

// FUNCIÓN CORREGIDA - Actualización de propiedades
function updateObjectProperty(property, value) {
    if (!selectedObject) return;
    
    let processedValue = value;
    
    switch (property) {
        case 'x':
        case 'y':
            processedValue = Math.round(parseFloat(value) || 0);
            break;
        case 'width':
        case 'height':
            processedValue = Math.max(1, Math.round(parseFloat(value) || 1));
            break;
        case 'rotation':
            processedValue = Math.max(-360, Math.min(360, parseFloat(value) || 0));
            break;
        case 'zIndex': // NUEVO: Manejar z-index
            processedValue = Math.max(1, Math.min(50, parseInt(value) || 1));
            break;
        case 'borderWidth':
            processedValue = Math.max(1, Math.min(20, parseInt(value) || 1));
            break;
        case 'backgroundColor':
        case 'borderColor':
            if (!/^#[0-9A-F]{6}$/i.test(value)) {
                console.warn('Color inválido:', value);
                return;
            }
            processedValue = value;
            break;
        case 'text':
        case 'name':
            processedValue = String(value).substring(0, 100);
            break;
        default:
            processedValue = value;
    }
    
    if (selectedObject[property] !== processedValue) {
        selectedObject[property] = processedValue;
        
        if (property === 'text') {
            const element = document.getElementById(`object-${selectedObject.id}`);
            if (element) element.innerHTML = processedValue;
        } else if (['backgroundColor', 'borderColor'].includes(property)) {
            syncMainControls(selectedObject);
        }
        
        scheduleRender(selectedObject);
        updateComponentsList();
        
        if (['x', 'y', 'width', 'height', 'rotation', 'zIndex'].includes(property)) {
            updatePropertiesPanel(selectedObject);
        }
    }
}

// EVENTOS CORREGIDOS - Sincronización en tiempo real
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar panel oculto al cargar la página
    togglePropertiesPanel(false);
    
    // Resto de tu código de inicialización...
    const bgColorInput = document.getElementById('bg-color');
    const borderColorInput = document.getElementById('border-color');
    const borderWidthInput = document.getElementById('border-width');
    
    if (bgColorInput) {
        bgColorInput.addEventListener('input', function() {
            if (selectedObject) {
                selectedObject.backgroundColor = this.value;
                updateObjectStyle(selectedObject);
                updatePropertiesPanel(selectedObject);
            }
        });
    }
    
    if (borderColorInput) {
        borderColorInput.addEventListener('input', function() {
            if (selectedObject) {
                selectedObject.borderColor = this.value;
                updateObjectStyle(selectedObject);
                updatePropertiesPanel(selectedObject);
            }
        });
    }
    
    if (borderWidthInput) {
        borderWidthInput.addEventListener('input', function() {
            if (selectedObject) {
                selectedObject.borderWidth = parseInt(this.value) || 1;
                updateObjectStyle(selectedObject);
                updatePropertiesPanel(selectedObject);
            }
        });
    }
});


// Panel de componentes
function updateComponentsList() {
    if (updateComponentsDebounce) {
        clearTimeout(updateComponentsDebounce);
    }
    
    updateComponentsDebounce = setTimeout(() => {
        updateComponentsListCore();
    }, 50);
}

function updateComponentsListCore() {
    if (!componentsList) return;
    
    // Usar DocumentFragment para mejor performance
    const fragment = document.createDocumentFragment();
    
    objects.forEach(obj => {
        const item = document.createElement('div');
        item.className = 'component-item';
        item.textContent = obj.name || `${obj.type} #${obj.id}`;
        
        item.onclick = () => {
            selectObject(obj);
            centerOnObject(obj);
        };
        
        fragment.appendChild(item);
    });
    
    componentsList.innerHTML = '';
    componentsList.appendChild(fragment);
}

function highlightComponent(id) {
    document.querySelectorAll('.component-item').forEach((item, index) => {
        item.classList.remove('selected');
        item.style.backgroundColor = '#f8f9fa';
        if (objects[index] && objects[index].id === id) {
            item.classList.add('selected');
            item.style.backgroundColor = '#007bff';
            item.style.color = 'white';
        }
    });
}

function centerOnObject(obj) {
    const centerX = obj.x + obj.width / 2;
    const centerY = obj.y + obj.height / 2;
    
    panX = whiteboard.offsetWidth / 2 - centerX * zoom;
    panY = whiteboard.offsetHeight / 2 - centerY * zoom;
    
    updateTransform();
}

function scheduleRender(obj) {
    renderQueue.add(obj);
    
    if (!renderScheduled) {
        renderScheduled = true;
        requestAnimationFrame(() => {
            renderQueue.forEach(obj => {
                updateObjectPosition(obj);
                updateObjectStyle(obj);
            });
            renderQueue.clear();
            renderScheduled = false;
        });
    }
}

// Zoom y pan
function zoomIn() {
    zoom *= 1.2;
    zoom = Math.min(3, zoom);
    updateTransform();
}

function zoomOut() {
    zoom *= 0.8;
    zoom = Math.max(0.1, zoom);
    updateTransform();
}

function resetZoom() {
    zoom = 1;
    panX = 0;
    panY = 0;
    updateTransform();
}

function updateTransform() {
    if (transformUpdateScheduled) return;
    
    transformUpdateScheduled = true;
    requestAnimationFrame(() => {
        if (whiteboardContent) {
            whiteboardContent.style.transform = `translate(${panX}px, ${panY}px) scale(${zoom})`;
        }
        transformUpdateScheduled = false;
    });
}

function showTemporaryMessage(x, y, message) {
    // Remover mensaje anterior si existe
    const existingMessage = document.getElementById('temp-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Crear nuevo mensaje
    const messageDiv = document.createElement('div');
    messageDiv.id = 'temp-message';
    messageDiv.textContent = message;
    messageDiv.style.cssText = `
        position: absolute;
        left: ${x + 10}px;
        top: ${y - 30}px;
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 8px 12px;
        border-radius: 4px;
        font-size: 12px;
        z-index: 10000;
        pointer-events: none;
        white-space: nowrap;
    `;
    
    document.body.appendChild(messageDiv);
    
    // Limpiar timeout anterior
    if (messageTimeout) {
        clearTimeout(messageTimeout);
    }
    
    // Programar eliminación del mensaje
    messageTimeout = setTimeout(() => {
        if (messageDiv && messageDiv.parentNode) {
            messageDiv.remove();
        }
        messageTimeout = null;
    }, 2000);
}

// Funciones del menú
function newProject() {
    if (confirm('¿Deseas crear un nuevo proyecto? Se perderán los cambios no guardados.')) {
        objects = [];
        objectIdCounter = 0;
        if (whiteboardContent) whiteboardContent.innerHTML = '';
        updateComponentsList();
        deselectAll();
        resetZoom();
    }
}

function saveProject() {
    const projectData = {
        objects: objects,
        zoom: zoom,
        panX: panX,
        panY: panY,
        objectIdCounter: objectIdCounter
    };
    const dataStr = JSON.stringify(projectData, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'pizarra_proyecto.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

function loadProject() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const projectData = JSON.parse(e.target.result);
                objects = projectData.objects || [];
                zoom = projectData.zoom || 1;
                panX = projectData.panX || 0;
                panY = projectData.panY || 0;
                objectIdCounter = projectData.objectIdCounter || objects.length;
                
                if (whiteboardContent) whiteboardContent.innerHTML = '';
                objects.forEach(obj => renderObject(obj));
                updateComponentsList();
                updateTransform();
                deselectAll();
            } catch (error) {
                alert('Error al cargar el proyecto: ' + error.message);
            }
        };
        reader.readAsText(file);
    };
    input.click();
}

function exportProject() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    // Calcular bounds más precisos
    let bounds = { minX: 0, minY: 0, maxX: 1000, maxY: 600 };
    
    if (objects.length > 0) {
        bounds = objects.reduce((acc, obj) => {
            const objBounds = getObjectBounds(obj);
            return {
                minX: Math.min(acc.minX, objBounds.minX),
                minY: Math.min(acc.minY, objBounds.minY),
                maxX: Math.max(acc.maxX, objBounds.maxX),
                maxY: Math.max(acc.maxY, objBounds.maxY)
            };
        }, { minX: Infinity, minY: Infinity, maxX: -Infinity, maxY: -Infinity });
    }
    
    const padding = 50;
    canvas.width = (bounds.maxX - bounds.minX + padding * 2) * 2; // 2x para calidad
    canvas.height = (bounds.maxY - bounds.minY + padding * 2) * 2;
    
    // Escalar contexto para alta calidad
    ctx.scale(2, 2);
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width / 2, canvas.height / 2);
    
    // Renderizar objetos ordenados por z-index
    const sortedObjects = [...objects].sort((a, b) => a.id - b.id);
    
    sortedObjects.forEach(obj => {
        const x = obj.x - bounds.minX + padding;
        const y = obj.y - bounds.minY + padding;
        
        ctx.save();
        ctx.translate(x + obj.width/2, y + obj.height/2);
        ctx.rotate(obj.rotation * Math.PI / 180);
        ctx.translate(-obj.width/2, -obj.height/2);
        
        renderObjectToCanvas(ctx, obj, 0, 0);
        
        ctx.restore();
    });
    
    // Descargar con calidad optimizada
    const link = document.createElement('a');
    link.download = `pizarra_export_${new Date().toISOString().slice(0,10)}.png`;
    link.href = canvas.toDataURL('image/png', 1.0);
    link.click();
}

function getObjectBounds(obj) {
    if (obj.rotation === 0) {
        return {
            minX: obj.x,
            minY: obj.y,
            maxX: obj.x + obj.width,
            maxY: obj.y + obj.height
        };
    }
    
    // Para objetos rotados, calcular bounds rotados
    const centerX = obj.x + obj.width / 2;
    const centerY = obj.y + obj.height / 2;
    const angle = obj.rotation * Math.PI / 180;
    
    const corners = [
        { x: obj.x, y: obj.y },
        { x: obj.x + obj.width, y: obj.y },
        { x: obj.x + obj.width, y: obj.y + obj.height },
        { x: obj.x, y: obj.y + obj.height }
    ];
    
    const rotatedCorners = corners.map(corner => {
        const dx = corner.x - centerX;
        const dy = corner.y - centerY;
        return {
            x: centerX + dx * Math.cos(angle) - dy * Math.sin(angle),
            y: centerY + dx * Math.sin(angle) + dy * Math.cos(angle)
        };
    });
    
    return {
        minX: Math.min(...rotatedCorners.map(c => c.x)),
        minY: Math.min(...rotatedCorners.map(c => c.y)),
        maxX: Math.max(...rotatedCorners.map(c => c.x)),
        maxY: Math.max(...rotatedCorners.map(c => c.y))
    };
}

function undo() {
    alert('Función deshacer en desarrollo');
}

function redo() {
    alert('Función rehacer en desarrollo');
}

function selectAll() {
    if (objects.length > 0) {
        // Seleccionar el primer objeto por ahora
        selectObject(objects[0]);
    }
}

function deleteSelected() {
    if (!selectedObject) return;
    
    const index = objects.findIndex(obj => obj.id === selectedObject.id);
    if (index > -1) {
        // Limpiar elemento DOM
        const element = document.getElementById(`object-${selectedObject.id}`);
        if (element) {
            element.removeEventListener('click', null);
            element.removeEventListener('mouseenter', null);
            element.removeEventListener('mouseleave', null);
            element.remove();
        }
        
        // Limpiar del array
        objects.splice(index, 1);
        
        // Limpiar referencia global
        selectedObject = null;
        
        updateComponentsList();
        updatePropertiesPanel(null);
        togglePropertiesPanel(false);
    }
}

function toggleGrid() {
    alert('Función toggle grid en desarrollo');
}

function centerView() {
    panX = 0;
    panY = 0;
    updateTransform();
}

function showAbout() {
    alert('· ¡¡¡ Bienvenidos al Pizarron !!!\n· Herramienta ideada para crear y organizar ideas visualmente.\n· Desarrollada por @FacuAmelotti\n· HTML, CSS y JS\n(Aplicacion aun en desarrollo... )');
}


function showHelp() {
    alert('Ayuda:\n- Selecciona herramientas del panel izquierdo\n- Crea objetos haciendo clic y arrastrando\n- Usa la rueda del mouse para hacer zoom\n- Selecciona objetos para editarlos\n- Usa la herramienta mano para desplazarte por la pizarra');
}

function showTutorial() {
    alert('Tutorial básico:\n1. Selecciona una herramienta\n2. Dibuja en la pizarra\n3. Selecciona objetos para editarlos\n4. Usa el zoom para navegar\n5. Usa la mano para desplazarte\n6. Guarda tu trabajo');
}

function showShortcuts() {
    alert('Atajos de teclado:\n- Ctrl+S: Guardar\n- Ctrl+O: Abrir\n- Ctrl+N: Nuevo\n- Delete: Eliminar seleccionado\n- Rueda del mouse: Zoom');
}

// Atajos de teclado
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey) {
        switch(e.key) {
            case 's':
                e.preventDefault();
                saveProject();
                break;
            case 'o':
                e.preventDefault();
                loadProject();
                break;
            case 'n':
                e.preventDefault();
                newProject();
                break;
        }
    } else if (e.key === 'Delete' || e.key === 'Backspace') {
        if (selectedObject && !document.activeElement.contentEditable) {
            deleteSelected();
        }
    }
});