import * as React from 'react'
import { Octahedron, useMatcapTexture } from '@react-three/drei'
import { FC, useRef } from 'react'
import useRenderTarget from 'src/hooks/use-render-target'
import { BackSide, Group, Vector3 } from 'three'
import { Mirrors } from '../atoms/Mirrors'
import { Title, TitleCopies } from '../atoms/Title'
import useSlerp from 'src/hooks/use-slerp'

export const Scene: FC = () => {
  const [cubeCamera, renderTarget] = useRenderTarget()
  const ref = useSlerp()
  const [matcapTexture] = useMatcapTexture('C8D1DC_575B62_818892_6E747B')

  return (
    <>
      <group name="sceneContainer">
        <Octahedron
          layers={11}
          name="background"
          args={[20, 4]}
          position={[0, 0, -3]}
        >
          <meshMatcapMaterial
            matcap={matcapTexture}
            side={BackSide}
            transparent
            opacity={0}
            color="#fff"
          />
        </Octahedron>
        <cubeCamera
          ref={cubeCamera}
          name="cubeCamera"
          args={[0.1, 1000, renderTarget]}
          position={[0, 0, 5]}
          layers={11}
        ></cubeCamera>
        <Title name="title" position={new Vector3(0, 0, -10)} />
        <TitleCopies layers={[11]} />
        <Mirrors layers={[0, 11]} envMap={renderTarget.texture} />
      </group>
    </>
  )
}
