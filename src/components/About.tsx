const stats = [
  { number: '+500', label: 'Clientes atendidos' },
  { number: '8+', label: 'Años de experiencia' },
  { number: '15', label: 'Profesionales en plantilla' },
  { number: '4.9★', label: 'Valoración media' },
]

const values = [
  {
    title: 'Confianza',
    description: 'Personal seleccionado, con formación y referencias verificadas.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Puntualidad',
    description: 'Cumplimos con los horarios acordados, siempre.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Sostenibilidad',
    description: 'Usamos productos ecológicos certificados, respetuosos con el medio ambiente.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
]

export default function About() {
  return (
    <section id="nosotros" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">Quiénes somos</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 mt-2 mb-6 leading-tight">
              Más de 8 años dejando espacios impecables
            </h2>
            <p className="text-slate-500 leading-relaxed mb-6">
              Somos una empresa de limpiezas con sede en la región de Liguria, especializados en ofrecer servicios de alta calidad tanto para particulares como para empresas. Nuestro equipo está formado por profesionales con experiencia y formación continua.
            </p>
            <p className="text-slate-500 leading-relaxed mb-8">
              Creemos que un espacio limpio es sinónimo de bienestar y productividad. Por eso, en cada trabajo ponemos el mismo nivel de dedicación y atención al detalle, independientemente del tamaño del encargo.
            </p>

            <div className="space-y-4">
              {values.map((value) => (
                <div key={value.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center shrink-0">
                    {value.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">{value.title}</h4>
                    <p className="text-sm text-slate-500">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl p-8 text-white">
              <h3 className="text-xl font-bold mb-8 text-center">Nuestros números</h3>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
                    <div className="text-3xl font-extrabold mb-1">{stat.number}</div>
                    <div className="text-sm text-blue-100">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                <p className="text-center text-sm text-blue-100 italic">
                  "Nuestro compromiso es que cada cliente quede completamente satisfecho con el resultado."
                </p>
                <p className="text-center text-sm font-semibold mt-2">— Equipo Liguria</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
