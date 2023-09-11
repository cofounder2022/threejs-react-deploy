import "./App.css";
// import { Canvas, useFrame, extend, useLoader } from "@react-three/fiber";
import { Canvas } from "react-three-fiber";
import { Suspense } from "react";
import Background from "./components/Background";
import { Physics } from "@react-three/cannon";
import Bulb from "./components/Bulb";
import Floor from "./components/Floor";
import Orbit from "./components/Orbit";
import ColorPicker from "./components/ColorPicker";
import Cars from "./components/Cars";
import CameraControls from "./components/CameraControls";
import CameraButtons from "./components/CameraButtons";
import Lights from "./components/Lights";
import Effects from "./components/Effects";

function App() {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <ColorPicker />
      <CameraButtons />
      <Canvas
        gl={{
          powerPreference: "high-performance",
          antialias: false,
          stencil: false,
          depth: false,
        }}
        shadows
        style={{ background: "black" }}
        camera={{ position: [7, 7, 7] }}
      >
        <Suspense fallback={null}>
          <Background />
        </Suspense>
        <CameraControls />
        <Lights />
        <Orbit />
        <axesHelper args={[5]} />
        <Physics>
          <Cars />
          <Floor position={[0, -0.5, 0]} />
        </Physics>
        <Effects />
      </Canvas>
    </div>
  );
}

export default App;
