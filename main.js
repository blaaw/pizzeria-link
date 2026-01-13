const barb = document.getElementById("Barbacoa");
const vege = document.getElementById("Vegetariana");
const pepp = document.getElementById("Pepperoni");
const ques = document.getElementById("Quesos");
const pers = document.getElementById("Personal");
const medi = document.getElementById("Mediana");
const fami = document.getElementById("Familiar");
const seccionPedidos = document.getElementById("pedido");
seccionPedidos.style.display = "none";

const preciosPizzas = [8, 10, 12, 9];
const preciosTamaño = [0, 3, 5]
let precio, precioTotal = 0;
let pizza = 0;

function selectorPizza(event) {
    const pizzaClickeada = event.currentTarget.id;
    pizza++;
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
    seccionPedidos.insertAdjacentHTML("beforeend", `<p>Pizzas selecionadas: ${pizza} <br> Precio Total Pedido: ${precioTotal}€ <br>-------------------</p>`);
}
barb.addEventListener("dblclick", selectorPizza);
vege.addEventListener("dblclick", selectorPizza);
pepp.addEventListener("dblclick", selectorPizza);
ques.addEventListener("dblclick", selectorPizza);

function borrarPedidoCompleto() {
    seccionPedidos.innerHTML = "";
    seccionPedidos.style.display = "none";
    pizza = 0, precioTotal = 0;

}
document.getElementById("borrar").addEventListener("dblclick", borrarPedidoCompleto)