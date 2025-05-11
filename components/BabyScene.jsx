'use client'

import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { useState, useRef } from 'react'

const cameraPositions = {
  CAM1: [0, 5, 10],
  CAM2: [10, 5, 0],
  CAM3: [-10, 5, 0],
  CAM4: [0, 5, -10],
  CAM5: [5, 5, 5],
  CAM6: [-5, 5, -5],
}

function Baby() {
  return (
    <mesh position={[1, 0.5, 1]}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color="pink" />
    </mesh>
  )
}

function Toy({ position }) {
  return (
    <mesh position={position}>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial color="yellow" />
    </mesh>
  )
}

function Room() {
  return (
    <mesh position={[0, -0.5, 0]}>
      <boxGeometry args={[10, 1, 10]} />
      <meshStandardMaterial color="#ddd" />
    </mesh>
  )
}

function SceneContent({ currentCam }) {
  const camRef = useRef()
  const set = useThree((state) => state.set)

  useFrame(() => {
    if (camRef.current) {
      set({ camera: camRef.current })
    }
  })

  return (
    <>
      {/* Lights */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />

      {/* Room & Objects */}
      <Room />
      <Baby />
      <Toy position={[2, 0.25, 2]} />
      <Toy position={[-1, 0.25, -1]} />

      {/* Camera */}
      <PerspectiveCamera
        ref={camRef}
        makeDefault
        position={cameraPositions[currentCam]}
        fov={50}
      />
    </>
  )
}

export default function BabyScene() {
  const [currentCam, setCurrentCam] = useState('CAM1')

  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-2 p-4 flex-wrap">
        {Object.keys(cameraPositions).map((cam) => (
          <button
            key={cam}
            className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-800"
            onClick={() => setCurrentCam(cam)}
          >
            {cam}
          </button>
        ))}
      </div>
      <h1 className='font-bold text-[24px] text-center'>Static 3D element Multiple camera view in a room</h1>

      <Canvas style={{ height: 500, width: '100%' }}>
        <SceneContent currentCam={currentCam} />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  )
}
