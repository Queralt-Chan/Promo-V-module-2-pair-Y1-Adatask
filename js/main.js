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


for (const task of tasks) {
  let checkbox = '<input= type="checkbox" class= "list">';
  if (task.completed) {
      checkbox = '<input= type="checkbox" checked>';
  }
  tasksList.innerHTML += `<li>${checkbox}${task.name}</li>`;
  const inputs = document.querySelectorAll ('.list');
  for (const input of inputs) {
    input.addEventListener ('click', handleClick);
    console.log ('click');

  }
  function handleClick (){
    if (tasks.completed === true) {
      tasks.completed === false;
      checkbox.classList.add ('tachado') 
    }
    else {
      tasks.completed === true;
      checkbox.classList.remove ('tachado') 
      
    }
  }
}

