import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ArrowLeft, Calendar, ChevronLeft, ChevronRight, X } from "lucide-react"

const CALENDLY_URL = "https://calendly.com/tu-usuario"

const servicios = [
  { nombre: "Microblading", desc: "Técnica semipermanente que imita el trazo natural de cada pelo para cejas perfectamente definidas.", emoji: "✏️" },
  { nombre: "Microshading", desc: "Efecto sombra que rellena y da volumen a las cejas con un acabado suave y natural.", emoji: "🎨" },
]

const fotos = [
  "/MM_AmysArt/cejas/1.jpg",
  "/MM_AmysArt/cejas/2.jpg",
  "/MM_AmysArt/cejas/3.jpg",
  "/MM_AmysArt/cejas/4.jpg",
  "/MM_AmysArt/cejas/5.jpg",
]

export default function Cejas() {
  const navigate = useNavigate()
  const [seleccionada, setSeleccionada] = useState(null)

  return (
    <div className="min-h-screen bg-rose-50">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-rose-400 hover:text-rose-600 mb-8 transition-colors">
          <ArrowLeft size={18} /> Regresar
        </button>

        <div className="text-center mb-12">
          <div className="text-6xl mb-4">✏️</div>
          <h1 className="font-display text-5xl text-gray-800 mb-2">Cejas</h1>
          <div className="text-rose-400 text-2xl">♥</div>
          <p className="text-gray-500 mt-3">Cejas perfectas que enmarcan tu mirada</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {servicios.map((s) => (
            <div key={s.nombre} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="text-4xl mb-4">{s.emoji}</div>
              <h3 className="font-bold text-gray-800 mb-2">{s.nombre}</h3>
              <p className="text-sm text-gray-500">{s.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="font-display text-3xl text-gray-800 mb-6 text-center">Galería de fotos</h2>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-3 mb-12">
          {fotos.map((src, i) => (
            <div key={i} onClick={() => setSeleccionada(i)} className="aspect-square rounded-2xl overflow-hidden cursor-pointer hover:scale-105 transition-transform shadow-sm">
              <img src={src} alt={`Ceja ${i + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-rose-400 hover:bg-rose-500 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all hover:scale-105">
            <Calendar size={16} />
            Agendar cita
          </a>
        </div>
      </div>

      {seleccionada !== null && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setSeleccionada(null)}>
          <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-700 hover:text-rose-400 transition-colors"><X size={20} /></button>
          <button onClick={(e) => { e.stopPropagation(); setSeleccionada((p) => Math.max(p - 1, 0)) }} disabled={seleccionada === 0} className="absolute left-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-700 hover:text-rose-400 transition-colors disabled:opacity-30"><ChevronLeft size={20} /></button>
          <img src={fotos[seleccionada]} alt={`Ceja ${seleccionada + 1}`} className="max-h-[85vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl" onClick={(e) => e.stopPropagation()} />
          <button onClick={(e) => { e.stopPropagation(); setSeleccionada((p) => Math.min(p + 1, fotos.length - 1)) }} disabled={seleccionada === fotos.length - 1} className="absolute right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-700 hover:text-rose-400 transition-colors disabled:opacity-30"><ChevronRight size={20} /></button>
        </div>
      )}
    </div>
  )
}