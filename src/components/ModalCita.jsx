import { X, Calendar, MessageCircle } from "lucide-react"

const GOOGLE_CALENDAR_URL = "https://calendar.app.google/gpC83DGSdcNktqYP7"
const WHATSAPP_URL = "https://wa.me/525610407278?text=Hola%20MM%20Nails%20Art%20%F0%9F%92%85%20Me%20gustar%C3%ADa%20cotizar%20un%20servicio"

export default function ModalCita({ abierto, onCerrar }) {
  if (!abierto) return null

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm" onClick={onCerrar}>
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden" onClick={(e) => e.stopPropagation()}>

        <div className="bg-gradient-to-r from-rose-400 to-rose-300 px-6 py-5 relative">
          <button onClick={onCerrar} className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"><X size={16} /></button>
          <p className="text-xs tracking-[0.2em] text-white/70 uppercase font-semibold mb-1">MM Nails Art</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif" }} className="text-2xl italic text-white">¿Cómo prefieres continuar?</h2>
        </div>

        <div className="p-6 flex flex-col gap-4">
          <a href={GOOGLE_CALENDAR_URL} target="_blank" rel="noopener noreferrer" onClick={onCerrar} className="flex items-center gap-4 bg-gradient-to-r from-rose-50 to-amber-50 border border-amber-200 rounded-2xl p-4 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 group">
            <div className="w-12 h-12 bg-rose-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-md group-hover:bg-rose-500 transition-colors">
              <Calendar size={20} className="text-white" />
            </div>
            <div>
              <p style={{ fontFamily: "'Playfair Display', serif" }} className="text-gray-800 font-semibold italic text-lg leading-none mb-1">Agendar cita</p>
              <p className="text-xs text-gray-500">Elige día y hora disponible</p>
            </div>
            <span className="ml-auto text-amber-400">✦</span>
          </a>

          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" onClick={onCerrar} className="flex items-center gap-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-4 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 group">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-md group-hover:bg-green-600 transition-colors">
              <MessageCircle size={20} className="text-white" />
            </div>
            <div>
              <p style={{ fontFamily: "'Playfair Display', serif" }} className="text-gray-800 font-semibold italic text-lg leading-none mb-1">Cotizar por WhatsApp</p>
              <p className="text-xs text-gray-500">Pregunta o cotiza tu servicio</p>
            </div>
            <span className="ml-auto text-green-400">✦</span>
          </a>
        </div>

        <div className="px-6 pb-6 text-center">
          <p className="text-xs text-gray-400 italic">Lunes a Sábado · 11:00 AM — 7:00 PM</p>
        </div>

      </div>
    </div>
  )
}