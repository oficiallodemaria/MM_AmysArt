const precios = [
  { nombre: "Gelish + Manicure", precio: "$180", icono: "/MM_AmysArt/servicios/unas.jpg" },
  { nombre: "Uñas Esculturales #1", precio: "$340", icono: "/MM_AmysArt/servicios/unas.jpg" },
  { nombre: "Uñas Esculturales #2", precio: "$380", icono: "/MM_AmysArt/servicios/unas.jpg" },
  { nombre: "Uñas Esculturales #3", precio: "$420", icono: "/MM_AmysArt/servicios/unas.jpg" },
  { nombre: "Uñas Esculturales #4", precio: "$460", icono: "/MM_AmysArt/servicios/unas.jpg" },
  { nombre: "Retoque de Uñas", precio: "$250", icono: "/MM_AmysArt/servicios/unas.jpg" },
  { nombre: "Retiro de Uñas", precio: "$150", icono: "/MM_AmysArt/servicios/unas.jpg" },
  { nombre: "Pestañas Efecto Rimel", precio: "$650", icono: "/MM_AmysArt/servicios/pestanas.jpg" },
  { nombre: "Microblading", precio: "$1,700", icono: "/MM_AmysArt/servicios/cejas.jpg", destacado: true },
  { nombre: "Microshading", precio: "$2,100", icono: "/MM_AmysArt/servicios/cejas.jpg", destacado: true },
]

export default function Promos() {
  return (
    <section id="promos" className="py-20 bg-gradient-to-b from-rose-50 to-white">
      <div className="max-w-6xl mx-auto px-4">

        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.3em] text-amber-500 uppercase font-semibold mb-3">Inversión en tu belleza</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif" }} className="text-5xl text-gray-800 mb-4 italic">Precios y Promociones</h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-400" />
            <span className="text-rose-400 text-lg">♥</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-400" />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {precios.map((p) => (
            <div key={p.nombre} className="group relative rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1">

              <div className="relative h-28 overflow-hidden">
                <img src={p.icono} alt={p.nombre} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className={`absolute inset-0 ${p.destacado ? "bg-gradient-to-t from-rose-500/80 via-rose-400/40 to-transparent" : "bg-gradient-to-t from-black/60 via-black/20 to-transparent"}`} />
                {p.destacado && (
                  <div className="absolute top-2 right-2 bg-amber-400 text-white text-[10px] font-bold px-2 py-0.5 rounded-full tracking-wide">✦ Premium</div>
                )}
              </div>

              <div className={`px-4 py-4 ${p.destacado ? "bg-rose-50 border-t-2 border-amber-400" : "bg-white border-t-2 border-amber-200/60"}`}>
                <p style={{ fontFamily: "'Playfair Display', serif" }} className="text-gray-700 text-sm italic leading-snug mb-2">{p.nombre}</p>
                <div className="flex items-center justify-between">
                  <p className={`text-2xl font-bold ${p.destacado ? "text-rose-400" : "text-gray-800"}`}>{p.precio}</p>
                  <span className="text-amber-400 text-lg">✦</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-3 mt-10 mb-3">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-400" />
          <p className="text-xs text-gray-400 italic">*Precios sujetos a cambios. Consulta disponibilidad.</p>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-400" />
        </div>

      </div>
    </section>
  )
}