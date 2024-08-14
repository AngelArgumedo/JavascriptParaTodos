
# JavaScript Tutorial

Heyy Runners🤖, 👋sean bienvenidos👋.
Este tutorial está diseñado para llevarte desde los fundamentos de JavaScript hasta conceptos más avanzados. Es ideal para principiantes y para aquellos que deseen reforzar sus conocimientos en JavaScript.

## 1. Introducción a JavaScript
- **¿Qué es JavaScript?**  
JavaScript es un lenguaje de programación interpretado que se ejecuta en el navegador y permite crear contenido dinámico en las páginas web.

- **Historia y evolución**  
JavaScript fue creado por Brendan Eich en 1995 y ha evolucionado con varias versiones importantes como ES5, ES6, y más.

- **Uso y aplicaciones**  
Se utiliza principalmente para crear interactividad en las páginas web, desarrollar aplicaciones web, y más.

- **Herramientas necesarias (editor de código, navegador)**  
Para empezar con JavaScript, necesitas un editor de código (como [*Visual Studio Code*](https://code.visualstudio.com)), un entorno de ejecucion para ejecutar codigo en nuestra maquina en este caso: [*NodeJS*](https://nodejs.org/en) y un navegador moderno (como Chrome o Firefox).
**[*Paso a paso de Instalacion▶️*](./docs/1-Instalacion.md)**


## 2. Fundamentos de JavaScript
- **Sintaxis básica, Variables y Constantes**
[*👉Ir a la leccion▶️*](./docs/2-FundamentosJS.md)

## 3. Funciones
- **Declaración de funciones**  
  ```javascript
  function saludar(nombre) {
    return `Hola, ${nombre}`;
  }
  ```

- **Parámetros y argumentos**  
  ```javascript
  saludar("Carlos");  // Llamada a la función con argumento "Carlos"
  ```

- **Funciones anónimas**  
  ```javascript
  const suma = function(a, b) {
    return a + b;
  };
  ```

- **Funciones flecha**  
  ```javascript
  const multiplicar = (a, b) => a * b;
  ```

- **Alcance y cierre**  
  ```javascript
  function crearContador() {
    let contador = 0;
    return function() {
      contador++;
      return contador;
    };
  }
  const contador = crearContador();
  ```
