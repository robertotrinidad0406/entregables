
import express from 'express';
import type { Request, Response } from 'express'; 
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
  return res.status(200).json(estudiantes);
});
app.post('/api/estudiantes', (req: Request, res: Response) => {
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
app.listen(3000, () => {
  console.log('Servidor ejecutándose en http://localhost:3000');
});
