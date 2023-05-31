const listaTareas = [];
const input = document.getElementById('nombre');

const agregarTarea = (actividad) => {
    actividad.preventDefault();
    const  input = document.getElementById('nombre').value
    const  nuevo = document.createElement('li');
    nuevo.innerHTML = input;
    listaTareas.unshift(nuevo)
    mostrarLista()
}
const mostrarLista = () => {
    const tareas = document.getElementById('lista-tareas');
    for (let i = 0; i < listaTareas.length; i++) {
    const index = listaTareas[i];

    tareas.appendChild(index);
    };

};
mostrarLista();