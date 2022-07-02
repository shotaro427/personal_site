import { useMemo, useRef } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { CubeCamera } from 'three'

function useRenderTarget(
  settings = {}
): [React.MutableRefObject<THREE.CubeCamera>, THREE.WebGLCubeRenderTarget] {
  const renderTarget = useMemo(() => {
    const renderTargetSettings = {
      format: THREE.RGBAFormat,
      generateMipmaps: true,
    }

    return new THREE.WebGLCubeRenderTarget(1024, {
      ...renderTargetSettings,
      ...settings,
    })
  }, [settings])

  const cubeCamera = useRef<CubeCamera>(null!)

  useFrame(({ gl, scene }) => {
    if (!cubeCamera.current) return
    cubeCamera.current.update(gl, scene)
  })

  return [cubeCamera, renderTarget]
}

export default useRenderTarget
