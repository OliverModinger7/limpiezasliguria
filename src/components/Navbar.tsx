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
        <div className="col-span-12 flex items-center justify-between h-20">
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

          <ul className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-white/90 hover:text-white font-medium transition-colors text-[15px]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contacto"
            className="hidden md:inline-flex items-center px-6 py-2.5 bg-[#5EEAD4] text-[#0B1C33] text-sm font-bold rounded-full hover:bg-[#7FF4E0] transition-colors"
          >
            Contacto
          </a>

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
