
// Funcion a ejecutar cuando el usuario realiza el pedido
function guardarPedido() {
    // Obtener los valores de los campos del formulario
    const nombreUsuario = document.getElementById("nombre").value;
    const telefonoUsuario = document.getElementById("telefono").value;
    const pizzaSeleccionada = document.getElementById("selector-pizza").value;
    const bebidaSeleccionada = document.getElementById("selector-bebida").value;
    const postreSeleccionado = document.getElementById("selector-postre").value;

    // Crear un objeto con los datos capturados
    const pedido = {
        nombre: nombreUsuario,
        telefono: telefonoUsuario,
        pizza: pizzaSeleccionada,
        bebida: bebidaSeleccionada,
        postre: postreSeleccionado
    };

    // Convertir el objeto a formato JSON
    const pedidoJSON = JSON.stringify(pedido);

    // Guardar el JSON en localStorage:
    localStorage.setItem("pedido", pedidoJSON);
 
}

// Funcion a ejecutar cuando el usuario realiza el pedido
function mostrarPedido () {

    // Recuperar la cadena JSON del localStorage
    const pedidoJSON = localStorage.getItem("pedido");

    // Convierte la cadena JSON a un objeto
    const pedido = JSON.parse(pedidoJSON);

    // Vincular la variable con la lista del HTML
    const lista = document.getElementById("lista-pedido");

    // Crear los items de la lista con los datos captados
    const pizzaItem = document.createElement("li");
    pizzaItem.innerText = `Pizza: ${pedido.pizza}`;

    const bebidaItem = document.createElement("li");
    bebidaItem.innerText = `Bebida: ${pedido.bebida}`;

    const postreItem = document.createElement("li");
    postreItem.innerText = `Postre: ${pedido.postre}`;

    //Agregar los items a la lista
    lista.appendChild(pizzaItem);
    lista.appendChild(bebidaItem);
    lista.appendChild(postreItem);
    
}

// Evento que se ejecuta cuando el usuario hace click en realizar pedido
document.getElementById("form-pedido").addEventListener("submit", (event) => {
    event.preventDefault();
    guardarPedido();
    mostrarPedido();
});

// Funcion a ejecutar cuando el usuario finaliza el pedido
function finalizarPedido () {
    const nombreUsuario = document.getElementById("nombre").value;
    const mensajeFinal = document.getElementById("mensaje-final");
    const mensaje = document.createElement("p");
    mensaje.innerText = `Muchas gracias ${nombreUsuario} por su pedido. Nos pondremos en contacto a la brevedad para entregarle sus productos.`
    mensajeFinal.appendChild(mensaje);
    mensaje.style.cssText = "margin: 10px ; font-size: 1.5rem ; font-style: italic";
}

// Funcion para limpiar el localStorage una vez finalizado el pedido
function limpiarStorage() {
    localStorage.clear();
}

// Evento a ejectutar cuando el usuario hace click en finalizar pedido
document.getElementById("finalizar-pedido").addEventListener("click", function(e) {
    finalizarPedido();
    limpiarStorage();
});