import { useFrame } from "@react-three/fiber";
import { Trail } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

export default function AgentPath() {
  const ref = useRef();
  const curve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-4, 0, 0),
    new THREE.Vector3(0, 3, -3),
    new THREE.Vector3(4, -2, 2),
    new THREE.Vector3(0, -3, 4),
  ]);

  useFrame(({ clock }) => {
    const t = (clock.getElapsedTime() * 0.15) % 1;
    ref.current.position.copy(curve.getPointAt(t));
  });

  return (
    <Trail
      width={1.5}
      length={6}
      color={new THREE.Color("#22d3ee")}
      attenuation={(t) => t * t}
    >
      <mesh ref={ref}>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshStandardMaterial
          color="#22d3ee"
          emissive="#22d3ee"
          emissiveIntensity={4}
        />
        <pointLight distance={6} intensity={2} color="#22d3ee" />
      </mesh>
    </Trail>
  );
}
