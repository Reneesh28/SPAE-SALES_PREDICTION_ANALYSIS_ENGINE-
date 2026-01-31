import { Line } from "@react-three/drei";
import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function NeuralConnections() {
  const groupRef = useRef();

  const nodes = useMemo(
    () =>
      Array.from({ length: 40 }, () => new THREE.Vector3(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 6
      )),
    []
  );

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y -= delta * 0.05; // Slow counter-rotation
    }
  });

  return (
    <group ref={groupRef}>
      {nodes.map((a, i) =>
        nodes.slice(i + 1).map((b, j) =>
          a.distanceTo(b) < 4 ? (
            <Line
              key={`${i}-${j}`}
              points={[a, b]}
              color="white"
              opacity={0.12}
              transparent
              lineWidth={1}
            />
          ) : null
        )
      )}
    </group>
  );
}
