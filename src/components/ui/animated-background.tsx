'use client';

import { useEffect, useRef } from 'react';

export function AnimatedBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas size
        const setCanvasSize = () => {
            if (!canvas) return;
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        setCanvasSize();
        window.addEventListener('resize', setCanvasSize);

        // Particle class
        class Particle {
            x: number;
            y: number;
            size: number;
            speedX: number;
            speedY: number;
            opacity: number;

            constructor(canvasWidth: number, canvasHeight: number) {
                this.x = Math.random() * canvasWidth;
                this.y = Math.random() * canvasHeight;
                this.size = Math.random() * 2 + 0.5;
                this.speedX = Math.random() * 0.5 - 0.25;
                this.speedY = Math.random() * 0.5 - 0.25;
                this.opacity = Math.random() * 0.5 + 0.1;
            }

            update(canvasWidth: number, canvasHeight: number) {
                this.x += this.speedX;
                this.y += this.speedY;

                // Wrap around screen
                if (this.x > canvasWidth) this.x = 0;
                if (this.x < 0) this.x = canvasWidth;
                if (this.y > canvasHeight) this.y = 0;
                if (this.y < 0) this.y = canvasHeight;
            }

            draw(context: CanvasRenderingContext2D) {
                context.fillStyle = `rgba(225, 29, 72, ${this.opacity})`;
                context.beginPath();
                context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                context.fill();
            }
        }

        // Create particles
        const particlesArray: Particle[] = [];
        const numberOfParticles = 50;

        for (let i = 0; i < numberOfParticles; i++) {
            particlesArray.push(new Particle(canvas.width, canvas.height));
        }

        // Animation loop
        function animate() {
            if (!ctx || !canvas) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particlesArray.forEach(particle => {
                particle.update(canvas.width, canvas.height);
                particle.draw(ctx);
            });

            requestAnimationFrame(animate);
        }

        animate();

        return () => {
            window.removeEventListener('resize', setCanvasSize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
            style={{ opacity: 0.3 }}
        />
    );
}
