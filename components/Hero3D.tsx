import React, { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Stars, Trail, Text, PerspectiveCamera } from '@react-three/drei';
import { EffectComposer, Bloom, Noise, Vignette } from '@react-three/postprocessing';
import * as THREE from 'three';
import { HERO_SETTINGS } from '../constants';

// Manually augment JSX.IntrinsicElements to resolve missing types for Three.js elements
declare global {
  namespace JSX {
    interface IntrinsicElements {
      mesh: any;
      group: any;
      icosahedronGeometry: any;
      meshStandardMaterial: any;
      meshBasicMaterial: any;
      sphereGeometry: any;
      torusGeometry: any;
      ambientLight: any;
      pointLight: any;
    }
  }
}

// --- Scene Components ---

const CoreGeometry = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.2, 0]} />
        <meshStandardMaterial
          color={HERO_SETTINGS.coreColor}
          emissive={HERO_SETTINGS.coreColor}
          emissiveIntensity={0.8}
          wireframe
          transparent
          opacity={0.8}
        />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[1.15, 0]} />
        <meshBasicMaterial color="#000" />
      </mesh>
    </Float>
  );
};

const Satellites = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = -state.clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {[...Array(3)].map((_, i) => (
        <group key={i} rotation={[0, (Math.PI * 2 * i) / 3, 0]}>
           <Trail width={0.2} length={4} color={HERO_SETTINGS.satelliteColor} attenuation={(t) => t * t}>
             <mesh position={[2.5, 0, 0]}>
                <sphereGeometry args={[0.08, 16, 16]} />
                <meshStandardMaterial 
                  color={HERO_SETTINGS.satelliteColor} 
                  emissive={HERO_SETTINGS.satelliteColor}
                  emissiveIntensity={2}
                />
             </mesh>
           </Trail>
        </group>
      ))}
    </group>
  );
};

const RotatingRing = () => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
       ref.current.rotation.x = Math.PI / 2 + Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2;
       ref.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <mesh ref={ref}>
      <torusGeometry args={[3.5, 0.02, 16, 100]} />
      <meshStandardMaterial 
        color={HERO_SETTINGS.satelliteColor}
        emissive={HERO_SETTINGS.satelliteColor}
        emissiveIntensity={0.5}
        transparent
        opacity={0.3}
      />
    </mesh>
  );
}

const Rig = () => {
  const { camera, mouse } = useThree();
  const vec = new THREE.Vector3();

  useFrame(() => {
    camera.position.lerp(vec.set(mouse.x * 2, mouse.y * 2, 8), 0.05);
    camera.lookAt(0, 0, 0);
  });
  
  return null;
};

// --- Main Component ---

interface Hero3DProps {
  onLoad?: () => void;
}

const Hero3D: React.FC<Hero3DProps> = ({ onLoad }) => {
  const [dpr, setDpr] = useState(1.5);

  // Simple performance adjustment
  React.useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) setDpr(1);
    if (onLoad) onLoad();
  }, [onLoad]);

  return (
    <div className="absolute inset-0 z-0 bg-suvora-900" aria-label="Suvora 3D hero visualization">
      <Canvas
        dpr={dpr}
        gl={{ antialias: false, powerPreference: "high-performance" }}
        shadows={false}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={45} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color={HERO_SETTINGS.satelliteColor} />
        
        <group>
          <CoreGeometry />
          <Satellites />
          <RotatingRing />
        </group>
        
        <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
        
        <Rig />

        <EffectComposer disableNormalPass multisampling={0}>
            <Bloom 
                luminanceThreshold={0.4} 
                mipmapBlur 
                intensity={HERO_SETTINGS.bloomIntensity} 
                radius={0.6}
            />
            <Noise opacity={0.05} />
            <Vignette eskil={false} offset={0.1} darkness={1.1} />
        </EffectComposer>
      </Canvas>
    </div>
  );
};

export default Hero3D;