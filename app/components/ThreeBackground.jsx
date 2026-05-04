"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float, Icosahedron } from "@react-three/drei";
import { Suspense, useRef, useEffect } from "react";

// Suppress THREE.Clock deprecation warning from internal dependencies
if (typeof console !== "undefined") {
  const originalWarn = console.warn;
  console.warn = (...args) => {
    if (typeof args[0] === 'string' && args[0].includes('THREE.Clock')) return;
    originalWarn(...args);
  };
}

function CameraRig() {
  const targetPosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      targetPosition.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      targetPosition.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((state, delta) => {
    // Smoothly move the camera based on mouse position
    state.camera.position.x += (targetPosition.current.x * 1.5 - state.camera.position.x) * delta * 3;
    state.camera.position.y += (targetPosition.current.y * 1.5 - state.camera.position.y) * delta * 3;
    
    // Always look at the center where the object is
    state.camera.lookAt(0, 0, 0);
  });

  return null;
}

function AbstractGeometricCore() {
  const groupRef = useRef(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15;
      groupRef.current.rotation.x += delta * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <group ref={groupRef} scale={1.2}>
        {/* Core solid icosahedron */}
        <Icosahedron args={[1, 0]}>
          <meshStandardMaterial 
            color="#0ea5e9" // Cyan/light blue
            roughness={0.2} 
            metalness={0.8} 
          />
        </Icosahedron>
        
        {/* Outer wireframe icosahedron */}
        <Icosahedron args={[1.5, 1]}>
          <meshStandardMaterial 
            color="#8b5cf6" // Purple
            wireframe={true} 
            transparent 
            opacity={0.4} 
          />
        </Icosahedron>
      </group>
    </Float>
  );
}

function Particles() {
  const groupRef = useRef(null);
  const time = useRef(0);
  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;

  useFrame((state, delta) => {
    if (groupRef.current) {
      time.current += delta;
      groupRef.current.rotation.y = time.current * 0.05;
      groupRef.current.rotation.x = time.current * 0.02;
    }
  });

  return (
    <group ref={groupRef}>
      <Stars radius={100} depth={50} count={isMobile ? 1500 : 4000} factor={4} saturation={0} fade speed={1} />
    </group>
  );
}

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 -z-10 bg-[#0a0a0a]">
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, powerPreference: "high-performance", alpha: false }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
        <Suspense fallback={null}>
          <CameraRig />
          <AbstractGeometricCore />
          <Particles />
        </Suspense>
      </Canvas>
    </div>
  );
}
