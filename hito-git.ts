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

// >>> NUEVO (punto 2): simula guardado en BD con una Promise de 2s
const saveToDB = (task: Task): Promise<Task> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const guardada = true; // simula respuesta del servidor
      if (guardada) {
        console.log(`La tarea fue guardada correctamente: [${task.id}] "${task.title}"`);
        resolve(task);            // <- antes faltaba esto
      } else {
        reject(new Error("No se pudo guardar la tarea en la base de datos."));
      }
    }, 2000);
  });
};

// >>> MODIFICADO (puntos 3 y 4): ahora es async con await + try/catch
const addTask = async (title: string): Promise<void> => {
  try {
    if (title === "") {
      throw new Error("El titulo no puede estar vacio."); // lanza el error
    }

    const newTask: Task = {
      id: nextId,
      title: title,
      completed: false,
    };

    await saveToDB(newTask); // espera los 2 segundos antes de confirmar

    tasks.push(newTask);
    nextId++; // garantiza ID unico para la proxima tarea
    console.log(`Tarea agregada: [${newTask.id}] "${newTask.title}"`);
  } catch (error) {
    // captura el throw sin romper el programa
    console.log(error instanceof Error ? error.message : error);
  }
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
      await addTask(title); // >>> ahora con await (ya no hace falta validar aqui)
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
    default:
      console.log("Opcion invalida. Intenta de nuevo.");
  }
}
rl.close();