const trabajos = [
  {
    frase: "Unas manos que brillan en la pantalla",
    detalle: "Un diseño exclusivo realizado para",
    nombre: "Pía Sanz",
    foto: "/MM_AmysArt/destacado/piaf.jpeg",
    video: "/MM_AmysArt/destacado/pia.mp4",
  },
  {
    frase: "Unas manos hechas para la pasarela", // cambia este texto
    detalle: "Un diseño exclusivo realizado para la modelo",
    nombre: "Yuri Copete",
    foto: "/MM_AmysArt/destacado/yurif.jpeg",
  },
]

export default function Destacado() {
  return (
    <section id="destacado" className="py-20 bg-gradient-to-b from-white via-amber-50/40 to-rose-50">
      <div className="max-w-6xl mx-auto px-4">

        {/* Título */}
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.3em] text-amber-500 uppercase font-semibold mb-3">Un trabajo especial</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif" }} className="text-5xl text-gray-800 mb-4 italic">
            Celebrity Nails
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-400" />
            <span className="text-rose-400 text-lg">♥</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-400" />
          </div>
        </div>

        {/* Trabajos */}
        <div className="space-y-20">
          {trabajos.map((t) => (
            <div key={t.nombre}>

              <div className="text-center mb-10 max-w-2xl mx-auto">
                <p
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-3xl text-gray-700 italic leading-snug mb-4"
                >
                  {t.frase}
                </p>
                <p className="text-lg text-gray-600">
                  {t.detalle}{" "}
                  <span className="text-amber-500 font-semibold">{t.nombre}</span>
                </p>
              </div>

              <div className={`grid gap-8 items-center mx-auto ${t.video ? "md:grid-cols-2 max-w-4xl" : "max-w-sm"}`}>
                {t.video && (
                  <div className="relative rounded-3xl overflow-hidden shadow-xl ring-2 ring-amber-400 bg-black">
                    <div className="absolute top-3 right-3 z-10 bg-amber-400 text-white text-[10px] font-bold px-2 py-0.5 rounded-full tracking-wide">
                      ✦ DESTACADO
                    </div>
                    <video
                      src={t.video}
                      poster={t.foto}
                      controls
                      playsInline
                      preload="metadata"
                      className="w-full h-auto"
                    />
                  </div>
                )}

                <div className="rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                  <img src={t.foto} alt={`Diseño exclusivo para ${t.nombre}`} className="w-full h-auto" />
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Cierre */}
        <div className="flex items-center justify-center gap-3 mt-16">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-400" />
          <p className="text-sm text-gray-500 italic">Belleza, detalle y creatividad en cada uña.</p>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-400" />
        </div>

      </div>
    </section>
  )
}