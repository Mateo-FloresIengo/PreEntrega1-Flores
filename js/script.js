//MENSAJE BIENVENIDA
let mensajeBienvenida = alert("Bienvenido/a a Pizzeria El Jefe");
//FUNCION PARA ACTUALIZAR EL MENSAJE DE BIENVENIDA
function actualizarMensaje() {
    let horaActual = new Date().getHours();
    console.log(horaActual);
    let mensaje;

    if(horaActual < 12) {
        mensaje = "¡Buenos dias! Hace tu pedido para disfrutar del mejor sabor de nuestras pizzas";
    } else if(horaActual < 19) {
        mensaje = "¡Buenas tardes! Hace tu pedido para disfrutar del mejor sabor de nuestras pizzas";
    } else {
        mensaje = "¡Buenas noches! Hace tu pedido para disfrutar del mejor sabor de nuestras pizzas";
    }
    alert(mensaje);
}
actualizarMensaje();

function correr(){
    // CLASE PARA CREAR PRODUCTOS
    class Producto {
        constructor(nombre, precio){
            this.nombre = nombre;
            this.precio = precio;
        }
    };

    let producto1 = new Producto("Muzzarela", 100);
    let producto2 = new Producto("Napolitana", 125);
    let producto3 = new Producto("Provolone", 150);
    let producto4 = new Producto("Agua", 30);
    let producto5 = new Producto("Gaseosa", 40);
    let producto6 = new Producto("Cerveza", 50);
    let producto7 = new Producto("Helado", 60);
    let producto8 = new Producto("Torta", 70);
    let producto9 = new Producto("Flan", 80);

    let productos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9];

    let mensaje = "";
    // Recorrer el array de productos y agregar la información de cada producto al string
    productos.forEach(producto => {
        mensaje += `Producto: ${producto.nombre} - Precio: $${producto.precio}\n`;
    });
    // Mostrar la información de todos los productos en un alert
    alert(`Nuestra carta:\n${mensaje}`);

    // Definir un array de carrito para almacenar los productos
    let carrito = [];

    let pedidoPizza = prompt(`Ingrese el sabor de la pizza que desea pedir:\n- ${producto1.nombre}\n- ${producto2.nombre}\n- ${producto3.nombre}`);
    let precioPizza = Number(prompt("Ingrese el precio del producto:"));

    let nuevoProducto = {
        nombre: pedidoPizza,
        precio: parseFloat(precioPizza)
    };
    carrito.push(nuevoProducto);

    let pedidoBebida = prompt(`Ingrese la bebida que desea pedir:\n- ${producto4.nombre}\n- ${producto5.nombre}\n- ${producto6.nombre}`);
    let precioBebida = Number(prompt("Ingrese el precio del producto:"));
    let nuevoProducto2 = {
        nombre: pedidoBebida,
        precio: parseFloat(precioBebida)
    };
    carrito.push(nuevoProducto2);

    let pedidoPostre = prompt(`Ingrese el postre que desea pedir:\n- ${producto7.nombre}\n- ${producto8.nombre}\n- ${producto9.nombre}`);
    let precioPostre = Number(prompt("Ingrese el precio del producto:"));
    let nuevoProducto3 = {
        nombre: pedidoPostre,
        precio: parseFloat(precioPostre)
    };
    carrito.push(nuevoProducto3);


    let total = 0;
    let mensajeCarrito = "";

    // Recorrer el array carrito y agregar los datos de cada producto al mensajeCarrito
    carrito.forEach(producto => {
        mensajeCarrito += `Producto: ${producto.nombre} - Precio: $${producto.precio}\n`;
    });
    // Recorre el array "carrito" y suma los precios de los productos
    carrito.forEach(producto => {
        total += parseFloat(producto.precio);
    });

    // Muestra los productos del carrito y el total del pedido al usuario
    document.write(`Productos en el carrito:<br>${mensajeCarrito}<br><br>`);
    document.write(`El total del pedido es: $${total}`);
};