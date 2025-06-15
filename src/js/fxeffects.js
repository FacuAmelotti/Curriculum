
// Función principal para crear efecto visual aleatorio
function createExplosion(x = null, y = null) {
    const container = document.getElementById('fxeffectcontainer');
    
    // Si no se especifican coordenadas, usar el centro de la pantalla
    const centerX = x || window.innerWidth / 2;
    const centerY = y || window.innerHeight / 2;
    
    // Seleccionar efecto aleatorio (1-10)
    const effectType = Math.floor(Math.random() * 10) + 1;
    
    switch(effectType) {
        case 1:
            matrixRainEffect(centerX, centerY, container);
            break;
        case 2:
            shootingStarsEffect(centerX, centerY, container);
            break;
        case 3:
            fallingLeavesEffect(centerX, centerY, container);
            break;
        case 4:
            laserBlastEffect(centerX, centerY, container);
            break;
        case 5:
            geometricChaosEffect(centerX, centerY, container);
            break;
        case 6:
            bubblesEffect(centerX, centerY, container);
            break;
        case 7:
            lightningStormEffect(centerX, centerY, container);
            break;
        case 8:
            portalEffect(centerX, centerY, container);
            break;
        case 9:
            snowStormEffect(centerX, centerY, container);
            break;
        case 10:
            fireWorksExplosion(centerX, centerY, container);
            break;
    }
    
    // Limpiar después de 5 segundos
    setTimeout(() => {
        cleanupParticles(container);
    }, 5000);
}

// 1. Efecto Matrix - Lluvia de código verde
function matrixRainEffect(centerX, centerY, container) {
    const columns = 15;
    const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()';
    
    for (let col = 0; col < columns; col++) {
        const columnDiv = document.createElement('div');
        columnDiv.className = 'particle-fx';
        columnDiv.style.position = 'absolute';
        columnDiv.style.left = (centerX - 150 + col * 20) + 'px';
        columnDiv.style.top = (centerY - 200) + 'px';
        columnDiv.style.color = '#00ff00';
        columnDiv.style.fontFamily = 'monospace';
        columnDiv.style.fontSize = '14px';
        columnDiv.style.textShadow = '0 0 10px #00ff00';
        columnDiv.style.whiteSpace = 'pre';
        
        let text = '';
        for (let i = 0; i < 20; i++) {
            text += characters[Math.floor(Math.random() * characters.length)] + '\n';
        }
        columnDiv.textContent = text;
        
        container.appendChild(columnDiv);
        
        columnDiv.animate([
            { transform: 'translateY(-400px)', opacity: 0 },
            { transform: 'translateY(0px)', opacity: 1 },
            { transform: 'translateY(400px)', opacity: 0 }
        ], { 
            duration: 3000 + Math.random() * 1000, 
            easing: 'linear',
            delay: col * 100
        });
        
        // Cambiar caracteres aleatoriamente
        const changeInterval = setInterval(() => {
            let newText = '';
            for (let i = 0; i < 20; i++) {
                newText += characters[Math.floor(Math.random() * characters.length)] + '\n';
            }
            columnDiv.textContent = newText;
        }, 100);
        
        setTimeout(() => clearInterval(changeInterval), 4000);
    }
}

// 2. Estrellas Fugaces
function shootingStarsEffect(centerX, centerY, container) {
    const starCount = 8;
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'particle-fx';
        star.style.position = 'absolute';
        star.style.width = '3px';
        star.style.height = '3px';
        star.style.background = 'radial-gradient(circle, #ffffff, #87ceeb)';
        star.style.borderRadius = '50%';
        star.style.boxShadow = '0 0 20px #87ceeb, 0 0 40px #ffffff';
        
        // Posición inicial aleatoria
        const startX = Math.random() * window.innerWidth;
        const startY = Math.random() * 200;
        star.style.left = startX + 'px';
        star.style.top = startY + 'px';
        
        // Crear cola de estrella
        const tail = document.createElement('div');
        tail.style.position = 'absolute';
        tail.style.width = '2px';
        tail.style.height = '50px';
        tail.style.background = 'linear-gradient(to bottom, rgba(255,255,255,0.8), transparent)';
        tail.style.left = '1px';
        tail.style.top = '3px';
        tail.style.transformOrigin = 'top';
        
        star.appendChild(tail);
        container.appendChild(star);
        
        const endX = startX + Math.random() * 400 - 200;
        const endY = startY + Math.random() * 300 + 200;
        
        star.animate([
            { transform: `translate(0, 0) rotate(45deg) scale(0)`, opacity: 0 },
            { transform: `translate(0, 0) rotate(45deg) scale(1)`, opacity: 1, offset: 0.1 },
            { transform: `translate(${endX - startX}px, ${endY - startY}px) rotate(45deg) scale(1)`, opacity: 1, offset: 0.8 },
            { transform: `translate(${endX - startX}px, ${endY - startY}px) rotate(45deg) scale(0)`, opacity: 0 }
        ], { 
            duration: 2000 + Math.random() * 1000,
            easing: 'ease-out',
            delay: i * 200
        });
    }
}

