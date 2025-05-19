'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Suspense, useEffect, useRef, useState } from 'react'
import { Model } from './Man'

function AnimatedModel({ isFalling, isFallen }) {
  const ref = useRef()

  useFrame(() => {
    if (ref.current) {
      const targetZ = isFallen ? Math.PI / 2 : 0 // Z-axis controls back fall
      const speed = isFalling ? 0.03 : 0.05
      ref.current.rotation.z += (targetZ - ref.current.rotation.z) * speed
    }
  })

  return (
    <group ref={ref} rotation={[0, Math.PI, 0]}> {/* face towards user */}
      <Model position={[0, -1, 0]} />
    </group>
  )
}



export default function CameraScene() {
  const [isFalling, setIsFalling] = useState(false)
  const [isFallen, setIsFallen] = useState(false)

  useEffect(() => {
    const cycle = () => {
      setIsFalling(true)

      // After 3s, mark as fully fallen
      setTimeout(() => {
        setIsFalling(false)
        setIsFallen(true)

        // After 20s fallen, recover
        setTimeout(() => {
          setIsFallen(false)
        }, 20000)
      }, 3000)
    }

    cycle() // initial trigger
    const interval = setInterval(cycle, 30000) // every 30s
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full bg-white text-black py-10 justify-center items-center flex ">
      {isFallen && (
        <div className="absolute top-4 left-4 z-10 p-4 bg-red-600 text-white rounded-lg shadow-lg animate-pulse">
          ⚠️ Fall Detected! Notifying caregiver...
        </div>
      )}
      <div className='rounded-md shadow-xl shadow-blue-300 w-1/2 justify-center items-center flex flex-col'>
      <h1 className='font-bold text-4xl py-8 text-blue-800 text-center'>Fall detection with 3D element</h1>
      <Canvas style={{ height: 500, width: '100%' }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[2, 3, 5]} />
        <Suspense fallback={null}>
          <AnimatedModel isFalling={isFalling} isFallen={isFallen} />
        </Suspense>
        <OrbitControls />
      </Canvas>
      </div>
    </div>
  )
}
