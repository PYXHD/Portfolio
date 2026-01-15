import { useState, useEffect } from "react";
import Ripple from "./Ripple";

export default function LightCircle() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [ripples, setRipples] = useState([]);

    // suivre la souris
    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    // créer un ripple au clic / tap
    useEffect(() => {
        const handleClick = (e) => {
            const id = Date.now() + Math.random();
            const newRipple = { id, x: e.clientX, y: e.clientY };
            setRipples((prev) => [...prev, newRipple]);
        };

        const handleTouch = (e) => {
            if (e.touches && e.touches.length > 0) {
                const id = Date.now() + Math.random();
                const newRipple = { id, x: e.touches[0].clientX, y: e.touches[0].clientY };
                setRipples((prev) => [...prev, newRipple]);
            }
        };

        window.addEventListener("click", handleClick);
        window.addEventListener("touchstart", handleTouch, { passive: true });

        return () => {
            window.removeEventListener("click", handleClick);
            window.removeEventListener("touchstart", handleTouch);
        };
    }, []);

    return (
        <>
            {/* sphère lumineuse */}
            <div
                className="lightSphere"
                style={{ left: mousePos.x, top: mousePos.y }}
            />

            {/* vagues */}
            {ripples.map((r) => (
                <Ripple key={r.id} x={r.x} y={r.y} />
            ))}
        </>
    );
}


