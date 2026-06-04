import { Calendar } from "lucide-react"

export default function Footer({ calendlyUrl }) {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-display text-xl italic text-rose-400">Lo de María</p>
          <p className="text-xs text-gray-400 tracking-widest uppercase">Belleza que te hace brillar</p>
        </div>
        <a href={calendlyUrl} target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-2 bg-rose-400 hover:bg-rose-500 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors">
          <Calendar size={15} />
          Agendar cita
        </a>
        <div className="flex gap-6 text-sm text-gray-400">
          <span>📱 55 1234 5678</span>
          <span>📸 @lodemaria.beauty</span>
        </div>
      </div>
    </footer>
  )
}