"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { getProject } from "@theatre/core";
import extension from "@theatre/r3f/dist/extension";
import studio from "@theatre/studio";
import { Inter } from "next/font/google";
import { SheetProvider, editable as e, PerspectiveCamera } from "@theatre/r3f";
import { Background } from "@/components/Bg";
import { useEffect, useRef } from "react";
import * as THREE from "three";

if (process.env.NODE_ENV === "development") {
  studio.initialize();
  studio.extend(extension);
}

const inter = Inter({ subsets: ["latin"] });

const demoSheet = getProject("Demo Project").sheet("Demo Sheet");

const Box = () => {
  const boxRef = useRef<THREE.Mesh>();

  useEffect(() => {
    // setTimeout(() => {
    //   boxRef.current!.position.set(1, 3, 7);
    // }, 5000);
    // console.log("BOXREF", boxRef.current!.position.set(1, 3, 7));
  }, []);
  return (
    <>
      <group>
        <e.mesh ref={boxRef} theatreKey="hehe" position={[1, 2, 5]}>
          <boxGeometry args={[2, 1, 1]} />
          <meshBasicMaterial color={"yellow"} />
        </e.mesh>
        <e.mesh ref={boxRef} theatreKey="hll" position={[5, 6, 5]}>
          <boxGeometry args={[2, 1, 1]} />
          <meshBasicMaterial color={"yellow"} />
        </e.mesh>
      </group>
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
          fov={60}
          attachArray={undefined}
          attachObject={undefined}
          attachFns={undefined}
          lookAt={[1, 2, 5]}
        />
        <ambientLight />
        <e.pointLight position={[10, 10, 10]} theatreKey="pointLight" />
        <Box />
      </SheetProvider>
    </Canvas>
  );
}
