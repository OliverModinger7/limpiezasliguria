import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const backendUrl = process.env.CONTACT_API_URL
  const apiKey = process.env.CONTACT_API_KEY

  if (!backendUrl || !apiKey) {
    console.error('CONTACT_API_URL o CONTACT_API_KEY no están configuradas.')
    return NextResponse.json(
      { error: 'El formulario no está configurado todavía. Contáctanos directamente.' },
      { status: 500 }
    )
  }

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Solicitud inválida.' }, { status: 400 })
  }

  let backendRes: Response
  try {
    backendRes = await fetch(backendUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
      },
      body: JSON.stringify(body),
      cache: 'no-store',
    })
  } catch (err) {
    console.error('No se pudo contactar al backend:', err)
    return NextResponse.json({ error: 'No se pudo enviar la solicitud.' }, { status: 502 })
  }

  const data = await backendRes.json().catch(() => null)

  if (!backendRes.ok) {
    console.error('El backend respondió con error:', backendRes.status, data)
    return NextResponse.json(
      { error: data?.message ?? 'No se pudo enviar la solicitud.' },
      { status: backendRes.status }
    )
  }

  return NextResponse.json(data ?? { ok: true })
}
