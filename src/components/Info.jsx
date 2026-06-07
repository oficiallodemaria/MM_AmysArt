import { MapPin, Clock, Calendar } from "lucide-react"

const CALENDLY_URL = "https://calendly.com/tu-usuario"

export default function Info() {
  return (
    <section className="py-20 bg-gradient-to-b from-rose-50 to-white">
      <div className="max-w-4xl mx-auto px-4">

        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.3em] text-amber-500 uppercase font-semibold mb-3">Encuéntranos</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif" }} className="text-5xl text-gray-800 mb-4 italic">Visítanos</h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-400" />
            <span className="text-rose-400 text-lg">♥</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-400" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          <div id="ubicacion" className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden ring-1 ring-amber-100">
            <div className="bg-gradient-to-r from-rose-400 to-rose-300 px-6 py-4 flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <MapPin size={16} className="text-white" />
              </div>
              <h2 style={{ fontFamily: "'Playfair Display', serif" }} className="text-xl italic text-white">Ubicación</h2>
              <span className="ml-auto text-amber-300 text-sm">✦</span>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 mb-1 leading-relaxed">C. Izquitl Manzana 024 Lote 8, Pescadores</p>
              <p className="text-sm text-gray-600 mb-4">56334 Chimalhuacán, Méx.</p>
              <div className="w-full rounded-2xl overflow-hidden mb-4 shadow-sm ring-1 ring-amber-100">
                <iframe title="Ubicación MM Nails Art" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.327805549356!2d-98.9581101!3d19.4414286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1e3f7a05ed96d%3A0x43a6ea01336a2765!2sMM%20Nails%20Art!5e0!3m2!1ses-419!2smx!4v1780809654863!5m2!1ses-419!2smx" width="100%" height="180" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              </div>
              <a href="https://maps.google.com/?q=C.+Izquitl+Manzana+024+Lote+8,+Pescadores,+56334+Chimalhuacán,+Méx." target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 text-sm border border-amber-300 text-amber-500 rounded-full px-4 py-2 hover:bg-amber-400 hover:text-white hover:border-amber-400 transition-all duration-300 w-full">
                <MapPin size={14} />
                Cómo llegar
              </a>
            </div>
          </div>

          <div id="horarios" className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden ring-1 ring-amber-100">
            <div className="bg-gradient-to-r from-rose-400 to-rose-300 px-6 py-4 flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Clock size={16} className="text-white" />
              </div>
              <h2 style={{ fontFamily: "'Playfair Display', serif" }} className="text-xl italic text-white">Horarios</h2>
              <span className="ml-auto text-amber-300 text-sm">✦</span>
            </div>
            <div className="p-6">
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center py-3 border-b border-amber-100">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                    <span style={{ fontFamily: "'Playfair Display', serif" }} className="text-sm italic text-gray-700">Lunes — Sábado</span>
                  </div>
                  <span className="text-sm font-semibold text-gray-600">11:00 AM — 7:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-amber-100">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-rose-300 rounded-full" />
                    <span style={{ fontFamily: "'Playfair Display', serif" }} className="text-sm italic text-gray-700">Domingo</span>
                  </div>
                  <span className="text-sm font-semibold text-rose-400">Cerrado</span>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden ring-1 ring-amber-100 shadow-md">
                <img src="/MM_AmysArt/negocio.jpeg" alt="MM Nails Art" className="w-full h-48 object-cover" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}