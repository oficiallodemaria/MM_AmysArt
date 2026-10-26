export default function Destacado() {
  return (
    <section id="destacado" className="py-20 bg-gradient-to-b from-white via-amber-50/40 to-rose-50">
      <div className="max-w-6xl mx-auto px-4">

        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.3em] text-amber-500 uppercase font-semibold mb-3">Un trabajo especial</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif" }} className="text-5xl text-gray-800 mb-4 italic">
            Unas manos que brillan en la pantalla
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-400" />
            <span className="text-rose-400 text-lg">♥</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-400" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">

          {/* Video */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl ring-2 ring-amber-400 bg-black">
            <div className="absolute top-3 right-3 z-10 bg-amber-400 text-white text-[10px] font-bold px-2 py-0.5 rounded-full tracking-wide">
              ✦ DESTACADO
            </div>
            <video
              src="/MM_AmysArt/destacado/pia.mp4"
              poster="/MM_AmysArt/destacado/piaf.jpeg"
              controls
              playsInline
              preload="metadata"
              className="w-full h-auto aspect-[9/16] md:aspect-auto object-cover"
            />
          </div>

          {/* Texto + foto */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6">
            <p
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-2xl text-gray-700 italic leading-snug"
            >
              Un diseño exclusivo realizado para{" "}
              <span className="text-amber-500 font-semibold">Pía Sanz</span>
            </p>

            <div className="rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 w-full max-w-sm">
              <img
                src="/MM_AmysArt/destacado/piaf.jpeg"
                alt="Diseño exclusivo para Pía Sanz"
                className="w-full h-auto"
              />
            </div>

            <div className="flex items-center gap-3">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-400" />
              <p className="text-sm text-gray-500 italic">Belleza, detalle y creatividad en cada uña.</p>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-400 md:hidden" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}