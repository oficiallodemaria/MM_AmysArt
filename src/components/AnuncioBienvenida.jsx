import { useState, useEffect } from "react"
import { X, Play } from "lucide-react"

export default function AnuncioBienvenida() {
  const [visible, setVisible] = useState(false)
  const [videoActivo, setVideoActivo] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500)
    return () => clearTimeout(timer)
  }, [])

  if (!visible) return null

  return (
    <>
      <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
        <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden">

          <div className="relative">
            {!videoActivo ? (
              <div className="relative h-52 overflow-hidden cursor-pointer" onClick={() => setVideoActivo(true)}>
                <video src="/MM_AmysArt/noticias/curso.mp4" className="w-full h-full object-cover" muted autoPlay loop playsInline />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg ring-2 ring-amber-300">
                    <Play size={22} className="text-rose-400 ml-1" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <span className="absolute top-3 left-3 bg-amber-400 text-white text-xs font-bold px-3 py-1 rounded-full">✦ Novedad</span>
              </div>
            ) : (
              <video src="/MM_AmysArt/noticias/curso.mp4" className="w-full h-52 object-cover" controls autoPlay />
            )}
            <button onClick={() => setVisible(false)} className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-rose-400 transition-colors shadow-md z-10">
              <X size={16} />
            </button>
          </div>

          <div className="p-6">
            <p className="text-xs tracking-[0.2em] text-amber-500 uppercase font-semibold mb-2">Junio 2026</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif" }} className="text-2xl italic text-gray-800 mb-2">¡Nuevo curso disponible!</h2>
            <div className="flex items-center gap-2 mb-3">
              <div className="h-px w-8 bg-amber-300" />
              <span className="text-amber-400 text-xs">✦</span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed mb-5">Aprende las técnicas profesionales de uñas esculturales con María. ¡Cupos limitados, no te quedes fuera! 💅</p>
            <div className="flex gap-3">
              <button onClick={() => setVisible(false)} className="flex-1 text-sm border border-amber-200 text-amber-500 py-2.5 rounded-full hover:bg-amber-50 transition-colors">Cerrar</button>
              <a href="https://wa.me/525610407278?text=Hola%20MM%20Nails%20Art%20💅%20Me%20interesa%20el%20curso%20que%20anunciaron" target="_blank" rel="noopener noreferrer" onClick={() => setVisible(false)} className="flex-1 text-sm bg-rose-400 hover:bg-rose-500 text-white font-semibold py-2.5 rounded-full text-center transition-colors">Me interesa</a>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}