// 3. Hojas Volando con el Viento
function fallingLeavesEffect(centerX, centerY, container) {
    const leafCount = 25;
    const leafTypes = ['🍃', '🍂', '🍁', '🌿'];
    
    for (let i = 0; i < leafCount; i++) {
        const leaf = document.createElement('div');
        leaf.className = 'particle-fx';
        leaf.innerHTML = leafTypes[Math.floor(Math.random() * leafTypes.length)];
        leaf.style.position = 'absolute';
        leaf.style.fontSize = Math.random() * 15 + 15 + 'px';
        leaf.style.left = (centerX + Math.random() * 200 - 100) + 'px';
        leaf.style.top = (centerY - 100) + 'px';
        leaf.style.filter = `hue-rotate(${Math.random() * 60}deg)`;
        
        container.appendChild(leaf);
        
        const windX = Math.random() * 300 - 150;
        const fallY = Math.random() * 400 + 200;
        const duration = Math.random() * 2000 + 2000;
        
        leaf.animate([
            { 
                transform: `translate(0, 0) rotate(0deg) scale(1)`, 
                opacity: 1 
            },
            { 
                transform: `translate(${windX * 0.3}px, ${fallY * 0.3}px) rotate(180deg) scale(1.1)`, 
                opacity: 1,
                offset: 0.3
            },
            { 
                transform: `translate(${windX}px, ${fallY}px) rotate(360deg) scale(0.8)`, 
                opacity: 0.3 
            }
        ], { 
            duration: duration,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            delay: i * 100
        });
        
        // Movimiento de balanceo
        leaf.style.animation = `sway ${1000 + Math.random() * 1000}ms ease-in-out infinite alternate`;
    }
    
    // Agregar keyframes para el balanceo si no existen
    if (!document.querySelector('#sway-keyframes')) {
        const style = document.createElement('style');
        style.id = 'sway-keyframes';
        style.textContent = `
            @keyframes sway {
                0% { transform: rotate(-5deg); }
                100% { transform: rotate(5deg); }
            }
        `;
        document.head.appendChild(style);
    }
}

// 4. Disparo Láser
function laserBlastEffect(centerX, centerY, container) {
    // Crear múltiples rayos láser
    const laserCount = 5;
    const colors = ['#ff0040', '#00ff40', '#4000ff', '#ffff00', '#ff8000'];
    
    for (let i = 0; i < laserCount; i++) {
        const laser = document.createElement('div');
        laser.className = 'particle-fx';
        laser.style.position = 'absolute';
        laser.style.left = centerX + 'px';
        laser.style.top = centerY + 'px';
        laser.style.width = '4px';
        laser.style.height = '800px';
        laser.style.background = `linear-gradient(to bottom, ${colors[i]}, transparent)`;
        laser.style.boxShadow = `0 0 20px ${colors[i]}`;
        laser.style.transformOrigin = 'top center';
        laser.style.transform = 'translate(-50%, -50%) scaleY(0)';
        
        const angle = (i - 2) * 15; // Dispersar los láseres
        laser.style.transform += ` rotate(${angle}deg)`;
        
        container.appendChild(laser);
        
        laser.animate([
            { transform: `translate(-50%, -50%) rotate(${angle}deg) scaleY(0)`, opacity: 1 },
            { transform: `translate(-50%, -50%) rotate(${angle}deg) scaleY(1)`, opacity: 1, offset: 0.1 },
            { transform: `translate(-50%, -50%) rotate(${angle}deg) scaleY(1)`, opacity: 1, offset: 0.7 },
            { transform: `translate(-50%, -50%) rotate(${angle}deg) scaleY(0)`, opacity: 0 }
        ], { 
            duration: 1500,
            easing: 'ease-out',
            delay: i * 50
        });
    }
    
    // Destello inicial
    createFlash(centerX, centerY, container, '#ffffff');
    
    // Partículas de energía
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle-fx';
        particle.style.position = 'absolute';
        particle.style.left = centerX + 'px';
        particle.style.top = centerY + 'px';
        particle.style.width = '3px';
        particle.style.height = '3px';
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        particle.style.borderRadius = '50%';
        particle.style.boxShadow = '0 0 10px currentColor';
        
        const angle = Math.random() * Math.PI * 2;
        const velocity = Math.random() * 200 + 100;
        const finalX = centerX + Math.cos(angle) * velocity;
        const finalY = centerY + Math.sin(angle) * velocity;
        
        container.appendChild(particle);
        
        particle.animate([
            { transform: 'translate(0, 0) scale(0)', opacity: 1 },
            { transform: `translate(${finalX - centerX}px, ${finalY - centerY}px) scale(1)`, opacity: 0 }
        ], { duration: 1000, easing: 'ease-out', delay: 200 });
    }
}

