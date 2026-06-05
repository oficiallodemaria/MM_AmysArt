import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ArrowLeft, Calendar, ChevronLeft, ChevronRight, X, Play } from "lucide-react"

const CALENDLY_URL = "https://calendly.com/tu-usuario"

const servicios = [
  { nombre: "Esculturales", desc: "Uñas de acrílico modeladas a mano, con la forma y longitud que desees.", icono: "/MM_AmysArt/iconos/unas.png" },
  { nombre: "Poligel", desc: "Resistentes y ligeras, perfectas para quienes buscan durabilidad y belleza.", icono: "/MM_AmysArt/iconos/unas.png" },
  { nombre: "Gel semipermanente", desc: "Brillo intenso y larga duración sin dañar tu uña natural.", icono: "/MM_AmysArt/iconos/unas.png" },
]

const fotos = [
  "/MM_AmysArt/unas/1.jpeg",
  "/MM_AmysArt/unas/2.jpeg",
  "/MM_AmysArt/unas/3.jpeg",
  "/MM_AmysArt/unas/4.jpeg",
  "/MM_AmysArt/unas/5.jpeg",
  "/MM_AmysArt/unas/6.jpeg",
  "/MM_AmysArt/unas/7.jpeg",
  "/MM_AmysArt/unas/8.jpeg",
  "/MM_AmysArt/unas/9.jpeg",
  "/MM_AmysArt/unas/10.jpeg",
  "/MM_AmysArt/unas/11.jpeg",
  "/MM_AmysArt/unas/12.jpeg",
  "/MM_AmysArt/unas/13.jpeg",
  "/MM_AmysArt/unas/14.jpeg",
  "/MM_AmysArt/unas/15.jpeg",
]

const videos = [
  "/MM_AmysArt/unas/unas1.mp4",
  "/MM_AmysArt/unas/unas2.mp4",
  "/MM_AmysArt/unas/unas3.mp4",
]

export default function Unas() {
  const navigate = useNavigate()
  const [seleccionada, setSeleccionada] = useState(null)
  const [videoActivo, setVideoActivo] = useState(null)

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
      <div className="max-w-5xl mx-auto px-4 py-12">

        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-amber-500 hover:text-amber-600 mb-10 transition-colors text-sm">
          <ArrowLeft size={16} />
          <span style={{ fontFamily: "'Playfair Display', serif" }} className="italic">Regresar</span>
        </button>

        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.3em] text-amber-500 uppercase font-semibold mb-3">Diseños que enamoran</p>
          <h1 style={{ fontFamily: "'Playfair Display', serif" }} className="text-6xl text-gray-800 mb-4 italic">Uñas</h1>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-400" />
            <span className="text-rose-400 text-lg">♥</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-400" />
          </div>
          <p className="text-gray-500 mt-4 text-sm">Diseños únicos que realzan tu estilo</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {servicios.map((s) => (
            <div key={s.nombre} className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ring-1 ring-amber-100 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-50 to-amber-50 rounded-full flex items-center justify-center mx-auto mb-4 ring-2 ring-amber-200">
                <img src={s.icono} alt={s.nombre} className="w-9 h-9 object-contain" />
              </div>
              <h3 style={{ fontFamily: "'Playfair Display', serif" }} className="text-xl italic text-gray-800 mb-2">{s.nombre}</h3>
              <div className="flex items-center justify-center gap-2 mb-3">
                <div className="h-px w-8 bg-amber-300" />
                <span className="text-amber-400 text-xs">✦</span>
                <div className="h-px w-8 bg-amber-300" />
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mb-10">
          <p className="text-xs tracking-[0.3em] text-amber-500 uppercase font-semibold mb-2">Portafolio</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif" }} className="text-4xl text-gray-800 italic mb-4">Galería de Fotos</h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-400" />
            <span className="text-rose-400">♥</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-400" />
          </div>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-5 gap-3 mb-16">
          {fotos.map((src, i) => (
            <div key={i} onClick={() => setSeleccionada(i)} className="aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group ring-1 ring-amber-100">
              <img src={src} alt={`Uña ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
          ))}
        </div>

        <div className="text-center mb-10">
          <p className="text-xs tracking-[0.3em] text-amber-500 uppercase font-semibold mb-2">En movimiento</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif" }} className="text-4xl text-gray-800 italic mb-4">Videos</h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-400" />
            <span className="text-rose-400">♥</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-400" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {videos.map((src, i) => (
            <div key={i} onClick={() => setVideoActivo(src)} className="relative aspect-video bg-rose-100 rounded-3xl overflow-hidden cursor-pointer group shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ring-1 ring-amber-100">
              <video src={src} className="w-full h-full object-cover" muted />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg ring-2 ring-amber-300">
                  <Play size={22} className="text-rose-400 ml-1" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-400" />
            <span className="text-amber-400 text-sm">✦</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-400" />
          </div>
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-rose-400 hover:bg-rose-500 text-white font-semibold px-10 py-3.5 rounded-full shadow-lg transition-all duration-300 hover:scale-105">
            <Calendar size={16} />
            Agendar cita
          </a>
        </div>

      </div>

      {seleccionada !== null && (
        <div className="fixed inset-0 bg-black/85 z-50 flex items-center justify-center p-4 backdrop-blur-sm" onClick={() => setSeleccionada(null)}>
          <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-700 hover:text-rose-400 transition-colors shadow-lg"><X size={20} /></button>
          <button onClick={(e) => { e.stopPropagation(); setSeleccionada((p) => Math.max(p - 1, 0)) }} disabled={seleccionada === 0} className="absolute left-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-amber-500 hover:text-rose-400 transition-colors shadow-lg disabled:opacity-30"><ChevronLeft size={20} /></button>
          <div className="relative">
            <img src={fotos[seleccionada]} alt={`Uña ${seleccionada + 1}`} className="max-h-[85vh] max-w-[90vw] rounded-3xl object-contain shadow-2xl ring-2 ring-amber-400/30" onClick={(e) => e.stopPropagation()} />
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
              <span className="text-amber-400 text-xs">✦</span>
              <p style={{ fontFamily: "'Playfair Display', serif" }} className="text-white/60 text-xs italic">{seleccionada + 1} de {fotos.length}</p>
              <span className="text-amber-400 text-xs">✦</span>
            </div>
          </div>
          <button onClick={(e) => { e.stopPropagation(); setSeleccionada((p) => Math.min(p + 1, fotos.length - 1)) }} disabled={seleccionada === fotos.length - 1} className="absolute right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-amber-500 hover:text-rose-400 transition-colors shadow-lg disabled:opacity-30"><ChevronRight size={20} /></button>
        </div>
      )}

      {videoActivo && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm" onClick={() => setVideoActivo(null)}>
          <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-700 hover:text-rose-400 transition-colors shadow-lg"><X size={20} /></button>
          <video src={videoActivo} className="max-h-[85vh] max-w-[90vw] rounded-3xl shadow-2xl ring-2 ring-amber-400/30" controls autoPlay onClick={(e) => e.stopPropagation()} />
        </div>
      )}

    </div>
  )
}