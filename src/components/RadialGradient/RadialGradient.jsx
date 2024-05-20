import React, { useState, useEffect } from 'react';
import './RadialGradient.css';

const RadialGradient = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        setPosition({ x: e.clientX, y: e.clientY })
    }

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div
            className="gradient"
            style={{
                background: `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.1) 5%, rgba(0,0,0,0) 5%)`
            }}
        />
    )
}

export default RadialGradient




