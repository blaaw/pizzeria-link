# 🍕 Pizzería LINK

**Pizzería LINK** es un pequeño juego de navegador y simulador de pedidos de pizza desarrollado como proyecto personal para aprender JavaScript.

El proyecto nació durante mis clases de **DAW (Desarrollo de Aplicaciones Web)**, mientras empezábamos a trabajar con JavaScript. Al principio conocía la sintaxis y los conceptos básicos del lenguaje, pero me costaba dar el salto de hacer ejercicios aislados a construir algo que realmente funcionara.

Por eso decidí hacer algo sencillo, pero suficientemente completo como para obligarme a utilizar JavaScript de verdad: **un simulador de pedidos de una pizzería**.

## ¿En qué consiste?

El usuario puede crear pedidos seleccionando diferentes pizzas y, posteriormente, elegir el tamaño de las pizzas.

Actualmente hay cuatro tipos de pizza:

*  Pizza Barbacoa
*  Pizza Vegana
*  Pizza Pepperoni
*  Pizza Cuatro Quesos

Y tres tamaños:

* Personal
* Mediana
* Familiar

El precio se calcula en función de las pizzas seleccionadas y del tamaño elegido. Una vez terminado el pedido, se puede confirmarlo y este queda mostrado como un pedido completado.

También existe la posibilidad de borrar el pedido actual y empezar de nuevo.

## ¿Qué aprendí haciendo este proyecto?

Este proyecto fue principalmente un ejercicio para aprender a pensar en JavaScript **más allá de la sintaxis** y empezar a crear proyectos por mi cuenta. Entre otras cosas aprendí a trabajar con:

* Manipulación del DOM.
* `getElementById` y selección de elementos.
* Eventos y `addEventListener`.
* Funciones y parámetros.
* Variables de estado.
* Actualización dinámica del HTML.
* Uso de `insertAdjacentHTML`.
* Depuración y corrección de errores.

## Estructura

```text
pizzeria-link/
├── index.html
├── main.js
├── style.css
└── link.webp
```

### `index.html`

Contiene la estructura principal de la aplicación: las pizzas disponibles, los tamaños, la zona donde se muestra el pedido y los botones de operación.

### `main.js`

Es el núcleo del proyecto.

Se encarga de:

* Detectar la selección de pizzas.
* Contabilizar las pizzas del pedido.
* Calcular el precio.
* Gestionar los tamaños.
* Aplicar los suplementos de precio.
* Borrar pedidos.
* Confirmar pedidos.
* Mostrar dinámicamente la información en pantalla.

### `style.css`

Contiene el diseño visual de la aplicación, incluyendo colores, botones, tarjetas de selección, distribución de las secciones y una media query para adaptar la interfaz a dispositivos pequeños.

---
**Beckham I. Lawrence -- DAW1 2026**
