import { useState } from "react"
import { Calendar, Menu, X } from "lucide-react"
import ModalCita from "./ModalCita"
import { useNavigate, useLocation } from "react-router-dom"

const links = [
  { nombre: "Inicio", id: "inicio" },
  { nombre: "Servicios", id: "servicios" },
  { nombre: "Trabajos", id: "trabajos" },
  { nombre: "Promos", id: "promos" },
  { nombre: "Ubicación", id: "ubicacion" },
  { nombre: "Horarios", id: "horarios" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [modalAbierto, setModalAbierto] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const handleLink = (id) => {
    setOpen(false)
    if (location.pathname !== "/") {
      navigate("/")
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
      }, 300)
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-rose-50/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-24">
          <div>
            <img src="/MM_AmysArt/logo.png" alt="MM Nails Art" className="h-20 w-auto object-contain" />
          </div>
          <ul className="hidden md:flex items-center gap-6">
            {links.map(l => (
              <li key={l.id}>
                <button onClick={() => handleLink(l.id)} className="text-sm text-gray-600 hover:text-rose-400 transition-colors">{l.nombre}</button>
              </li>
            ))}
          </ul>
          <button onClick={() => setModalAbierto(true)} className="hidden md:flex items-center gap-2 bg-rose-400 hover:bg-rose-500 text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors">
            <Calendar size={15} />
            Agendar cita
          </button>
          <button className="md:hidden text-gray-600" onClick={() => setOpen(!open)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden bg-rose-50 border-t border-rose-100 px-4 py-4 flex flex-col gap-3">
            {links.map(l => (
              <button key={l.id} onClick={() => handleLink(l.id)} className="text-sm text-gray-600 hover:text-rose-400 text-left">{l.nombre}</button>
            ))}
            <button onClick={() => { setModalAbierto(true); setOpen(false) }} className="flex items-center justify-center gap-2 bg-rose-400 text-white text-sm font-semibold px-4 py-2 rounded-full mt-2">
              <Calendar size={15} />
              Agendar cita
            </button>
          </div>
        )}
      </nav>
      <ModalCita abierto={modalAbierto} onCerrar={() => setModalAbierto(false)} />
    </>
  )
}