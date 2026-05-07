const testimonials = [
  {
    name: 'María García',
    role: 'Propietaria de piso en alquiler',
    rating: 5,
    comment: 'Contraté a Liguria para la limpieza post-inquilino y el resultado fue impresionante. El piso quedó como nuevo, incluso limpiaron zonas que yo nunca hubiera alcanzado. Super recomendables.',
    initials: 'MG',
  },
  {
    name: 'Carlos Fernández',
    role: 'Director de oficina',
    rating: 5,
    comment: 'Llevamos más de dos años con Liguria para la limpieza de nuestras oficinas. Siempre puntuales, siempre discretos y el resultado es excelente. Nuestro equipo está muy contento con el ambiente de trabajo.',
    initials: 'CF',
  },
  {
    name: 'Laura Martínez',
    role: 'Particular',
    rating: 5,
    comment: 'Después de la reforma de mi cocina necesitaba una limpieza profunda. Quedé encantada. El polvo y los restos de obra desaparecieron completamente. Precio muy razonable para la calidad del servicio.',
    initials: 'LM',
  },
  {
    name: 'Antonio Ruiz',
    role: 'Responsable de mantenimiento',
    rating: 5,
    comment: 'Gestionamos varias naves industriales y Liguria se encarga de todas. Flexibles con los horarios y muy eficientes. Han adaptado el servicio perfectamente a nuestras necesidades operativas.',
    initials: 'AR',
  },
  {
    name: 'Elena Sánchez',
    role: 'Dueña de restaurante',
    rating: 5,
    comment: 'Para un restaurante la limpieza es fundamental. Liguria cumple con todos los estándares y siempre dejan todo impecable antes de la apertura. Sin ellos no podría llevar el negocio tan tranquila.',
    initials: 'ES',
  },
  {
    name: 'Roberto Díaz',
    role: 'Administrador de fincas',
    rating: 4,
    comment: 'Gestiono varias comunidades de vecinos y Liguria lleva el mantenimiento de zonas comunes en varias de ellas. Los vecinos están muy satisfechos y los precios son competitivos.',
    initials: 'RD',
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-amber-400' : 'text-slate-200'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">Testimonios</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 mt-2 mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            La confianza de nuestros clientes es el mejor reflejo de nuestro trabajo.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
              <StarRating rating={t.rating} />
              <p className="text-slate-600 text-sm leading-relaxed mt-4 mb-6 italic">
                "{t.comment}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-slate-800 text-sm">{t.name}</div>
                  <div className="text-xs text-slate-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
