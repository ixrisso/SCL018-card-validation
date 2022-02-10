# Bienvenid@s a validador de Gift Card "CasaIdeas"

## Nuestro proyecto
Nuestro validador de Gift Card tiene como objetivo el comprobar la validez de una gift card para compras en la empresa CasaIdeas, ya que nuestro cliente espera que sus trabajadores comprueben la validez del beneficio que les ha otorgado el sindicato.

## Producto final 📦

[Visualización del producto final](https://ixrisso.github.io/SCL018-card-validation/)

## Pasos previos 🚀

### Investigación UX 

1. Los usuarios de nuestro producto son los trabajadores quienes a través de un sindicato han conseguido una Gift Card a la tienda CasaIdeas y su principal problema es averiguar los datos puntuales de dicha tarjeta.
2. Nuestro producto soluciona una duda antes de ir a comprar. Cuando uno obtiene una tarjeta gift card, no la suele usar de inmediato ni sabe cuánto saldo o fecha de validez tiene.
3. Nuestro primero prototipo en papel fue el [siguiente](https://imgur.com/yHEVOMu)
4. El feedback que recibimos nos permitió mantener un estilo minimalista. Nos estábamos basando en la tienda Casa&ideas, así que debíamos copiar el estilo gráfico de este.
5. Nuestro prototipo de alta fidelidad fue el siguiente [Pantalla 1](https://imgur.com/tg9GleE)|[Pantalla 2](https://imgur.com/FMrcvfE)
6. Durante el desarrollo nos dimos cuenta que estábamos complicándonos en cosas que nos entrampaban el desarrollo del código en sí (y que no aportaban a los requisitos principales), por lo que decidimos simplificar nuestro producto.
7. Imagen final de producto a una sola pantalla
Nuestro aclarador y visualizador principal de tareas fue en primera instancia un [Diagrama de flujo](https://imgur.com/ZfCL3P9)  y gracias a este, pudimos materializar el paso a paso en [Trello](https://trello.com/b/VjAJ2s05/card-validator-mire-isa).


## Nuestro Código 🛠️

A continuación se muestra el desarrollo lógico que permitió la materialización en el código de nuestro producto.

### HTML e index.js
1. Adquirir input mediante función `getVal`
2. Si es nulo, imprimir mensaje de reingreso
3. Si tiene dígitos válidos debe pasar a `validator.js`
4. Si `validator` indica true, pasar a pantalla válida e imprimir número transformado por `maskify`
5. Si `validator` indica false, pasar a pantalla inválida e imprime "Reingresa tarjeta válida"

### En validator.js

En `isValid`:

1. Convertir input a array
2. Recorrer array con bucle `for`
3. Multiplicar *2 a posiciones pares
4. Los números sobre 9, se les resta 9
5. Sumar todos los elementos del array
6. Si el resultado tiene residuo 0,  es true y la tarjeta es válida
7. Si el resultado no tiene residuo 0, es false y la tarjeta es inválida

En `maskify`:

1. Reservar 4 números a la derecha
2. Convertir los restantes a array
3. Recorrer el array con bucle `for`
4. Reemplazar cada digito con # (a excepción de los últimos 4)
5. Convertir el array a string
6. Sumar string con números reservados

### Visualización de nuestro código en JS (anterior al Test primario)

- [Visualización index.js](https://imgur.com/a/gXdtAW3)
- [Visualización validator.js](https://imgur.com/a/qzO3tCu)
- [Visualización Test unitario fallido](https://imgur.com/a/1pmpEiF)

#### [Test unitario validado](https://imgur.com/a/KOqQqI6)
