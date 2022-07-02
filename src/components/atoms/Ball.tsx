import { useSpring, animated } from '@react-spring/three'
import { FC } from 'react'
import { SphereGeometry, Vector3 } from 'three'

type Props = {
  position?: Vector3
  color: string
}

const Ball: FC<Props> = ({ position, color }) => {
  const props = useSpring({
    loop: { reverse: true },
    from: { position: [position?.x, (position?.y ?? 0) + 5, position?.z] },
    to: { position: [position?.x, (position?.y ?? 0) - 5, position?.z] },
    config: { duration: 2500 },
  })

  return (
    <animated.mesh {...props}>
      <sphereBufferGeometry visible args={[1, 250, 250]}></sphereBufferGeometry>
      <meshStandardMaterial
        attach="material"
        color={color}
        roughness={0}
        opacity={0.5}
      />
    </animated.mesh>
  )
}

export default Ball
