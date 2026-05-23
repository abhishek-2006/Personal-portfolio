import { m, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState } from "react";

export default function TiltCard({ children, className, tiltStrength = 15 }) {

  const [isAnimating, setIsAnimating] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 400, damping: 40 });
  const mouseYSpring = useSpring(y, { stiffness: 400, damping: 40 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [`${tiltStrength}deg`, `-${tiltStrength}deg`]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [`-${tiltStrength}deg`, `${tiltStrength}deg`]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <m.div style={{ perspective: 1200 }} className={className}>
      <m.div
        onMouseEnter={() => setIsAnimating(true)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d",  willChange: isAnimating ? "transform" : undefined }}
        className="w-full h-full"
      >
        {children}
      </m.div>
    </m.div>
  );
}