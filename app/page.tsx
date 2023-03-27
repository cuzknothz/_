"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Inter } from "next/font/google";
import { getProject } from "@theatre/core";
import studio from "@theatre/studio";

studio.initialize();
const inter = Inter({ subsets: ["latin"] });

const demoSheet = getProject("Demo Project").sheet("Demo Sheet");

export default function Home() {
  return (
    <Canvas
      className="[&__canvas]:!w-screen [&__canvas]:!h-screen"
      camera={{
        position: [5, 5, -5],
        fov: 75,
      }}
    >
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="orange" />
      </mesh>
    </Canvas>
  );
}
