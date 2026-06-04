import { Link } from "react-router-dom"

const servicios = [
  {
    titulo: "UÑAS",
    emoji: "💅",
    items: ["Esculturales", "Poligel", "Gel semipermanente"],
    bg: "from-pink-50 to-rose-50",
    ruta: "/unas",
  },
  {
    titulo: "PESTAÑAS",
    emoji: "👁️",
    items: ["Clásica", "Efecto rimel"],
    bg: "from-rose-50 to-pink-50",
    ruta: "/pestanas",
  },
  {
    titulo: "CEJAS",
    emoji: "✏️",
    items: ["Microblading", "Microshading"],
    bg: "from-pink-50 to-rose-50",
    ruta: "/cejas",
  },
  {
    titulo: "CABELLO",
    emoji: "💇",
    items: ["Extensiones — Cabello humano", "Extensiones — Cabello clon humano", "Alisados"],
    bg: "from-rose-50 to-pink-50",
    ruta: "/cabello",
  },
]

export default function Servicios() {
  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl text-gray-800 mb-2">Nuestros servicios</h2>
          <div className="text-rose-400 text-2xl">♥</div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicios.map((s) => (
            <div key={s.titulo} className="border border-rose-100 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className={`h-48 bg-gradient-to-br ${s.bg} flex items-center justify-center text-7xl`}>
                {s.emoji}
              </div>
              <div className="p-6">
                <h3 className="font-bold text-gray-800 text-sm tracking-wide mb-3">{s.titulo}</h3>
                <ul className="space-y-1 mb-4">
                  {s.items.map(i => (
                    <li key={i} className="text-sm text-gray-500 flex items-center gap-2">
                      <span className="w-1 h-1 bg-rose-300 rounded-full inline-block flex-shrink-0" />
                      {i}
                    </li>
                  ))}
                </ul>
                <Link to={s.ruta} className="inline-block text-xs font-semibold text-rose-400 border border-rose-300 px-3 py-1.5 rounded-full hover:bg-rose-400 hover:text-white transition-colors">Ver más →</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}