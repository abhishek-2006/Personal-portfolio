"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles, Environment } from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";
import { EffectComposer, Bloom, ChromaticAberration, Noise, Vignette } from "@react-three/postprocessing";

function HexField() {
	const hexes = useMemo(() => {
		return Array.from({ length: 35 }, (_, i) => ({
			id: i,
			position: [
				(Math.sin(i * 12.9898) * 43758.5453 % 1 - 0.5) * 20,
				(Math.sin(i * 78.233) * 12345.6789 % 1 - 0.5) * 10,
				-5 - ((Math.sin(i * 45.123) * 9876.543) % 1) * 8,
			],
		}));
	}, []);

	return (
		<>
			{hexes.map((hex) => (
				<Float
					key={hex.id}
					speed={1 + hex.id * 0.05}
					rotationIntensity={1}
					floatIntensity={1.5}
				>
					<mesh position={hex.position}>
						<circleGeometry args={[0.22, 6]} />
						<meshBasicMaterial
							wireframe
							color="#22d3ee"
							transparent
							opacity={0.3}
						/>
					</mesh>
				</Float>
			))}
		</>
	);
}
function NeonGrid() {

    const grid=useRef();

    useFrame(({clock})=>{

        grid.current.material.opacity=
        0.18+
        Math.sin(clock.elapsedTime*2)*0.04;

    });

    return(

        <group>

            <gridHelper
                ref={grid}
                args={[60,80,"#22d3ee","#0ea5e9"]}
                position={[0,-3.2,0]}
            />

            <mesh
                rotation={[-Math.PI/2,0,0]}
                position={[0,-3.19,0]}
            >
                <planeGeometry args={[60,60]} />
                <meshBasicMaterial
                    color="#030712"
                    transparent
                    opacity={0.55}
                />
            </mesh>
        </group>
    )
}

function ArcadeParticles() {
	const groupRef = useRef(null);
	const particleCount = 140;

	const particles = useMemo(() => {
		const positions = new Float32Array(particleCount * 3);
		const colors = new Float32Array(particleCount * 3);
		const seededValue = (index, offset) => {
			const value = Math.sin(index * 12.9898 + offset * 78.233) * 43758.5453;
			return value - Math.floor(value);
		};

		for (let i = 0; i < particleCount; i++) {
			positions[i * 3] = (seededValue(i, 1) - 0.5) * 20;
			positions[i * 3 + 1] = (seededValue(i, 2) - 0.5) * 11;
			positions[i * 3 + 2] = (seededValue(i, 3) - 0.5) * 14 - 2;

			const coolTone = i % 3 !== 0;
			colors[i * 3] = coolTone ? 0.13 : 0.67;
			colors[i * 3 + 1] = coolTone ? 0.83 : 0.46;
			colors[i * 3 + 2] = coolTone ? 0.93 : 0.96;
		}

		return { positions, colors };
	}, []);

	useFrame((state) => {
		if (!groupRef.current) return;
		groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.04;
	});

	return (
		<group ref={groupRef}>
			<points>
				<bufferGeometry>
					<bufferAttribute attach="attributes-position" count={particleCount} array={particles.positions} itemSize={3} />
					<bufferAttribute attach="attributes-color" count={particleCount} array={particles.colors} itemSize={3} />
				</bufferGeometry>
				<pointsMaterial size={0.08} vertexColors transparent opacity={0.9} sizeAttenuation />
			</points>

			<mesh position={[0, -2.9, 0]} rotation={[-Math.PI / 2, 0, 0]}>
				<planeGeometry args={[26, 16]} />
				<meshBasicMaterial color="#09101d" transparent opacity={0.22} />
			</mesh>
		</group>
	);
}

export default function GamesThreeScene() {
	return (
		<div className="absolute inset-0 w-full h-full pointer-events-none">
			<Canvas
				camera={{ position: [0, 0.5, 11], fov: 50 }}
				dpr={1}
				gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
			>
				<color attach="background" args={["#030712"]} />
				<fog attach="fog" args={["#030712", 9, 22]} />
				<HexField />
				<ambientLight intensity={0.35} />
				<spotLight
				position={[0,8,8]}
				angle={0.35}
				penumbra={1}
				intensity={6}
				color="#22d3ee"
				/>

				<spotLight
				position={[5,2,4]}
				angle={0.4}
				intensity={4}
				color="#8b5cf6"
				/>

				<pointLight
				position={[-5,2,5]}
				intensity={3}
				color="#00F5FF"
				/>

				<pointLight
				position={[5,-2,3]}
				intensity={2}
				color="#ff00aa"
				/>
				<directionalLight position={[5, 7, 5]} intensity={1.4} color="#8b5cf6" />
				<pointLight position={[-6, 1, 6]} intensity={2.2} color="#22d3ee" />
				<pointLight position={[6, -1, 4]} intensity={1.4} color="#a855f7" />
				<Suspense fallback={null}>
					<NeonGrid />
					<ArcadeParticles />
					<Sparkles count={120} scale={[25, 12, 20]} size={4} speed={0.5} opacity={1} />
					<Environment preset="night" />
				</Suspense>
			<EffectComposer>
				<Bloom
				intensity={1.6}
				luminanceThreshold={0.2}
				/>

				<ChromaticAberration
				offset={[0.0008,0.0008]}
				/>
				<Noise opacity={0.03}/>
				<Vignette darkness={0.7}/>
			</EffectComposer>
			</Canvas>
		</div>
	);
}