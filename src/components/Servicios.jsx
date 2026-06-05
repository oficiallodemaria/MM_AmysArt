import { Link } from "react-router-dom"

const servicios = [
  {
    titulo: "Uñas",
    subtitulo: "Diseños que enamoran",
    items: ["Esculturales", "Poligel", "Gel semipermanente"],
    imagen: "/MM_AmysArt/servicios/unas.jpeg",
    ruta: "/unas",
  },
  {
    titulo: "Pestañas",
    subtitulo: "Mirada que cautiva",
    items: ["Clásica", "Efecto rimel"],
    imagen: "/MM_AmysArt/servicios/pestanas.jpeg",
    ruta: "/pestanas",
  },
  {
    titulo: "Cejas",
    subtitulo: "Definición perfecta",
    items: ["Microblading", "Microshading"],
    imagen: "/MM_AmysArt/servicios/ceja.jpeg",
    ruta: "/cejas",
  },
  {
    titulo: "Cabello",
    subtitulo: "Transforma tu look",
    items: ["Extensiones — Cabello humano", "Extensiones — Cabello clon humano", "Alisados"],
    imagen: "/MM_AmysArt/servicios/cabello.jpeg",
    ruta: "/cabello",
  },
]

export default function Servicios() {
  return (
    <section id="servicios" className="py-20 bg-gradient-to-b from-white to-rose-50">
      <div className="max-w-6xl mx-auto px-4">

        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.3em] text-amber-500 uppercase font-semibold mb-3">Nuestros servicios</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif" }} className="text-5xl text-gray-800 mb-4 italic">Lo que ofrecemos</h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-400" />
            <span className="text-rose-400 text-lg">♥</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-400" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicios.map((s) => (
            <div key={s.titulo} className="group relative rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1">

              <div className="relative h-56 overflow-hidden">
                <img src={s.imagen} alt={s.titulo} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <p style={{ fontFamily: "'Playfair Display', serif" }} className="text-white text-2xl italic font-bold drop-shadow">{s.titulo}</p>
                  <p className="text-amber-300 text-xs tracking-wide">{s.subtitulo}</p>
                </div>
              </div>

              <div className="bg-white px-5 py-4 border-t-2 border-amber-400/30">
                <ul className="space-y-1.5 mb-4">
                  {s.items.map(item => (
                    <li key={item} className="text-sm text-gray-500 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-amber-400 rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link to={s.ruta} className="inline-flex items-center gap-1 text-xs font-semibold tracking-wide text-rose-400 border border-rose-200 px-4 py-1.5 rounded-full hover:bg-rose-400 hover:text-white hover:border-rose-400 transition-all duration-300">
                  Ver galería →
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}