'use strict';

const tasksList  = document.querySelector('.task-list');

const tasks = [
    { name: 'Recoger setas en el campo', completed: true },
    { name: 'Comprar pilas', completed: true },
    { name: 'Poner una lavadora de blancos', completed: true },
    {
      name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
      completed: false,
    },
];

for (const itemTask of tasks) {
tasksList.innerHTML += `<li>${itemTask.name}</li>`;
const checkbox = `<input type="checkbox" ${itemTask.completed ? 'checked' : ''}>`;
tasksList.innerHTML += `<li>${checkbox} ${itemTask.name}</li>`;
}

//Cómo poner el checkbox dentro del HTML
// const checkbox = document.createElement("input");
// checkbox.type = "checkbox";

