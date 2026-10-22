import * as readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';
const rl = readline.createInterface({ input, output });
interface Task {
  id: number;
  title: string;
  completed: boolean;
}
const tasks: Task[] = [];
let nextId = 1; 
const addTask = (title: string): void => {
  const newTask: Task = {
    id: nextId,
    title: title,
    completed: false,
  };
  tasks.push(newTask);
  nextId++;
  console.log(`Tarea agregada: [${newTask.id}] "${newTask.title}"`);
};
const listTasks = (): void => {
  if (tasks.length === 0) {
    console.log("No hay tareas registradas.");
    return;
  }
  console.log("Tareas actuales:");
  const formattedTasks = tasks.map((task) => {
    const { id, title, completed } = task;
    const status = completed ? "completed" : "pending";
    return `  [${id}] ${title} - ${status}`;
  });
  formattedTasks.forEach((linea) => {
    console.log(linea);
  });
};
const removeTask = (): void => {
  const removed = tasks.pop();
  if (removed === undefined) {
    console.log("No hay tareas para eliminar.");
    return;
  }
  console.log(`Tarea eliminada: [${removed.id}] "${removed.title}"`);
};
const markCompleted = (id: number): void => {
  const task = tasks.find((t) => t.id === id);
  if (task) {
    task.completed = true;
    console.log(`Tarea [${id}] marcada como completada ✓`);
  } else {
    console.log(`No se encontró la tarea con id ${id}`);
  }
};
const filterPending = (): Task[] => {
  return tasks.filter((task) => !task.completed);
};
const filterCompleted =(): Task[] => {
  return tasks.filter((task) => task.completed);
};
let exit = false;
while (!exit) {
  console.log("\n=== MENU DE TAREAS ===");
  console.log("1. Agregar tarea");
  console.log("2. Eliminar ultima tarea");
  console.log("3. Listar tareas");
  console.log("4. Marcar tarea como completada");
  console.log("5. Ver solo pendientes");
  console.log("6. Ver solo completadas");
  console.log("7. Salir");
  const option = (await rl.question("Elige una opcion: ")).trim();
  switch (option) {
    case "1": {
      const title = (await rl.question("Titulo de la nueva tarea: ")).trim();
      if (title === "") {
        console.log("El titulo no puede estar vacio.");
      } else {
        addTask(title);
      }
      break;
    }
    case "2": {
      removeTask();
      break;
    }
    case "3": {
      listTasks();
      break;
    }
    case "4": {
      const idInput = Number(
        (await rl.question("Ingresa el id de la tarea a completar: ")).trim()
      );
      markCompleted(idInput);
      break;
    }
    case "5": {
      const pendientes = filterPending();
      if (pendientes.length === 0) {
        console.log("No hay tareas pendientes.");
      } else {
        console.log("\n--- Tareas Pendientes ---");
        pendientes.forEach((task) => {
          const { id, title } = task;
          console.log(`  [${id}] ${title}`);
        });
      }
      break;
    }
    case "6": {
      const completadas = filterCompleted();
      if (completadas.length === 0) {
        console.log("No hay tareas completadas.");
      } else {
        console.log("\n--- Tareas Completadas ---");
        completadas.forEach((task) => {
          const { id, title } = task;
          console.log(`  [${id}] ${title}`);
        });
      }
      break;
    }
    case "7": {
      exit = true;
      console.log("Programa finalizado.");
      break;
    }
    default:
      console.log("Opcion invalida. Intenta de nuevo.");
  }
}
rl.close();