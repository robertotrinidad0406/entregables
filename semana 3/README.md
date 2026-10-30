# API de Inscripciones Académicas

API REST de estudiantes construida con Express y TypeScript. Los datos se
guardan en memoria y se reinician al detener el servidor.

## Ejecutar la API

```bash
pnpm install
pnpm dev
```

La API queda disponible en `http://localhost:3000`.

## Documentación Swagger

Genera o actualiza `swagger_output.json` desde los comentarios de las rutas:

```bash
pnpm swagger
```

Después de iniciar la API, abre `http://localhost:3000/api-docs`. En Swagger UI,
usa **Try it out** y **Execute** para probar los endpoints:

- `GET /api/estudiantes`: lista los estudiantes.
- `POST /api/estudiantes`: crea un estudiante; `email` es obligatorio.
- `PUT /api/estudiantes/{id}`: actualiza los campos enviados.
- `DELETE /api/estudiantes/{id}`: elimina un estudiante.

Vuelve a ejecutar `pnpm swagger` cuando cambies las rutas o sus comentarios.
