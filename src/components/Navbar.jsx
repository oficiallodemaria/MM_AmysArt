import { useState } from "react"
import { Calendar, Menu, X } from "lucide-react"

const links = ["Inicio","Servicios","Trabajos","Promos","Ubicación","Horarios","Contacto"]

export default function Navbar({ calendlyUrl }) {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-24">
        <div>
          <img src="/lo-de-maria/logo.png" alt="Lo de María" className="h-20 w-auto" />
        </div>

        <ul className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <li key={l}>
              <a href={`#${l.toLowerCase().replace("ó","o").replace("ú","u")}`}
                className="text-sm text-gray-600 hover:text-rose-400 transition-colors">
                {l}
              </a>
            </li>
          ))}
        </ul>

        <a href={calendlyUrl} target="_blank" rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 bg-rose-400 hover:bg-rose-500 text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors">
          <Calendar size={15} />
          Agendar cita
        </a>

        <button className="md:hidden text-gray-600" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-rose-100 px-4 py-4 flex flex-col gap-3">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase().replace("ó","o").replace("ú","u")}`}
              className="text-sm text-gray-600 hover:text-rose-400"
              onClick={() => setOpen(false)}>
              {l}
            </a>
          ))}
          <a href={calendlyUrl} target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-rose-400 text-white text-sm font-semibold px-4 py-2 rounded-full mt-2">
            <Calendar size={15} />
            Agendar cita
          </a>
        </div>
      )}
    </nav>
  )
}