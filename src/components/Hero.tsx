export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-40 pb-32 min-h-screen flex flex-col"
      style={{
        background:
          'linear-gradient(to bottom, #52ECD6 0%, #6FF0DE 45%, #CFFAF1 75%, #ffffff 100%)',
      }}
    >
      {/* Decorative bubbles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <span className="absolute top-[8%] left-[3%] w-40 h-40 rounded-full bg-white/25 blur-[1px]" />
        <span className="absolute top-[10%] left-[40%] w-14 h-14 rounded-full bg-white/40" />
        <span className="absolute top-[28%] left-[47%] w-10 h-10 rounded-full bg-white/40" />
        <span className="absolute top-[3%] right-[8%] w-80 h-80 rounded-full bg-white/20" />
        <span className="absolute top-[38%] right-[3%] w-24 h-24 rounded-full bg-white/30" />
        <span className="absolute top-[30%] left-[30%] w-8 h-8 rounded-full bg-white/40" />

        <span className="absolute bottom-[18%] left-[0%] w-96 h-96 -translate-x-1/3 rounded-full bg-white/20" />
        <span className="absolute bottom-[8%] left-[26%] w-14 h-14 rounded-full bg-white/40" />
        <span className="absolute bottom-[2%] left-[35%] w-10 h-10 rounded-full bg-white/40" />
        <span className="absolute bottom-[22%] left-[45%] w-6 h-6 rounded-full bg-white/50" />

        <span className="absolute bottom-[30%] right-[42%] w-16 h-16 rounded-full bg-white/40" />
        <span className="absolute bottom-[6%] right-[35%] w-10 h-10 rounded-full bg-white/40" />
        <span className="absolute bottom-[14%] right-[22%] w-28 h-28 rounded-full bg-white/30" />
        <span className="absolute bottom-[24%] right-[10%] w-32 h-32 rounded-full bg-white/30" />
        <span className="absolute bottom-[2%] right-[4%] w-9 h-9 rounded-full bg-white/40" />
        <span className="absolute bottom-[30%] right-[3%] w-6 h-6 rounded-full bg-white/50" />

        {/* Soap-swirl icon, bottom left */}
        <svg
          className="absolute -bottom-16 -left-24 w-[420px] h-[420px] text-white/25"
          viewBox="0 0 200 200"
          fill="none"
        >
          <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="10" />
          <path
            d="M100 40c-33 0-60 27-60 60 0-16 13-30 30-30s30 14 30 30-13 30-30 30"
            stroke="currentColor"
            strokeWidth="10"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="grid-container relative z-10 flex-1 items-start">
        <div className="col-span-12 flex justify-center">
          <div className="inline-flex items-center gap-3 bg-white text-sm px-6 py-2.5 rounded-full shadow-sm">
            <span className="font-bold text-[#0B1C33]">Servicios de limpieza profesional</span>
            <span className="w-px h-4 bg-slate-300" />
            <span className="text-slate-500">Santiago, Chile</span>
          </div>
        </div>

        <div className="col-span-12 lg:col-start-2 lg:col-span-10 mt-14">
          <h1 className="font-[family-name:var(--font-baloo)] text-4xl sm:text-5xl lg:text-7xl font-extrabold text-[#0B1C33] leading-[1.1]">
            Confianza y calidad
            <br />
            en cada espacio.
          </h1>
        </div>

        <div className="col-span-12 lg:col-start-2 lg:col-span-6 mt-8">
          <p className="text-lg sm:text-xl text-[#0B1C33]/80 leading-relaxed">
            Servicios de limpieza profesional para hogares, oficinas y empresas.
            Puntualidad, confianza y resultados garantizados.
          </p>
        </div>

        <div className="col-span-12 lg:col-start-2 mt-10">
          <a
            href="#contacto"
            className="inline-flex items-center gap-3 px-8 py-4 bg-transparent text-[#0B1C33] font-bold text-base rounded-full border-2 border-[#0B1C33] hover:bg-[#0B1C33] hover:text-white transition-colors"
          >
            Solicitar cotización gratis
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
