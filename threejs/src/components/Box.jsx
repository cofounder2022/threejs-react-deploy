import { useRef } from 'react'
import {useLoader, useFrame } from 'react-three-fiber'
import { useBox } from '@react-three/cannon';
import * as THREE from 'three'

const Box = (props) => {
  const [ref, api] = useBox(()=>({mass: 1, ...props}))
  // const ref = useRef();
  const texture = useLoader(THREE.TextureLoader, process.env.PUBLIC_URL + '/wood.jpg')
  useFrame((state) => {
    ref.current.rotation.y += 0.01;
    ref.current.rotation.x += 0.01;
  });

  const handlePointerDown = e => {
    e.object.active = true;
    if(window.activeMesh) {
      scaleDown(window.activeMesh)
      window.activeMesh.active = false;
    }
    window.activeMesh = e.object
  }

  const handlePointerEnter = e => {
    e.object.scale.x = 1.5
    e.object.scale.y = 1.5
    e.object.scale.z = 1.5
  }

  const handlePointerLeave = e => {
    if(e.object.active) return

    scaleDown(e.object)
  }

  const scaleDown = object => {
    object.scale.x = 1
    object.scale.y = 1
    object.scale.z = 1
  }

  return (
    <mesh
      ref={ref} {...props}
      api={api}
      castShadow
      onPointerDown={handlePointerDown}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      <boxGeometry args={[1,1,1]}/>
      <meshPhysicalMaterial
        map={texture}
      />
    </mesh>
  );
};

export default Box