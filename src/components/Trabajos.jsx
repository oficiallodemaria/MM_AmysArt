import { useState } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

const trabajos = [
  "/MM_AmysArt/trabajos/1.jpeg",
  "/MM_AmysArt/trabajos/2.jpeg",
  "/MM_AmysArt/trabajos/3.jpeg",
  "/MM_AmysArt/trabajos/4.jpeg",
  "/MM_AmysArt/trabajos/5.jpeg",
  "/MM_AmysArt/trabajos/6.jpeg",
  "/MM_AmysArt/trabajos/7.jpeg",
  "/MM_AmysArt/trabajos/8.jpeg",
  "/MM_AmysArt/trabajos/9.jpeg",
  "/MM_AmysArt/trabajos/10.jpeg",
  "/MM_AmysArt/trabajos/11.jpeg",
  "/MM_AmysArt/trabajos/12.jpeg",
]

const VISIBLES = 4
const TOTAL_PAGINAS = Math.ceil(trabajos.length / VISIBLES)

export default function Trabajos() {
  const [pagina, setPagina] = useState(0)
  const [seleccionada, setSeleccionada] = useState(null)

  const imagenesPagina = trabajos.slice(pagina * VISIBLES, pagina * VISIBLES + VISIBLES)

  return (
    <section id="trabajos" className="py-20 bg-gradient-to-b from-white to-rose-50">
      <div className="max-w-6xl mx-auto px-4">

        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.3em] text-amber-500 uppercase font-semibold mb-3">Nuestro portafolio</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif" }} className="text-5xl text-gray-800 mb-4 italic">Trabajos Recientes</h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-400" />
            <span className="text-rose-400 text-lg">♥</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-400" />
          </div>
        </div>

        <div className="relative flex items-center gap-3">
          <button onClick={() => setPagina((p) => Math.max(p - 1, 0))} disabled={pagina === 0} className="w-10 h-10 rounded-full bg-white border border-amber-200 shadow flex items-center justify-center text-amber-500 hover:bg-amber-400 hover:text-white hover:border-amber-400 transition-all disabled:opacity-30 flex-shrink-0">
            <ChevronLeft size={20} />
          </button>

          <div className="flex gap-3 flex-1">
            {imagenesPagina.map((src, i) => (
              <div key={src} onClick={() => setSeleccionada(pagina * VISIBLES + i)} className="flex-1 aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group ring-1 ring-amber-100">
                <img src={src} alt={`Trabajo ${pagina * VISIBLES + i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
            ))}
          </div>

          <button onClick={() => setPagina((p) => Math.min(p + 1, TOTAL_PAGINAS - 1))} disabled={pagina === TOTAL_PAGINAS - 1} className="w-10 h-10 rounded-full bg-white border border-amber-200 shadow flex items-center justify-center text-amber-500 hover:bg-amber-400 hover:text-white hover:border-amber-400 transition-all disabled:opacity-30 flex-shrink-0">
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: TOTAL_PAGINAS }).map((_, i) => (
            <button key={i} onClick={() => setPagina(i)} className={`transition-all duration-300 rounded-full ${pagina === i ? "w-6 h-2 bg-amber-400" : "w-2 h-2 bg-rose-200 hover:bg-rose-300"}`} />
          ))}
        </div>

      </div>

      {seleccionada !== null && (
        <div className="fixed inset-0 bg-black/85 z-50 flex items-center justify-center p-4 backdrop-blur-sm" onClick={() => setSeleccionada(null)}>
          <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-700 hover:text-rose-400 transition-colors shadow-lg"><X size={20} /></button>
          <button onClick={(e) => { e.stopPropagation(); setSeleccionada((p) => Math.max(p - 1, 0)) }} disabled={seleccionada === 0} className="absolute left-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-amber-500 hover:text-rose-400 transition-colors shadow-lg disabled:opacity-30">
            <ChevronLeft size={20} />
          </button>
          <div className="relative">
            <img src={trabajos[seleccionada]} alt={`Trabajo ${seleccionada + 1}`} className="max-h-[85vh] max-w-[90vw] rounded-3xl object-contain shadow-2xl ring-2 ring-amber-400/30" onClick={(e) => e.stopPropagation()} />
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
              <span className="text-amber-400 text-xs">✦</span>
              <p style={{ fontFamily: "'Playfair Display', serif" }} className="text-white/60 text-xs italic">{seleccionada + 1} de {trabajos.length}</p>
              <span className="text-amber-400 text-xs">✦</span>
            </div>
          </div>
          <button onClick={(e) => { e.stopPropagation(); setSeleccionada((p) => Math.min(p + 1, trabajos.length - 1)) }} disabled={seleccionada === trabajos.length - 1} className="absolute right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-amber-500 hover:text-rose-400 transition-colors shadow-lg disabled:opacity-30">
            <ChevronRight size={20} />
          </button>
        </div>
      )}
    </section>
  )
}