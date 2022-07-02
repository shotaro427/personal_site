import { useEffect, useRef } from 'react'

function useLayers(layers = [0]) {
  const ref = useRef<any>()

  useEffect(() => {
    ref.current.layers.disableAll()

    layers.sort().forEach((layer) => {
      ref.current.layers.enable(layer)
    })
  })

  return ref
}

export default useLayers