// 5. Caos Geométrico
function geometricChaosEffect(centerX, centerY, container) {
    const shapes = ['▲', '●', '■', '♦', '★', '▼', '◆', '◯'];
    const colors = ['#ff006e', '#8338ec', '#3a86ff', '#06ffa5', '#ffbe0b', '#fb5607'];
    const shapeCount = 40;
    
    for (let i = 0; i < shapeCount; i++) {
        const shape = document.createElement('div');
        shape.className = 'particle-fx';
        shape.innerHTML = shapes[Math.floor(Math.random() * shapes.length)];
        shape.style.position = 'absolute';
        shape.style.left = centerX + 'px';
        shape.style.top = centerY + 'px';
        shape.style.fontSize = Math.random() * 20 + 10 + 'px';
        shape.style.color = colors[Math.floor(Math.random() * colors.length)];
        shape.style.textShadow = '0 0 15px currentColor';
        
        container.appendChild(shape);
        
        const trajectory = Math.random() * 4;
        let finalX, finalY, rotations;
        
        switch(Math.floor(trajectory)) {
            case 0: // Espiral
                const spiralAngle = (i / shapeCount) * Math.PI * 6;
                const spiralRadius = (i / shapeCount) * 300;
                finalX = centerX + Math.cos(spiralAngle) * spiralRadius;
                finalY = centerY + Math.sin(spiralAngle) * spiralRadius;
                rotations = 1080;
                break;
            case 1: // Zigzag
                finalX = centerX + (Math.random() * 400 - 200);
                finalY = centerY + (Math.random() * 400 - 200);
                rotations = 360;
                break;
            case 2: // Circular
                const circleAngle = (i / shapeCount) * Math.PI * 2;
                finalX = centerX + Math.cos(circleAngle) * 250;
                finalY = centerY + Math.sin(circleAngle) * 250;
                rotations = 720;
                break;
            default: // Aleatorio
                finalX = centerX + (Math.random() * 500 - 250);
                finalY = centerY + (Math.random() * 500 - 250);
                rotations = Math.random() * 720;
        }
        
        shape.animate([
            { 
                transform: 'translate(0, 0) rotate(0deg) scale(0)', 
                opacity: 1,
                filter: 'hue-rotate(0deg)'
            },
            { 
                transform: `translate(${(finalX - centerX) * 0.5}px, ${(finalY - centerY) * 0.5}px) rotate(${rotations * 0.5}deg) scale(1.5)`, 
                opacity: 1,
                offset: 0.5,
                filter: 'hue-rotate(180deg)'
            },
            { 
                transform: `translate(${finalX - centerX}px, ${finalY - centerY}px) rotate(${rotations}deg) scale(0.5)`, 
                opacity: 0,
                filter: 'hue-rotate(360deg)'
            }
        ], { 
            duration: 2500 + Math.random() * 1000,
            easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
            delay: i * 50
        });
    }
}

// 6. Burbujas Flotantes
function bubblesEffect(centerX, centerY, container) {
    const bubbleCount = 30;
    
    for (let i = 0; i < bubbleCount; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'particle-fx';
        bubble.style.position = 'absolute';
        
        const size = Math.random() * 30 + 10;
        bubble.style.width = size + 'px';
        bubble.style.height = size + 'px';
        bubble.style.borderRadius = '50%';
        bubble.style.background = `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.8), rgba(255,255,255,0.3), transparent)`;
        bubble.style.border = '1px solid rgba(255,255,255,0.3)';
        bubble.style.backdropFilter = 'blur(2px)';
        
        const startX = centerX + Math.random() * 200 - 100;
        const startY = centerY + 100;
        bubble.style.left = startX + 'px';
        bubble.style.top = startY + 'px';
        
        container.appendChild(bubble);
        
        const floatX = startX + Math.random() * 100 - 50;
        const floatY = startY - Math.random() * 400 - 200;
        const duration = Math.random() * 3000 + 2000;
        
        bubble.animate([
            { 
                transform: 'translateY(0) scale(0)', 
                opacity: 0 
            },
            { 
                transform: 'translateY(-50px) scale(1)', 
                opacity: 1,
                offset: 0.1
            },
            { 
                transform: `translate(${floatX - startX}px, ${floatY - startY}px) scale(0.8)`, 
                opacity: 0.8,
                offset: 0.9
            },
            { 
                transform: `translate(${floatX - startX}px, ${floatY - startY}px) scale(0)`, 
                opacity: 0 
            }
        ], { 
            duration: duration,
            easing: 'ease-out',
            delay: i * 100
        });
        
        // Efecto de oscilación
        bubble.style.animation = `float ${2000 + Math.random() * 1000}ms ease-in-out infinite alternate`;
    }
    
    // Agregar keyframes para flotación si no existen
    if (!document.querySelector('#float-keyframes')) {
        const style = document.createElement('style');
        style.id = 'float-keyframes';
        style.textContent = `
            @keyframes float {
                0% { transform: translateX(-10px); }
                100% { transform: translateX(10px); }
            }
        `;
        document.head.appendChild(style);
    }
}

