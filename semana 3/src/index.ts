
import express from 'express';
import type { Request, Response } from 'express'; 
import swaggerUi from 'swagger-ui-express';
import swaggerOutput from '../swagger_output.json' with { type: 'json' };

const app = express();
app.use(express.json());

interface Estudiante {
  id: number;
  nombre: string;
  email: string;
  bootcamp: string;
}
const estudiantes: Estudiante[] = [];

app.get('/api/estudiantes', (_req: Request, res: Response) => {
  // #swagger.tags = ['Estudiantes']
  // #swagger.summary = 'Listar estudiantes'
  // #swagger.description = 'Obtiene todos los estudiantes registrados.'
  // #swagger.responses[200] = { description: 'Lista de estudiantes.' }
  return res.status(200).json(estudiantes);
});

app.post('/api/estudiantes', (req: Request, res: Response) => {
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
  estudiantes.push(nuevoEstudiante);
  return res.status(201).json(nuevoEstudiante);
});

app.put('/api/estudiantes/:id', (req: Request, res: Response) => {
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
  if (nombre !== undefined) estudiante.nombre = nombre;
  if (email !== undefined) estudiante.email = email;
  if (bootcamp !== undefined) estudiante.bootcamp = bootcamp;
  return res.status(200).json(estudiante);
});

app.delete('/api/estudiantes/:id', (req: Request, res: Response) => {
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
  estudiantes.splice(indice, 1);
  return res.status(204).send();
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerOutput));

app.listen(3000, () => {
  console.log('Servidor ejecutándose en http://localhost:3000');
});
