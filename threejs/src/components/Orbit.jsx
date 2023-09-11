import { extend, useThree } from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const Orbit = () => {
  extend({ OrbitControls });
  const { camera, gl } = useThree();

  return (
    <orbitControls args={[camera, gl.domElement]} attach="orbitControls" />
  );
};

export default Orbit;
