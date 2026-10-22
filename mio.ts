/*interface ProductoStock {
  id: number;
  nombre: string;
  stock: number;
}
function verificarStock(inventario: ProductoStock[]): void {
  inventario.forEach(function (producto) {
    if (producto.stock < 5) {
     console.log(`ALERTA: El producto ${producto.nombre} tiene stock bajo (${producto.stock} unidades)`);
    } else {
    console.log(`OK: ${producto.nombre} en stock normal`);
    }
  });
}
const inventario: ProductoStock[] = [
  { id: 101, nombre: "Teclado Mecánico", stock: 12 },
  { id: 102, nombre: "Mouse Pad XL", stock: 3 },
  { id: 103, nombre: "Cable HDMI 2.1", stock: 2 },
];
verificarStock(inventario);*/


/*const horasSemanales: number[] = [5, 3, 6, 2, 8, 4, 1];
let diasSuperados: number = 0;

horasSemanales.forEach((horas, index) => {
  if (horas > 4) {
    diasSuperados++;
  }
  const supero = horas > 4 ? "Superó" : "No superó";
  console.log(`Día ${index + 1}: ${horas} hrs -> ${supero} la meta diaria`);
});

console.log(`\nTotal de días que superaron las 4 horas: ${diasSuperados}`);

interface UsuarioRaw {
  primerNombre: string;
  apellidoPaterno: string;
  edad: number;
}
interface UsuarioPerfil {
  nombreCompleto: string;
  esMayorDeEdad: boolean;
}
const usuariosRaw: UsuarioRaw[] = [
  { primerNombre: "Andrés", apellidoPaterno: "Guzmán", edad: 17 },
  { primerNombre: "Camila", apellidoPaterno: "Rios", edad: 24 },
  { primerNombre: "Diego", apellidoPaterno: "Salvatierra", edad: 15 },
];
const perfiles: UsuarioPerfil[] = usuariosRaw.map((usuario) => ({
  nombreCompleto: `${usuario.primerNombre} ${usuario.apellidoPaterno}`.toUpperCase(),
  esMayorDeEdad: usuario.edad >= 18,
}));
console.log(perfiles);

const correos: string[] = [
  "admin@servicios.bo",
  "contacto@instituto.edu",
  "ventas@techstore.com",
  "soporte@servicios.bo",
];
const dominios = correos.map(correo => correo.split('@')[1]);
console.log(dominios);


interface Transaccion {
  id: string;
  monto: number;
  tipo: string;
  aprobada: boolean;
}
const historialTransacciones: Transaccion[] = [
  { id: "tx-01", monto: 50, tipo: "egreso", aprobada: true },
  { id: "tx-02", monto: 450, tipo: "egreso", aprobada: true },
  { id: "tx-03", monto: 1200, tipo: "ingreso", aprobada: true },
  { id: "tx-04", monto: 300, tipo: "egreso", aprobada: false },
  { id: "tx-05", monto: 150, tipo: "egreso", aprobada: true },
];
const egresosAprobados = historialTransacciones.filter(t => 
  t.tipo === "egreso" && 
  t.aprobada === true && 
  t.monto > 100
);
console.log(egresosAprobados);*

const rutasWeb: string[] = [
  "perfil-usuario",
  "blog",
  "contacto",
  "configuracion-avanzada-cuenta",
  "dashboard-admin",
  "faq",
];
interface RutaSlug {
  original: string;
  tieneGuion: boolean;
  longitud: number;
  cumple: boolean;
}
interface Usuario {
  slug: string;
  nombre: string;
}
const usuarios: Usuario[] = [
  { slug: "perfil-usuario", nombre: "rutero 1" },
  { slug: "dashboard-admin", nombre: "nose que poner" },
];
const analizarSlug = (slug: string): RutaSlug => ({
  original: slug,
  tieneGuion: slug.includes("-"),
  longitud: slug.length,
  cumple: slug.includes("-") && slug.length <= 15,
});
const buscarNombre = (slug: string): string => {
  const usuario = usuarios.find((u) => u.slug === slug);
  return usuario ? usuario.nombre : "Usuario desconocido";
};
const analisis: RutaSlug[] = rutasWeb.map(analizarSlug);
const rutasFiltradas: RutaSlug[] = analisis.filter((r) => r.cumple);
console.log("=== ANÁLISIS DE CADA SLUG ===");
analisis.forEach((r) => {
  console.log(
    `"${r.original}" | guion: ${r.tieneGuion} | long: ${r.longitud} | cumple: ${r.cumple}`
  );
});
console.log("\n=== RUTAS QUE CUMPLEN ===");
rutasFiltradas.forEach((r) => {
  console.log(`"${r.original}" → ${buscarNombre(r.original)}`);
});


const flotilla: Vehiculo[] = [
  { placa: "4521-ABC", marca: "Nissan", anio: 2021, enMantenimiento: false },
  { placa: "1289-XYZ", marca: "Toyota", anio: 2018, enMantenimiento: false },
  { placa: "3310-BOL", marca: "Toyota", anio: 2022, enMantenimiento: true },
  { placa: "7741-KLP", marca: "Toyota", anio: 2023, enMantenimiento: false },
];
const resultado = flotilla.find(
  v => v.marca === "Toyota" && v.anio >= 2020 && !v.enMantenimiento
);
console.log(resultado?.placa);


const puntajes: number[] = [45, 88, 105, 112, 99, 140];
const resultado = puntajes.find(p => p > 100 && p % 2 === 0);
console.log(resultado);*/


interface ProductoCarrito {
    sku: string;
    nombre: string;
    cantidad: number;
}
const carrito: ProductoCarrito[] = [
    { sku: "SKU-100", nombre: "Termo 1L", cantidad: 1 },
    { sku: "SKU-540", nombre: "Taza térmica", cantidad: 2 },
    { sku: "SKU-990", nombre: "Stickers Dev", cantidad: 3 },
];
function agregarUnidadAlCarrito(carrito: ProductoCarrito[], sku: string): void {
    const indice = carrito.findIndex(p => p.sku === sku);
    if (indice == -1) {
        carrito[indice].cantidad += 1;
    } else {
        console.log("Producto no encontrado");
    }
}
agregarUnidadAlCarrito(carrito, "SKU-990");