// 7. Tormenta de Rayos
function lightningStormEffect(centerX, centerY, container) {
    const boltCount = 6;
    
    for (let i = 0; i < boltCount; i++) {
        setTimeout(() => {
            // Crear rayo
            const lightning = document.createElement('div');
            lightning.className = 'particle-fx';
            lightning.style.position = 'absolute';
            lightning.style.left = (centerX + Math.random() * 200 - 100) + 'px';
            lightning.style.top = (centerY - 200) + 'px';
            lightning.style.width = '3px';
            lightning.style.height = '400px';
            lightning.style.background = 'linear-gradient(to bottom, #ffffff, #87ceeb, #ffffff)';
            lightning.style.boxShadow = '0 0 20px #87ceeb, 0 0 40px #ffffff';
            lightning.style.transform = 'scaleY(0)';
            lightning.style.transformOrigin = 'top';
            
            // Agregar zigzag al rayo
            lightning.style.clipPath = 'polygon(40% 0%, 60% 0%, 55% 25%, 70% 25%, 65% 50%, 80% 50%, 75% 75%, 60% 75%, 65% 100%, 35% 100%, 40% 75%, 25% 75%, 30% 50%, 15% 50%, 20% 25%, 35% 25%)';
            
            container.appendChild(lightning);
            
            // Animación del rayo
            lightning.animate([
                { transform: 'scaleY(0)', opacity: 1 },
                { transform: 'scaleY(1)', opacity: 1, offset: 0.1 },
                { transform: 'scaleY(1)', opacity: 1, offset: 0.3 },
                { transform: 'scaleY(1)', opacity: 0, offset: 0.4 },
                { transform: 'scaleY(1)', opacity: 1, offset: 0.5 },
                { transform: 'scaleY(1)', opacity: 0 }
            ], { duration: 1000, easing: 'ease-out' });
            
            // Flash de fondo
            const flash = document.createElement('div');
            flash.style.position = 'fixed';
            flash.style.top = '0';
            flash.style.left = '0';
            flash.style.width = '100vw';
            flash.style.height = '100vh';
            flash.style.background = 'rgba(255,255,255,0.3)';
            flash.style.pointerEvents = 'none';
            flash.style.zIndex = '1000';
            
            container.appendChild(flash);
            
            flash.animate([
                { opacity: 0 },
                { opacity: 1, offset: 0.1 },
                { opacity: 0, offset: 0.3 },
                { opacity: 0.7, offset: 0.5 },
                { opacity: 0 }
            ], { duration: 1000 });
            
        }, i * 300);
    }
}

// 8. Portal Dimensional
function portalEffect(centerX, centerY, container) {
    // Crear anillos del portal
    const rings = 8;
    const colors = ['#ff006e', '#8338ec', '#3a86ff', '#06ffa5'];
    
    for (let ring = 0; ring < rings; ring++) {
        const portalRing = document.createElement('div');
        portalRing.className = 'particle-fx';
        portalRing.style.position = 'absolute';
        portalRing.style.left = centerX + 'px';
        portalRing.style.top = centerY + 'px';
        portalRing.style.width = (ring + 1) * 30 + 'px';
        portalRing.style.height = (ring + 1) * 30 + 'px';
        portalRing.style.border = `2px solid ${colors[ring % colors.length]}`;
        portalRing.style.borderRadius = '50%';
        portalRing.style.transform = 'translate(-50%, -50%)';
        portalRing.style.boxShadow = `0 0 20px ${colors[ring % colors.length]}`;
        
        container.appendChild(portalRing);
        
        portalRing.animate([
            { 
                transform: 'translate(-50%, -50%) scale(0) rotate(0deg)', 
                opacity: 0 
            },
            { 
                transform: 'translate(-50%, -50%) scale(1) rotate(180deg)', 
                opacity: 1,
                offset: 0.3
            },
            { 
                transform: 'translate(-50%, -50%) scale(1.2) rotate(360deg)', 
                opacity: 0.8,
                offset: 0.7
            },
            { 
                transform: 'translate(-50%, -50%) scale(0) rotate(720deg)', 
                opacity: 0 
            }
        ], { 
            duration: 3000,
            easing: 'ease-in-out',
            delay: ring * 100
        });
    }
    
    // Partículas que salen del portal
    setTimeout(() => {
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle-fx';
            particle.innerHTML = '✦';
            particle.style.position = 'absolute';
            particle.style.left = centerX + 'px';
            particle.style.top = centerY + 'px';
            particle.style.fontSize = Math.random() * 10 + 5 + 'px';
            particle.style.color = colors[Math.floor(Math.random() * colors.length)];
            particle.style.textShadow = '0 0 10px currentColor';
            
            container.appendChild(particle);
            
            const angle = Math.random() * Math.PI * 2;
            const velocity = Math.random() * 300 + 100;
            const finalX = centerX + Math.cos(angle) * velocity;
            const finalY = centerY + Math.sin(angle) * velocity;
            
            particle.animate([
                { transform: 'translate(0, 0) scale(0) rotate(0deg)', opacity: 0 },
                { transform: `translate(${finalX - centerX}px, ${finalY - centerY}px) scale(1) rotate(360deg)`, opacity: 1 }
            ], { 
                duration: 2000,
                easing: 'ease-out',
                delay: i * 30
            });
        }
    }, 800);
}

