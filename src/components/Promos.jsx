const promos = [
  {
    nombre: "Gel semipermanente + Pestañas clásica",
    precio: "$650",
    antes: "$750",
    emoji: "💅",
  },
  {
    nombre: "Extensiones de cabello (Cabello humano)",
    descuento: "10%",
    tipo: "porcentaje",
    emoji: "💇",
  },
  {
    nombre: "Poligel + Efecto rimel",
    precio: "$700",
    antes: "$850",
    emoji: "👁️",
  },
]

export default function Promos() {
  return (
    <section id="promos" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl text-gray-800 mb-2">Promociones</h2>
          <div className="text-rose-400 text-2xl">♥</div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {promos.map((p) => (
            <div key={p.nombre}
              className="bg-rose-50 rounded-2xl p-6 flex justify-between items-center hover:shadow-md transition-shadow">
              <div>
                <p className="text-sm font-semibold text-gray-700 mb-3 max-w-[180px] leading-snug">{p.nombre}</p>
                {p.tipo === "porcentaje" ? (
                  <p className="text-4xl font-bold text-rose-400">{p.descuento}<span className="text-lg"> DE DESCUENTO</span></p>
                ) : (
                  <div>
                    <p className="text-4xl font-bold text-rose-400">{p.precio}</p>
                    <p className="text-sm text-gray-400 line-through">ANTES {p.antes}</p>
                  </div>
                )}
              </div>
              <div className="text-5xl">{p.emoji}</div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          *Promociones válidas por tiempo limitado. Consulta disponibilidad.
        </p>
      </div>
    </section>
  )
}