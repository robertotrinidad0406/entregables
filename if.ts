// ==========================================
// NIVEL FÁCIL: if, if-else básicos
// ==========================================

/**
 * EJERCICIO 1: Pago de pasaje en transporte público (if - else)
 *
 * Contexto: El pasaje cuesta 2.50.
 * Variables iniciales:
 *   const saldoActual: number = 3.00;
 *   const costoPasaje: number = 2.50;
 *
 * Enunciado:
 * Si el saldo es suficiente para pagar el pasaje:
 *   - Resta el costo del pasaje al saldo y muestra:
 *     "Pasaje cobrado. Saldo restante: [nuevo saldo]"
 * De lo contrario:
 *   - Muestra: "Saldo insuficiente para viajar."
 */

// Tu código aquí:
let saldoActual: number = 3.00
const costoPasaje: number = 2.50
if (saldoActual > costoPasaje)
    console.log (('pasaje pagado, ')+ ('su saldo actual es de ')+ (saldoActual - costoPasaje ))
else if ( saldoActual < costoPasaje)
    console.log ('saldo insuficiente')
/**
 * EJERCICIO 2: Verificación para compra de entradas a una película para mayores (if - else con boolean)
 *
 * Contexto: En el cine, la película exige ser mayor de 18 años y presentar documento físico.
 * Variables iniciales:
 *   const edadCliente: number = 17;
 *   const tieneDocumento: boolean = true;
 *
 * Enunciado:
 * Evalúa si el cliente tiene 18 años o más Y además tiene su documento en mano.
 * - Si cumple ambas condiciones: imprimir "Venta de boleto autorizada."
 * - Si falla alguna: imprimir "Acceso denegado. Debe ser mayor de edad y portar documento."
 */

// Tu código aquí:

/**
 * EJERCICIO 3: Puerta automática de una tienda según horario (if - else)
 *
 * Contexto: Una tienda abre sus puertas entre las 9:00 y las 20:00 (formato 24h).
 * Variable inicial:
 *   const horaActual: number = 14; // Valores posibles de 0 a 23
 *
 * Enunciado:
 * - Si la hora está entre 9 y 20 inclusive, muestra: "Puerta abierta: Bienvenido a la tienda."
 * - En cualquier otra hora, muestra: "Puerta cerrada: Atención finalizada por hoy."
 */

// Tu código aquí:


// ==========================================
// NIVEL INTERMEDIO BAJO: if - else if - else
// ==========================================

/**
 * EJERCICIO 4: Luces del semáforo vehicular (switch - case)
 *
 * Contexto: Control del flujo vehicular mediante un semáforo.
 * Variable inicial:
 *   const luzSemaforo: string = "amarillo"; // Puede ser "verde", "amarillo", "rojo" u otro texto
 *
 * Enunciado:
 * Usando switch-case, muestra el mensaje según el color:
 * - "verde": "Avance: Vía libre."
 * - "amarillo": "Precaución: Reduzca la velocidad."
 * - "rojo": "Deténgase: Paso bloqueado."
 * - default: "Luz no reconocida o semáforo en mantenimiento."
 */

// Tu código aquí:

/**
 * EJERCICIO 5: Descuento en la caja de una farmacia (if - else if - else)
 *
 * Contexto: Una farmacia premia el total gastado con descuentos:
 * - Menos de 50: 0% de descuento.
 * - De 50 a 99: 5% de descuento.
 * - De 100 a 199: 10% de descuento.
 * - 200 o más: 15% de descuento.
 *
 * Variables iniciales:
 *   const subtotalCompra: number = 120;
 *   let descuento: number = 0;
 *   let totalFinal: number = 0;
 *
 * Enunciado:
 * Determina el descuento según el monto, calcula el total final y muestra:
 * "Subtotal: [subtotal] | Descuento aplicado: [descuento]% | Total a pagar: [totalFinal]"
 */

// Tu código aquí:

/**
 * EJERCICIO 6: Asignación de canal de TV por categoría (switch - case)
 *
 * Contexto: En un decodificador, según el tipo de contenido se sugiere un canal de inicio:
 * Variable inicial:
 *   const categoriaElegida: string = "deportes";
 *   // Opciones: "noticias", "deportes", "infantil", "peliculas"
 *
 * Enunciado:
 * Usa switch-case para imprimir el número de canal sugerido:
 * - "noticias": "Sintonizando canal 10: Noticias 24/7"
 * - "deportes": "Sintonizando canal 25: Deportes en vivo"
 * - "infantil": "Sintonizando canal 40: Dibujos animados"
 * - "peliculas": "Sintonizando canal 55: Cine premium"
 * - default: "Categoría no encontrada en la guía."
 */

// Tu código aquí:

// ==========================================
// NIVEL INTERMEDIO: Condiciones anidadas y lógica combinada
// ==========================================

/**
 * EJERCICIO 7: Alerta de medidor de batería de celular (if - else if - else)
 *
 * Contexto: Un sistema operativo móvil monitorea el porcentaje de batería y si está conectado al cargador.
 * Variables iniciales:
 *   const porcentajeBateria: number = 15;
 *   const estaConectado: boolean = false;
 *
 * Enunciado:
 * - Si porcentajeBateria es mayor a 100 o menor a 0: mostrar "Lectura de batería errónea."
 * - Si está conectado:
 *     - Si la batería llega a 100: "Batería completa. Desconecte el cargador."
 *     - Si no: "Cargando dispositivo..."
 * - Si NO está conectado:
 *     - Menor o igual a 15: "Batería crítica: Activa el modo ahorro de energía."
 *     - Entre 16 y 50: "Nivel de batería moderado."
 *     - Más de 50: "Batería en buen nivel."
 */

