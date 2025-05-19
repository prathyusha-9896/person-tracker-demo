'use client'

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from '@/components/ui/tabs'

import PersonTrackerDemo from '@/components/PersonTrackerDemo'
import Person3DRotation from '@/components/Person3DRotation'
import BabyScene from '@/components/BabyScene'
import CameraScene from '@/components/CameraScene'
import ManGridView from '@/components/ManGridView'
import SurveillanceDemo from '@/components/SurveillanceDemo'

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black p-6">
      <h1 className="text-3xl font-bold text-center mb-6">SafeSpace Global Task Dashboard</h1>

      <Tabs defaultValue="surveillance" className="w-full h-40">
        <TabsList className="bg-blue-400 rounded-sm p-2 flex flex-wrap justify-start gap-4 mb-4">
          <TabsTrigger className='' value="surveillance">Surveillance</TabsTrigger>
          <TabsTrigger value="camera">Fall Detection</TabsTrigger>
          <TabsTrigger value="grid">Camera Grid View</TabsTrigger>
          <TabsTrigger value="baby">Static 3D View</TabsTrigger>
          <TabsTrigger value="rotate">3D Person Rotation</TabsTrigger>
          <TabsTrigger value="tracker">Person Tracker</TabsTrigger>
        </TabsList>

        <div className="">
          <TabsContent value="surveillance">
            <SurveillanceDemo />
          </TabsContent>
          <TabsContent value="camera">
            <CameraScene />
          </TabsContent>
          <TabsContent value="grid">
            <ManGridView />
          </TabsContent>
          <TabsContent value="baby">
            <BabyScene />
          </TabsContent>
          <TabsContent value="rotate">
            <Person3DRotation />
          </TabsContent>
          <TabsContent value="tracker">
            <PersonTrackerDemo />
          </TabsContent>
        </div>
      </Tabs>
    </main>
  )
}
