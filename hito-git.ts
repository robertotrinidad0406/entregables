import * as readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';
const rl = readline.createInterface({ input, output });
interface Task {
  id: number;
  title: string;
  completed: boolean;
}
const tasks: Task[] = [];
let nextId = 1; // se incrementa con cada tarea nueva
const addTask = (title: string): void => {
  const newTask: Task = {
    id: nextId,
    title: title,
    completed: false,
  };
  tasks.push(newTask);
  nextId++; // garantiza ID unico para la proxima tarea
  console.log(`Tarea agregada: [${newTask.id}] "${newTask.title}"`);
};
const listTasks = (): void => {
  if (tasks.length === 0) {
    console.log("No hay tareas registradas.");
    return;
  }
  console.log("Tareas actuales:");
  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    const status = task.completed ? "completed" : "pending";
    console.log(`  [${task.id}] ${task.title} - ${status}`);
  }
};
const removeTask = (): void => {
  const removed = tasks.pop();
  if (removed === undefined) {
    console.log("No hay tareas para eliminar.");
    return;
  }
  console.log(`Tarea eliminada: [${removed.id}] "${removed.title}"`);
};
let exit = false;
while (!exit) {
  console.log("\n=== MENU DE TAREAS ===");
  console.log("1. Agregar tarea");
  console.log("2. Eliminar ultima tarea");
  console.log("3. Listar tareas");
  console.log("4. Salir");
  const option = (await rl.question("Elige una opcion: ")).trim();
  switch (option) {
    case "1": {
      const title = (await rl.question("Titulo de la nueva tarea: ")).trim();
      if (title === "") {
        console.log("El titulo no puede estar vacio.");
      } else {
        addTask(title); // se le pasa el titulo como argumento
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
      exit = true;
      console.log("Programa finalizado.");
      break;
    }
    default: console.log("Opcion invalida. Intenta de nuevo.");
  }
}
rl.close();