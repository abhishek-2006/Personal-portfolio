"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef, useMemo, useEffect } from "react";
import * as THREE from "three";

// Suppress THREE.Clock deprecation warning from internal dependencies
if (typeof console !== "undefined") {
  const originalWarn = console.warn;
  console.warn = (...args) => {
    if (typeof args[0] === 'string' && args[0].includes('THREE.Clock')) return;
    originalWarn(...args);
  };
}

function NodeNetwork() {
  const pointsRef = useRef();
  const linesRef = useRef();
  const mouse = useRef({ x: 0, y: 0 });
  
  const particleCount = 200;
  const maxDistance = 4;

  // Initialize positions and velocities
  const [positions, velocities] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const vel = [];
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 30; // x
      pos[i * 3 + 1] = (Math.random() - 0.5) * 30; // y
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15 - 5; // z
      vel.push(
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02
      );
    }
    return [pos, vel];
  }, []);

  const linePositions = useMemo(() => new Float32Array(particleCount * particleCount * 3), []);
  const lineColors = useMemo(() => new Float32Array(particleCount * particleCount * 3), []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((state, delta) => {
    if (!pointsRef.current || !linesRef.current) return;

    // Update positions based on velocities
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] += velocities[i * 3];
      positions[i * 3 + 1] += velocities[i * 3 + 1];
      positions[i * 3 + 2] += velocities[i * 3 + 2];

      // Bounce off walls
      if (Math.abs(positions[i * 3]) > 15) velocities[i * 3] *= -1;
      if (Math.abs(positions[i * 3 + 1]) > 15) velocities[i * 3 + 1] *= -1;
      if (Math.abs(positions[i * 3 + 2] + 5) > 7.5) velocities[i * 3 + 2] *= -1;
    }
    
    pointsRef.current.geometry.attributes.position.needsUpdate = true;

    // Update lines
    let vertexpos = 0;
    let colorpos = 0;
    let numConnected = 0;

    for (let i = 0; i < particleCount; i++) {
      for (let j = i + 1; j < particleCount; j++) {
        const dx = positions[i * 3] - positions[j * 3];
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
        const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
        const distSq = dx * dx + dy * dy + dz * dz;

        if (distSq < maxDistance * maxDistance) {
          const alpha = 1.0 - Math.sqrt(distSq) / maxDistance;
          
          linePositions[vertexpos++] = positions[i * 3];
          linePositions[vertexpos++] = positions[i * 3 + 1];
          linePositions[vertexpos++] = positions[i * 3 + 2];
          
          linePositions[vertexpos++] = positions[j * 3];
          linePositions[vertexpos++] = positions[j * 3 + 1];
          linePositions[vertexpos++] = positions[j * 3 + 2];

          // Gradient color from Cyan to Purple
          lineColors[colorpos++] = 0.13 * alpha; 
          lineColors[colorpos++] = 0.83 * alpha; 
          lineColors[colorpos++] = 0.93 * alpha; 

          lineColors[colorpos++] = 0.54 * alpha; 
          lineColors[colorpos++] = 0.36 * alpha; 
          lineColors[colorpos++] = 0.96 * alpha; 

          numConnected++;
        }
      }
    }

    linesRef.current.geometry.setDrawRange(0, numConnected * 2);
    linesRef.current.geometry.attributes.position.needsUpdate = true;
    linesRef.current.geometry.attributes.color.needsUpdate = true;

    // Mouse Parallax & Continuous slow rotation
    const time = state.clock.getElapsedTime();
    const targetX = mouse.current.x * 2;
    const targetY = mouse.current.y * 2;
    
    state.camera.position.x += (targetX - state.camera.position.x) * delta * 2;
    state.camera.position.y += (targetY - state.camera.position.y) * delta * 2;
    state.camera.lookAt(0, 0, 0);

    // Slowly rotate entire group
    pointsRef.current.parent.rotation.y = time * 0.05;
  });

  return (
    <group>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particleCount}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial size={0.12} color="#22d3ee" transparent opacity={0.8} sizeAttenuation={true} />
      </points>
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={linePositions.length / 3}
            array={linePositions}
            itemSize={3}
            usage={THREE.DynamicDrawUsage}
          />
          <bufferAttribute
            attach="attributes-color"
            count={lineColors.length / 3}
            array={lineColors}
            itemSize={3}
            usage={THREE.DynamicDrawUsage}
          />
        </bufferGeometry>
        <lineBasicMaterial vertexColors transparent opacity={0.6} blending={THREE.AdditiveBlending} />
      </lineSegments>
    </group>
  );
}

export default function SkillsThreeScene() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none">
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
        <Suspense fallback={null}>
          <NodeNetwork />
        </Suspense>
      </Canvas>
    </div>
  );
}