// 9. Tormenta de Nieve
function snowStormEffect(centerX, centerY, container) {
    const snowflakeCount = 50;
    const snowflakes = ['❄', '❅', '❆', '✻', '✼', '❉'];
    
    for (let i = 0; i < snowflakeCount; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'particle-fx';
        snowflake.innerHTML = snowflakes[Math.floor(Math.random() * snowflakes.length)];
        snowflake.style.position = 'absolute';
        snowflake.style.color = '#ffffff';
        snowflake.style.fontSize = Math.random() * 12 + 8 + 'px';
        snowflake.style.textShadow = '0 0 10px #87ceeb';
        snowflake.style.opacity = Math.random() * 0.8 + 0.2;
        
        const startX = centerX + Math.random() * 400 - 200;
        const startY = centerY - 200;
        snowflake.style.left = startX + 'px';
        snowflake.style.top = startY + 'px';
        
        container.appendChild(snowflake);
        
        const windDrift = Math.random() * 100 - 50;
        const fallDistance = Math.random() * 400 + 300;
        const duration = Math.random() * 3000 + 2000;
        
        snowflake.animate([
            { 
                transform: 'translate(0, 0) rotate(0deg)', 
                opacity: 0 
            },
            { 
                transform: `translate(${windDrift * 0.3}px, ${fallDistance * 0.3}px) rotate(120deg)`, 
                opacity: snowflake.style.opacity,
                offset: 0.3
            },
            { 
                transform: `translate(${windDrift}px, ${fallDistance}px) rotate(360deg)`, 
                opacity: 0 
            }
        ], { 
            duration: duration,
            easing: 'linear',
            delay: i * 50
        });
        
        // Movimiento de balanceo
        snowflake.style.animation = `sway ${1500 + Math.random() * 1000}ms ease-in-out infinite alternate`;
    }
    
    // Efecto de viento
    const windLines = 10;
    for (let i = 0; i < windLines; i++) {
        const windLine = document.createElement('div');
        windLine.className = 'particle-fx';
        windLine.style.position = 'absolute';
        windLine.style.left = (centerX - 200 + i * 40) + 'px';
        windLine.style.top = (centerY + Math.random() * 100 - 50) + 'px';
        windLine.style.width = '30px';
        windLine.style.height = '1px';
        windLine.style.background = 'rgba(255,255,255,0.3)';
        windLine.style.transform = 'rotate(-15deg)';
        
        container.appendChild(windLine);
        
        windLine.animate([
            { transform: 'rotate(-15deg) translateX(-50px)', opacity: 0 },
            { transform: 'rotate(-15deg) translateX(0px)', opacity: 1, offset: 0.3 },
            { transform: 'rotate(-15deg) translateX(200px)', opacity: 0 }
        ], { 
            duration: 1500,
            easing: 'ease-out',
            delay: i * 100
        });
    }
}

// 10. Fuegos Artificiales (mejorado)
function fireWorksExplosion(centerX, centerY, container) {
    const bursts = 3;
    const colors = ['#e74c3c', '#3498db', '#f1c40f', '#2ecc71', '#9b59b6'];
    
    for (let burst = 0; burst < bursts; burst++) {
        setTimeout(() => {
            // Crear núcleo brillante
            createFlash(centerX, centerY, container, colors[burst]);
            
            // Partículas principales
            for (let i = 0; i < 30; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle-fx';
                
                const color = colors[Math.floor(Math.random() * colors.length)];
                particle.style.backgroundColor = color;
                particle.style.boxShadow = `0 0 20px ${color}`;
                particle.style.width = '4px';
                particle.style.height = '15px';
                particle.style.borderRadius = '20px 20px 2px 2px';
                particle.style.position = 'absolute';
                particle.style.left = centerX + 'px';
                particle.style.top = centerY + 'px';
                
                container.appendChild(particle);
                
                const angle = (i / 30) * Math.PI * 2;
                const velocity = Math.random() * 150 + 100;
                const finalX = centerX + Math.cos(angle) * velocity;
                const finalY = centerY + Math.sin(angle) * velocity - Math.random() * 50;
                
                particle.animate([
                    { transform: 'translate(0, 0) scale(0)', opacity: 1 },
                    { transform: `translate(${finalX - centerX}px, ${finalY - centerY}px) scale(1)`, opacity: 1, offset: 0.4 },
                    { transform: `translate(${finalX - centerX}px, ${finalY - centerY + 100}px) scale(0.5)`, opacity: 0 }
                ], { 
                    duration: 2000,
                    easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    delay: 50
                });
                
                // Estela de chispas
                setTimeout(() => {
                    for (let j = 0; j < 3; j++) {
                        const spark = document.createElement('div');
                        spark.className = 'particle-fx';
                        spark.style.position = 'absolute';
                        spark.style.left = finalX + 'px';
                        spark.style.top = finalY + 'px';
                        spark.style.width = '2px';
                        spark.style.height = '2px';
                        spark.style.backgroundColor = color;
                        spark.style.borderRadius = '50%';
                        spark.style.boxShadow = `0 0 5px ${color}`;
                        
                        container.appendChild(spark);
                        
                        spark.animate([
                            { transform: 'translate(0, 0)', opacity: 1 },
                            { transform: `translate(${Math.random() * 40 - 20}px, ${Math.random() * 40 + 20}px)`, opacity: 0 }
                        ], { duration: 800, delay: j * 100 });
                    }
                }, 800);
            }
        }, burst * 500);
    }
}

// 11. Tornado de Energía
function tornadoEffect(centerX, centerY, container) {
    const particles = 60;
    const colors = ['#ff6b35', '#f7931e', '#ffd700', '#ff4757'];
    
    for (let i = 0; i < particles; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle-fx';
        particle.innerHTML = '◆';
        particle.style.position = 'absolute';
        particle.style.color = colors[Math.floor(Math.random() * colors.length)];
        particle.style.fontSize = Math.random() * 8 + 6 + 'px';
        particle.style.textShadow = '0 0 15px currentColor';
        
        const height = i / particles;
        const radius = 80 * (1 - height);
        const angle = (i / particles) * Math.PI * 8;
        
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + height * 300 - 150;
        
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        
        container.appendChild(particle);
        
        particle.animate([
            { transform: 'translate(0, 0) rotate(0deg) scale(0)', opacity: 0 },
            { transform: 'translate(0, 0) rotate(180deg) scale(1)', opacity: 1, offset: 0.3 },
            { transform: 'translate(0, -400px) rotate(720deg) scale(0.5)', opacity: 0 }
        ], { 
            duration: 3000,
            easing: 'ease-out',
            delay: i * 30
        });
    }
}

