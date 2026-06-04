import { useNavigate } from "react-router-dom"
import { ArrowLeft, Calendar } from "lucide-react"

const CALENDLY_URL = "https://calendly.com/tu-usuario"

const servicios = [
  { nombre: "Clásica", desc: "Una extensión por pestaña natural, resultado natural y elegante.", emoji: "👁️" },
  { nombre: "Efecto rimel", desc: "Volumen y densidad para una mirada dramática sin usar rimel.", emoji: "✨" },
]

export default function Pestanas() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-rose-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <button onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-rose-400 hover:text-rose-600 mb-8 transition-colors">
          <ArrowLeft size={18} /> Regresar
        </button>

        <div className="text-center mb-12">
          <div className="text-6xl mb-4">👁️</div>
          <h1 className="font-display text-5xl text-gray-800 mb-2">Pestañas</h1>
          <div className="text-rose-400 text-2xl">♥</div>
          <p className="text-gray-500 mt-3">Pestañas que realzan tu mirada</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {servicios.map((s) => (
            <div key={s.nombre} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="text-4xl mb-4">{s.emoji}</div>
              <h3 className="font-bold text-gray-800 mb-2">{s.nombre}</h3>
              <p className="text-sm text-gray-500">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-rose-400 hover:bg-rose-500 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all hover:scale-105">
            <Calendar size={16} />
            Agendar cita
          </a>
        </div>
      </div>
    </div>
  )
}