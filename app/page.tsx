"use client";

import { Canvas } from "@react-three/fiber";
import { getProject } from "@theatre/core";
import extension from "@theatre/r3f/dist/extension";
import studio from "@theatre/studio";
import { Inter } from "next/font/google";
import { SheetProvider, editable as e, PerspectiveCamera } from "@theatre/r3f";

studio.initialize();
studio.extend(extension);

const inter = Inter({ subsets: ["latin"] });

const demoSheet = getProject("Demo Project").sheet("Demo Sheet");

export default function Home() {
  return (
    <Canvas
      className="[&__canvas]:!w-screen [&__canvas]:!h-screen"
      gl={{ preserveDrawingBuffer: true }}
    >
      <SheetProvider sheet={demoSheet}>
        <PerspectiveCamera
          theatreKey="Camera"
          makeDefault
          position={[5, 5, -5]}
          fov={75}
          attachArray={undefined}
          attachObject={undefined}
          attachFns={undefined}
        />

        <ambientLight />
        <e.pointLight position={[10, 10, 10]} theatreKey="pointLight" />
        <e.mesh theatreKey="cube">
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="orange" />
        </e.mesh>
      </SheetProvider>
    </Canvas>
  );
}
