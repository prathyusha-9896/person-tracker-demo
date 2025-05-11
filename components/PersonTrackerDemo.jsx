// PersonTrackerDemo.jsx
'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

// Mock tracking data
const trackingData = [
  { floor: 'Ground', x: 50, y: 80, time: '10:00', camId: 'CAM_01' },
  { floor: 'Ground', x: 120, y: 160, time: '10:02', camId: 'CAM_02' },
  { floor: 'First', x: 80, y: 60, time: '10:05', camId: 'CAM_03' },
  { floor: 'Second', x: 150, y: 100, time: '10:08', camId: 'CAM_04' },
]
const secondPersonData = [
    { x: 30, y: 60, time: '10:00' },
    { x: 70, y: 90, time: '10:01' },
    { x: 110, y: 120, time: '10:02' },
    { x: 150, y: 140, time: '10:03' },
    { x: 170, y: 150, time: '10:04' },
    { x: 180, y: 160, time: '10:05' },
    { x: 190, y: 180, time: '10:06' },
    { x: 200, y: 190, time: '10:07' },
    { x: 201, y: 200, time: '10:08' },
    { x: 202, y: 201, time: '10:09' },
    { x: 203, y: 202, time: '10:10' },
    { x: 204, y: 203, time: '10:11' },
  ]
  

const floors = ['Ground', 'First', 'Second']

export default function PersonTrackerDemo() {
  const [currentFloor, setCurrentFloor] = useState('Ground')
  const [currentStep, setCurrentStep] = useState(0)

  useEffect(() => {
    const movementInterval = setInterval(() => {
      setCurrentStep((prev) => (prev < trackingData.length - 1 ? prev + 1 : prev))
      setCurrentFloor(trackingData[currentStep]?.floor || 'Ground')
    }, 2000)
    
    return () => {
      clearInterval(movementInterval)
    }
  }, [currentStep])
  const [footStepIndex, setFootStepIndex] = useState(0)

useEffect(() => {
  const interval = setInterval(() => {
    setFootStepIndex((prev) =>
      prev < secondPersonData.length ? prev + 1 : prev
    )
  }, 400) // new step every 400ms

  return () => clearInterval(interval)
}, [])

  const currentData = trackingData[currentStep]

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <h2 className="text-xl font-semibold text-center">Person Tracker – Floor: {currentFloor}</h2>

      <div className="relative w-[400px] h-[300px] border rounded overflow-hidden bg-gray-100">
        {/* Background Floor Plan (replace with your floor SVG/PNG) */}
        <Image
          src={`/${currentFloor.toLowerCase()}.png`}
          alt={`${currentFloor} Floor Plan`}
          layout="fill"
          objectFit="cover"
        />

        {/* Animated Person Dot */}
        <motion.div
        className="absolute w-10 h-10"
        animate={{
            left: currentData.x,
            top: currentData.y,
        }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        >
        <Image
            src="/avatar.png"
            alt="Person"
            width={40}
            height={40}
            className="rounded-full border border-white"
        />
        </motion.div>

        {/* Footsteps for Second Person on Ground Floor */}
        {secondPersonData.slice(0, footStepIndex).map((step, index) => (
  <motion.img
    key={`step-${index}`}
    src="/foot.jpg" // 👣 Replace with your actual image
    alt="Footstep"
    width={20}
    height={20}
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.3 }}
    className="absolute"
    style={{
      left: `${step.x}px`,
      top: `${step.y}px`,
      transform: `rotate(${index % 2 === 0 ? 0 : 20}deg)`, // alternating angle for natural feel
    }}

    />
  ))}



      </div>

      <p className="text-sm text-gray-700">
        Last seen at {currentData.time} on {currentData.camId}
      </p>
    </div>
  )
}
