# Gestor de Tareas en la Consola

## Ejercicio 1

### Descripción:
El proyecto es una aplicación simple de gestión de tareas (To-Do List) que permitirá agregar, editar, eliminar y marcar tareas como completadas, todo a través de la consola. Se construirá exclusivamente con JavaScript, aplicando todos los conceptos vistos.

### Requisitos del Proyecto:
1. Funcionalidades del Proyecto:
    - Agregar tarea: Permite al usuario añadir una nueva tarea con un título y descripción.
    - Listar tareas: Muestra todas las tareas actuales en la consola.
    - Marcar como completada: Permite al usuario marcar una tarea como completada.
    - Eliminar tarea: Elimina una tarea de la lista.
    - Editar tarea: Permitir al usuario actualizar el título y la descripción de una tarea existente.
    - Guardar y cargar tareas: Utiliza el sistema de archivos local (usando el módulo fs en Node.js) para guardar las tareas y cargarlas al iniciar la aplicación.

### Implementación Técnica:
1. Fundamentos de JavaScript:
    - Usa variables, tipos de datos, operadores y estructuras de control para manejar la lógica del proyecto.
    - Declara funciones para organizar la funcionalidad, como agregar, editar y eliminar tareas.

2. Programación Orientada a Objetos (POO):
    - Implementa clases para definir la estructura de las tareas (Clase: Tarea) y la lógica general del gestor (Clase: GestorDeTareas).
    - Utiliza métodos y propiedades para organizar el código, aplicando conceptos como encapsulamiento y herencia (si fuera necesario).

3. Asincronía:
    - Usa promesas y async/await para leer y escribir tareas en archivos de manera no bloqueante.
    - Implementa callbacks para manejar eventos como la carga inicial de las tareas.

4. Manejo de Errores:
    - Usa bloques try...catch para manejar errores en la creación, edición y eliminación de tareas.
    - Maneja errores al leer y escribir archivos, mostrando mensajes apropiados en la consola.

---

**[↩️ Regresar al índice](../README.md)**                                **[Solucion ▶️](./ejercicio1.js)**