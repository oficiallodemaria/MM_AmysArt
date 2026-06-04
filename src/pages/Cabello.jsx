import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ArrowLeft, Calendar, ChevronLeft, ChevronRight, X, Play } from "lucide-react"

const CALENDLY_URL = "https://calendly.com/tu-usuario"

const videosAlisados = [
  "/MM_AmysArt/cabello/alisado1.mp4",
  "/MM_AmysArt/cabello/alisado2.mp4",
  "/MM_AmysArt/cabello/alisado3.mp4",
  "/MM_AmysArt/cabello/alisado4.mp4",
  "/MM_AmysArt/cabello/alisado5.mp4",
]

function GaleriaVideos({ videos, onSeleccionar }) {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {videos.map((src, i) => (
        <div key={i} onClick={() => onSeleccionar(src)} className="relative aspect-video bg-rose-100 rounded-2xl overflow-hidden cursor-pointer group shadow-sm">
          <video src={src} className="w-full h-full object-cover" muted />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg">
              <Play size={24} className="text-rose-400 ml-1" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

function ModalVideo({ src, onCerrar }) {
  if (!src) return null
  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={onCerrar}>
      <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-700 hover:text-rose-400 transition-colors"><X size={20} /></button>
      <video src={src} className="max-h-[85vh] max-w-[90vw] rounded-2xl shadow-2xl" controls autoPlay onClick={(e) => e.stopPropagation()} />
    </div>
  )
}

function Proximamente({ tipo }) {
  return (
    <div className="bg-white border border-rose-100 rounded-2xl p-6 text-center mb-8">
      <p className="text-rose-300 text-3xl mb-2">{tipo === "foto" ? "📷" : "🎬"}</p>
      <p className="text-gray-400 font-medium">{tipo === "foto" ? "Próximamente se colocarán fotos" : "Próximamente se colocarán videos"}</p>
    </div>
  )
}

export default function Cabello() {
  const navigate = useNavigate()
  const [videoActivo, setVideoActivo] = useState(null)

  return (
    <div className="min-h-screen bg-rose-50">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-rose-400 hover:text-rose-600 mb-8 transition-colors">
          <ArrowLeft size={18} /> Regresar
        </button>

        {/* SECCIÓN 1 — ALISADOS */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <div className="text-6xl mb-4">✨</div>
            <h1 className="font-display text-5xl text-gray-800 mb-2">Alisados</h1>
            <div className="text-rose-400 text-2xl">♥</div>
            <p className="text-gray-500 mt-3">Cabello liso, suave y brillante</p>
          </div>
          <h2 className="font-display text-2xl text-gray-700 mb-4">Fotos</h2>
          <Proximamente tipo="foto" />
          <h2 className="font-display text-2xl text-gray-700 mb-4">Videos</h2>
          <GaleriaVideos videos={videosAlisados} onSeleccionar={setVideoActivo} />
        </div>

        <div className="border-t-2 border-rose-200 mb-20" />

        {/* SECCIÓN 2 — EXTENSIONES */}
        <div className="mb-12">
          <div className="text-center mb-10">
            <div className="text-6xl mb-4">💇</div>
            <h1 className="font-display text-5xl text-gray-800 mb-2">Extensiones de Cabello</h1>
            <div className="text-rose-400 text-2xl">♥</div>
            <p className="text-gray-500 mt-3">Transforma tu cabello con extensiones de calidad</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
              <div className="text-3xl mb-2">🌿</div>
              <h3 className="font-bold text-gray-800 mb-1">Cabello humano</h3>
              <p className="text-sm text-gray-500">100% naturales, suaves y con movimiento real.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
              <div className="text-3xl mb-2">💫</div>
              <h3 className="font-bold text-gray-800 mb-1">Cabello clon humano</h3>
              <p className="text-sm text-gray-500">Apariencia idéntica al cabello natural a un precio más accesible.</p>
            </div>
          </div>

          <h2 className="font-display text-2xl text-gray-700 mb-4">Cabello humano — Fotos</h2>
          <Proximamente tipo="foto" />

          <h2 className="font-display text-2xl text-gray-700 mb-4">Cabello clon humano — Fotos</h2>
          <Proximamente tipo="foto" />

          <h2 className="font-display text-2xl text-gray-700 mb-4">Videos</h2>
          <Proximamente tipo="video" />
        </div>

        <div className="text-center mt-12">
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-rose-400 hover:bg-rose-500 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all hover:scale-105">
            <Calendar size={16} />
            Agendar cita
          </a>
        </div>
      </div>

      <ModalVideo src={videoActivo} onCerrar={() => setVideoActivo(null)} />
    </div>
  )
}