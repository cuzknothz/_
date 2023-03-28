"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { getProject } from "@theatre/core";
import extension from "@theatre/r3f/dist/extension";
import studio from "@theatre/studio";
import { Inter } from "next/font/google";
import { SheetProvider, editable as e, PerspectiveCamera } from "@theatre/r3f";
import { Background } from "@/components/Bg";
import { useRef } from "react";

if (process.env.NODE_ENV === "development") {
  studio.initialize();
  studio.extend(extension);
}

const inter = Inter({ subsets: ["latin"] });

const demoSheet = getProject("Demo Project").sheet("Demo Sheet");

const Box = () => {
  const cubeRef = useRef<THREE.Mesh>();
  useFrame(({ clock }) => {
    cubeRef.current!.rotation.x = clock.getElapsedTime();
    cubeRef.current!.rotation.y = clock.getElapsedTime();

  });
  return (
    <>
      <e.mesh ref={cubeRef} theatreKey="cube" >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="orange" />
      </e.mesh>
    </>
  );
};

export default function Home() {
  return (
    <Canvas
      className="[&__canvas]:!w-screen [&__canvas]:!h-screen"
      gl={{ preserveDrawingBuffer: true }}
    >
      <Background />
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
        <Box />
      </SheetProvider>
    </Canvas>
  );
}
