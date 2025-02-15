// index.js
document.addEventListener('DOMContentLoaded', () => {
    // 1. Efecto de scroll suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 2. Animación de elementos al hacer scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('section, .projects-category').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

    // 3. Botón de modo oscuro/claro
    const darkModeToggle = document.createElement('button');
    darkModeToggle.innerHTML = '🌓';
    darkModeToggle.className = 'theme-toggle';
    document.body.appendChild(darkModeToggle);

    // Función para aplicar el tema
    function applyTheme(theme) {
        if (theme === 'dark') {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }

    // Click handler
    darkModeToggle.addEventListener('click', () => {
        const isDark = document.body.classList.toggle('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });

    // Forzar siempre el tema claro (blanco)
    applyTheme('light');

    // 4. Tooltips para tecnologías
    document.querySelectorAll('.skill-item').forEach(skill => {
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = skill.querySelector('.skill-label').textContent;
        skill.appendChild(tooltip);

        skill.addEventListener('mouseenter', () => {
            tooltip.style.opacity = '1';
            tooltip.style.visibility = 'visible';
        });

        skill.addEventListener('mouseleave', () => {
            tooltip.style.opacity = '0';
            tooltip.style.visibility = 'hidden';
        });
    });

    /*
    // 5. Efecto de hover dinámico en proyectos
    document.querySelectorAll('.project-item').forEach(project => {
        project.addEventListener('mousemove', (e) => {
            const rect = project.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            project.style.setProperty('--mouse-x', `${x}px`);
            project.style.setProperty('--mouse-y', `${y}px`);
        });
    });
    */

    // 6. Botón "Volver arriba"
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '↑';
    scrollToTopBtn.className = 'scroll-top';
    document.body.appendChild(scrollToTopBtn);

    window.addEventListener('scroll', () => {
        scrollToTopBtn.style.display = window.scrollY > 500 ? 'block' : 'none';
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // 7. Efecto de parallax en la foto de perfil
    const profilePhoto = document.querySelector('.profile-photo');
    window.addEventListener('mousemove', (e) => {
        if (window.innerWidth > 768) {
            const x = (e.clientX / window.innerWidth - 0.5) * 4;
            const y = (e.clientY / window.innerHeight - 0.5) * 4;
            profilePhoto.style.transform = `translate(${x}px, ${y}px)`;
        }
    });
});
