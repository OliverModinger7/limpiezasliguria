interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  features: string[]
}

export default function ServiceCard({ icon, title, description, features }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md hover:-translate-y-1 transition-all group">
      <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-slate-800 mb-2">{title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed mb-4">{description}</p>
      <ul className="space-y-1.5">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-2 text-sm text-slate-600">
            <svg className="w-4 h-4 text-cyan-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  )
}
