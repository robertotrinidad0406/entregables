import * as readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';
const rl = readline.createInterface({ input, output });
const tareas: string[] = [];
let salir = false;
while (!salir) {
console.log("\n=== MENU DE TAREAS ===");
console.log("1. Agregar tarea");
console.log("2. Eliminar ultima tarea");
console.log("3. Listar tareas");
console.log("4. Salir");
const opcion = (await rl.question("Elige una opcion: ")).trim();
switch (opcion) {
case "1": {
 const titulo = (await rl.question("Titulo de la nueva tarea: ")).trim();
if (titulo === "") {
console.log("El titulo no puede estar vacio.");
} else {
tareas.push(titulo);
console.log(`Tarea agregada: "${titulo}"`);
}
break;
}
case "2": {
const eliminada = tareas.pop();
if (eliminada === undefined) {
console.log("No hay tareas para eliminar.");
} else {
console.log(`Tarea eliminada: "${eliminada}"`);
}
break;
}
case "3": {
if (tareas.length === 0) {
console.log("No hay tareas registradas.");
} else {
console.log("Tareas actuales:");
for (let i = 0; i < tareas.length; i++) {
console.log(`  ${i + 1}. ${tareas[i]}`);
}
}
break;
}
case "4": {
salir = true;
console.log("Programa finalizado.");
break;
}
default:
console.log("Opcion invalida. Intenta de nuevo.");
}
}
rl.close();