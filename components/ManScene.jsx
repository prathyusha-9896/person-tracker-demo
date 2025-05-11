'use client'

import { PerspectiveCamera } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Room, Man, DangerZone } from './SharedScene'
export default function SceneView({ camPosition, positionRef }) {
  const camRef = useRef()
  const set = useThree((s) => s.set)

  useFrame(() => {
    if (camRef.current) {
      camRef.current.lookAt(0, 0, 0)
      set({ camera: camRef.current })
    }
  })

  return (
    <>
      <PerspectiveCamera makeDefault ref={camRef} position={camPosition} fov={60} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={1.5} />
      <Room />
      <Man positionRef={positionRef} />
    </>
  )
}
