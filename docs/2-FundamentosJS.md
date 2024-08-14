## 2. Fundamentos de JavaScript
- **Sintaxis básica**  
  ```javascript
  console.log("Hola, mundo!");
  ```

- **Variables y tipos de datos**  
  ```javascript
  let nombre = "Juan";  // String
  let edad = 25;        // Número
  let esEstudiante = true;  // Booleano
  ```

  - **Tipos primitivos (números, cadenas, booleanos, etc.)**
    ```javascript
    let numero = 42;
    let texto = "Hola";
    let esVerdad = false;
    ```

  - **Tipos complejos (objetos, arrays)**
    ```javascript
    let persona = { nombre: "Ana", edad: 30 };
    let colores = ["rojo", "verde", "azul"];
    ```

- **Operadores**  
  - **Aritméticos**  
    ```javascript
    let suma = 5 + 3;
    let resta = 10 - 2;
    ```

  - **Comparación**  
    ```javascript
    let esIgual = (5 == 5);
    let esMayor = (10 > 5);
    ```

  - **Lógicos**  
    ```javascript
    let resultado = (5 > 3) && (2 < 4);
    ```

- **Estructuras de control**  
  - **Condicionales (if, else, switch)**  
    ```javascript
    let edad = 18;
    if (edad >= 18) {
      console.log("Eres mayor de edad");
    } else {
      console.log("Eres menor de edad");
    }
    ```

  - **Bucles (for, while, do-while)**  
    ```javascript
    for (let i = 0; i < 5; i++) {
      console.log(i);
    }
    ```