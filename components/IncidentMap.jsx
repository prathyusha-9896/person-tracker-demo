import Image from "next/image"
export function IncidentMap() {
  return (
    <div className="bg-gray-900 p-4 rounded-lg shadow-lg text-white">
      <h2 className="text-lg font-bold mb-2">Incident Map</h2>
      <div className="relative justify-center items-center flex  bg-gray-800 rounded-md">
        <Image
          src="/floorplan.png"
          alt="Map"
          width={350}
          height={350}
          objectFit="cover" className="w-[50%] h-[50%]"
        />
        {/* Heat spot */}
        <div className="absolute left-[50%] top-[25%] w-24 h-24 bg-red-500 opacity-60 rounded-full blur-2xl" />
        <div className="absolute left-[50%] top-[50%] transform -translate-x-1/2 -translate-y-1/2 text-sm bg-black text-white px-2 py-1 rounded">East Entrance</div>
      </div>
    </div>
  )
}
