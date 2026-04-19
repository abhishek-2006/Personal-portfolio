"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere, Icosahedron, MeshTransmissionMaterial, Sparkles } from "@react-three/drei";
import { Suspense, useRef, useEffect } from "react";

// Suppress THREE.Clock deprecation warning from internal dependencies
if (typeof console !== "undefined") {
  const originalWarn = console.warn;
  console.warn = (...args) => {
    if (typeof args[0] === 'string' && args[0].includes('THREE.Clock')) return;
    originalWarn(...args);
  };
}

function TechCrystal() {
  const crystalRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((state, delta) => {
    if (crystalRef.current) {
      // Base slow rotation
      crystalRef.current.rotation.x += delta * 0.15;
      crystalRef.current.rotation.y += delta * 0.2;
      
      // Interactive mouse follow
      const targetX = mouse.current.y * 1.5;
      const targetY = mouse.current.x * 1.5;
      
      crystalRef.current.rotation.x += (targetX - crystalRef.current.rotation.x) * delta * 3;
      crystalRef.current.rotation.y += (targetY - crystalRef.current.rotation.y) * delta * 3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <group ref={crystalRef}>
        {/* Inner Glowing Core */}
        <Sphere args={[0.8, 32, 32]}>
          <meshStandardMaterial 
            color="#22d3ee" 
            emissive="#22d3ee" 
            emissiveIntensity={2} 
            toneMapped={false} 
          />
        </Sphere>
        
        {/* Outer Refractive Glass Shell */}
        <Icosahedron args={[1.8, 0]}>
          <MeshTransmissionMaterial 
            backside
            samples={4}
            thickness={1.5}
            chromaticAberration={0.1}
            anisotropy={0.3}
            distortion={0.5}
            distortionScale={0.5}
            temporalDistortion={0.1}
            color="#6366f1"
          />
        </Icosahedron>
      </group>
      
      {/* Floating Energy Particles */}
      <Sparkles count={150} scale={12} size={6} speed={0.4} color="#22d3ee" opacity={0.6} />
      <Sparkles count={50} scale={8} size={10} speed={0.2} color="#6366f1" opacity={0.4} />
    </Float>
  );
}

export default function AboutThreeScene() {
  return (
    <div className="fixed inset-0 -z-10 bg-[#030712]">
      <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#22d3ee" />
        <Suspense fallback={null}>
          <TechCrystal />
        </Suspense>
      </Canvas>
    </div>
  );
}
