import { Points, PointMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { useHoverStore } from "../store/hoverStore";

export default function DatasetCluster({ id, center, color }) {
  const ref = useRef();
  const active = useHoverStore((s) => s.activeCluster === id);

  const positions = useMemo(() => {
    const pts = [];
    for (let i = 0; i < 2000; i++) {
      pts.push(
        center[0] + (Math.random() - 0.5) * 10,
        center[1] + (Math.random() - 0.5) * 10,
        center[2] + (Math.random() - 0.5) * 10
      );
    }
    return new Float32Array(pts);
  }, [center]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    ref.current.rotation.y = t * 0.1;
    ref.current.position.y = Math.sin(t * 0.5) * 0.2; // Float up and down
    const breathe = 1 + Math.sin(t * 1.5) * 0.05;
    ref.current.scale.set(breathe, breathe, breathe);
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color={color}
        size={active ? 0.3 : 0.12}
        opacity={active ? 1 : 0.6}
        depthWrite={false}
      />
    </Points>
  );
}
