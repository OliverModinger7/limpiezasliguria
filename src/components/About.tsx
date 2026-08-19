const stats = [
  { number: '+30', label: 'Clientes atendidos' },
  { number: '2+', label: 'Años de experiencia' },
  { number: '15', label: 'Profesionales en plantilla' },
  { number: '5★', label: 'Valoración media' },
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
      <div className="grid-container items-center">
        <div className="col-span-12 lg:col-span-6">
          <span className="text-[#0F9E8C] font-bold text-sm uppercase tracking-widest">Quiénes somos</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1C33] mt-2 mb-6 leading-tight">
            Más de 2 años dejando espacios impecables
          </h2>
          <p className="text-slate-500 leading-relaxed mb-6">
            En Liguria Servicios de Aseo SpA, somos especialistas en limpieza y sabemos que un espacio limpio no solo mejora su apariencia, sino también genera bienestar, comodidad y una mejor experiencia para quienes lo utilizan. Por eso trabajamos con dedicación, compromiso y atención al detalle, buscando entregar resultados que realmente marquen la diferencia.
          </p>
          <p className="text-slate-500 leading-relaxed mb-8">
            Contamos con un equipo capacitado para realizar cada servicio de manera responsable, eficiente y cuidadosa, utilizando productos amigables con el medio ambiente y métodos prácticos para cada tipo de espacio.
          </p>

          <div className="space-y-4">
            {values.map((value) => (
              <div key={value.title} className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#E6FFFA] text-[#0B1C33] rounded-lg flex items-center justify-center shrink-0">
                  {value.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-[#0B1C33]">{value.title}</h4>
                  <p className="text-sm text-slate-500">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-12 lg:col-start-7 lg:col-span-6 mt-14 lg:mt-0">
          <div className="bg-[#0B1C33] rounded-3xl p-8 text-white">
            <h3 className="text-xl font-bold mb-8 text-center">Nuestros números</h3>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center bg-white/10 rounded-2xl p-4">
                  <div className="text-3xl font-extrabold mb-1 text-[#5EEAD4]">{stat.number}</div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="mt-8 p-4 bg-white/10 rounded-2xl">
              <p className="text-center text-sm text-white/80 italic">
                &ldquo;Nuestro compromiso es que cada cliente quede completamente satisfecho con el resultado.&rdquo;
              </p>
              <p className="text-center text-sm font-semibold mt-2 text-[#5EEAD4]">— Equipo Liguria</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
