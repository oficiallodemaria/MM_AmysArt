import { useState } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

const trabajos = [
  "/lo-de-maria/trabajos/1.jpeg",
  "/lo-de-maria/trabajos/2.jpeg",
  "/lo-de-maria/trabajos/3.jpeg",
  "/lo-de-maria/trabajos/4.jpeg",
  "/lo-de-maria/trabajos/5.jpeg",
  "/lo-de-maria/trabajos/6.jpeg",
  "/lo-de-maria/trabajos/7.jpeg",
  "/lo-de-maria/trabajos/8.jpeg",
  "/lo-de-maria/trabajos/9.jpeg",
  "/lo-de-maria/trabajos/10.jpeg",
  "/lo-de-maria/trabajos/11.jpeg",
  "/lo-de-maria/trabajos/12.jpeg",
]

const VISIBLES = 4
const TOTAL_PAGINAS = Math.ceil(trabajos.length / VISIBLES)

export default function Trabajos() {
  const [pagina, setPagina] = useState(0)
  const [seleccionada, setSeleccionada] = useState(null)

  const anterior = () => setPagina((p) => Math.max(p - 1, 0))
  const siguiente = () => setPagina((p) => Math.min(p + 1, TOTAL_PAGINAS - 1))

  const imagenesPagina = trabajos.slice(pagina * VISIBLES, pagina * VISIBLES + VISIBLES)

  return (
    <section id="trabajos" className="py-20 bg-rose-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="font-display text-4xl text-gray-800">Trabajos recientes</h2>
          <div className="text-rose-400 text-2xl">♥</div>
        </div>

        <div className="relative flex items-center gap-3">
          <button onClick={anterior} disabled={pagina === 0} className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center text-rose-400 hover:bg-rose-400 hover:text-white transition-colors disabled:opacity-30 flex-shrink-0">
            <ChevronLeft size={20} />
          </button>

          <div className="flex gap-3 flex-1">
            {imagenesPagina.map((src, i) => (
              <div key={src} onClick={() => setSeleccionada(pagina * VISIBLES + i)} className="flex-1 aspect-square rounded-2xl overflow-hidden cursor-pointer hover:scale-105 transition-transform shadow-sm">
                <img src={src} alt={`Trabajo ${pagina * VISIBLES + i + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          <button onClick={siguiente} disabled={pagina === TOTAL_PAGINAS - 1} className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center text-rose-400 hover:bg-rose-400 hover:text-white transition-colors disabled:opacity-30 flex-shrink-0">
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: TOTAL_PAGINAS }).map((_, i) => (
            <button key={i} onClick={() => setPagina(i)} className={`w-2 h-2 rounded-full transition-colors ${pagina === i ? "bg-rose-400" : "bg-rose-200"}`} />
          ))}
        </div>
      </div>

      {seleccionada !== null && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setSeleccionada(null)}>
          <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-700 hover:text-rose-400 transition-colors">
            <X size={20} />
          </button>
          <button onClick={(e) => { e.stopPropagation(); setSeleccionada((p) => Math.max(p - 1, 0)) }} disabled={seleccionada === 0} className="absolute left-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-700 hover:text-rose-400 transition-colors disabled:opacity-30">
            <ChevronLeft size={20} />
          </button>
          <img src={trabajos[seleccionada]} alt={`Trabajo ${seleccionada + 1}`} className="max-h-[85vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl" onClick={(e) => e.stopPropagation()} />
          <button onClick={(e) => { e.stopPropagation(); setSeleccionada((p) => Math.min(p + 1, trabajos.length - 1)) }} disabled={seleccionada === trabajos.length - 1} className="absolute right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-700 hover:text-rose-400 transition-colors disabled:opacity-30">
            <ChevronRight size={20} />
          </button>
        </div>
      )}
    </section>
  )
}