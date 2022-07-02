import { Text } from '@react-three/drei'
import { FC, useMemo, useRef } from 'react'
import useLayers from 'src/hooks/use-layer'
import { Group, IcosahedronGeometry, Layers, Vector3 } from 'three'

type Props = {
  name: string
  position: Vector3
  layers?: number[]
  visible?: boolean
  color?: string
}

export const Title: FC<Props> = ({ visible, layers, color, ...props }) => {
  const group = useRef<Group>(null)
  const text = useLayers(layers)

  return (
    <group {...props} ref={group}>
      <Text
        ref={text}
        name="text-pannel"
        fontSize={2.5}
        color={color ?? '#FFF'}
      >
        Test
      </Text>
    </group>
  )
}

export const TitleCopies = ({ layers }: { layers: number[] }) => {
  const vertices = useMemo(() => {
    const y = new IcosahedronGeometry(10, 1)
    const array = Array.from(y.getAttribute('position').array).reduce(
      (prev, cur, i) => {
        i % 3 ? prev[prev.length - 1].push(cur) : prev.push([cur])
        return prev
      },
      [] as number[][]
    )

    return array.map((pos) => new Vector3(pos[0], pos[1], pos[2] + 1))
  }, [])

  return (
    <group name="titleCopies">
      {vertices.map((vertex, i) => (
        <Title
          name={'titleCopy-' + i}
          position={vertex}
          layers={layers}
          visible={false}
        />
      ))}
    </group>
  )
}
