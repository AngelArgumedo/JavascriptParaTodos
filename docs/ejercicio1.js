const fs = require('fs').promises;

class Tarea {
    constructor(id, titulo, descripcion) {
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.completado = false;
    }

    marcarCompletado() {
        this.completado = true;
    }

    editarTarea(nuevoTitulo, nuevaDescripcion) {
        this.titulo = nuevoTitulo;
        this.descripcion = nuevaDescripcion;
    }
}

class GestorDeTareas {
    constructor() {
        this.tareas = [];
    }

    async cargarTareas() {
        try {
            const data = await fs.readFile('tareas.json', 'utf-8');
            this.tareas = JSON.parse(data).map(t => Object.assign(new Tarea(), t));
        } catch (error) {
            console.error("Error al cargar tareas:", error.message);
        }
    }

    async guardarTareas() {
        try {
            await fs.writeFile('tareas.json', JSON.stringify(this.tareas, null, 2));
        } catch (error) {
            console.error("Error al guardar tareas:", error.message);
        }
    }

    agregarTarea(titulo, descripcion) {
        const id = this.tareas.length + 1;
        const nuevaTarea = new Tarea(id, titulo, descripcion);
        this.tareas.push(nuevaTarea);
        console.log(`Tarea '${titulo}' añadida correctamente.`);
    }

    listarTareas() {
        console.log("\nLista de Tareas:");
        this.tareas.forEach(t => {
            console.log(`[${t.completado ? '✔' : ' '}] (${t.id}) ${t.titulo} - ${t.descripcion}`);
        });
    }

    marcarCompletada(id) {
        const tarea = this.tareas.find(t => t.id === id);
        if (tarea) {
            tarea.marcarCompletado();
            console.log(`Tarea '${tarea.titulo}' marcada como completada.`);
        } else {
            console.log(`No se encontró una tarea con el ID ${id}.`);
        }
    }

    eliminarTarea(id) {
        const indice = this.tareas.findIndex(t => t.id === id);
        if (indice !== -1) {
            const tareaEliminada = this.tareas.splice(indice, 1);
            console.log(`Tarea '${tareaEliminada[0].titulo}' eliminada.`);
        } else {
            console.log(`No se encontró una tarea con el ID ${id}.`);
        }
    }

    editarTarea(id, nuevoTitulo, nuevaDescripcion) {
        const tarea = this.tareas.find(t => t.id === id);
        if (tarea) {
            tarea.editarTarea(nuevoTitulo, nuevaDescripcion);
            console.log(`Tarea '${tarea.titulo}' actualizada.`);
        } else {
            console.log(`No se encontró una tarea con el ID ${id}.`);
        }
    }
}

async function main() {
    const gestor = new GestorDeTareas();
    await gestor.cargarTareas();

    gestor.agregarTarea("Estudiar JavaScript", "Repasar fundamentos y estructuras de control");
    gestor.listarTareas();
    gestor.marcarCompletada(1);
    gestor.editarTarea(1, "Estudiar JavaScript Avanzado", "Revisar POO y asincronía");
    gestor.eliminarTarea(1);

    await gestor.guardarTareas();
}

main();
