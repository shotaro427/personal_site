import * as React from 'react'
import { Box, OrbitControls, Sky } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'
import { CubeCamera, RGBAFormat, WebGLCubeRenderTarget } from 'three'

const MirrorBox = () => {
  const [renderTarget] = useState(
    new WebGLCubeRenderTarget(1024, {
      format: RGBAFormat,
      generateMipmaps: true,
    })
  )
  const cubeCamera = useRef<CubeCamera>(null!)

  useFrame(({ gl, scene }) => {
    if (cubeCamera.current) {
      cubeCamera.current.update(gl, scene)
    }
  })

  return (
    <>
      <Sky
        layers={11}
        sunPosition={[Math.PI, 0, Math.PI / 2]}
        turbidity={8}
        rayleigh={6}
        mieCoefficient={0.0005}
        mieDirectionalG={0.8}
      />
      <cubeCamera
        layers={11}
        name="CubeCamera"
        ref={cubeCamera}
        position={[0, 0, 0]}
        args={[0.1, 100, renderTarget]}
      />

      <Box args={[2, 2, 2]}>
        <meshPhysicalMaterial
          color="#f51d63"
          envMap={renderTarget.texture}
          metalness={1}
          roughness={0}
        />
      </Box>

      <OrbitControls />
      <ambientLight />
    </>
  )
}

export default MirrorBox
