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
    <>
    <div >
          <h1 className='font-bold text-4xl text-center'>Moving element <span className='text-blue-500'> Multiple camera</span> <br /> view in a room</h1>

    <div className="grid grid-cols-2 gap-4 py-10 px-56">
      {cameraAngles.map((pos, idx) => (
        <div key={idx} className="">
          <div className="text-sm font-bold text-center text-white">CAM {idx + 1}</div>
          <Canvas style={{ height: 250, }} className='rounded-2xl bg-blue-200'>
            <Suspense fallback={null} >
              <SceneView camPosition={pos} positionRef={sharedPosition} />
            </Suspense>
          </Canvas>
        </div>
      ))}
    </div>
    </div>
    </>
  )
}
