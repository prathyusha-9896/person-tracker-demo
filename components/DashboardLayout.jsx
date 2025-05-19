'use client'

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from '@/components/ui/tabs'
import LiveView from './Tabs/LiveView'
import PersonTrackerDemo from './Tabs/PersonTrackerDemo'
import CameraScene from './Tabs/FallDetection'
import Person3DRotation from './Tabs/RotationView'
import AlertPulseUI from './Tabs/AlertView'
import SurveillanceDemo from './Tabs/SurveillanceDemo'

export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-6 font-sans">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold tracking-tight">SafeSpace Surveillance Dashboard</h1>
        <nav className="space-x-4">
          <button className="text-sm hover:text-blue-400 transition">⚙️ Settings</button>
          <button className="text-sm hover:text-red-400 transition">🚨 Alerts</button>
        </nav>
      </header>

      <Tabs defaultValue="surveillance" className="w-full">
        <TabsList className="bg-gray-800 mb-6 rounded-lg p-2 flex flex-wrap justify-start gap-2">
          <TabsTrigger value="surveillance">Surveillance</TabsTrigger>
          <TabsTrigger value="live">Live View</TabsTrigger>
          <TabsTrigger value="tracking">Tracking</TabsTrigger>
          <TabsTrigger value="fall">Fall Detection</TabsTrigger>
          <TabsTrigger value="rotation">3D Rotation</TabsTrigger>
          <TabsTrigger value="alerts">Alert Visual</TabsTrigger>
        </TabsList>

        <div className="bg-gray-900 p-4 rounded-xl shadow-lg min-h-[500px]">
          <TabsContent value="surveillance"><SurveillanceDemo /></TabsContent>
          <TabsContent value="live"><LiveView /></TabsContent>
          <TabsContent value="tracking"><PersonTrackerDemo /></TabsContent>
          <TabsContent value="fall"><CameraScene /></TabsContent>
          <TabsContent value="rotation"><Person3DRotation /></TabsContent>
          <TabsContent value="alerts"><AlertPulseUI /></TabsContent>
        </div>
      </Tabs>
    </div>
  )
}
