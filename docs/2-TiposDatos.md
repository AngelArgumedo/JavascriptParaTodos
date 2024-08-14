## 2. Fundamentos de JavaScript 

# Tipos de Datos en JavaScript

En JavaScript, existen varios tipos de datos que se pueden dividir en dos categorías principales: **primitivos** y **complejos**. A continuación, se describen los principales tipos de datos y sus características.

## 1. Tipos de Datos Primitivos
Tipos Primitivos son aquellos que representan un valor simple e inmutable.
- ### `Number`
    - Representa tanto números enteros como de punto flotante (decimales).
        ```javascript
        let entero = 42;
        let decimal = 3.14;
        ```
- ### `String`
    - Representa una secuencia de caracteres, utilizado para almacenar texto.
        ```javascript
        let cadena = "Hola, mundo!";
        let texto = "Este es un texto de ejemplo";
        ```
- ### `Boolean`
    - Representa un valor logico y solo puede tomar dos valores: `true` o `false`, (verdadero o falso).
        ```javascript
        let esVerdad = true;
        let esFalso = false;
        ```
- ### `Null`
    - Representa la ausencia intencional de un valor, útil para indicar que una variable no tiene un valor asignado (que nuestra caja esta vacía).
        ```javascript
        let vacio = null;
        ```
- ### `Undefined`
    - Indica que una variable no tiene un valor asignado (que nuestra caja esta vacía), la principal diferencia entre `null` y `undefined` es que `undefined` no es un valor válido, mientras que `null` es un valor válido.
        ```javascript
        // puedes ver que no se le asigna ningún valor a la variable
        let sinValor;
        console.log(sinValor);  // undefined
        ```
- ### `symbol`
    - Introducido en ES6, Representa un identificador único, útil para identificar objetos.
        ```javascript
        let simbolo = Symbol("Mi simbolo");
        console.log(simbolo);  // Symbol(Mi simbolo)
        ```
- ### `BigInt`
    - Introducido en ES2020, Representa un entero de gran tamaño, útil para operaciones matemáticas con números grandes.
        ```javascript
        let numeroGrande = BigInt(9007199254740991n);
        ```


## 2. Tipos de Datos Complejos
**Tipos Complejos**, también conocidos como tipos de referencia, son aquellos que pueden almacenar colecciones de datos o más complejos.
- ### `Object`
    - Una colección de propiedades, donde cada propiedad es una asociación entre un nombre (o clave) y un valor.
        ```javascript
        let persona = { 
            nombre: "Ryan Lee", 
            edad: 25,
            esEstudiante: true,
            };
        ```
- ### `Array`
    - Una lista ordenada de valores que pueden contener cualquier **tipo de dato**, incluso otros arrays u objetos.
        ```javascript
        let numeros = [1, 2, 3, 4, 5];

        // Un array puede contener cualquier tipo de dato
        let mezclado = ["Juan", 25, true, null, { nombre: "Ana", edad: 30 }];
        ```
- ### `Function`
    - Bloques de código reutilizables que aceptan entradas (parámetros) y devuelven un valor.
        ```javascript
        // Hay diferentes formas de declarar una función
        function saludar(nombre){
            return "Hola " + nombre;
        }

        // También se puede utilizar la sintaxis de flecha
        const saludar2 = (nombre) =>{
            return "Segundo saludo para " + nombre;
        }
        
        // Ejemplo de uso de las funciones
        let miNombre = "Ryan Lee";
        console.log(saludar(miNombre));  // Hola Ryan Lee
        console.log(saludar2(miNombre));  // Segundo saludo para Ryan Lee
        ```

## 3. Otros Tipos y Conceptos Relacionados
- ### `Date`
    - Representa una fecha, útil para almacenar y manipular fechas en JavaScript.
        ```javascript
        let fecha = new Date();
        console.log(fecha);  // Muestra la fecha actual en la consola
        ```
- ### `RegExp`
    - Las expresiones regulares (RegExp) en JavaScript son patrones utilizados para hacer coincidir combinaciones de caracteres en cadenas de texto. Son muy útiles para validar, buscar o manipular texto.
        - 1. Validar si una cadena contiene solo letras
            ```javascript
            let regExp = /^[a-zA-Z]+$/;
            let cadena = "HolaMundo";
            console.log(regExp.test(cadena)); // true
            ```
            - `^` indica el inicio de la cadena.
            - `[a-zA-Z]` indica que la cadena puede contener letras en minúsculas o mayúsculas.
            - `+` indica que la cadena puede contener más de una letra.
            - `$` indica el final de la cadena.

        - 2. Verificar si una cadena es un número entero
            ```javascript
            let regExp = /^\d+$/;
            let cadena = "12345";
            console.log(regExp.test(cadena)); // true
            ```
            - `\d` indica que la cadena puede contener solo números.
            - `+` indica que debe haber uno o más dígitos.

        - 3. Comprobar si una cadena es un correo electrónico válido.
            ```javascript
            let regExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            let correo = "juan.lee@gmail.com";
            console.log(regExp.test(correo)); // true
            ```
            - `[a-zA-Z0-9._%+-]` coincide con letras, números, y algunos caracteres especiales que son comunes en correos electrónicos.
            - `@` coincide con el símbolo arroba.
            - `a-zA-Z0-9.-` coincide con letras, números, y puntos.
            - `[a-zA-Z]{2,}` coincide con al menos dos letras en la extensión del dominio.

        - 4. Encontrar todas las ocurrencias de una palabra en una cadena.
            ```javascript
            let regExp = /mundo/gi;
            let cadena = "Hola mundo, este es un mundo increíble";

            let coincidencias = cadena.match(regExp);
            console.log(coincidencias); // ["mundo", "mundo"]
            ```
            - `g` (global) busca todas las ocurrencias, no solo la primera.
            - `i` (ignore case) hace que la búsqueda no distinga entre mayúsculas y minúsculas.

## 4. Conversion de Tipos
Para convertir un tipo de dato a otro, se utilizan operadores de conversión.
- ### Conversion Implcita
    - JavaScript convierte automáticamente los tipos de datos según el contexto.
    ```javascript
    let resultado = "5" + 5; // "55" (el número 5 se convierte en una cadena)
    ```
- ### Conversion Explicita
    - Para convertir un tipo de dato a otro, se utilizan los operadores `Number()`, `String()` o `Boolean()`.
    ```javascript
    let numero = Number("123"); // 123
    let texto = String(123); // "123"
    ```

**Resumen**
- Tipos de datos primitivos: `Number`, `String`, `Boolean`, `Null`, `Undefined`, `Symbol`, `BigInt`.
- Tipos de datos complejos: `Object`, `Array`, `Function`, `Date`, `RegExp`.


**[↩️Regresar al inicio](../README.md)**