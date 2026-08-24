# Liguria — Backend (NestJS)

API interna para el manejo de formularios del sitio de Limpiezas Liguria. Por ahora expone
un único endpoint para el formulario de cotización del Hero, que envía un correo vía Nodemailer.

## Estructura

```
src/
  app.controller.ts        # GET / y GET /health (health check)
  app.module.ts             # módulo raíz, importa ConfigModule y ContactModule
  common/
    guards/
      internal-api-key.guard.ts   # exige el header x-api-key en /contact
  contact/
    contact.module.ts
    contact.controller.ts   # POST /contact
    contact.service.ts      # arma y envía el correo con Nodemailer
    dto/
      create-contact.dto.ts # validación con class-validator
```

## Variables de entorno

Copia `.env.example` a `.env` y completa:

| Variable            | Descripción                                                              |
|---------------------|---------------------------------------------------------------------------|
| `PORT`               | Puerto donde escucha el servicio (default 3003 — 3000 y 3001 ya están ocupados en el servidor por voz-en-letras). |
| `FRONTEND_ORIGIN`    | Orígenes permitidos para CORS, separados por coma.                      |
| `INTERNAL_API_KEY`   | Clave compartida que el frontend debe enviar en el header `x-api-key`.  |
| `SMTP_HOST/PORT/SECURE/USER/PASS` | Credenciales SMTP del correo del dominio (Nodemailer).      |
| `MAIL_FROM`          | Remitente del correo enviado.                                            |
| `MAIL_TO`            | Casilla que recibe las solicitudes (contacto@limpiezasliguria.cl).       |

## Endpoints

### `GET /health`
Health check simple, sin autenticación. Responde `{ "status": "ok" }`.

### `POST /contact`
Requiere el header `x-api-key: <INTERNAL_API_KEY>`. Body JSON:

```json
{
  "name": "string",
  "email": "string (email válido)",
  "phone": "string",
  "service": "string"
}
```

Respuestas:
- `200 { "ok": true }` — correo enviado.
- `400` — datos inválidos (detalle de `class-validator`).
- `401` — falta el header `x-api-key` o no coincide con `INTERNAL_API_KEY`.
- `500` — el servicio no pudo enviar el correo (revisar credenciales SMTP).

## Desarrollo local

```bash
npm install
cp .env.example .env   # y completa las variables
npm run start:dev
```

## Build y despliegue en DonWeb

```bash
npm install
npm run build
npm run start:prod     # node dist/main.js
```

En el servidor de DonWeb (mismo VPS donde corre `voz-en-letras` en los puertos 3000/3001):
- Este backend usa el puerto **3003** por defecto para no chocar con esos servicios.
- Define las variables de entorno del `.env.example` (panel de control, o un archivo `.env`
  junto a `dist/`, ya que `ConfigModule` las carga automáticamente).
- Ajusta `FRONTEND_ORIGIN` al dominio real de producción del sitio.
- Corre el proceso con un gestor persistente (`pm2 start dist/main.js --name liguria-backend`,
  o el equivalente que use tu hosting).
- Configura nginx para exponerlo en un subdominio propio, `api.limpiezasliguria.cl`, siguiendo
  el mismo patrón que ya usa `api.vozenletras.cl` en `/etc/nginx/sites-enabled/voz-en-letras`.
  Hay un bloque listo para copiar en [`deploy/nginx-api.limpiezasliguria.cl.conf`](./deploy/nginx-api.limpiezasliguria.cl.conf)
  — instrucciones paso a paso (DNS, dónde pegarlo, y el `certbot --nginx -d api.limpiezasliguria.cl`
  para que se agregue el SSL solo) están en los comentarios de ese archivo.
- En el frontend, el `fetch` hacia este backend debe apuntar a `https://api.limpiezasliguria.cl`
  y enviar el header `x-api-key` con el mismo valor que `INTERNAL_API_KEY`.
