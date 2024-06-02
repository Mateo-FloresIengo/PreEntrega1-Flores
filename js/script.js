// Obtengo elementos con DOM
const cardsContainer = document.getElementById("cards-container");
const verCarrito = document.getElementById("ver-carrito");
const carritoContainer = document.getElementById("carrito-container");
const cantidadCarrito = document.getElementById("cantidadCarrito");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Capturo los productos del json mediante fetch
const obtenerProductos = async () => {
    const response = await fetch("data.json");
    const data = await response.json();


    // Recorro el json de productos para mostralos en un div
    data.forEach((producto) => {
        // Creo el div donde van a estar los productos
        let content = document.createElement("div");
        content.className = "cards";
        content.innerHTML = `
        <img src="${producto.img}">
        <h3>${producto.nombre}</h3>
        <p>$ ${producto.precio}</p>
        `;
    
        cardsContainer.append(content);
    
        // Creo el boton para agregar productos al carrito
        let botonCard = document.createElement("button");
        botonCard.innerText = "Añadir al carrito";
        botonCard.className = "boton-card";
    
        content.append(botonCard);
  
        // Evento para agregar los productos al carrito
        botonCard.addEventListener("click", () => {
        
            const repetir = carrito.some((repetirProducto) => repetirProducto.id === producto.id);
          
            if (repetir) {
                carrito.map((prod) => {
                    if(prod.id === producto.id){
                        prod.cantidad++;
                    };
                });
            } else {
                carrito.push({
                    id: producto.id,
                    img: producto.img,
                    nombre: producto.nombre,
                    precio: producto.precio,
                    cantidad: producto.cantidad,
                });
            };


           Toastify({
                text: "Producto añadido",
                duration: 3000,
                style: {
                   background: "linear-gradient(to right, #00b09b, #96c93d)",
                }
            }).showToast();
                  
            contadorCarrito();
            guardarLocal();
        });
    });


};


obtenerProductos();

// Funcion para ver el carrito
const mostrarCarrito = () => {


    carritoContainer.innerHTML = "";
    carritoContainer.style.display = "flex";


    // Creo el div donde se van a mostrar los productos en el carrito
    const carritoHeader = document.createElement("div");
    carritoHeader.className = "carrito-header";
    carritoHeader.innerHTML = `
        <h1 class="titulo-carrito">Carrito</h1>
    `;


    carritoContainer.append(carritoHeader);


    // Creo el boton para cerrar el carrito
    const cuadroBoton = document.createElement("button");
    cuadroBoton.innerText = "X";
    cuadroBoton.className = "btn btn-light";


    // Evento para cerrar el carrito
    cuadroBoton.addEventListener("click", () => {
        carritoContainer.style.display = "none";
    });


    carritoHeader.append(cuadroBoton);


    // Recorro el carrito para mostrar los productos que tiene
    carrito.forEach((producto) => {
        // Creo el div donde se van a mostrar los productos del carrito
        let carritoContent = document.createElement("div");
        carritoContent.className = "carrito-content";
        carritoContent.innerHTML = `
            <img class="img-carrito" src="${producto.img}">
            <h3 class="h3-carrito">${producto.nombre}</h3>
            <p class="p-carrito">$ ${producto.precio}</p>
            <span id="restar" class="btn btn-success"> - </span>
            <p class="p-carrito">Cantidad: ${producto.cantidad}</p>
            <span id="sumar" class="btn btn-success"> + </span>
            <p class="p-carrito">Total: ${producto.cantidad * producto.precio}</p>
            <span class="btn btn-danger"> X </span>
        `;


        carritoContainer.append(carritoContent);


        // Obtengo el boton de restar producto del carrito
        let restar = carritoContent.querySelector("#restar");


        restar.addEventListener("click", () => {
            if (producto.cantidad !== 1) {
                producto.cantidad--;
            };
            guardarLocal();
            mostrarCarrito();
        });


        // Obtengo el boton de sumar producto del carrito
        let sumar = carritoContent.querySelector("#sumar");


        sumar.addEventListener("click", () => {
            producto.cantidad++;
            guardarLocal();
            mostrarCarrito();
        });
  


        // Obtengo el boton para eliminar producto del carrito
        let botonEliminar = carritoContent.querySelector(".btn-danger");


        // Evento para eliminar producto del carrito
        botonEliminar.addEventListener("click", () => {
            eliminarProducto(producto.id);
        });


    });


    // Metodo para calcular el total de los productos del carrito
    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);


    // Creo un div para mostrar el total de la compra
    const totalCompra = document.createElement("div");
    totalCompra.className = "total-compra";
    totalCompra.innerHTML = `Total a pagar: $${total}`;
    carritoContainer.append(totalCompra);


    // Creo un boton de finalizar compra
    const finalizarCompra = document.createElement("button");
    finalizarCompra.className = "btn btn-outline-secondary";
    finalizarCompra.innerText = "Finalizar compra";
    carritoContainer.append(finalizarCompra);


    finalizarCompra.addEventListener("click", () => {
        Swal.fire({
            title: "Compra Finalizada!",
            text: "Muchas gracias por elegirnos!",
            icon: "success",
            confirmButtonText: "Volver a comprar"
        });


        limpiarStorage();
    });
};


// Evento para mostrar el carrito
verCarrito.addEventListener("click", mostrarCarrito);




// Funcion para eliminar un producto del carrito
const eliminarProducto = (id) => {
    const foundId = carrito.find((element) => element.id === id);


    console.log(foundId);


    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId;
    });


    contadorCarrito();
    guardarLocal();
    mostrarCarrito();
};


// Funcion para mostrar el numero de productos en el carrito
const contadorCarrito = () => {
   cantidadCarrito.style.display = "block";


   const carritoLength = carrito.length;


   localStorage.setItem("carritoLength", JSON.stringify(carritoLength));


   cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
};


// Funcion para guardar elementos en LocalStorage
const guardarLocal = () => {
   localStorage.setItem("carrito", JSON.stringify(carrito));
};


contadorCarrito();


// Funcion para limpiar el localStorage y el carrito una vez finalizado el pedido
function limpiarStorage() {
   localStorage.clear();
   carrito = JSON.parse(localStorage.getItem("carrito")) || [];
   carritoContainer.style.display = "none";
   contadorCarrito();
};
