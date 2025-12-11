import React, { useEffect, useRef } from 'react';

const CanvasCursor = () => {
    const canvasRef = useRef(null);
    const particles = useRef([]);
    const cursor = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // Set canvas to full screen
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        // Mouse movement
        const onMouseMove = (e) => {
            cursor.current = { x: e.clientX, y: e.clientY };
            // Spawn extensive particles on move (METEOR TAIL)
            for (let i = 0; i < 5; i++) {
                particles.current.push(createParticle(cursor.current.x, cursor.current.y));
            }
        };

        window.addEventListener('mousemove', onMouseMove);

        // Animation Loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw meteor head
            ctx.beginPath();
            ctx.arc(cursor.current.x, cursor.current.y, 4, 0, Math.PI * 2);
            ctx.fillStyle = "white";
            ctx.shadowBlur = 15;
            ctx.shadowColor = "#915eff";
            ctx.fill();
            ctx.shadowBlur = 0; // Reset for particles

            particles.current.forEach((particle, index) => {
                particle.x += particle.speedX;
                particle.y += particle.speedY;
                particle.size -= 0.1; // Fast fade
                particle.life -= 1;

                ctx.fillStyle = particle.color;

                ctx.beginPath();
                ctx.arc(particle.x, particle.y, Math.max(0, particle.size), 0, Math.PI * 2);
                ctx.fill();

                if (particle.life <= 0 || particle.size <= 0) {
                    particles.current.splice(index, 1);
                }
            });

            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', onMouseMove);
        };
    }, []);

    const createParticle = (x, y) => {
        // Fire/Space colors: Orange, Purple, Pink, White
        const colors = ['#FFD700', '#00FFFF', '#FF00FF', '#915EFF'];
        return {
            x,
            y,
            size: Math.random() * 4 + 2, // Larger starting size
            speedX: Math.random() * 2 - 1, // Slight drift
            speedY: Math.random() * 2 - 1,
            color: colors[Math.floor(Math.random() * colors.length)],
            life: 30, // Short life for tight tail
        };
    };

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9998]"
        />
    );
};

export default CanvasCursor;
