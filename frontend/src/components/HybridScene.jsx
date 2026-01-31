import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
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
      <color attach="background" args={["#000000"]} />
      <fog attach="fog" args={["#000000", 10, 50]} /> {/* Fade to black distance */}

      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1.5} />

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
