# 2. Fundamentos de JavaScript 
## Operadores en JavaScript

En JavaScript, los operadores son símbolos que le indican al compilador que debe realizar una operación matemática, lógica o de asignación específica. Los operadores se dividen en varias categorías según su función.

## 1. Operadores Aritméticos

Los operadores aritméticos realizan operaciones matemáticas en números.

- ### Suma (`+`)
    - Suma dos valores.
    ```javascript
    let suma = 5 + 10; // 15
    ```

- ### Resta (`-`)
    - Resta el segundo valor del primero.
    ```javascript
    let resta = 15 - 5; // 10
    ```

- ### Multiplicación (`*`)
    - Multiplica dos valores.
    ```javascript
    let multiplicacion = 5 * 10; // 50
    ```

- ### División (`/`)
    - Divide el primer valor por el segundo.
    ```javascript
    let division = 10 / 2; // 5
    ```

- ### Módulo (`%`)
    - Devuelve el resto de la división entre dos valores.
    ```javascript
    let modulo = 10 % 3; // 1
    ```

- ### Exponenciación (`**`)
    - Eleva el primer valor a la potencia del segundo.
    ```javascript
    let potencia = 2 ** 3; // 8
    ```

- ### Incremento (`++`)
    - Incrementa el valor de una variable en 1.
    ```javascript
    let numero = 5;
    numero++; // 6
    ```

- ### Decremento (`--`)
    - Decrementa el valor de una variable en 1.
    ```javascript
    let numero = 5;
    numero--; // 4
    ```

## 2. Operadores de Asignación

Los operadores de asignación se utilizan para asignar valores a las variables.

- ### Asignación (`=`)
    - Asigna el valor del lado derecho al lado izquierdo.
    ```javascript
    let x = 10;
    ```

- ### Asignación con suma (`+=`)
    - Suma el valor de la derecha al valor de la izquierda y asigna el resultado a la variable de la izquierda.
    ```javascript
    let x = 10;
    x += 5; // x ahora es 15
    ```

- ### Asignación con resta (`-=`)
    - Resta el valor de la derecha al valor de la izquierda y asigna el resultado a la variable de la izquierda.
    ```javascript
    let x = 10;
    x -= 5; // x ahora es 5
    ```

- ### Asignación con multiplicación (`*=`)
    - Multiplica el valor de la derecha por el valor de la izquierda y asigna el resultado a la variable de la izquierda.
    ```javascript
    let x = 10;
    x *= 5; // x ahora es 50
    ```

- ### Asignación con división (`/=`)
    - Divide el valor de la izquierda por el valor de la derecha y asigna el resultado a la variable de la izquierda.
    ```javascript
    let x = 10;
    x /= 5; // x ahora es 2
    ```

- ### Asignación con módulo (`%=`)
    - Calcula el resto de la división de la izquierda por la derecha y asigna el resultado a la variable de la izquierda.
    ```javascript
    let x = 10;
    x %= 3; // x ahora es 1
    ```

- ### Asignación con exponenciación (`**=`)
    - Eleva el valor de la izquierda a la potencia del valor de la derecha y asigna el resultado a la variable de la izquierda.
    ```javascript
    let x = 2;
    x **= 3; // x ahora es 8
    ```

## 3. Operadores de Comparación

Los operadores de comparación se utilizan para comparar dos valores. Devuelven un valor booleano (`true` o `false`).

- ### Igualdad (`==`)
    - Compara dos valores para verificar si son iguales (sin tener en cuenta el tipo).
    ```javascript
    let igual = (5 == "5"); // true
    ```

- ### Estrictamente igual (`===`)
    - Compara dos valores para verificar si son iguales y del mismo tipo.
    ```javascript
    let estrictamenteIgual = (5 === "5"); // false
    ```

- ### Desigualdad (`!=`)
    - Compara dos valores para verificar si son diferentes (sin tener en cuenta el tipo).
    ```javascript
    let diferente = (5 != "5"); // false
    ```

- ### Estrictamente desigual (`!==`)
    - Compara dos valores para verificar si son diferentes o de distinto tipo.
    ```javascript
    let estrictamenteDiferente = (5 !== "5"); // true
    ```

- ### Mayor que (`>`)
    - Verifica si el valor de la izquierda es mayor que el de la derecha.
    ```javascript
    let mayor = (10 > 5); // true
    ```

- ### Menor que (`<`)
    - Verifica si el valor de la izquierda es menor que el de la derecha.
    ```javascript
    let menor = (10 < 5); // false
    ```

- ### Mayor o igual que (`>=`)
    - Verifica si el valor de la izquierda es mayor o igual que el de la derecha.
    ```javascript
    let mayorOIgual = (10 >= 10); // true
    ```

- ### Menor o igual que (`<=`)
    - Verifica si el valor de la izquierda es menor o igual que el de la derecha.
    ```javascript
    let menorOIgual = (5 <= 10); // true
    ```

## 4. Operadores Lógicos

Los operadores lógicos se utilizan para combinar condiciones lógicas.

- ### AND (`&&`)
    - Devuelve `true` si ambas condiciones son verdaderas.
    ```javascript
    let resultado = (5 > 3 && 10 > 5); // true
    ```

- ### OR (`||`)
    - Devuelve `true` si al menos una de las condiciones es verdadera.
    ```javascript
    let resultado = (5 > 3 || 10 < 5); // true
    ```

- ### NOT (`!`)
    - Invierte el valor booleano de una expresión.
    ```javascript
    let resultado = !(5 > 3); // false
    ```

## 5. Operadores de Incremento y Decremento

Estos operadores se utilizan para incrementar o decrementar el valor de una variable.

- ### Incremento (`++`)
    - Incrementa el valor de una variable en 1.
    ```javascript
    let numero = 5;
    numero++; // 6
    ```

- ### Decremento (`--`)
    - Decrementa el valor de una variable en 1.
    ```javascript
    let numero = 5;
    numero--; // 4
    ```


## Resumen

- **Operadores Aritméticos**: `+`, `-`, `*`, `/`, `%`, `**`, `++`, `--`.
- **Operadores de Asignación**: `=`, `+=`, `-=`, `*=`, `/=`, `%=`, `**=`.
- **Operadores de Comparación**: `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`.
- **Operadores Lógicos**: `&&`, `||`, `!`.
- **Operadores de Incremento y Decremento**: `++`, `--`.

**[↩️Regresar al inicio](../README.md)**
