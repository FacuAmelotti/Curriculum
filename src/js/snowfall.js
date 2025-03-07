// Polyfill para requestAnimationFrame
(function() {
    'use strict';
    var vendors = ['webkit', 'moz'];
    for (var i = 0; i < vendors.length && !window.requestAnimationFrame; ++i) {
        window.requestAnimationFrame = window[vendors[i]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[i]+'CancelAnimationFrame'] || window[vendors[i]+'CancelRequestAnimationFrame'];
    }
    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function(callback) {
            return setTimeout(callback, 1000/60);
        };
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
    }
})();

// Snowfall Module Corregido
var snowFall = (function() {
    const defaults = {
        flakeCount: 35,
        flakeColor: "#ffff",
        minSize: 0.6,
        maxSize: 5,
        minSpeed: 0.5,
        maxSpeed: 2,
        wind: 0.5
    };

    let flakes = [];
    let animationFrame;

    function createFlakeElement(size, color) {
        const flake = document.createElement('div');
        flake.style.cssText = `
            position: fixed;
            width: ${size}px;
            height: ${size}px;
            background: ${color};
            border-radius: 50%;
            pointer-events: none; // <--- Esto es clave
            z-index: 9999;
            filter: drop-shadow(0 0 5px ${color});
            transform: translate3d(0,0,0);
            will-change: transform;
        `;
        return flake;
    }

    function random(min, max) {
        return Math.random() * (max - min) + min;
    }

    function resetFlake(flake) {
        return {
            x: random(-50, window.innerWidth + 50),
            y: random(-200, -50),
            element: flake,
            speed: random(defaults.minSpeed, defaults.maxSpeed),
            angle: random(0, Math.PI * 2),
            size: random(defaults.minSize, defaults.maxSize)
        };
    }

    function updateFlakes() {
        flakes.forEach(flake => {
            flake.y += flake.speed;
            flake.angle += defaults.wind * 0.05;
            flake.x += Math.cos(flake.angle) * 0.5;

            flake.element.style.transform = `translate3d(${flake.x}px, ${flake.y}px, 0)`;

            if (flake.y > window.innerHeight + 100) {
                Object.assign(flake, resetFlake(flake.element));
            }
        });
        animationFrame = requestAnimationFrame(updateFlakes);
    }

    return {
        start: function() {
           //    if (window.innerWidth < 800) return;

            const container = document.createElement('div');
            container.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                overflow: hidden;
                pointer-events: none; // <--- Y también en el contenedor
            `;
            document.body.appendChild(container);

            // Generar copos iniciales
            for (let i = 0; i < defaults.flakeCount; i++) {
                const size = random(defaults.minSize, defaults.maxSize);
                const flake = createFlakeElement(size, defaults.flakeColor);
                container.appendChild(flake);
                flakes.push(resetFlake(flake));
            }

            updateFlakes();
        },

        stop: function() {
            cancelAnimationFrame(animationFrame);
            flakes = [];
            const container = document.querySelector('div[snowfall-container]');
            if (container) container.remove();
        }
    };
})();

// Iniciar efecto
document.addEventListener('DOMContentLoaded', snowFall.start);