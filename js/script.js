let precioPizza = 10000
let precioBebida = 2000
let precioPostre = 5000

function correr(){
    
    let pedidoPizza = Number(prompt("¿Cuántas pizzas desea pedir?"))
    let buclePizza = 0
    
    if(pedidoPizza>0){
    
        while(buclePizza!=4){
            buclePizza = Number(prompt("Marque con un numero el sabor de la Pizza. Para finalizar, marque 4: 1.Muzzarella - 2.Napolitana - 3.Provolone - 4.Finalizar"))
        
            switch(buclePizza){
                case 1: document.write("Usted seleccionó: Muzzarella <br>");
                break;
                case 2: document.write("Usted seleccionó: Napolitana <br>");
                break;
                case 3: document.write("Usted seleccionó: Provolone <br>");
                break;
                case 4: document.write(`Cantidad de pizzas seleccionadas: ${pedidoPizza} <br> El precio de cada pizza es: $${precioPizza} <br><br>`);
            }
        
        }
    }
    else{
        document.write("No desea pedir pizza.<br><br>")
    }
    
    let pedidoBebida = Number(prompt("¿Cuantas bebidas desea pedir?"))
    let bucleBebida = 0
    
    if(pedidoBebida>0){
    
        while(bucleBebida!=4){
            bucleBebida = Number(prompt("Marque con un numero la bebida que desea pedir. Para finalizar, marque 4: 1.Agua - 2.Gaseosa - 3.Cerveza - 4.Finalizar"))
        
            switch(bucleBebida){
                case 1: document.write("Usted seleccionó: Agua <br>");
                break;
                case 2: document.write("Usted seleccionó: Gaseosa <br>");
                break;
                case 3: document.write("Usted seleccionó: Cerveza <br>");
                break;
                case 4: document.write(`Cantidad de bebidas seleccionadas: ${pedidoBebida} <br> El precio de cada bebida es: $${precioBebida} <br><br>`);
            }
        
        }
    }
    else{
        document.write(" <br> No desea pedir bebidas.<br><br>")
    }
    
    let pedidoPostre = Number(prompt("¿Cuántos postres desea pedir?"))
    let buclePostre = 0
    
    if(pedidoPostre>0){
    
        while(buclePostre!=4){
            buclePostre = Number(prompt("Marque con un numero el postre que desea pedir. Para finalizar, marque 4: 1.Helado - 2.Torta - 3.Flan - 4.Finalizar"))
        
            switch(buclePostre){
                case 1: document.write("<br> Usted seleccionó: Helado <br>");
                break;
                case 2: document.write("Usted seleccionó: Torta <br>");
                break;
                case 3: document.write("Usted seleccionó: Flan <br>");
                break;
                case 4: document.write(`Cantidad de postres seleccionadas: ${pedidoPostre} <br> El precio de cada postre es: $${precioPostre} <br><br>`);
            }
        
        }
    }
    else{
        document.write("<br> No desea pedir postre.<br><br>")
    }
    
    let calculoPizza = pedidoPizza * precioPizza
    let calculoBebida = pedidoBebida * precioBebida
    let calculoPostre = pedidoPostre * precioPostre
    let precioFinal = calculoPizza + calculoBebida + calculoPostre
    document.write(`<br> El precio final de su pedido es: $${precioFinal}`)
    
}