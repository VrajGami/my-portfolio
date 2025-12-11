import React, { useEffect, useRef } from 'react';

const COLORS = [
    '#FFD700', // Gold
    '#00FFFF', // Cyan
    '#FF00FF', // Magenta
    '#915EFF', // Deep Purple
    '#FF4500', // Orange Red
];

const ShootingStars = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;

        const createStar = () => {
            // Safety check if container unmounted
            if (!container) return;

            const star = document.createElement('div');
            star.classList.add('shooting-star');

            // Random Color
            const color = COLORS[Math.floor(Math.random() * COLORS.length)];
            star.style.setProperty('--star-color', color);

            // Random starting position
            const startX = Math.random() * window.innerWidth;
            const startY = Math.random() * (window.innerHeight / 2); // Mostly top half

            star.style.left = `${startX}px`;
            star.style.top = `${startY}px`;

            // Random size/speed
            const duration = Math.random() * 1 + 0.8; // 0.8s - 1.8s (Fast!)
            star.style.animationDuration = `${duration}s`;

            container.appendChild(star);

            // Remove after animation
            setTimeout(() => {
                if (star.parentNode === container) {
                    container.removeChild(star);
                }
            }, duration * 1000);
        };

        // Increase frequency significantly
        const interval = setInterval(() => {
            // 60% chance every 400ms = frequent meteors
            if (Math.random() > 0.4) {
                createStar();
            }
        }, 400);

        return () => clearInterval(interval);
    }, []);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden"
        />
    );
};

export default ShootingStars;
