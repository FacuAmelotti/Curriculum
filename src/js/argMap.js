    
        // Datos de los lugares visitados
        const locations = [
            {
                id: 'necochea',
                name: 'Necochea',
                x: 55,
                y: 52,
                photos: [
                    {
                           src: '../img/necocheaFacu_3.jpg',                           
                        description: 'Necochea es mar, médanos y viento. Es ese lugar donde el río se encuentra con el océano y los atardeceres se pintan de fuego.'
                    },
                                        {
                           src: '../img/necocheaFacu_2.jpg',                           
                        description: 'Con sus playas anchas, el Parque Miguel Lillo y ese aroma a sal y eucalipto, es un rincón tranquilo pero lleno de vida. Ideal para desconectar, caminar sin apuro y dejar que el sonido de las olas te acompañe.'
                    },
                                                            {
                           src: '../img/necocheaFacu_1.jpg',                           
                        description: 'El Parque Miguel Lillo es un bosque vivo, lleno de senderos, eucaliptos y paz.'
                    }
                ]
            } ,
            {
                id: 'ushuaia',
                name: 'Ushuaia',
                x: 42,
                y: 96,
                photos: [
                    {
                        src: '../img/ushuahiaFacu_1.jpg',
                        description: 'Ushuaia es un lugar mágico, la ciudad más austral del mundo, donde las montañas tocan el mar y los paisajes parecen de otro planeta. '
                    },
                    {
                        src: '../img/ushuahiaFacu_2.jpg',
                        description: 'Es un rincón del mundo donde el viento, los bosques y el hielo conviven en armonía. Ideal para perderse, encontrarse y descubrir la inmensidad del fin del mundo.'
                    }
                ]
            }     
            ,
            {
                id: 'bsas',
                name: 'Buenos Aires',
                x: 57,
                y: 42,
                photos: [
                    {
                        src: '../img/mendozaFacu_2.jpg',
                        description: 'Buenos Aires es una ciudad que vibra. Caótica y encantadora, mezcla lo europeo con lo bien argentino. Es tango en una esquina, café con medialunas, librerías infinitas y noches que no se terminan.'
                    },
                    {
                        src: '../img/mendozaFacu_2.jpg',
                        description: 'Caminar por sus barrios —desde la elegancia de Recoleta hasta la bohemia de San Telmo— es sentir que cada rincón tiene una historia. Es arte, protesta, pasión futbolera y mil formas de vivirla. Te abraza con su ritmo y no te deja ir.'
                    }
                ]
            },
                        {
                id: 'lp',
                name: 'La Plata',
                x: 59,
                y: 46,
                photos: [
                    {
                        src: '../img/lpFacu_1.jpg',
                        description: 'La Plata es una ciudad pensada, trazada con compás y corazón. Es joven, universitaria, llena de cultura, historia y ciencia. Tiene una energía única: entre diagonales, plazas y edificios majestuosos, se respira movimiento.'
                    },
                    {
                       src: '../img/mendozaFacu_2.jpg',
                       description: 'Con su catedral imponente, sus museos, bares y vida nocturna, La Plata mezcla lo clásico con lo moderno. Es de esas ciudades que te atrapan sin hacer ruido, pero que dejan huella.',          
                    }
                ]
            },
            {
                id: 'bariloche',
                name: 'Bariloche',
                x: 35,
                y: 57,
                photos: [
                    {
                        src: '../img/barilocheFacu_1.jpg',
                        description: 'Bariloche es como un pedacito de cuento entre montañas, lagos y bosques.'
                    },
                                        {
                       src: '../img/barilocheFacu_2.jpg',
                        description: ' Tiene ese olor a chocolate y a pino, esa paz que solo te da mirar el Nahuel Huapi al atardecer.'
                    }
                ]
            }  
            ,
            {
                id: 'mendoza',
                name: 'Mendoza',
                x: 38,
                y: 40,
                photos: [
                    {
                        src: '../img/mendozaFacu_1.jpg',
                        description: 'Mendoza es una tierra de sol, montañas y buen vino. Está al pie de la Cordillera de los Andes y tiene una energía especial, con sus calles arboladas, canales de riego y gente cálida.'
                    },
                                        {
                        src: '../img/mendozaFacu_2.jpg',
                        description: 'Es el corazón del Malbec y punto de partida para quienes sueñan con tocar el Aconcagua. Entre viñedos, bodegas y atardeceres dorados, Mendoza te invita a disfrutar la vida con calma y sabor.'
                    }
                ]
            }
            ,
            {
                id: 'cordoba',
                name: 'Cordoba',
                x: 50,
                y: 32,
                photos: [
                    {
                        src: '../img/mendozaFacu_2.jpg',
                        description: 'Córdoba es alegría serrana y tonada que te abraza. Es mate al sol, ríos frescos y sierras que invitan a perderse.'
                    },
                    {
                        src: '../img/mendozaFacu_2.jpg',
                        description: 'En la ciudad, lo colonial se mezcla con lo moderno, y en cada rincón hay historia, arte y juventud. Es una provincia que vibra con sus festivales, sus pueblos con alma y esa calidez única de su gente.'
                    }
                ]
            }  
        ];

        let currentActivePoint = null;

        // Crear partículas
        function createParticles() {
            const particlesContainer = document.getElementById('particles');
            for (let i = 0; i < 50; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 25 + 's';
                particle.style.animationDuration = (Math.random() * 10 + 15) + 's';
                particlesContainer.appendChild(particle);
            }
        }

        // Cursor personalizado
        function initCursor() {
            const cursor = document.getElementById('cursor');
            let mouseX = 0, mouseY = 0;
            let cursorX = 0, cursorY = 0;

            document.addEventListener('mousemove', (e) => {
                mouseX = e.clientX;
                mouseY = e.clientY;
            });

            function animateCursor() {
                cursorX += (mouseX - cursorX) * 0.1;
                cursorY += (mouseY - cursorY) * 0.1;
                cursor.style.left = cursorX + 'px';
                cursor.style.top = cursorY + 'px';
                requestAnimationFrame(animateCursor);
            }
            animateCursor();
        }

        // Efecto ripple
        function createRipple(e) {
            const ripple = document.createElement('div');
            ripple.className = 'ripple-effect';
            ripple.style.left = e.clientX + 'px';
            ripple.style.top = e.clientY + 'px';
            document.body.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 800);
        }

        // Inicializar el mapa
        function initializeMap() {
            const mapContainer = document.getElementById('mapContainer');
            
            locations.forEach(location => {
                const point = document.createElement('div');
                point.className = 'location-point';
                point.dataset.locationId = location.id;
                point.style.left = location.x + '%';
                point.style.top = location.y + '%';
                
                point.addEventListener('click', (e) => {
                    createRipple(e);
                    openPhotoPanel(location);
                });
                
                mapContainer.appendChild(point);
            });
        }

        // Abrir panel de fotos
        function openPhotoPanel(location) {
            const panel = document.getElementById('photoPanel');
            const title = document.getElementById('locationTitle');
            const gallery = document.getElementById('photoGallery');
            
            title.textContent = location.name;
            gallery.innerHTML = '';
            
            location.photos.forEach(photo => {
                const photoItem = document.createElement('div');
                photoItem.className = 'photo-item';
                photoItem.innerHTML = `
                    <img src="${photo.src}" alt="${photo.description}">
                    <div class="photo-description">${photo.description}</div>
                `;
                gallery.appendChild(photoItem);
            });
            
            panel.classList.add('active');
            
            if (currentActivePoint) {
                currentActivePoint.classList.remove('active');
            }
            const point = document.querySelector(`[data-location-id="${location.id}"]`);
            point.classList.add('active');
            currentActivePoint = point;
        }

        // Cerrar panel de fotos
        function closePhotoPanel() {
            const panel = document.getElementById('photoPanel');
            panel.classList.remove('active');
            
            if (currentActivePoint) {
                currentActivePoint.classList.remove('active');
                currentActivePoint = null;
            }
        }

        // Event listeners
        document.getElementById('closeBtn').addEventListener('click', closePhotoPanel);
        document.getElementById('photoPanel').addEventListener('click', (e) => {
            if (e.target.id === 'photoPanel') {
                closePhotoPanel();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closePhotoPanel();
            }
        });

        document.addEventListener('click', createRipple);

        // Inicializar
        document.addEventListener('DOMContentLoaded', () => {
           // createParticles();
            initCursor();
            initializeMap();
        });