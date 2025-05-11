import PersonTrackerDemo from '../components/PersonTrackerDemo'
import Person3DRotation from '../components/Person3DRotation'
import BabyScene from '../components/BabyScene'
import CameraScene from '../components/CameraScene'
import ManGridView from '../components/ManGridView'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6">
      <PersonTrackerDemo />
      <Person3DRotation/>
      <CameraScene/>
      <BabyScene/>
      <ManGridView/>
      {/*<AlertPulse/>*/}
    </main>
  )
}