// 12. Ondas de Choque
function shockwaveEffect(centerX, centerY, container) {
    const waves = 5;
    const colors = ['#ff3838', '#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4'];
    
    for (let i = 0; i < waves; i++) {
        const wave = document.createElement('div');
        wave.className = 'particle-fx';
        wave.style.position = 'absolute';
        wave.style.left = centerX + 'px';
        wave.style.top = centerY + 'px';
        wave.style.width = '20px';
        wave.style.height = '20px';
        wave.style.border = `3px solid ${colors[i]}`;
        wave.style.borderRadius = '50%';
        wave.style.transform = 'translate(-50%, -50%)';
        wave.style.boxShadow = `0 0 20px ${colors[i]}`;
        
        container.appendChild(wave);
        
        wave.animate([
            { 
                transform: 'translate(-50%, -50%) scale(0)', 
                opacity: 1,
                borderWidth: '3px'
            },
            { 
                transform: 'translate(-50%, -50%) scale(15)', 
                opacity: 0,
                borderWidth: '1px'
            }
        ], { 
            duration: 2000,
            easing: 'ease-out',
            delay: i * 200
        });
    }
    
    // Partículas de impacto
    for (let i = 0; i < 25; i++) {
        const debris = document.createElement('div');
        debris.className = 'particle-fx';
        debris.style.position = 'absolute';
        debris.style.left = centerX + 'px';
        debris.style.top = centerY + 'px';
        debris.style.width = '4px';
        debris.style.height = '4px';
        debris.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        debris.style.borderRadius = '50%';
        
        const angle = (i / 25) * Math.PI * 2;
        const distance = Math.random() * 200 + 100;
        const finalX = centerX + Math.cos(angle) * distance;
        const finalY = centerY + Math.sin(angle) * distance;
        
        container.appendChild(debris);
        
        debris.animate([
            { transform: 'translate(0, 0) scale(1)', opacity: 1 },
            { transform: `translate(${finalX - centerX}px, ${finalY - centerY}px) scale(0)`, opacity: 0 }
        ], { 
            duration: 1500,
            easing: 'ease-out',
            delay: 300
        });
    }
}

// 13. Lluvia de Meteoros
function meteorShowerEffect(centerX, centerY, container) {
    const meteorCount = 12;
    
    for (let i = 0; i < meteorCount; i++) {
        const meteor = document.createElement('div');
        meteor.className = 'particle-fx';
        meteor.style.position = 'absolute';
        meteor.style.width = '8px';
        meteor.style.height = '8px';
        meteor.style.background = 'radial-gradient(circle, #ffffff, #ff6b35)';
        meteor.style.borderRadius = '50%';
        meteor.style.boxShadow = '0 0 30px #ff6b35, 0 0 60px #ff3838';
        
        const startX = Math.random() * window.innerWidth;
        const startY = -50;
        meteor.style.left = startX + 'px';
        meteor.style.top = startY + 'px';
        
        // Crear cola del meteoro
        const tail = document.createElement('div');
        tail.style.position = 'absolute';
        tail.style.width = '3px';
        tail.style.height = '80px';
        tail.style.background = 'linear-gradient(to bottom, rgba(255,107,53,0.8), transparent)';
        tail.style.left = '2.5px';
        tail.style.top = '8px';
        tail.style.transformOrigin = 'top';
        tail.style.transform = 'rotate(45deg)';
        
        meteor.appendChild(tail);
        container.appendChild(meteor);
        
        const endX = startX + Math.random() * 300 - 150;
        const endY = Math.random() * 400 + 300;
        
        meteor.animate([
            { 
                transform: `translate(0, 0) scale(0)`, 
                opacity: 0 
            },
            { 
                transform: `translate(0, 0) scale(1)`, 
                opacity: 1,
                offset: 0.1
            },
            { 
                transform: `translate(${endX - startX}px, ${endY - startY}px) scale(1.2)`, 
                opacity: 1,
                offset: 0.7
            },
            { 
                transform: `translate(${endX - startX}px, ${endY - startY}px) scale(0)`, 
                opacity: 0 
            }
        ], { 
            duration: 1500 + Math.random() * 1000,
            easing: 'ease-in',
            delay: i * 150
        });
        
        // Explosión al impactar
        setTimeout(() => {
            if (endY > centerY - 100) {
                createMiniExplosion(endX, endY, container);
            }
        }, 1500 + i * 150);
    }
}

