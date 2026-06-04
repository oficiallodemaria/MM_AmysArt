import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ArrowLeft, Calendar, ChevronLeft, ChevronRight, X, Play } from "lucide-react"

const CALENDLY_URL = "https://calendly.com/tu-usuario"

const servicios = [
  { nombre: "Esculturales", desc: "Uñas de acrílico modeladas a mano, con la forma y longitud que desees.", emoji: "💅" },
  { nombre: "Poligel", desc: "Resistentes y ligeras, perfectas para quienes buscan durabilidad y belleza.", emoji: "✨" },
  { nombre: "Gel semipermanente", desc: "Brillo intenso y larga duración sin dañar tu uña natural.", emoji: "💎" },
]

const fotos = [
  "/lo-de-maria/unas/1.jpeg",
  "/lo-de-maria/unas/2.jpeg",
  "/lo-de-maria/unas/3.jpeg",
  "/lo-de-maria/unas/4.jpeg",
  "/lo-de-maria/unas/5.jpeg",
  "/lo-de-maria/unas/6.jpeg",
  "/lo-de-maria/unas/7.jpeg",
  "/lo-de-maria/unas/8.jpeg",
  "/lo-de-maria/unas/9.jpeg",
  "/lo-de-maria/unas/10.jpeg",
  "/lo-de-maria/unas/11.jpeg",
  "/lo-de-maria/unas/12.jpeg",
  "/lo-de-maria/unas/13.jpeg",
  "/lo-de-maria/unas/14.jpeg",
  "/lo-de-maria/unas/15.jpeg",
]

const videos = [
  "/lo-de-maria/unas/video1.mp4",
  "/lo-de-maria/unas/video2.mp4",
  "/lo-de-maria/unas/video3.mp4",
]

export default function Unas() {
  const navigate = useNavigate()
  const [seleccionada, setSeleccionada] = useState(null)
  const [videoActivo, setVideoActivo] = useState(null)

  return (
    <div className="min-h-screen bg-rose-50">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-rose-400 hover:text-rose-600 mb-8 transition-colors">
          <ArrowLeft size={18} /> Regresar
        </button>

        <div className="text-center mb-12">
          <div className="text-6xl mb-4">💅</div>
          <h1 className="font-display text-5xl text-gray-800 mb-2">Uñas</h1>
          <div className="text-rose-400 text-2xl">♥</div>
          <p className="text-gray-500 mt-3">Diseños únicos que realzan tu estilo</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {servicios.map((s) => (
            <div key={s.nombre} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="text-4xl mb-4">{s.emoji}</div>
              <h3 className="font-bold text-gray-800 mb-2">{s.nombre}</h3>
              <p className="text-sm text-gray-500">{s.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="font-display text-3xl text-gray-800 mb-6 text-center">Galería de fotos</h2>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-3 mb-16">
          {fotos.map((src, i) => (
            <div key={i} onClick={() => setSeleccionada(i)} className="aspect-square rounded-2xl overflow-hidden cursor-pointer hover:scale-105 transition-transform shadow-sm">
              <img src={src} alt={`Uña ${i + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        <h2 className="font-display text-3xl text-gray-800 mb-6 text-center">Videos</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {videos.map((src, i) => (
            <div key={i} onClick={() => setVideoActivo(src)} className="relative aspect-video bg-rose-100 rounded-2xl overflow-hidden cursor-pointer group shadow-sm">
              <video src={src} className="w-full h-full object-cover" muted />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <Play size={24} className="text-rose-400 ml-1" />
                </div>
              </div>
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
          <button onClick={(e) => { e.stopPropagation(); setSeleccionada((p) => Math.max(p - 1, 0)) }} disabled={seleccionada === 0} className="absolute left-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-700 hover:text-rose-400 transition-colors disabled:opacity-30">
            <ChevronLeft size={20} />
          </button>
          <img src={fotos[seleccionada]} alt={`Uña ${seleccionada + 1}`} className="max-h-[85vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl" onClick={(e) => e.stopPropagation()} />
          <button onClick={(e) => { e.stopPropagation(); setSeleccionada((p) => Math.min(p + 1, fotos.length - 1)) }} disabled={seleccionada === fotos.length - 1} className="absolute right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-700 hover:text-rose-400 transition-colors disabled:opacity-30">
            <ChevronRight size={20} />
          </button>
        </div>
      )}

      {videoActivo && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setVideoActivo(null)}>
          <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-700 hover:text-rose-400 transition-colors"><X size={20} /></button>
          <video src={videoActivo} className="max-h-[85vh] max-w-[90vw] rounded-2xl shadow-2xl" controls autoPlay onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </div>
  )
}