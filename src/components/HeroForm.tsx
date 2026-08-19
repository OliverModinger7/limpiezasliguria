'use client'

import { useState } from 'react'

type FormState = {
  name: string
  email: string
  phone: string
  service: string
}

const services = [
  'Oficina empresa',
  'Condominio',
  'Retail y locales comerciales',
  'Limpieza industrial',
  'Clinico y hospitalario',
  'Educacional',
  'Otro',
]

export default function HeroForm() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', phone: '', service: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => null)
        throw new Error(data?.error ?? 'No se pudo enviar la solicitud.')
      }

      setSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'No se pudo enviar la solicitud.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-3xl shadow-2xl p-8 flex flex-col items-center text-center">
        <div className="w-14 h-14 bg-[#E6FFFA] text-[#0B1C33] rounded-full flex items-center justify-center mb-4">
          <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-lg font-bold text-[#0B1C33] mb-2">¡Solicitud enviada!</h3>
        <p className="text-sm text-slate-500">
          Gracias por tu interés. Te contactaremos en menos de 24 horas.
        </p>
        <button
          onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', service: '' }) }}
          className="mt-6 text-sm font-semibold text-[#0B1C33] hover:underline"
        >
          Enviar otra solicitud
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 space-y-4"
    >
      <div>
        <h3 className="text-xl font-bold text-[#0B1C33]">Solicita tu cotización</h3>
        <p className="text-sm text-slate-500 mt-1">Te respondemos en menos de 24 horas.</p>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="hero-name">
          Nombre
        </label>
        <input
          id="hero-name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={handleChange}
          placeholder="Tu nombre"
          className="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5EEAD4] focus:border-transparent transition-all"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="hero-email">
          Correo electrónico
        </label>
        <input
          id="hero-email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          placeholder="tu@email.com"
          className="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5EEAD4] focus:border-transparent transition-all"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="hero-phone">
          Número de teléfono
        </label>
        <input
          id="hero-phone"
          name="phone"
          type="tel"
          required
          value={form.phone}
          onChange={handleChange}
          placeholder="+56 9 0000 0000"
          className="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5EEAD4] focus:border-transparent transition-all"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="hero-service">
          Servicio
        </label>
        <select
          id="hero-service"
          name="service"
          required
          value={form.service}
          onChange={handleChange}
          className="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5EEAD4] focus:border-transparent transition-all bg-white"
        >
          <option value="" disabled>
            Selecciona un servicio...
          </option>
          {services.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      {error && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-xl px-4 py-2.5">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3.5 bg-[#0B1C33] text-white font-bold text-sm rounded-full hover:bg-[#132842] transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {loading ? (
          <>
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Enviando...
          </>
        ) : (
          'Solicitar cotización gratis'
        )}
      </button>
    </form>
  )
}