// 14. Teletransporte
function teleportEffect(centerX, centerY, container) {
    // Fase 1: Implosión
    for (let i = 0; i < 40; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle-fx';
        particle.innerHTML = '✧';
        particle.style.position = 'absolute';
        particle.style.color = '#00ff88';
        particle.style.fontSize = Math.random() * 12 + 8 + 'px';
        particle.style.textShadow = '0 0 20px currentColor';
        
        const angle = (i / 40) * Math.PI * 2;
        const startRadius = Math.random() * 300 + 150;
        const startX = centerX + Math.cos(angle) * startRadius;
        const startY = centerY + Math.sin(angle) * startRadius;
        
        particle.style.left = startX + 'px';
        particle.style.top = startY + 'px';
        
        container.appendChild(particle);
        
        particle.animate([
            { 
                transform: 'translate(0, 0) scale(1) rotate(0deg)', 
                opacity: 1 
            },
            { 
                transform: `translate(${centerX - startX}px, ${centerY - startY}px) scale(0) rotate(360deg)`, 
                opacity: 0 
            }
        ], { 
            duration: 1500,
            easing: 'ease-in',
            delay: i * 20
        });
    }
    
    // Fase 2: Destello central
    setTimeout(() => {
        createFlash(centerX, centerY, container, '#00ff88');
        
        // Anillos de energía
        for (let ring = 0; ring < 4; ring++) {
            const energyRing = document.createElement('div');
            energyRing.className = 'particle-fx';
            energyRing.style.position = 'absolute';
            energyRing.style.left = centerX + 'px';
            energyRing.style.top = centerY + 'px';
            energyRing.style.width = '20px';
            energyRing.style.height = '20px';
            energyRing.style.border = '2px solid #00ff88';
            energyRing.style.borderRadius = '50%';
            energyRing.style.transform = 'translate(-50%, -50%)';
            energyRing.style.boxShadow = '0 0 30px #00ff88';
            
            container.appendChild(energyRing);
            
            energyRing.animate([
                { transform: 'translate(-50%, -50%) scale(0)', opacity: 1 },
                { transform: 'translate(-50%, -50%) scale(8)', opacity: 0 }
            ], { 
                duration: 1000,
                easing: 'ease-out',
                delay: ring * 100
            });
        }
    }, 1200);
    
    // Fase 3: Explosión hacia afuera
    setTimeout(() => {
        for (let i = 0; i < 35; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle-fx';
            particle.innerHTML = '◊';
            particle.style.position = 'absolute';
            particle.style.left = centerX + 'px';
            particle.style.top = centerY + 'px';
            particle.style.color = '#88ff00';
            particle.style.fontSize = Math.random() * 10 + 6 + 'px';
            particle.style.textShadow = '0 0 15px currentColor';
            
            const angle = Math.random() * Math.PI * 2;
            const velocity = Math.random() * 250 + 150;
            const finalX = centerX + Math.cos(angle) * velocity;
            const finalY = centerY + Math.sin(angle) * velocity;
            
            container.appendChild(particle);
            
            particle.animate([
                { transform: 'translate(0, 0) scale(0) rotate(0deg)', opacity: 1 },
                { transform: `translate(${finalX - centerX}px, ${finalY - centerY}px) scale(1) rotate(720deg)`, opacity: 0 }
            ], { 
                duration: 1800,
                easing: 'ease-out',
                delay: i * 30
            });
        }
    }, 1700);
}

// 15. Cristales de Hielo
function iceCrystalsEffect(centerX, centerY, container) {
    const crystalCount = 25;
    const crystalShapes = ['❅', '❆', '✻', '✼', '❋', '❊'];
    
    // Crear cristales principales
    for (let i = 0; i < crystalCount; i++) {
        const crystal = document.createElement('div');
        crystal.className = 'particle-fx';
        crystal.innerHTML = crystalShapes[Math.floor(Math.random() * crystalShapes.length)];
        crystal.style.position = 'absolute';
        crystal.style.left = centerX + 'px';
        crystal.style.top = centerY + 'px';
        crystal.style.color = '#b3e5fc';
        crystal.style.fontSize = Math.random() * 20 + 15 + 'px';
        crystal.style.textShadow = '0 0 20px #81d4fa, 0 0 40px #4fc3f7';
        crystal.style.filter = `hue-rotate(${Math.random() * 60}deg)`;
        
        container.appendChild(crystal);
        
        const pattern = Math.floor(Math.random() * 3);
        let finalX, finalY, rotations;
        
        switch(pattern) {
            case 0: // Hexagonal
                const hexAngle = (i / crystalCount) * Math.PI * 2;
                finalX = centerX + Math.cos(hexAngle) * 150;
                finalY = centerY + Math.sin(hexAngle) * 150;
                rotations = 360;
                break;
            case 1: // Espiral congelante
                const spiralAngle = (i / crystalCount) * Math.PI * 4;
                const spiralRadius = (i / crystalCount) * 200;
                finalX = centerX + Math.cos(spiralAngle) * spiralRadius;
                finalY = centerY + Math.sin(spiralAngle) * spiralRadius;
                rotations = 720;
                break;
            default: // Cristalización aleatoria
                finalX = centerX + (Math.random() * 300 - 150);
                finalY = centerY + (Math.random() * 300 - 150);
                rotations = Math.random() * 360;
        }
        
        crystal.animate([
            { 
                transform: 'translate(0, 0) rotate(0deg) scale(0)', 
                opacity: 0,
                filter: 'hue-rotate(0deg) brightness(2)'
            },
            { 
                transform: `translate(${(finalX - centerX) * 0.3}px, ${(finalY - centerY) * 0.3}px) rotate(${rotations * 0.3}deg) scale(1.5)`, 
                opacity: 1,
                offset: 0.4,
                filter: 'hue-rotate(180deg) brightness(1.5)'
            },
            { 
                transform: `translate(${finalX - centerX}px, ${finalY - centerY}px) rotate(${rotations}deg) scale(1)`, 
                opacity: 0.8,
                filter: 'hue-rotate(360deg) brightness(0.8)'
            }
        ], { 
            duration: 2500,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            delay: i * 80
        });
    }
    
    // Efecto de escarcha expandiéndose
    for (let ring = 0; ring < 6; ring++) {
        const frost = document.createElement('div');
        frost.className = 'particle-fx';
        frost.style.position = 'absolute';
        frost.style.left = centerX + 'px';
        frost.style.top = centerY + 'px';
        frost.style.width = '2px';
        frost.style.height = '2px';
        frost.style.border = '1px solid #e1f5fe';
        frost.style.borderRadius = '50%';
        frost.style.transform = 'translate(-50%, -50%)';
        frost.style.boxShadow = '0 0 15px #81d4fa';
        
        container.appendChild(frost);
        
        frost.animate([
            { 
                transform: 'translate(-50%, -50%) scale(0)', 
                opacity: 1,
                borderWidth: '1px'
            },
            { 
                transform: `translate(-50%, -50%) scale(${20 + ring * 5})`, 
                opacity: 0,
                borderWidth: '0px'
            }
        ], { 
            duration: 3000,
            easing: 'ease-out',
            delay: ring * 150
        });
    }
}

