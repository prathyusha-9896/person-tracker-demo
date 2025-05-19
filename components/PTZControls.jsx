import {
  FaChevronUp,
  FaChevronDown,
  FaChevronLeft,
  FaChevronRight,
  FaPlus,
  FaMinus
} from 'react-icons/fa'

export default function PTZControls({ selectedCamera, onChangeCamera }) {
  return (
    <div className="bg-gray-900 p-4 rounded-lg shadow-lg text-white w-full">
      <h2 className="text-lg font-bold mb-4">PTZ Controls</h2>

      <select
        value={selectedCamera}
        onChange={(e) => onChangeCamera(e.target.value)}
        className="w-full mb-4 bg-gray-800 text-white p-2 rounded border border-gray-700"
      >
        <option value="lobby">Lobby</option>
        <option value="gate_1">Gate camera_1</option>
        <option value="gate_2">Gate camera_2</option>
      </select>

      {/* Directional & Zoom Controls same as before */}
      <div className="relative w-36 h-36 mx-auto">
        <div className="absolute inset-0 rounded-full border border-gray-600 flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-gray-400" />
        </div>
        <button className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-gray-800 p-2 rounded-full hover:bg-gray-700"><FaChevronUp /></button>
        <button className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-gray-800 p-2 rounded-full hover:bg-gray-700"><FaChevronDown /></button>
        <button className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full hover:bg-gray-700"><FaChevronLeft /></button>
        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full hover:bg-gray-700"><FaChevronRight /></button>
      </div>

      <div className="flex justify-center gap-6 mt-6">
        <button className="bg-gray-700 p-3 rounded-full hover:bg-gray-600"><FaMinus /></button>
        <button className="bg-gray-700 p-3 rounded-full hover:bg-gray-600"><FaPlus /></button>
      </div>
    </div>
  )
}
