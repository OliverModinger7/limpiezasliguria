export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-300 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-300 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded-full mb-8 border border-white/30">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Servicio profesional en toda la región
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
          Tu espacio,
          <br />
          <span className="text-cyan-300">impecable</span>
        </h1>

        <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed">
          Servicios de limpieza profesional para hogares, oficinas y empresas.
          Puntualidad, confianza y resultados garantizados.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contacto"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-700 font-bold text-base rounded-xl hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Solicitar presupuesto gratis
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#servicios"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white font-bold text-base rounded-xl border-2 border-white/50 hover:border-white hover:bg-white/10 transition-all"
          >
            Ver servicios
          </a>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {[
            { number: '+500', label: 'Clientes satisfechos' },
            { number: '8+', label: 'Años de experiencia' },
            { number: '100%', label: 'Garantía de calidad' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-extrabold text-white">{stat.number}</div>
              <div className="text-xs text-blue-200 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
