import express, { type Request, type Response } from 'express';

interface Estudiante {
  id: number;
  nombre: string;
  email: string;
  bootcamp: string;
}

type DatosEstudiante = Omit<Estudiante, 'id'>;

const app = express();
const estudiantes: Estudiante[] = [];
let siguienteId = 1;

app.use(express.json());

app.get('/api/estudiantes', (_req: Request, res: Response<Estudiante[]>) => {
  res.json(estudiantes);
});

app.post(
  '/api/estudiantes',
  (req: Request<{}, Estudiante | { error: string }, Partial<DatosEstudiante>>, res: Response) => {
    const { nombre, email, bootcamp } = req.body ?? {};

    if (typeof email !== 'string' || email.trim() === '') {
      res.status(400).json({ error: 'El campo email es obligatorio.' });
      return;
    }

    const estudiante: Estudiante = {
      id: siguienteId++,
      nombre: typeof nombre === 'string' ? nombre : '',
      email,
      bootcamp: typeof bootcamp === 'string' ? bootcamp : '',
    };

    estudiantes.push(estudiante);
    res.status(201).json(estudiante);
  },
);

app.put(
  '/api/estudiantes/:id',
  (
    req: Request<{ id: string }, Estudiante | { error: string }, Partial<DatosEstudiante>>,
    res: Response,
  ) => {
    const id = Number(req.params.id);
    const estudiante = estudiantes.find((item) => item.id === id);

    if (!estudiante) {
      res.status(404).json({ error: 'Estudiante no encontrado.' });
      return;
    }

    const { nombre, email, bootcamp } = req.body ?? {};
    if (nombre !== undefined) estudiante.nombre = nombre;
    if (email !== undefined) estudiante.email = email;
    if (bootcamp !== undefined) estudiante.bootcamp = bootcamp;

    res.json(estudiante);
  },
);

app.delete(
  '/api/estudiantes/:id',
  (req: Request<{ id: string }>, res: Response<{ error: string } | Estudiante>) => {
    const id = Number(req.params.id);
    const index = estudiantes.findIndex((item) => item.id === id);

    if (index === -1) {
      res.status(404).json({ error: 'Estudiante no encontrado.' });
      return;
    }

    const [estudianteEliminado] = estudiantes.splice(index, 1);
    res.json(estudianteEliminado);
  },
);

const puerto = Number(process.env.PORT) || 3000;

app.listen(puerto, () => {
  console.log(`API disponible en http://localhost:${puerto}`);
});
