
import express from 'express';
import type { Request, Response } from 'express'; 
import cors from 'cors';
import { readFile, writeFile } from 'node:fs/promises';
import process from 'node:process';
import swaggerUi from 'swagger-ui-express';
import swaggerOutput from '../swagger_output.json' with { type: 'json' };

const app = express();
app.use(cors());
app.use(express.json());

interface Estudiante {
  id: number;
  nombre: string;
  email: string;
  bootcamp: string;
}

const archivoDatabase = new URL('../database.json', import.meta.url);
const PORT = Number(process.env.PORT ?? 3000);
let estudiantes: Estudiante[] = [];

function esEstudiante(valor: unknown): valor is Estudiante {
  return (
    typeof valor === 'object' &&
    valor !== null &&
    'id' in valor &&
    typeof valor.id === 'number' &&
    'nombre' in valor &&
    typeof valor.nombre === 'string' &&
    'email' in valor &&
    typeof valor.email === 'string' &&
    'bootcamp' in valor &&
    typeof valor.bootcamp === 'string'
  );
}

async function leerEstudiantes(): Promise<Estudiante[]> {
  try {
    const contenido = await readFile(archivoDatabase, 'utf8');
    const datos: unknown = JSON.parse(contenido);
    if (!Array.isArray(datos) || !datos.every(esEstudiante)) {
      throw new Error('database.json no contiene una lista válida de estudiantes.');
    }
    return datos;
  } catch (error) {
    if (
      typeof error === 'object' &&
      error !== null &&
      'code' in error &&
      error.code === 'ENOENT'
    ) {
      return [];
    }
    throw error;
  }
}

async function guardarEstudiantes(datos: Estudiante[]): Promise<void> {
  await writeFile(archivoDatabase, `${JSON.stringify(datos, null, 2)}\n`, 'utf8');
}

app.get('/api/estudiantes', (_req: Request, res: Response) => {
  // #swagger.tags = ['Estudiantes']
  // #swagger.summary = 'Listar estudiantes'
  // #swagger.description = 'Obtiene todos los estudiantes registrados.'
  // #swagger.responses[200] = { description: 'Lista de estudiantes.' }
  return res.status(200).json(estudiantes);
});

app.post('/api/estudiantes', async (req: Request, res: Response) => {
  // #swagger.tags = ['Estudiantes']
  // #swagger.summary = 'Crear estudiante'
  // #swagger.description = 'Registra un estudiante nuevo. El email es obligatorio.'
  // #swagger.parameters['body'] = { in: 'body', description: 'Datos del estudiante.', required: true, schema: { $ref: '#/definitions/NuevoEstudiante' } }
  // #swagger.responses[201] = { description: 'Estudiante creado.' }
  // #swagger.responses[400] = { description: 'El campo email es obligatorio.' }
  const { nombre, email, bootcamp } = req.body;
  if (!email) {
    return res.status(400).json({
      mensaje: 'El campo email es obligatorio',
    });
  }
  const nuevoEstudiante: Estudiante = {
    id: estudiantes.length > 0
      ? Math.max(...estudiantes.map((e) => e.id)) + 1
      : 1,
    nombre,
    email,
    bootcamp,
  };
  const estudiantesActualizados = [...estudiantes, nuevoEstudiante];
  try {
    await guardarEstudiantes(estudiantesActualizados);
    estudiantes = estudiantesActualizados;
  } catch (error) {
    console.error('No se pudieron guardar los estudiantes:', error);
    return res.status(500).json({
      mensaje: 'No se pudo guardar el estudiante',
    });
  }
  return res.status(201).json(nuevoEstudiante);
});

app.put('/api/estudiantes/:id', async (req: Request, res: Response) => {
  // #swagger.tags = ['Estudiantes']
  // #swagger.summary = 'Actualizar estudiante'
  // #swagger.description = 'Actualiza los campos enviados de un estudiante existente.'
  // #swagger.parameters['id'] = { in: 'path', description: 'ID del estudiante.', required: true, type: 'integer' }
  // #swagger.parameters['body'] = { in: 'body', description: 'Campos del estudiante que se actualizarán.', required: true, schema: { $ref: '#/definitions/NuevoEstudiante' } }
  // #swagger.responses[200] = { description: 'Estudiante actualizado.' }
  // #swagger.responses[404] = { description: 'Estudiante no encontrado.' }
  const id = Number(req.params.id);
  const estudiante = estudiantes.find((e) => e.id === id);
  if (!estudiante) {
    return res.status(404).json({
      mensaje: 'Estudiante no encontrado',
    });
  }
  const { nombre, email, bootcamp } = req.body;
  const estudianteActualizado = { ...estudiante };
  if (nombre !== undefined) estudianteActualizado.nombre = nombre;
  if (email !== undefined) estudianteActualizado.email = email;
  if (bootcamp !== undefined) estudianteActualizado.bootcamp = bootcamp;
  const estudiantesActualizados = estudiantes.map((item) =>
    item.id === id ? estudianteActualizado : item,
  );
  try {
    await guardarEstudiantes(estudiantesActualizados);
    estudiantes = estudiantesActualizados;
  } catch (error) {
    console.error('No se pudieron guardar los estudiantes:', error);
    return res.status(500).json({
      mensaje: 'No se pudo actualizar el estudiante',
    });
  }
  return res.status(200).json(estudianteActualizado);
});

app.delete('/api/estudiantes/:id', async (req: Request, res: Response) => {
  // #swagger.tags = ['Estudiantes']
  // #swagger.summary = 'Eliminar estudiante'
  // #swagger.description = 'Elimina un estudiante existente por su ID.'
  // #swagger.parameters['id'] = { in: 'path', description: 'ID del estudiante.', required: true, type: 'integer' }
  // #swagger.responses[204] = { description: 'Estudiante eliminado.' }
  // #swagger.responses[404] = { description: 'Estudiante no encontrado.' }
  const id = Number(req.params.id);
  const indice = estudiantes.findIndex((e) => e.id === id);
  if (indice === -1) {
    return res.status(404).json({
      mensaje: 'Estudiante no encontrado',
    });
  }
  const estudiantesActualizados = estudiantes.filter((estudiante) => estudiante.id !== id);
  try {
    await guardarEstudiantes(estudiantesActualizados);
    estudiantes = estudiantesActualizados;
  } catch (error) {
    console.error('No se pudieron guardar los estudiantes:', error);
    return res.status(500).json({
      mensaje: 'No se pudo eliminar el estudiante',
    });
  }
  return res.status(204).send();
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerOutput));

async function iniciarServidor(): Promise<void> {
  estudiantes = await leerEstudiantes();
  app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
  });
}

iniciarServidor().catch((error: unknown) => {
  console.error('No se pudo iniciar el servidor:', error);
  process.exitCode = 1;
});
