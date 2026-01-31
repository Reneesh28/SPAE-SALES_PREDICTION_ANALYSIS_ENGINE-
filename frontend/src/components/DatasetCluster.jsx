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
    ref.current.rotation.y = clock.getElapsedTime() * 0.15;
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
