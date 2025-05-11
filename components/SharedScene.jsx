'use client'

import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'

// Moving man
export function Man({ positionRef }) {
  const ref = useRef()
  const [dir] = useState([0.02, 0, 0.015])

  useFrame(() => {
    if (ref.current) {
      const [x, y, z] = ref.current.position.toArray()
      let [dx, , dz] = dir

      if (x + dx > 4.5 || x + dx < -4.5) dx = -dx
      if (z + dz > 4.5 || z + dz < -4.5) dz = -dz

      const newPos = [x + dx, y, z + dz]
      ref.current.position.set(...newPos)
      positionRef.current = newPos
    }
  })

  return (
    <mesh ref={ref} position={[0, 0.5, 0]}>
      <boxGeometry args={[0.5, 1, 0.5]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  )
}

export function Room() {
  return (
    <mesh position={[0, -0.5, 0]}>
      <boxGeometry args={[10, 1, 10]} />
      <meshStandardMaterial color="#999" />
    </mesh>
  )
}

