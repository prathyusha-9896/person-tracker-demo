'use client'
import { useState } from 'react'
import LiveView from './LiveView'
import PTZControls from './PTZControls'
import { IncidentMap } from './IncidentMap'

export default function SurveillanceDemo() {
  const [selectedCamera, setSelectedCamera] = useState('lobby')

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-gray-950 min-h-screen text-white">
      <LiveView selectedCamera={selectedCamera} />

      <div className="flex flex-col gap-6">
        <IncidentMap />
        <PTZControls selectedCamera={selectedCamera} onChangeCamera={setSelectedCamera} />
      </div>
    </div>
  )
}
