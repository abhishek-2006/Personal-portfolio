"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef, useEffect } from "react";
import * as THREE from "three";

// Suppress THREE.Clock deprecation warning from internal dependencies
if (typeof console !== "undefined") {
  const originalWarn = console.warn;
  console.warn = (...args) => {
    if (typeof args[0] === 'string' && args[0].includes('THREE.Clock')) return;
    originalWarn(...args);
  };
}

function DataWave() {
  const pointsRef = useRef(null);
  const count = 100;
  const sep = 0.4;
  const clickWaveRef = useRef({ active: false, time: 0 });
  const mouse = useRef({ x: 0, y: 0 });

  const [positions, colors] = useMemo(() => {
    let pos = [];
    let col = [];
    const color = new THREE.Color();
    for (let i = 0; i < count; i++) {
      for (let j = 0; j < count; j++) {
        let x = (i - count / 2) * sep;
        let y = (j - count / 2) * sep;
        pos.push(x, y, 0);
        
        // Gradient color: Cyan to Blue based on distance from center
        const dist = Math.sqrt(x*x + y*y);
        color.setHSL(0.55 + dist * 0.015, 0.9, 0.6);
        col.push(color.r, color.g, color.b);
      }
    }
    return [new Float32Array(pos), new Float32Array(col)];
  }, [count]);

  useEffect(() => {
    const handleClick = () => {
      // Trigger shockwave
      clickWaveRef.current = { active: true, time: 0 };
    };

    const handleMouseMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('click', handleClick);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('click', handleClick);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    
    // We use state.clock directly since we are manually controlling the animation loop for vertices
    const t = state.clock.getElapsedTime();
    const positions = pointsRef.current.geometry.attributes.position.array;
    
    if (clickWaveRef.current.active) {
      clickWaveRef.current.time += delta * 20; // Shockwave speed
      if (clickWaveRef.current.time > 50) {
        clickWaveRef.current.active = false;
      }
    }

    let i = 0;
    for (let x = 0; x < count; x++) {
      for (let y = 0; y < count; y++) {
        const px = (x - count / 2) * sep;
        const py = (y - count / 2) * sep;
        const dist = Math.sqrt(px*px + py*py);
        
        // Base flowing wave
        let pz = Math.sin(px * 0.3 + t * 1.5) * 0.6 + Math.cos(py * 0.3 + t * 1.5) * 0.6;

        // Click Shockwave
        if (clickWaveRef.current.active) {
          const waveDist = Math.abs(dist - clickWaveRef.current.time);
          if (waveDist < 4) {
            // Create a sharp peak that trails off
            pz += Math.sin((1 - waveDist / 4) * Math.PI) * 3;
          }
        }

        positions[i + 2] = pz;
        i += 3;
      }
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    
    // Slowly rotate the entire grid and tilt based on mouse
    const targetRotX = -Math.PI / 2.5 + mouse.current.y * 0.2;
    const targetRotY = mouse.current.x * 0.2;
    
    pointsRef.current.rotation.x += (targetRotX - pointsRef.current.rotation.x) * delta * 2;
    pointsRef.current.rotation.y += (targetRotY - pointsRef.current.rotation.y) * delta * 2;
    pointsRef.current.rotation.z = t * 0.05; // Constant slow spin
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.08} 
        vertexColors 
        transparent 
        opacity={0.8} 
        sizeAttenuation={true} 
      />
    </points>
  );
}

export default function ContactThreeScene() {
  return (
    <div className="fixed inset-0 -z-10 bg-[#030712] overflow-hidden pointer-events-none">
      <Canvas camera={{ position: [0, 5, 15], fov: 60 }}>
        <DataWave />
      </Canvas>
    </div>
  );
}