// Función auxiliar para crear destellos
function createFlash(x, y, container, color = '#ffffff') {
    const flash = document.createElement('div');
    flash.className = 'particle-fx';
    flash.style.position = 'absolute';
    flash.style.left = x + 'px';
    flash.style.top = y + 'px';
    flash.style.width = '50px';
    flash.style.height = '50px';
    flash.style.background = `radial-gradient(circle, ${color}, transparent)`;
    flash.style.borderRadius = '50%';
    flash.style.transform = 'translate(-50%, -50%)';
    flash.style.boxShadow = `0 0 100px ${color}`;
    
    container.appendChild(flash);
    
    flash.animate([
        { transform: 'translate(-50%, -50%) scale(0)', opacity: 1 },
        { transform: 'translate(-50%, -50%) scale(3)', opacity: 0 }
    ], { duration: 500 });
}

// Función auxiliar para mini explosiones
function createMiniExplosion(x, y, container) {
    for (let i = 0; i < 8; i++) {
        const spark = document.createElement('div');
        spark.className = 'particle-fx';
        spark.style.position = 'absolute';
        spark.style.left = x + 'px';
        spark.style.top = y + 'px';
        spark.style.width = '3px';
        spark.style.height = '3px';
        spark.style.backgroundColor = '#ff6b35';
        spark.style.borderRadius = '50%';
        spark.style.boxShadow = '0 0 10px #ff6b35';
        
        const angle = (i / 8) * Math.PI * 2;
        const distance = Math.random() * 30 + 20;
        const finalX = x + Math.cos(angle) * distance;
        const finalY = y + Math.sin(angle) * distance;
        
        container.appendChild(spark);
        
        spark.animate([
            { transform: 'translate(0, 0) scale(1)', opacity: 1 },
            { transform: `translate(${finalX - x}px, ${finalY - y}px) scale(0)`, opacity: 0 }
        ], { duration: 600 });
    }
}

// Función para limpiar partículas
function cleanupParticles(container) {
    const particles = container.querySelectorAll('.particle-fx');
    particles.forEach(particle => {
        if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
        }
    });
}

// Función principal actualizada para 15 efectos
function createExplosion(x = null, y = null) {
    const container = document.getElementById('fxeffectcontainer');
    
    // Si no se especifican coordenadas, usar el centro de la pantalla
    const centerX = x || window.innerWidth / 2;
    const centerY = y || window.innerHeight / 2;
    
    // Seleccionar efecto aleatorio (1-15)
    const effectType = Math.floor(Math.random() * 11) + 1;
    
    switch(effectType) {
        
        case 1:
            matrixRainEffect(centerX, centerY, container);
            break;   
            
        case 2:
            fireWorksExplosion(centerX, centerY, container);
            break;
        case 3:
            tornadoEffect(centerX, centerY, container);
            break;

        case 4://mejorar
            laserBlastEffect(centerX, centerY, container);
            break;            
        case 5://mejorar
            geometricChaosEffect(centerX, centerY, container);
            break;
            

        case 6://Mejorar
            bubblesEffect(centerX, centerY, container);
            break;
        
            
        case 7://mejorar
            portalEffect(centerX, centerY, container);
            break;
        case 8://mejorar
            snowStormEffect(centerX, centerY, container);
            break;         

            
        case 9:
            shockwaveEffect(centerX, centerY, container);
            break;                      
        case 10:
            teleportEffect(centerX, centerY, container);
            break;
        case 11:
            iceCrystalsEffect(centerX, centerY, container);
            break;

    }
    
    // Limpiar después de 5 segundos
    setTimeout(() => {
        cleanupParticles(container);
    }, 3200);
}