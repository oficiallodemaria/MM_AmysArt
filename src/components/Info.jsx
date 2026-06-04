import { MapPin, Clock, Star, Calendar } from "lucide-react"

const CALENDLY_URL = "https://calendly.com/tu-usuario"

export default function Info() {
  return (
    <section className="py-20 bg-rose-50">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-10">

        <div id="ubicacion">
          <div className="flex items-center gap-2 mb-4">
            <MapPin size={20} className="text-rose-400" />
            <h2 className="font-display text-2xl text-gray-800">Ubicación</h2>
          </div>
          <p className="text-sm text-gray-600 mb-4">Priv. Citlalli 426, Cesteros<br />56366 Chimalhuacán, Méx.<br /><span className="text-gray-400">(Cerca de Equipo Táctico)</span></p>
          <div className="w-full rounded-xl overflow-hidden mb-3 shadow-sm">
            <iframe title="Ubicación Lo de María" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.32706756388!2d-98.96069029036138!3d19.441460440324345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1e387fb33b28d%3A0x168e8f6d317e4408!2sPriv.%20Citlalli%20426%2C%20Cesteros%2C%2056366%20Chimalhuac%C3%A1n%2C%20M%C3%A9x.!5e0!3m2!1ses!2smx!4v1779941196011!5m2!1ses!2smx" width="100%" height="180" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
          <a href="https://maps.google.com/?q=Priv.+Citlalli+426,+Cesteros,+56366+Chimalhuacán,+Méx." target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 text-sm border border-gray-300 rounded-full px-4 py-1.5 text-gray-600 hover:border-rose-400 hover:text-rose-400 transition-colors w-full">
            <MapPin size={14} />
            Cómo llegar
          </a>
        </div>

        <div id="horarios">
          <div className="flex items-center gap-2 mb-4">
            <Clock size={20} className="text-rose-400" />
            <h2 className="font-display text-2xl text-gray-800">Horarios</h2>
          </div>
          <div className="space-y-2 text-sm mb-6">
            <div className="flex justify-between items-center py-2 border-b border-rose-100">
              <span className="font-medium text-gray-700">Lunes - Sábado</span>
              <span className="text-gray-600">11:00 AM - 7:00 PM</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-rose-100">
              <span className="font-medium text-gray-700">Domingo</span>
              <span className="text-rose-400 font-semibold">Cerrado</span>
            </div>
          </div>
          <div className="border border-rose-200 rounded-xl p-4 text-center bg-white">
            <Calendar size={20} className="text-rose-400 mx-auto mb-1" />
            <p className="text-sm font-semibold text-rose-400 mb-1">Atención con cita previa</p>
            <p className="text-xs text-gray-500 mb-3">¡Agenda tu cita y asegura tu lugar!</p>
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="inline-block bg-rose-400 text-white text-xs font-semibold px-4 py-2 rounded-full hover:bg-rose-500 transition-colors">Agendar ahora</a>
          </div>
        </div>

        <div id="contacto">
          <div className="flex items-center gap-2 mb-4">
            <Star size={20} className="text-rose-400" />
            <h2 className="font-display text-2xl text-gray-800">Testimonios</h2>
          </div>
          <div className="flex flex-col gap-4">
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <p className="text-sm text-gray-600 italic mb-3">"María es la mejor, siempre entiende lo que quiero y deja todo hermoso. ¡Súper recomendada! 💕"</p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-rose-200 rounded-full flex items-center justify-center text-sm font-bold text-rose-500">A</div>
                <p className="text-xs text-gray-500 font-semibold">— Ana G.</p>
              </div>
              <div className="flex gap-1 mt-2">{[...Array(5)].map((_, i) => <span key={i} className="text-yellow-400 text-xs">★</span>)}</div>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <p className="text-sm text-gray-600 italic mb-3">"Me encantó el resultado de mis extensiones, quedaron naturales y hermosas. ¡Volveré pronto! 🌸"</p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-rose-200 rounded-full flex items-center justify-center text-sm font-bold text-rose-500">L</div>
                <p className="text-xs text-gray-500 font-semibold">— Laura M.</p>
              </div>
              <div className="flex gap-1 mt-2">{[...Array(5)].map((_, i) => <span key={i} className="text-yellow-400 text-xs">★</span>)}</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}