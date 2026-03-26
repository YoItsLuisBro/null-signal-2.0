import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Edges } from "@react-three/drei";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

function useViewportTier() {
  const [tier, setTier] = useState("desktop");

  useEffect(() => {
    const check = () => {
      const width = window.innerWidth;

      if (width < 768) setTier("mobile");
      else if (width < 1280) setTier("tablet");
      else setTier("desktop");
    };

    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return tier;
}

function SignalCoreObject({ reduced = false }) {
  const groupRef = useRef(null);
  const coreRef = useRef(null);
  const shellRef = useRef(null);
  const ringARef = useRef(null);
  const ringBRef = useRef(null);

  const pointer = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });

  const coreMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: "#cfcfcf",
      metalness: 0.35,
      roughness: 0.45,
    });
  }, []);

  const shellMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: "#7cff5b",
      wireframe: true,
    });
  }, []);

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    current.current.x += (pointer.current.x - current.current.x) * 0.05;
    current.current.y += (pointer.current.y - current.current.y) * 0.05;

    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.28 + current.current.x * 0.35;
      groupRef.current.rotation.x = current.current.y * 0.15;
    }

    if (coreRef.current) {
      coreRef.current.rotation.x = t * 0.3;
      coreRef.current.rotation.z = t * 0.18;
    }

    if (shellRef.current) {
      shellRef.current.rotation.y = -t * 0.42;
      shellRef.current.rotation.x = t * 0.12;
    }

    if (ringARef.current) {
      ringARef.current.rotation.z = t * 0.5;
      ringARef.current.rotation.x = 1.05 + current.current.y * 0.15;
    }

    if (ringBRef.current) {
      ringBRef.current.rotation.y = -t * 0.38;
      ringBRef.current.rotation.z = 0.65 + current.current.x * 0.12;
    }
  });

  return (
    <group
      ref={groupRef}
      onPointerMove={(event) => {
        pointer.current.x = event.point.x * 0.12;
        pointer.current.y = event.point.y * 0.12;
      }}
      onPointerOut={() => {
        pointer.current.x = 0;
        pointer.current.y = 0;
      }}
    >
      <Float speed={1.4} rotationIntensity={0.25} floatIntensity={0.45}>
        <mesh ref={coreRef} material={coreMaterial}>
          <icosahedronGeometry args={[reduced ? 0.95 : 1.1, 0]} />
        </mesh>

        <mesh ref={shellRef} material={shellMaterial} scale={1.28}>
          <icosahedronGeometry args={[reduced ? 0.95 : 1.1, 0]} />
        </mesh>

        {!reduced && (
          <>
            <mesh ref={ringARef} rotation={[1.05, 0, 0]}>
              <torusGeometry args={[1.75, 0.03, 16, 120]} />
              <meshStandardMaterial
                color="#f5f5f5"
                metalness={0.25}
                roughness={0.55}
              />
            </mesh>

            <mesh ref={ringBRef} rotation={[0.3, 0.35, 0.65]}>
              <torusGeometry args={[2.1, 0.025, 16, 120]} />
              <meshStandardMaterial
                color="#7cff5b"
                metalness={0.15}
                roughness={0.6}
              />
            </mesh>
          </>
        )}

        <mesh scale={0.18} position={[0, 0, 0]}>
          <sphereGeometry args={[1, 24, 24]} />
          <meshStandardMaterial
            color="#7cff5b"
            emissive="#7cff5b"
            emissiveIntensity={0.6}
          />
        </mesh>

        {!reduced && (
          <mesh scale={1.45}>
            <icosahedronGeometry args={[1.1, 0]} />
            <meshBasicMaterial transparent opacity={0} />
            <Edges color="#7cff5b" threshold={10} />
          </mesh>
        )}
      </Float>
    </group>
  );
}

function Scene({ tier }) {
  const { camera } = useThree();

  useEffect(() => {
    if (tier === "mobile") {
      camera.position.set(0, 0, 4.8);
    } else if (tier === "tablet") {
      camera.position.set(0, 0, 5.7);
    } else {
      camera.position.set(0, 0, 6.2);
    }
  }, [camera, tier]);

  return (
    <>
      <ambientLight intensity={1.1} />
      <directionalLight position={[4, 4, 4]} intensity={2.2} />
      <directionalLight position={[-3, -1, 2]} intensity={0.8} />
      <pointLight position={[0, 0, 2]} intensity={1.2} color="#7cff5b" />
      <SignalCoreObject reduced={tier === "mobile"} />
    </>
  );
}

export function SignalCoreCanvas() {
  const tier = useViewportTier();

  return (
    <div className="h-60 w-full sm:h-75 lg:h-85 xl:h-90">
      <Canvas
        dpr={tier === "mobile" ? [1, 1.5] : [1, 2]}
        camera={{ position: [0, 0, 6.2], fov: 42 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene tier={tier} />
      </Canvas>
    </div>
  );
}
