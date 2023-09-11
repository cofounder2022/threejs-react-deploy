import { useLoader, useThree } from "react-three-fiber";
import * as THREE from 'three'
import { useMemo } from "react";

const Background = (props) =>{
  const texture = useLoader(THREE.TextureLoader, process.env.PUBLIC_URL + '/autoshop.jpg')
  const { gl } = useThree()
  const renderTarget =  new THREE.WebGLCubeRenderTarget(texture.image.height).fromEquirectangularTexture(gl, texture)
  gl.setRenderTarget(gl.getRenderTarget());

  const cubeTexture = useMemo(()=> renderTarget.texture,[])
  cubeTexture.mapping = THREE.CubeReflectionMapping;

  return (
    <primitive
      attach='background' 
      object={cubeTexture}
    />
  )
}

export default Background