## 2. Fundamentos de JavaScript
# Estructuras de Control en JavaScript

Las estructuras de control en JavaScript permiten alterar el flujo de ejecución de un programa en función de ciertas condiciones o repeticiones. A continuación, se describen las principales estructuras de control.

## 1. Estructuras Condicionales

Las estructuras condicionales permiten ejecutar bloques de código específicos basados en ciertas condiciones.

- ### `if`
    - Ejecuta un bloque de código si una condición es verdadera.
    ```javascript
    let numero = 10;
    if (numero > 5) {
        console.log("El número es mayor que 5");
    }
    ```

- ### `if...else`
    - Ejecuta un bloque de código si una condición es verdadera, y otro bloque si es falsa.
    ```javascript
    let numero = 3;
    if (numero > 5) {
        console.log("El número es mayor que 5");
    } else {
        console.log("El número es 5 o menor");
    }
    ```

- ### `else if`
    - Permite evaluar múltiples condiciones, ejecutando diferentes bloques de código según cuál condición sea verdadera.
    ```javascript
    let numero = 7;
    if (numero > 10) {
        console.log("El número es mayor que 10");
    } else if (numero > 5) {
        console.log("El número es mayor que 5 pero menor o igual a 10");
    } else {
        console.log("El número es 5 o menor");
    }
    ```

- ### `switch`
    - Evalúa una expresión, comparándola con múltiples casos, y ejecuta el bloque de código correspondiente.
    ```javascript
    let dia = "lunes";
    switch (dia) {
        case "lunes":
            console.log("Hoy es lunes");
            break;
        case "martes":
            console.log("Hoy es martes");
            break;
        default:
            console.log("No es ni lunes ni martes");
    }
    ```

## 2. Estructuras de Bucle

Los bucles permiten repetir un bloque de código varias veces.

- ### `for`
    - Ejecuta un bloque de código un número específico de veces.
    ```javascript
    for (let i = 0; i < 5; i++) {
        console.log("Iteración número: " + i);
    }
    ```

- ### `while`
    - Ejecuta un bloque de código mientras una condición sea verdadera.
    ```javascript
    let i = 0;
    while (i < 5) {
        console.log("Iteración número: " + i);
        i++;
    }
    ```

- ### `do...while`
    - Ejecuta un bloque de código al menos una vez, y luego repite la ejecución mientras la condición sea verdadera.
    ```javascript
    let i = 0;
    do {
        console.log("Iteración número: " + i);
        i++;
    } while (i < 5);
    ```

## 3. Control de Flujo

Estas estructuras permiten controlar el flujo de ejecución de un programa.

- ### `break`
    - Sale de un bucle o estructura `switch`.
    ```javascript
    for (let i = 0; i < 10; i++) {
        if (i === 5) {
            break;
        }
        console.log("Iteración número: " + i);
    }
    ```

- ### `continue`
    - Salta la iteración actual de un bucle y pasa a la siguiente.
    ```javascript
    for (let i = 0; i < 10; i++) {
        if (i === 5) {
            continue;
        }
        console.log("Iteración número: " + i);
    }
    ```

## Resumen

- **Condicionales**: `if`, `else if`, `else`, `switch`.
- **Bucles**: `for`, `while`, `do...while`.
- **Control de Flujo**: `break`, `continue`.

**[↩️Regresar al inicio](../README.md)**
