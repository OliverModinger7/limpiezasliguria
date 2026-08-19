const commitments = [
  {
    title: 'Productos biodegradables',
    description: 'Todos nuestros productos de limpieza son ecológicos y biodegradables, seguros para tu familia, tus mascotas y el planeta.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: 'Ahorro de agua y energía',
    description: 'Aplicamos técnicas de limpieza que optimizan el uso de agua y electricidad en cada servicio que realizamos.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21c-4.97 0-9-3.582-9-8 0-4 4-9 9-13 5 4 9 9 9 13 0 4.418-4.03 8-9 8z" />
      </svg>
    ),
  },
  {
    title: 'Reducción de residuos',
    description: 'Reutilizamos envases, dosificamos con precisión y separamos correctamente los residuos generados en cada trabajo.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
    ),
  },
  {
    title: 'Materiales reutilizables',
    description: 'Priorizamos paños de microfibra y utensilios duraderos frente a materiales desechables de un solo uso.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
]

export default function Environment() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="grid-container items-center">
        <div className="col-span-12 lg:col-span-5">
          <span className="text-[#0F9E8C] font-bold text-sm uppercase tracking-widest">Sostenibilidad</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1C33] mt-2 mb-6 leading-tight">
            Responsabilidad con el Medioambiente
          </h2>
          <p className="text-slate-500 leading-relaxed mb-8">
            Estamos comprometidos con realizar servicios de aseo de manera responsable y sostenible,
            promoviendo el uso eficiente de los recursos, la correcta gestión de residuos y la utilización
            de productos que reduzcan el impacto ambiental. Trabajamos para mantener espacios limpios y
            saludables, cuidando al mismo tiempo a las personas y el entorno.
          </p>

          <div className="inline-flex items-center gap-4 bg-[#E6FFFA] rounded-2xl px-6 py-5">
            <div className="w-12 h-12 bg-[#0B1C33] text-[#5EEAD4] rounded-full flex items-center justify-center shrink-0">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <div className="text-2xl font-extrabold text-[#0B1C33]">100%</div>
              <div className="text-sm text-slate-600">productos ecológicos certificados</div>
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-start-7 lg:col-span-6 mt-14 lg:mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {commitments.map((item) => (
              <div key={item.title} className="bg-[#F5FDFB] rounded-2xl p-6 border border-[#E6FFFA]">
                <div className="w-11 h-11 bg-white text-[#0B1C33] rounded-xl flex items-center justify-center mb-4 shadow-sm">
                  {item.icon}
                </div>
                <h3 className="font-bold text-[#0B1C33] mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
