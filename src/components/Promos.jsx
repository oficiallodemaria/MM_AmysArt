const precios = [
  { nombre: "Gelish + Manicure", precio: "$180", emoji: "💅", tipo: "precio" },
  { nombre: "Uñas Esculturales #1", precio: "$340", emoji: "💅", tipo: "precio" },
  { nombre: "Uñas Esculturales #2", precio: "$380", emoji: "💅", tipo: "precio" },
  { nombre: "Uñas Esculturales #3", precio: "$420", emoji: "💅", tipo: "precio" },
  { nombre: "Uñas Esculturales #4", precio: "$460", emoji: "💅", tipo: "precio" },
  { nombre: "Retoque de Uñas", precio: "$250", emoji: "✨", tipo: "precio" },
  { nombre: "Retiro de Uñas", precio: "$150", emoji: "🌸", tipo: "precio" },
  { nombre: "Microblading", precio: "$1,700", emoji: "✏️", tipo: "destacado" },
  { nombre: "Microshading", precio: "$2,100", emoji: "🎨", tipo: "destacado" },
]

export default function Promos() {
  return (
    <section id="promos" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl text-gray-800 mb-2">Precios y Promociones</h2>
          <div className="text-rose-400 text-2xl">♥</div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {precios.map((p) => (
            <div key={p.nombre} className={`rounded-2xl p-5 flex justify-between items-center hover:shadow-md transition-shadow ${p.tipo === "destacado" ? "bg-rose-400 text-white" : "bg-rose-50"}`}>
              <div>
                <p className={`text-sm font-semibold mb-2 leading-snug ${p.tipo === "destacado" ? "text-white" : "text-gray-700"}`}>{p.nombre}</p>
                <p className={`text-3xl font-bold ${p.tipo === "destacado" ? "text-white" : "text-rose-400"}`}>{p.precio}</p>
              </div>
              <div className="text-4xl">{p.emoji}</div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">*Precios sujetos a cambios. Consulta disponibilidad.</p>
      </div>
    </section>
  )
}