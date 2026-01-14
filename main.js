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
const preciosTamaño = [0, 3, 5]
let precio, precioTotal = 0;
let pizza = 0;

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
}
barb.addEventListener("dblclick", selectorPizza);
vege.addEventListener("dblclick", selectorPizza);
pepp.addEventListener("dblclick", selectorPizza);
ques.addEventListener("dblclick", selectorPizza);

function borrarPedidoCompleto() {
    seccionPedidos.innerHTML = "";
    seccionPedidos.style.display = "none";
    seccionTamaño.style.display = "none";
seccionOpe.style.display = "none";
    seccionOpeTamaño.innerHTML = "";
    pizza = 0, precioTotal = 0;

}
document.getElementById("borrar").addEventListener("dblclick", borrarPedidoCompleto)

function añadirTamaño() {
    if (precio > 0){
    seccionTamaño.style.display = "flex";
    } else {
        //no hace nada
    }
}
document.getElementById("add-size").addEventListener("dblclick", añadirTamaño)

function selecionarTamaño(event){
    let nuevoprecio;
    const tamañoClickeado = event.currentTarget.id;
    seccionOpeTamaño.style.display = "block";
    switch (tamañoClickeado) {
        case "Personal":
            seccionOpeTamaño.innerHTML = `<h3>Tamaño selecionado: ${tamañoClickeado}</h3> <i>sin costo adicional</i><br><i>Precio Total pedido: ${precioTotal}€</i>`;
            break;
        case "Mediana":
            const precioMediana = 2;
            nuevoprecio = precioTotal + (precioMediana * pizza);
            seccionOpeTamaño.innerHTML = `<h3>Tamaño selecionado: ${tamañoClickeado}</h3> <i>Precio adicional por pizza: ${precioMediana}</i><br><i>Precio Total pedido: ${nuevoprecio}€</i>`;
            break;
        case "Familiar":
            const precioFamiliar = 4;
            nuevoprecio = precioTotal + (precioFamiliar * pizza);
            seccionOpeTamaño.innerHTML = `<h3>Tamaño selecionado: ${tamañoClickeado}</h3> <i>Precio adicional por pizza: ${precioFamiliar}</i><br><i>Precio Total pedido: ${nuevoprecio}€</i>`;
            break;
        default:
    }
}
pers.addEventListener("dblclick", selecionarTamaño);
medi.addEventListener("dblclick", selecionarTamaño);
fami.addEventListener("dblclick", selecionarTamaño);