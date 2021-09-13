# Bienvenid@s a Validador de Gift Card "Casa&Ideas"

## Nuestro proyecto
Nuestro validador de Gift Card tiene como objetivo el comprobar la validez de una gift card para compras en Casa&Ideas, ya que nuestro cliente busca que sus trabajadores comprueben la validez de tal que les ha otorgado el sindicato.


## Pasos iniciales
Antes de comenzar a trabajar de lleno en JS, HTML y CSS para ir materializando nuestro proyecto, decidimos organizarnos y tener claros los pasos a seguir, siempre desmenuzando lo más posible cada tarea a ejecutar.
Nuestro aclarador y visualizador principal de tareas fue Trello.
Luego de tener nuestros objetivos, realizamos bocetos sobre la aplicación conversando y tomando en cuenta los requisitos del cliente, siempre considerando sus necesidades y cómo resolverlas a través del proyecto, lo cual logramos concretar en Figma como prototipo inicial.
A continuación, a través del diagrama de flujo, fuimos capaces de entender todos los pasos que debíamos exponer en nuestro código para que este fuese funcional.
Finalmente y siguiendo nuestros "bocetos" anteriores, es que entramos de lleno a trabajar en HTML, CSS y JavaScript, intentando siempre no ir en cadena con cada avance que nos proponíamos obtener.

## Tomando forma
![boceto](https://imgur.com/yHEVOMu)
![paginafigma01](https://imgur.com/tg9GleE)
![paginafigma02](https://imgur.com/FMrcvfE)
![paginafigma03](https://imgur.com/L59BKt8)
Flujo de cosas insertar (imagen de mireya)

## Nuestro Código
1. Adquirir input
2. Si es nulo, enviar mensaje de reingreso
3. Si tiene digitos debe pasar por validator.
4. Si validador indica true, pasar a pantalla valida y mostrar maskify
5. Si validador indica false, pasar a pantalla invalida y mostrar maskify

En validador:

1. Convertir input a array
2. Recorrer array con bucle for
3. Multiplicar *2 a posiciones pares
4. Las números sobre 9, se les resta 9
5. Sumar todos los elementos del array
6. Si el resultado tiene residuo 0, la tarjeta es valida
7. Si el resultado no tiene residuo 0, la tarjeta es invalida.

En maskify:

1. Reservar 4 números a la derecha
2. convertir los restantes a array
3. Recorrer el array con bucle for
4. Reemplazar cada digito en simbolo "gato"
5. Convertir el array a string
6. Sumar string con numeros reservados.
