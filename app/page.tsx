"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { getProject } from "@theatre/core";
import extension from "@theatre/r3f/dist/extension";
import studio from "@theatre/studio";
import { Inter } from "next/font/google";
import { SheetProvider, editable as e, PerspectiveCamera } from "@theatre/r3f";
import { Background } from "@/components/Background";
import { OverLay } from "@/components/OverLay";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { gsap } from "gsap";

if (process.env.NODE_ENV === "development") {
  studio.initialize();
  studio.extend(extension);
}

const inter = Inter({ subsets: ["latin"] });

const demoSheet = getProject("Demo Project").sheet("Demo Sheet");

const Box = () => {
  const boxRef = useRef<THREE.Mesh>();
  const boxRef2 = useRef<THREE.Mesh>();

  useFrame(({ clock }) => {
    gsap.to(boxRef.current!.position, {
      duration: 1,
      delay: 2,
      x: Math.random() * 10,
      y: Math.random() * 10,
    });
  });

  useEffect(() => {
    // gsap.to(boxRef.current!.position, {
    //   duration: 1,
    //   delay: 2,
    //   x: 2,
    // });
    // gsap.to(boxRef2.current!.position, {
    //   duration: 1,
    //   delay: 1,
    //   x: 4,
    // });
  }, []);
  return (
    <>
      <group>
        <e.mesh ref={boxRef} theatreKey="hehe" position={[1, 2, 5]}>
          <boxGeometry args={[2, 1, 1]} />
          <meshBasicMaterial color={"purple"} />
        </e.mesh>
        <e.mesh ref={boxRef2} theatreKey="hll" position={[5, 6, 5]}>
          <boxGeometry args={[2, 1, 1]} />
          <meshBasicMaterial color={"yellow"} />
        </e.mesh>
      </group>
    </>
  );
};

const Camera_ = () => {
  const ref = useRef<THREE.Camera>();

  // useFrame(({clock})=>{
  //   ref.current!.position.x = Math.sin(clock.getElapsedTime()) * 100;
  //   ref.current!.position.y = Math.cos(clock.getElapsedTime()) * 100;
  // })
  return (
    <PerspectiveCamera
      theatreKey="Camera"
      ref={ref}
      makeDefault
      position={[5, 5, -5]}
      fov={60}
      attachArray={undefined}
      attachObject={undefined}
      attachFns={undefined}
      lookAt={[1, 2, 5]}
    />
  );
};

export default function Home() {
  return (
    <>
      <Canvas
        className="[&__canvas]:!w-screen [&__canvas]:!h-screen"
        gl={{ preserveDrawingBuffer: true }}
      >
        <Background />
        <SheetProvider sheet={demoSheet}>
          <Camera_ />
          <ambientLight />
          <e.pointLight position={[10, 10, 10]} theatreKey="pointLight" />
          <Box />
        </SheetProvider>
      </Canvas>
      <OverLay />
    </>
  );
}
