const barb = document.getElementById("Barbacoa");
const vege = document.getElementById("Vegetariana");
const pepp = document.getElementById("Pepperoni");
const ques = document.getElementById("Quesos");
const pers = document.getElementById("Personal");
const medi = document.getElementById("Mediana");
const fami = document.getElementById("Familiar");
const seccionPedidos = document.getElementById("pedido");
const seccionTamaño = document.getElementById("tamaños");
const seccionOpe = document.getElementById("operations");
const seccionOpeTamaño = document.getElementById("tamaño");
seccionOpe.style.display = "none";
seccionTamaño.style.display = "none";
seccionPedidos.style.display = "none";

const preciosPizzas = [6, 7, 9, 10];
const preciosTam = [2, 4];
let precio, precioTotal = 0;
let pizza = 0;
let pedido = 0;
//variables aux para confirmar pedidos
let auxTamaño, auxPrecio;
function selectorPizza(event) {
    const pizzaClickeada = event.currentTarget.id;
    pizza++;
    seccionOpe.style.display = "flex";
    seccionPedidos.style.display = "block";
    if (seccionPedidos.innerHTML === "") {
        seccionPedidos.innerHTML += "<h2>Nuevo Pedido:</h2>";
    }
    switch (pizzaClickeada) {
        case "Barbacoa":
            precio = preciosPizzas[0];
            seccionPedidos.insertAdjacentHTML("beforeend", `<h3>Pizza Barbacoa: ${precio}€</h3>`);
            break;
        case "Vegetariana":
            precio = preciosPizzas[1];
            seccionPedidos.insertAdjacentHTML("beforeend", `<h3>Pizza Vegetariana: ${precio}€</h3>`);
            break;
        case "Pepperoni":
            precio = preciosPizzas[2];
            seccionPedidos.insertAdjacentHTML("beforeend", `<h3>Pizza Pepperoni: ${precio}€</h3>`);
            break;
        case "Quesos":
            precio = preciosPizzas[3];
            seccionPedidos.insertAdjacentHTML("beforeend", `<h3>Pizza de Quesos: ${precio}€</h3>`);
            break;
        default:
    }
    precioTotal += precio;
    seccionPedidos.insertAdjacentHTML("beforeend", `<i>Pizzas selecionadas: ${pizza} <br> Precio Total Pedido: ${precioTotal}€ <br>-------------------</i>`);
    if (auxTamaño !== undefined) {
        selecionarTamaño({ currentTarget: { id: auxTamaño } }); //1 linea, multiples horas, logica descuierta, pero no aplicacion, fuck js
    }
}
barb.addEventListener("click", selectorPizza);
vege.addEventListener("click", selectorPizza);
pepp.addEventListener("click", selectorPizza);
ques.addEventListener("click", selectorPizza);

function selecionarTamaño(event) {
    let nuevoprecio;
    const tamañoClickeado = event.currentTarget.id;
    seccionOpeTamaño.style.display = "block";
    switch (tamañoClickeado) {
        case "Personal":
            seccionOpeTamaño.innerHTML = `<h3>Tamaño selecionado: ${tamañoClickeado}</h3> <i>sin costo adicional</i><br><i>Precio Total pedido: ${precioTotal}€</i>`;
            break;
        case "Mediana":
            nuevoprecio = precioTotal + (preciosTam[0] * pizza);
            auxPrecio = nuevoprecio;
            seccionOpeTamaño.innerHTML = `<h3>Tamaño selecionado: ${tamañoClickeado}</h3> <i>Precio adicional por pizza: ${preciosTam[0]}€</i><br><i>Precio Total pedido: ${nuevoprecio}€</i>`;
            break;
        case "Familiar":
            nuevoprecio = precioTotal + (preciosTam[1] * pizza);
            auxPrecio = nuevoprecio;
            seccionOpeTamaño.innerHTML = `<h3>Tamaño selecionado: ${tamañoClickeado}</h3> <i>Precio adicional por pizza: ${preciosTam[1]}€</i><br><i>Precio Total pedido: ${nuevoprecio}€</i>`;
            break;
        default:
    }
    auxTamaño = tamañoClickeado;
}
pers.addEventListener("click", selecionarTamaño);
medi.addEventListener("click", selecionarTamaño);
fami.addEventListener("click", selecionarTamaño);

function borrarPedidoCompleto() {
    seccionPedidos.innerHTML = "";
    seccionPedidos.style.display = "none";
    seccionTamaño.style.display = "none";
    seccionOpe.style.display = "none";
    seccionOpeTamaño.innerHTML = "";
    pizza = 0, precioTotal = 0, auxTamaño = undefined;
}
document.getElementById("borrar").addEventListener("dblclick", borrarPedidoCompleto)

function añadirTamaño() {
    if (pizza > 0) {
        seccionTamaño.style.display = "flex";
    }
}
document.getElementById("add-size").addEventListener("dblclick", añadirTamaño)

function completarPedido() {
    if (pizza > 0) {
        pedido++;
        alert("Pedido confirmado con éxito!");
        if (seccionOpeTamaño.innerHTML == "") {
            document.getElementsByTagName("main")[0].insertAdjacentHTML("beforeend", `<section style = "display:block;"><h2>Pedido ${pedido}:</h2> <i>Número de Pizzas: ${pizza} - Tamaño Personal</i><h3>Precio Total: ${precioTotal}€</h3></section>`);
        } else {
            if (auxTamaño == "Personal"){
            document.getElementsByTagName("main")[0].insertAdjacentHTML("beforeend", `<section style = "display:block;"><h2>Pedido ${pedido}:</h2> <i>Número de Pizzas: ${pizza} - Tamaño Personal</i><h3>Precio Total: ${precioTotal}€</h3></section>`);
            } else {
            document.getElementsByTagName("main")[0].insertAdjacentHTML("beforeend", `<section  style = "display:block;"><h2>Pedido ${pedido}:</h2> <i>Número de Pizzas: ${pizza} -</i> <i>Tamaño ${auxTamaño}</i><h3>Precio Total: ${auxPrecio}€</h3></section>`);
            }
        }
        borrarPedidoCompleto();
    }
}
document.getElementById("confirmar").addEventListener("dblclick", completarPedido);
