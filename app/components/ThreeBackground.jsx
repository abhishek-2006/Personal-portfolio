"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float, Sphere, MeshDistortMaterial } from "@react-three/drei";
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
    
    // Always look at the center where the sphere is
    state.camera.lookAt(0, 0, 0);
  });

  return null;
}

function AnimatedSphere() {
  const meshRef = useRef(null);

  const time = useRef(0);

  useFrame((state, delta) => {
    if (meshRef.current) {
      time.current += delta;
      meshRef.current.rotation.x = time.current * 0.2;
      meshRef.current.rotation.y = time.current * 0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 64, 64]} scale={1.5}>
        <MeshDistortMaterial
          color="#3b82f6" // blue-500
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
}

function Particles() {
  const groupRef = useRef(null);
  
  const time = useRef(0);

  useFrame((state, delta) => {
    if (groupRef.current) {
      time.current += delta;
      groupRef.current.rotation.y = time.current * 0.05;
      groupRef.current.rotation.x = time.current * 0.02;
    }
  });

  return (
    <group ref={groupRef}>
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
    </group>
  );
}

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 -z-10 bg-[#0a0a0a]">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
        <Suspense fallback={null}>
          <CameraRig />
          <AnimatedSphere />
          <Particles />
        </Suspense>
      </Canvas>
    </div>
  );
}
