'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function LiveView({ selectedCamera }) {
  const cameraImageMap = {
    gate_1: '/gate_1.png',
    gate_2: '/gate_2.png'
  }

  const showDetectionBox = selectedCamera === 'lobby'
  const isLobby = selectedCamera === 'lobby'

  return (
    <div className="bg-gray-900 min-h-screen p-4 rounded-lg shadow-lg text-white">
      <h2 className="text-lg font-bold mb-2 capitalize">
        Camera: {selectedCamera.replace('_', ' ')}
      </h2>

      <div className="relative w-full h-full bg-black overflow-hidden rounded-md">
        {/* Show video for lobby */}
        {isLobby ? (
          <video
            src="/Lobyvideo.mp4"
            //autoPlay
            controls
            muted
            playsInline
            className="w-full h-full object-cover rounded-md"
          />
        ) : (
          <Image
            src={cameraImageMap[selectedCamera] || '/gate_1.png'}
            alt="Camera Feed"
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        )}

      </div>
    </div>
  )
}
