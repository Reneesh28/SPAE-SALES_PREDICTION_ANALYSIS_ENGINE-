import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sparkles } from "@react-three/drei";
import DatasetCluster from "./DatasetCluster";
import NeuralConnections from "./NeuralConnections";
import AgentPath from "./AgentPath";

function CameraRig() {
  useFrame(({ camera }) => {
    camera.position.z = 18 + window.scrollY * 0.005;
  });
  return null;
}

export default function HybridScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 20], fov: 55 }}
      dpr={[1, 2]} // Optimize for high DPI screens
    >
      <color attach="background" args={["#030508"]} />
      <fog attach="fog" args={["#030508", 10, 50]} /> {/* Fade to dark blue-black */}

      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#4f46e5" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ec4899" />

      <Sparkles count={50} scale={12} size={2} speed={0.4} opacity={0.5} color="#a1a1aa" />

      <DatasetCluster id="marketing" center={[-8, 0, 0]} color="#6366f1" />
      <DatasetCluster id="economic" center={[8, 0, 0]} color="#22c55e" />
      <DatasetCluster id="retail" center={[0, 6, -6]} color="#f97316" />

      <NeuralConnections />
      <AgentPath />
      <CameraRig />

      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  );
}
