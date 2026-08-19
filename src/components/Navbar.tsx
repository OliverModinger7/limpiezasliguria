'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const links = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#nosotros', label: 'Nosotros' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#12263A]">
      <div className="grid-container">
        <div className="col-span-12 grid grid-cols-[1fr_auto_1fr] items-center h-20 gap-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/liguria-long.png"
              alt="Liguria"
              width={1369}
              height={603}
              priority
              className="h-9 w-auto"
            />
          </Link>

          <ul className="hidden md:flex items-center gap-8 justify-self-center">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-white/90 hover:text-white font-medium transition-colors text-[15px] whitespace-nowrap"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-self-end gap-4">
            <a
              href="#contacto"
              className="hidden md:inline-flex items-center px-6 py-2.5 bg-[#5EEAD4] text-[#0B1C33] text-sm font-bold rounded-full hover:bg-[#7FF4E0] transition-colors whitespace-nowrap"
            >
              Contacto
            </a>

            <div className="hidden lg:flex items-center gap-5 pl-4 border-l border-white/15">
              <a
                href="tel:+56942563693"
                className="flex items-center gap-1.5 text-white/80 hover:text-white text-sm transition-colors whitespace-nowrap"
              >
                <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +56 9 4256 3693
              </a>
              <a
                href="mailto:contacto@limpiezasliguria.cl"
                className="flex items-center gap-1.5 text-white/80 hover:text-white text-sm transition-colors whitespace-nowrap"
              >
                <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                contacto@limpiezasliguria.cl
              </a>
            </div>

            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
              aria-label="Abrir menú"
            >
              {open ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {open && (
          <div className="col-span-12 md:hidden border-t border-white/10 py-4">
            <ul className="flex flex-col gap-1">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block px-3 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-lg font-medium transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-2 pt-2 border-t border-white/10 flex flex-col gap-1">
                <a
                  href="tel:+56942563693"
                  onClick={() => setOpen(false)}
                  className="px-3 py-1.5 text-white/70 text-sm"
                >
                  +56 9 4256 3693
                </a>
                <a
                  href="mailto:contacto@limpiezasliguria.cl"
                  onClick={() => setOpen(false)}
                  className="px-3 py-1.5 text-white/70 text-sm"
                >
                  contacto@limpiezasliguria.cl
                </a>
              </li>
              <li className="mt-2">
                <a
                  href="#contacto"
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 bg-[#5EEAD4] text-[#0B1C33] text-center font-bold rounded-full hover:bg-[#7FF4E0] transition-colors"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}
