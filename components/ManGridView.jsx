'use client'

import { Canvas } from '@react-three/fiber'
import { Suspense, useRef } from 'react'
import SceneView from './ManScene'

const cameraAngles = [
  [5, 5, 5],
  [-5, 5, 5],
  [5, 5, -5],
  [-5, 5, -5]
]

export default function ManGridView() {
  const sharedPosition = useRef([0, 0.5, 0]) // same man position for all views

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {cameraAngles.map((pos, idx) => (
        <div key={idx} className="border border-black">
          <div className="text-sm font-bold text-center bg-black text-white py-1">CAM {idx + 1}</div>
          <Canvas style={{ height: 250, background: '#000' }}>
            <Suspense fallback={null}>
              <SceneView camPosition={pos} positionRef={sharedPosition} />
            </Suspense>
          </Canvas>
        </div>
      ))}
    </div>
  )
}
