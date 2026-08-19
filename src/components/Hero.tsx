import HeroForm from './HeroForm'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-40 pb-24 min-h-screen flex flex-col bg-[#7FF5E4] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/hero-bg.png')" }}
    >
      {/* Floating badge, anchored below the header at the top of the Hero */}
      <div className="fixed top-24 left-1/2 -translate-x-1/2 z-40 px-4 w-full flex justify-center">
        <div className="inline-flex items-center gap-3 bg-white text-sm px-6 py-2.5 rounded-full shadow-lg">
          <span className="font-bold text-[#0B1C33] whitespace-nowrap">Servicios de limpieza profesional</span>
          <span className="w-px h-4 bg-slate-300 shrink-0" />
          <span className="text-slate-500 whitespace-nowrap">Santiago, Chile</span>
        </div>
      </div>

      <div className="grid-container relative z-10 flex-1 items-start">
        <div className="col-span-12 lg:col-start-2 lg:col-span-6 mt-20">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0B1C33] leading-[1.1]">
            Confianza y calidad en cada espacio.
          </h1>

          <p className="text-lg sm:text-xl text-[#0B1C33]/80 leading-relaxed mt-8 max-w-xl">
            Servicios de limpieza profesional para hogares, oficinas y empresas.
            Puntualidad, confianza y resultados garantizados.
          </p>

          <div className="mt-6">
            <span className="text-sm font-semibold text-[#0B1C33]/70 mr-1">Servicios para:</span>
            <div className="inline-flex flex-wrap gap-2 mt-2">
              {['Condominio', 'Edificios', 'Oficinas'].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center px-4 py-1.5 bg-white/40 backdrop-blur-md border border-white/60 text-[#0B1C33] text-sm font-semibold rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <a
              href="#contacto"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white/25 backdrop-blur-xl backdrop-saturate-150 text-[#0B1C33] font-bold text-base rounded-full border border-white/50 shadow-[0_8px_32px_rgba(11,28,51,0.18),inset_0_1px_1px_rgba(255,255,255,0.8),inset_0_-1px_1px_rgba(11,28,51,0.06)] hover:bg-white/40 hover:border-white/70 transition-all"
            >
              Solicitar cotización gratis
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        <div className="col-span-12 lg:col-start-8 lg:col-span-5 mt-12 lg:mt-20">
          <HeroForm />
        </div>
      </div>
    </section>
  )
}
