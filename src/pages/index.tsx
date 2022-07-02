import { css } from '@emotion/react'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { Scene } from 'src/components/organisms/Scene'

const colors = [
  '#ff7f7f',
  '#ff7fbf',
  '#ff7fff',
  '#bf7fff',
  '#7f7fff',
  '#7fbfff',
  '#7fffff',
  '#7fffbf',
  '#7fff7f',
  '#bfff7f',
  '#ffff7f',
  '#ffbf7f',
]

const IndexPage = () => {
  return (
    <main
      css={css`
        height: 100vh;
        width: 100vw;
      `}
    >
      {/* <Canvas camera={{ position: [0, 0, 5], fov: 70 }}>
        <color attach="background" args={['#000']} />
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
        <ambientLight intensity={0.4} />
      </Canvas> */}
    </main>
  )
}

export default IndexPage
