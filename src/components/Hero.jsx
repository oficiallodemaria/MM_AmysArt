import { Calendar, Camera, MessageCircle } from "lucide-react"

export default function Hero({ calendlyUrl }) {
  return (
    <section id="inicio" className="relative flex items-center overflow-hidden pt-24">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-10">
        <a href="#"><Camera size={15} /></a>
        <a href="#"><MessageCircle size={15} /></a>
      </div>
      <div className="relative w-full">
        <img src="/MM_AmysArt/fondoof.jpeg" alt="Bienvenida a Lo de Maria" className="w-full object-cover" />
        <div className="absolute bottom-6 left-1/5 -translate-x-1/2">
          <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-transparent text-white font-semibold px-6 py-3 rounded-full">
            <Calendar size={16} />
            Agendar cita
          </a>
        </div>
      </div>
    </section>
  )
}