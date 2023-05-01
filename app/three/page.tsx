"use client";

import { Background } from "@/components/Background";
import { OverLay } from "@/components/OverLay";
import { useTexture } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { getProject } from "@theatre/core";
import { PerspectiveCamera, SheetProvider, editable as e } from "@theatre/r3f";
import extension from "@theatre/r3f/dist/extension";
import studio from "@theatre/studio";
import { Inter } from "next/font/google";
import { useMemo, useRef } from "react";
import { useMousePosition } from "react-haiku";
import { useWindowSize } from "react-use";
import * as THREE from "three";

if (process.env.NODE_ENV === "development") {
  studio.initialize();
  studio.extend(extension);
}

const inter = Inter({ subsets: ["latin"] });

const demoSheet = getProject("Demo Project").sheet("Demo Sheet");

const vertices = new Float32Array([
  0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0, 0.0,

  1.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0, 0.0,
]);

const Box = () => {
  const boxRef = useRef<THREE.Mesh>();
  const boxRef2 = useRef<THREE.Mesh>();

  const texture = useTexture("/unnamed.jpg");

  // useFrame(({ clock }) => {
  //   gsap.to(boxRef.current!.position, {
  //     duration: 1,
  //     delay: 2,
  //     x: Math.random() * 10,
  //     y: Math.random() * 10,
  //   });
  // });

  // useEffect(() => {
  //   // gsap.to(boxRef.current!.position, {
  //   //   duration: 1,
  //   //   delay: 2,
  //   //   x: 2,
  //   // });
  //   // gsap.to(boxRef2.current!.position, {
  //   //   duration: 1,
  //   //   delay: 1,
  //   //   x: 4,
  //   // });
  // }, []);
  return (
    <>
      <group>
        <e.mesh theatreKey="hehe" position={[1, 2, 5]}>
          <boxBufferGeometry />
          <meshStandardMaterial attach="material" map={texture} />
        </e.mesh>
      </group>
    </>
  );
};

const Camera_ = () => {
  const ref = useRef<THREE.Camera>();
  const { x, y } = useMousePosition();
  const { width, height } = useWindowSize();

  const _x = useMemo(() => x / width - 0.5, [width, x]);
  const _y = useMemo(() => y / height - 0.5, [height, y]);

  useFrame(({ clock }) => {
    // ref.current!.position.x = _x;
    // ref.current!.position.y = _y;
  });
  return (
    <PerspectiveCamera
      theatreKey="Camera"
      ref={ref}
      makeDefault
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
