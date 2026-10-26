const precios = [
  { nombre: "Gelish + Manicure", precio: "$180", icono: "/MM_AmysArt/iconos/unas.png", promo: true, antes: "$250" },
  { nombre: "Uñas Esculturales #1", precio: "$340", icono: "/MM_AmysArt/iconos/unas.png" },
  { nombre: "Uñas Esculturales #2", precio: "$380", icono: "/MM_AmysArt/iconos/unas.png" },
  { nombre: "Uñas Esculturales #3", precio: "$420", icono: "/MM_AmysArt/iconos/unas.png" },
  { nombre: "Uñas Esculturales #4", precio: "$460", icono: "/MM_AmysArt/iconos/unas.png" },
  { nombre: "Retoque de Uñas", precio: "$250", icono: "/MM_AmysArt/iconos/unas.png" },
  { nombre: "Retiro de Uñas", precio: "$150", icono: "/MM_AmysArt/iconos/unas.png" },
  { nombre: "Pestañas Efecto Rimel", precio: "$650", icono: "/MM_AmysArt/iconos/pestanas.png" },
  { nombre: "Microblading", precio: "$1,700", icono: "/MM_AmysArt/iconos/cejas.png" },
  { nombre: "Microshading", precio: "$2,100", icono: "/MM_AmysArt/iconos/cejas.png" },
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
            <div key={p.nombre} className={`group relative rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${p.promo ? "ring-2 ring-amber-400" : ""}`}>

              {p.promo && (
                <div className="absolute top-2 right-2 z-10 bg-amber-400 text-white text-[10px] font-bold px-2 py-0.5 rounded-full tracking-wide">✦ PROMO</div>
              )}

              <div className={`px-5 pt-6 pb-4 flex flex-col items-center text-center ${p.promo ? "bg-gradient-to-b from-amber-50 to-white" : "bg-white"}`}>
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-3 shadow-sm ${p.promo ? "bg-amber-50 ring-2 ring-amber-300" : "bg-rose-50 ring-1 ring-rose-100"}`}>
                  <img src={p.icono} alt={p.nombre} className="w-9 h-9 object-contain" />
                </div>

                <p style={{ fontFamily: "'Playfair Display', serif" }} className="text-gray-700 text-sm italic leading-snug mb-3">{p.nombre}</p>

                <div className="border-t border-amber-200/60 w-full pt-3 flex items-center justify-between">
                  <div>
                    {p.promo && p.antes && <p className="text-xs text-gray-400 line-through">{p.antes}</p>}
                    <p className={`text-2xl font-bold ${p.promo ? "text-amber-500" : "text-gray-800"}`}>{p.precio}</p>
                  </div>
                  <span className="text-amber-400 text-lg">✦</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-3 mt-10">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-400" />
          <p className="text-xs text-gray-400 italic">*Precios sujetos a cambios. Consulta disponibilidad.</p>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-400" />
        </div>

      </div>
    </section>
  )
}