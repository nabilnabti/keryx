'use client';

import { useEffect, useRef, ReactNode } from 'react';

interface ScrollAnimationProps {
    children: ReactNode;
    animation?: 'fade-in-up' | 'fade-in' | 'scale-in' | 'slide-in-left' | 'slide-in-right';
    delay?: number;
    className?: string;
    threshold?: number;
}

export function ScrollAnimation({
    children,
    animation = 'fade-in-up',
    delay = 0,
    className = '',
    threshold = 0.1
}: ScrollAnimationProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Add animation class
                        setTimeout(() => {
                            element.style.opacity = '1';
                            element.classList.add(`animate-${animation}`);
                        }, delay);
                        observer.unobserve(element);
                    }
                });
            },
            {
                threshold: threshold,
                rootMargin: '0px 0px -100px 0px'
            }
        );

        observer.observe(element);

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [animation, delay, threshold]);

    return (
        <div
            ref={ref}
            className={className}
            style={{ opacity: 0, transition: 'opacity 0.3s ease' }}
        >
            {children}
        </div>
    );
}
