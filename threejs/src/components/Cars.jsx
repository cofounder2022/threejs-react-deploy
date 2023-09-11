import { Suspense } from "react";
import BoundingBox from "./BoundingBox";
import Model from "./Model";
import Dragable from "./Dragable";

const Cars = ({}) => {
  return (
    <Suspense fallback={null}>
      <Dragable transformGroup>
        <BoundingBox
          position={[4, 4, 0]}
          dims={[3, 2, 6]}
          offset={[0, -0.1, 0.8]}
        >
          <Model
            path="/tesla_2018_model_3/scene.gltf"
            scale={new Array(3).fill(0.012)}
          />
        </BoundingBox>
      </Dragable>
      <Dragable transformGroup>
        <BoundingBox
          position={[-4, 4, 0]}
          dims={[3, 2, 6]}
          offset={[0, 0, 0.8]}
        >
          <Model
            path="/tesla_model_p100d/scene.gltf"
            scale={new Array(3).fill(1.2)}
          />
        </BoundingBox>
      </Dragable>
      <group rotation={[0, Math.PI, 0]}>
        <Model
          path="/mech_drone/scene.gltf"
          scale={new Array(3).fill(5)}
        />
      </group>
    </Suspense>
  );
};


export default Cars