# API CRUD de estudiantes

API REST en Express y TypeScript. Los estudiantes se guardan en memoria, por lo
que la lista se reinicia al detener el servidor.

## Instalar y ejecutar

```bash
npm install
npm run dev
```

La API queda disponible en `http://localhost:3000`.

## Endpoints

- `GET /api/estudiantes`: devuelve todos los estudiantes.
- `POST /api/estudiantes`: crea un estudiante y devuelve `201`. El campo
  `email` es obligatorio.
- `PUT /api/estudiantes/:id`: actualiza los campos enviados o devuelve `404`
  si no existe el estudiante.
- `DELETE /api/estudiantes/:id`: elimina el estudiante o devuelve `404` si no
  existe.

Ejemplo de body para crear o actualizar:

```json
{
  "nombre": "Ana",
  "email": "ana@example.com",
  "bootcamp": "Full Stack"
}
```

Para compilar y ejecutar la versión compilada, usa `npm run build` y luego
`npm start`.
