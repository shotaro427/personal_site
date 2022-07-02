import { Box, EnvironmentMap } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { FC, useRef, useState } from 'react'
import useLayers from 'src/hooks/use-layer'
import { ThinFilmFresnelMap } from 'src/resource/ThinFilmFresnelMap'
import { Material, MeshLambertMaterial, Texture } from 'three'

type Props = {
  envMap: Texture
  args: number[]
  name: string
  layers: number[]
}

export const Mirror: FC<Props> = ({ args, layers, envMap, ...props }) => {
  const ref = useLayers(layers)
  const [map] = useState(new ThinFilmFresnelMap())

  const sideMaterial = new MeshLambertMaterial({
    envMap,
    reflectivity: 0.9,
    color: '#AAAAAA',
  })

  const reflectionMaterial = new MeshLambertMaterial({
    envMap,
    reflectivity: 1,
    color: '#FFFFFF',
  })

  useFrame(() => {
    ref.current.rotation.y += 0.001
    ref.current.rotation.z += 0.007
  })

  return (
    <group name="mirror">
      <hemisphereLight args={['#FFF', '#000', 1]} />
      <Box
        {...props}
        ref={ref}
        args={args as any}
        receiveShadow
        material={[
          sideMaterial,
          sideMaterial,
          sideMaterial,
          sideMaterial,
          reflectionMaterial,
          reflectionMaterial,
        ]}
      >
        {/* <meshLambertMaterial color="#AAAAAA" reflectivity={0.9} envMap={envMap} /> */}
      </Box>
    </group>
  )
}
