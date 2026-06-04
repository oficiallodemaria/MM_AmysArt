import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ArrowLeft, Calendar, ChevronLeft, ChevronRight, X } from "lucide-react"

const CALENDLY_URL = "https://calendly.com/tu-usuario"

const fotosMicroblading = [
  "/MM_AmysArt/cejas/1.jpg",
  "/MM_AmysArt/cejas/2.jpg",
  "/MM_AmysArt/cejas/3.jpg",
  "/MM_AmysArt/cejas/4.jpg",
  "/MM_AmysArt/cejas/5.jpg",
]

const fotosMicroshading = [
  "/MM_AmysArt/cejas/1.jpg",
  "/MM_AmysArt/cejas/2.jpg",
  "/MM_AmysArt/cejas/3.jpg",
  "/MM_AmysArt/cejas/4.jpg",
  "/MM_AmysArt/cejas/5.jpg",
]

function Galeria({ fotos, onSeleccionar }) {
  return (
    <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
      {fotos.map((src, i) => (
        <div key={i} onClick={() => onSeleccionar(i)} className="aspect-square rounded-2xl overflow-hidden cursor-pointer hover:scale-105 transition-transform shadow-sm">
          <img src={src} alt={`foto ${i + 1}`} className="w-full h-full object-cover" />
        </div>
      ))}
    </div>
  )
}

function ModalFoto({ fotos, seleccionada, onCerrar, onAnterior, onSiguiente }) {
  if (seleccionada === null) return null
  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={onCerrar}>
      <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-700 hover:text-rose-400 transition-colors"><X size={20} /></button>
      <button onClick={(e) => { e.stopPropagation(); onAnterior() }} disabled={seleccionada === 0} className="absolute left-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-700 hover:text-rose-400 transition-colors disabled:opacity-30"><ChevronLeft size={20} /></button>
      <img src={fotos[seleccionada]} alt={`foto ${seleccionada + 1}`} className="max-h-[85vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl" onClick={(e) => e.stopPropagation()} />
      <button onClick={(e) => { e.stopPropagation(); onSiguiente() }} disabled={seleccionada === fotos.length - 1} className="absolute right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-700 hover:text-rose-400 transition-colors disabled:opacity-30"><ChevronRight size={20} /></button>
    </div>
  )
}

function Proximamente() {
  return (
    <div className="bg-white border border-rose-100 rounded-2xl p-6 text-center mb-8">
      <p className="text-rose-300 text-3xl mb-2">📷</p>
      <p className="text-gray-400 font-medium">Próximamente se colocarán fotos</p>
    </div>
  )
}

export default function Cejas() {
  const navigate = useNavigate()
  const [fotoMicroblading, setFotoMicroblading] = useState(null)
  const [fotoMicroshading, setFotoMicroshading] = useState(null)

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
          <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
            <div className="text-4xl mb-4">✏️</div>
            <h3 className="font-bold text-gray-800 mb-2">Microblading</h3>
            <p className="text-sm text-gray-500">Técnica semipermanente que imita el trazo natural de cada pelo para cejas perfectamente definidas.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="font-bold text-gray-800 mb-2">Microshading</h3>
            <p className="text-sm text-gray-500">Efecto sombra que rellena y da volumen a las cejas con un acabado suave y natural.</p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="font-display text-3xl text-gray-800 mb-2">Microblading</h2>
          <div className="text-rose-400 text-xl mb-6">♥</div>
          {fotosMicroblading.length > 0 ? <Galeria fotos={fotosMicroblading} onSeleccionar={setFotoMicroblading} /> : <Proximamente />}
        </div>

        <div className="border-t-2 border-rose-200 mb-16" />

        <div className="mb-12">
          <h2 className="font-display text-3xl text-gray-800 mb-2">Microshading</h2>
          <div className="text-rose-400 text-xl mb-6">♥</div>
          {fotosMicroshading.length > 0 ? <Galeria fotos={fotosMicroshading} onSeleccionar={setFotoMicroshading} /> : <Proximamente />}
        </div>

        <div className="text-center mt-12">
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-rose-400 hover:bg-rose-500 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all hover:scale-105">
            <Calendar size={16} />
            Agendar cita
          </a>
        </div>
      </div>

      <ModalFoto fotos={fotosMicroblading} seleccionada={fotoMicroblading} onCerrar={() => setFotoMicroblading(null)} onAnterior={() => setFotoMicroblading((p) => Math.max(p - 1, 0))} onSiguiente={() => setFotoMicroblading((p) => Math.min(p + 1, fotosMicroblading.length - 1))} />
      <ModalFoto fotos={fotosMicroshading} seleccionada={fotoMicroshading} onCerrar={() => setFotoMicroshading(null)} onAnterior={() => setFotoMicroshading((p) => Math.max(p - 1, 0))} onSiguiente={() => setFotoMicroshading((p) => Math.min(p + 1, fotosMicroshading.length - 1))} />
    </div>
  )
}