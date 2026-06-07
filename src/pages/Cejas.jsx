import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ArrowLeft, Calendar, ChevronLeft, ChevronRight, X } from "lucide-react"
import ModalCita from "../components/ModalCita"

const fotosMicroblading = [
  "/MM_AmysArt/cejas/1.jpeg",
]

const fotosMicroshading = [
  "/MM_AmysArt/cejas/2.jpeg",
]

function Galeria({ fotos, onSeleccionar }) {
  return (
    <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
      {fotos.map((src, i) => (
        <div key={i} onClick={() => onSeleccionar(i)} className="aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group ring-1 ring-amber-100">
          <img src={src} alt={`foto ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
        </div>
      ))}
    </div>
  )
}

function ModalFoto({ fotos, seleccionada, onCerrar, onAnterior, onSiguiente }) {
  if (seleccionada === null) return null
  return (
    <div className="fixed inset-0 bg-black/85 z-50 flex items-center justify-center p-4 backdrop-blur-sm" onClick={onCerrar}>
      <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-700 hover:text-rose-400 transition-colors shadow-lg"><X size={20} /></button>
      <button onClick={(e) => { e.stopPropagation(); onAnterior() }} disabled={seleccionada === 0} className="absolute left-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-amber-500 hover:text-rose-400 transition-colors shadow-lg disabled:opacity-30"><ChevronLeft size={20} /></button>
      <div className="relative">
        <img src={fotos[seleccionada]} alt={`foto ${seleccionada + 1}`} className="max-h-[85vh] max-w-[90vw] rounded-3xl object-contain shadow-2xl ring-2 ring-amber-400/30" onClick={(e) => e.stopPropagation()} />
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
          <span className="text-amber-400 text-xs">✦</span>
          <p style={{ fontFamily: "'Playfair Display', serif" }} className="text-white/60 text-xs italic">{seleccionada + 1} de {fotos.length}</p>
          <span className="text-amber-400 text-xs">✦</span>
        </div>
      </div>
      <button onClick={(e) => { e.stopPropagation(); onSiguiente() }} disabled={seleccionada === fotos.length - 1} className="absolute right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-amber-500 hover:text-rose-400 transition-colors shadow-lg disabled:opacity-30"><ChevronRight size={20} /></button>
    </div>
  )
}

function Proximamente() {
  return (
    <div className="bg-white border border-amber-100 rounded-3xl p-8 text-center mb-8 ring-1 ring-amber-100 shadow-sm">
      <span className="text-amber-400 text-2xl">✦</span>
      <p style={{ fontFamily: "'Playfair Display', serif" }} className="text-gray-400 italic text-lg mt-2">Próximamente se colocarán fotos</p>
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

export default function Cejas() {
  const [modalAbierto, setModalAbierto] = useState(false)
  const navigate = useNavigate()
  const [fotoMicroblading, setFotoMicroblading] = useState(null)
  const [fotoMicroshading, setFotoMicroshading] = useState(null)

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
      <div className="max-w-5xl mx-auto px-4 py-12">

        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-amber-500 hover:text-amber-600 mb-10 transition-colors text-sm">
          <ArrowLeft size={16} />
          <span style={{ fontFamily: "'Playfair Display', serif" }} className="italic">Regresar</span>
        </button>

        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.3em] text-amber-500 uppercase font-semibold mb-3">Definición perfecta</p>
          <h1 style={{ fontFamily: "'Playfair Display', serif" }} className="text-6xl text-gray-800 mb-4 italic">Cejas</h1>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-400" />
            <span className="text-rose-400 text-lg">♥</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-400" />
          </div>
          <p className="text-gray-500 mt-4 text-sm">Cejas perfectas que enmarcan tu mirada</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ring-1 ring-amber-100 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-rose-50 to-amber-50 rounded-full flex items-center justify-center mx-auto mb-4 ring-2 ring-amber-200">
              <img src="/MM_AmysArt/iconos/cejas.png" alt="Microblading" className="w-9 h-9 object-contain" />
            </div>
            <h3 style={{ fontFamily: "'Playfair Display', serif" }} className="text-xl italic text-gray-800 mb-2">Microblading</h3>
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="h-px w-8 bg-amber-300" />
              <span className="text-amber-400 text-xs">✦</span>
              <div className="h-px w-8 bg-amber-300" />
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">Técnica semipermanente que imita el trazo natural de cada pelo para cejas perfectamente definidas.</p>
          </div>
          <div className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ring-1 ring-amber-100 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-rose-50 to-amber-50 rounded-full flex items-center justify-center mx-auto mb-4 ring-2 ring-amber-200">
              <img src="/MM_AmysArt/iconos/cejas.png" alt="Microshading" className="w-9 h-9 object-contain" />
            </div>
            <h3 style={{ fontFamily: "'Playfair Display', serif" }} className="text-xl italic text-gray-800 mb-2">Microshading</h3>
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="h-px w-8 bg-amber-300" />
              <span className="text-amber-400 text-xs">✦</span>
              <div className="h-px w-8 bg-amber-300" />
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">Efecto sombra que rellena y da volumen a las cejas con un acabado suave y natural.</p>
          </div>
        </div>

        <div className="mb-16">
          <SeccionTitulo subtitulo="Galería" titulo="Microblading" />
          {fotosMicroblading.length > 0 ? <Galeria fotos={fotosMicroblading} onSeleccionar={setFotoMicroblading} /> : <Proximamente />}
        </div>

        <div className="border-t-2 border-amber-100 mb-16" />

        <div className="mb-12">
          <SeccionTitulo subtitulo="Galería" titulo="Microshading" />
          {fotosMicroshading.length > 0 ? <Galeria fotos={fotosMicroshading} onSeleccionar={setFotoMicroshading} /> : <Proximamente />}
        </div>

        <div className="text-center mt-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-400" />
            <span className="text-amber-400 text-sm">✦</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-400" />
          </div>
          <button onClick={() => setModalAbierto(true)} className="inline-flex items-center gap-2 bg-rose-400 hover:bg-rose-500 text-white font-semibold px-10 py-3.5 rounded-full shadow-lg transition-all duration-300 hover:scale-105">
           <Calendar size={16} />
             Agendar cita/Cotizar
          </button>
        </div>

      </div>

      <ModalFoto fotos={fotosMicroblading} seleccionada={fotoMicroblading} onCerrar={() => setFotoMicroblading(null)} onAnterior={() => setFotoMicroblading((p) => Math.max(p - 1, 0))} onSiguiente={() => setFotoMicroblading((p) => Math.min(p + 1, fotosMicroblading.length - 1))} />
      <ModalFoto fotos={fotosMicroshading} seleccionada={fotoMicroshading} onCerrar={() => setFotoMicroshading(null)} onAnterior={() => setFotoMicroshading((p) => Math.max(p - 1, 0))} onSiguiente={() => setFotoMicroshading((p) => Math.min(p + 1, fotosMicroshading.length - 1))} />
      <ModalCita abierto={modalAbierto} onCerrar={() => setModalAbierto(false)} />
    </div>
  )
}