'use client'

import React, { useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Model } from './Man'

const CAM_ANGLES = {
  CAM1: 0,
  CAM2: 90,
  CAM3: 180,
  CAM4: -90,
  CAM5: 45,
  CAM6: 135,
  CAM7: -135,
  CAM8: -45,
  CAM9: 270,
  CAM10: 360
}

function RotatingMan({ angleY }) {
  const groupRef = React.useRef()

  useFrame(() => {
    if (groupRef.current) {
      // Smooth rotation
      groupRef.current.rotation.y += (angleY * (Math.PI / 200) - groupRef.current.rotation.y) * 0.1
    }
  })

  return (
    <group ref={groupRef} position={[0, -3, 0]} rotation={[0, Math.PI, 0]}>
      <Model />
    </group>
  )
}

export default function Person3DRotation() {
  const [angleY, setAngleY] = useState(0)

  const handleCamClick = (cam) => {
    setAngleY(CAM_ANGLES[cam])
  }

  return (
    <div className="flex flex-col items-center gap-6 p-6 bg-gray-100 min-h-screen">
      <h2 className="text-lg text-black font-semibold">View Person from Camera Angle</h2>

      <div className="flex flex-wrap justify-center gap-2">
        {Object.keys(CAM_ANGLES).map((cam) => (
          <button
            key={cam}
            onClick={() => handleCamClick(cam)}
            className="px-4 py-2 text-sm bg-purple-600 text-white rounded hover:bg-purple-800 transition"
          >
            {cam}
          </button>
        ))}
      </div>

      <div className="w-full h-[400px] mt-6">
        <Canvas camera={{ position: [0, 1, 3] }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} />
          <RotatingMan angleY={angleY} />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
    </div>
  )
}