// Tu código aquí:

/**
 * EJERCICIO 8: Tarifa de estacionamiento por tipo de vehículo (switch - case + if)
 *
 * Contexto: Un garaje cobra por hora según el tipo de transporte:
 * - "moto": 5 por hora
 * - "auto": 10 por hora
 * - "camioneta": 15 por hora
 *
 * Variables iniciales:
 *   const tipoVehiculo: string = "auto";
 *   const horasEstacionado: number = 3;
 *   const esClienteFrecuente: boolean = true;
 *   let tarifaPorHora: number = 0;
 *
 * Enunciado:
 * 1. Usa switch-case para asignar la tarifa por hora según el tipo de vehículo. Si el tipo no existe, tarifa = 0.
 * 2. Si la tarifa es válida (mayor a 0):
 *    - Calcula el costo total (horasEstacionado * tarifaPorHora).
 *    - Si esClienteFrecuente es true, resta un descuento fijo de 5 al costo final.
 *    - Imprime el costo final a cobrar.
 * 3. Si el tipo no es válido, imprime "Tipo de vehículo no admitido."
 */

// Tu código aquí:

/**
 * EJERCICIO 9: Control de equipaje de mano en mostrador de aeropuerto (if anidado / operadores lógicos)
 *
 * Contexto: La aerolínea impone dos límites estrictos:
 * - Peso máximo: 10 kg.
 * - Longitud total máxima (suma de alto + ancho + profundidad): 115 cm.
 *
 * Variables iniciales:
 *   const pesoMaletaKg: number = 11.5;
 *   const sumaDimensionesCm: number = 110;
 *
 * Enunciado:
 * Evalúa las variables y muestra exactamente una de las 4 opciones:
 * 1. Si cumple ambas reglas: "Equipaje aprobado para llevar en cabina."
 * 2. Si falla en peso pero pasa en dimensiones: "Rechazado: Excede el peso máximo permitido."
 * 3. Si pasa en peso pero falla en dimensiones: "Rechazado: Excede las dimensiones máximas permitidas."
 * 4. Si falla en ambas: "Rechazado: Excede tanto el peso como las dimensiones."
 */

// Tu código aquí:

/**
 * EJERCICIO 10: Facturación del menú del día con propina y delivery (switch-case + if-else)
 *
 * Contexto: Un restaurante cobra según el combo elegido:
 * - "ejecutivo": 25
 * - "vegetariano": 30
 * - "familiar": 55
 *
 * Variables iniciales:
 *   const comboElegido: string = "vegetariano";
 *   const pedirDelivery: boolean = true;
 *   const dejarPropina: boolean = true;
 *   let totalPagar: number = 0;
 *
 * Enunciado:
 * 1. Usa switch-case para guardar el precio base según el combo. Si el combo no existe, totalPagar = 0.
 * 2. Si el combo es válido:
 *    - Si pedirDelivery es true, suma 5 por costo de envío.
 *    - Si dejarPropina es true, suma un 10% del precio base del combo como propina.
 *    - Imprime: "Pedido confirmado. Total final a pagar: [totalPagar]"
 * 3. Si el combo no existe:
 *    - Imprime: "El combo solicitado no está disponible en la carta."
 */

// Tu código aquí:*/



















/* ejecicios */
/* 
    ejercicion 1
    quiero q puedan realizar una calculadora de multiplicacion
    pero sin  el simbolo *
    4*5 = 5+5+5+5 o 4+4+4+4+4
*/
let numeroA: number = 4;
let numeroB: number = 5;
let resultado: number = 0;
let vueltas: number = Math.abs(numeroB);
for (let i = 0; i < vueltas; i++) {
    resultado = resultado + numeroA;
}
if (numeroB < 0) {
    resultado = -resultado;
}
console.log(`El resultado es: ${resultado}`); 

/* 
    ejercio 2
    sacar el factorial de un numero
    !5 = 1*2*3*4*5
*/

let numero: number = 7;
let factorial: number = 1;
if (numero < 0) {
    console.log("Error: No se puede calcular el factorial de un número negativo");
} else {
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }
    console.log(`El factorial de ${numero} es: ${factorial}`);
}






let estudiantes = [
  { nombre: "Juan", notas: [15, 18] },
  { nombre: "María", notas: [12, 16, 14, 19] },
  { nombre: "Carlos", notas: [10, 20, 15, 18, 17, 16] },
  { nombre: "Ana", notas: [14, 13] }
];
for (let i = 0; i < estudiantes.length; i++) {
  let suma = 0;
  for (let j = 0; j < estudiantes[i].notas.length; j++) {
    suma += estudiantes[i].notas[j];
  }
  const promedio = suma / estudiantes[i].notas.length;
  console.log(`${estudiantes[i].nombre}: promedio ${promedio.toFixed(2)}`);
}





let estudiantes2 = [
    {nombre: 'n1', nota: [65, 90, 80]},
    {nombre: 'n2', nota: [98,94,56,67]},
];
for ( let m = 0; m < estudiantes2.length; m++ ) {
    let suma = 0
    for (let n = 0; n < estudiantes2[m].nota.length; n++) {
        suma += estudiantes2[m].nota[n];
    }
      const promedio = suma / estudiantes[m].notas.length;
console.log(`${estudiantes2[m].nombre}: promedio ${promedio.toFixed(2)}`);
}