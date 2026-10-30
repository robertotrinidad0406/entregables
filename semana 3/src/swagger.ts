import swaggerAutogen from 'swagger-autogen';

const doc = {
  info: {
    title: 'API de Inscripciones Académicas',
    description: 'Documentación de la API REST del MP-S2',
  },
  host: 'localhost:3000',
  schemes: ['http'],
  tags: [
    {
      name: 'Estudiantes',
      description: 'Operaciones para administrar estudiantes.',
    },
  ],
  definitions: {
    Estudiante: {
      id: 1,
      nombre: 'Ana',
      email: 'ana@example.com',
      bootcamp: 'Full Stack',
    },
    NuevoEstudiante: {
      nombre: 'Ana',
      email: 'ana@example.com',
      bootcamp: 'Full Stack',
    },
  },
};

const outputFile = '../swagger_output.json';
const routes = ['./src/index.ts'];

await swaggerAutogen()(outputFile, routes, doc);
