import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ArrowLeft, Calendar, ChevronLeft, ChevronRight, X, Play } from "lucide-react"
import ModalCita from "../components/ModalCita"

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
        <div key={i} onClick={() => onSeleccionar(src)} className="relative aspect-video bg-rose-100 rounded-3xl overflow-hidden cursor-pointer group shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ring-1 ring-amber-100">
          <video src={src} className="w-full h-full object-cover" muted />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg ring-2 ring-amber-300">
              <Play size={22} className="text-rose-400 ml-1" />
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
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm" onClick={onCerrar}>
      <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-700 hover:text-rose-400 transition-colors shadow-lg"><X size={20} /></button>
      <video src={src} className="max-h-[85vh] max-w-[90vw] rounded-3xl shadow-2xl ring-2 ring-amber-400/30" controls autoPlay onClick={(e) => e.stopPropagation()} />
    </div>
  )
}

function Proximamente({ tipo }) {
  return (
    <div className="bg-white border border-amber-100 rounded-3xl p-8 text-center mb-8 ring-1 ring-amber-100 shadow-sm">
      <span className="text-amber-400 text-2xl">✦</span>
      <p style={{ fontFamily: "'Playfair Display', serif" }} className="text-gray-400 italic text-lg mt-2">{tipo === "foto" ? "Próximamente se colocarán fotos" : "Próximamente se colocarán videos"}</p>
    </div>
  )
}

function SeccionTitulo({ subtitulo, titulo }) {
  return (
    <div className="mb-8">
      <p className="text-xs tracking-[0.3em] text-amber-500 uppercase font-semibold mb-2">{subtitulo}</p>
      <h2 style={{ fontFamily: "'Playfair Display', serif" }} className="text-4xl text-gray-800 italic mb-3">{titulo}</h2>
      <div className="flex items-center gap-3">
        <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-400" />
        <span className="text-rose-400 text-sm">♥</span>
        <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-400" />
      </div>
    </div>
  )
}

export default function Cabello() {
  const [modalAbierto, setModalAbierto] = useState(false)
  const navigate = useNavigate()
  const [videoActivo, setVideoActivo] = useState(null)

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
      <div className="max-w-5xl mx-auto px-4 py-12">

        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-amber-500 hover:text-amber-600 mb-10 transition-colors text-sm">
          <ArrowLeft size={16} />
          <span style={{ fontFamily: "'Playfair Display', serif" }} className="italic">Regresar</span>
        </button>

        {/* SECCIÓN 1 — ALISADOS */}
        <div className="mb-20">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.3em] text-amber-500 uppercase font-semibold mb-3">Transforma tu cabello</p>
            <h1 style={{ fontFamily: "'Playfair Display', serif" }} className="text-6xl text-gray-800 mb-4 italic">Alisados</h1>
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-400" />
              <span className="text-rose-400 text-lg">♥</span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-400" />
            </div>
            <p className="text-gray-500 mt-4 text-sm">Cabello liso, suave y brillante</p>
          </div>

          <SeccionTitulo subtitulo="Portafolio" titulo="Fotos" />
          <Proximamente tipo="foto" />

          <SeccionTitulo subtitulo="En movimiento" titulo="Videos" />
          <GaleriaVideos videos={videosAlisados} onSeleccionar={setVideoActivo} />
        </div>

        <div className="flex items-center justify-center gap-4 mb-20">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-amber-300" />
          <span className="text-amber-400 text-lg">✦</span>
          <span className="text-rose-300 text-sm">♥</span>
          <span className="text-amber-400 text-lg">✦</span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-amber-300" />
        </div>

        {/* SECCIÓN 2 — EXTENSIONES */}
        <div className="mb-12">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.3em] text-amber-500 uppercase font-semibold mb-3">Largo y volumen</p>
            <h1 style={{ fontFamily: "'Playfair Display', serif" }} className="text-6xl text-gray-800 mb-4 italic">Extensiones</h1>
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-400" />
              <span className="text-rose-400 text-lg">♥</span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-400" />
            </div>
            <p className="text-gray-500 mt-4 text-sm">Transforma tu cabello con extensiones de calidad</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ring-1 ring-amber-100 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-50 to-amber-50 rounded-full flex items-center justify-center mx-auto mb-4 ring-2 ring-amber-200">
                <img src="/MM_AmysArt/iconos/cabello.png" alt="Cabello humano" className="w-9 h-9 object-contain" />
              </div>
              <h3 style={{ fontFamily: "'Playfair Display', serif" }} className="text-xl italic text-gray-800 mb-2">Cabello humano</h3>
              <div className="flex items-center justify-center gap-2 mb-3">
                <div className="h-px w-8 bg-amber-300" />
                <span className="text-amber-400 text-xs">✦</span>
                <div className="h-px w-8 bg-amber-300" />
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">100% naturales, suaves y con movimiento real.</p>
            </div>
            <div className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ring-1 ring-amber-100 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-50 to-amber-50 rounded-full flex items-center justify-center mx-auto mb-4 ring-2 ring-amber-200">
                <img src="/MM_AmysArt/iconos/cabello.png" alt="Cabello clon humano" className="w-9 h-9 object-contain" />
              </div>
              <h3 style={{ fontFamily: "'Playfair Display', serif" }} className="text-xl italic text-gray-800 mb-2">Cabello clon humano</h3>
              <div className="flex items-center justify-center gap-2 mb-3">
                <div className="h-px w-8 bg-amber-300" />
                <span className="text-amber-400 text-xs">✦</span>
                <div className="h-px w-8 bg-amber-300" />
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">Apariencia idéntica al cabello natural a un precio más accesible.</p>
            </div>
          </div>

          <SeccionTitulo subtitulo="Portafolio" titulo="Cabello humano — Fotos" />
          <Proximamente tipo="foto" />

          <SeccionTitulo subtitulo="Portafolio" titulo="Cabello clon humano — Fotos" />
          <Proximamente tipo="foto" />

          <SeccionTitulo subtitulo="En movimiento" titulo="Videos" />
          <Proximamente tipo="video" />
        </div>

        <div className="text-center mt-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-400" />
            <span className="text-amber-400 text-sm">✦</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-400" />
          </div>
          <button onClick={() => setModalAbierto(true)} className="inline-flex items-center gap-2 bg-rose-400 hover:bg-rose-500 text-white font-semibold px-10 py-3.5 rounded-full shadow-lg transition-all duration-300 hover:scale-105">
            <Calendar size={16} />
              Agendar cita
          </button>
        </div>

      </div>

      <ModalVideo src={videoActivo} onCerrar={() => setVideoActivo(null)} />
      <ModalCita abierto={modalAbierto} onCerrar={() => setModalAbierto(false)} />
    </div>
  )
}