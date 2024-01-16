'use strict';

const tasks = [
    { name: 'Recoger setas en el campo', completed: true },
    { name: 'Comprar pilas', completed: true },
    { name: 'Poner una lavadora de blancos', completed: true },
    {
      name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
      completed: false,
    },
];


const tasksList  = document.querySelector('.task-list');

const renderTasks = () => {
  tasksList.innerHTML = '';

}

for (let i = 0; i < tasks.length; i++){
  if (tasks[i].completed) {
    tasksList.innerHTML += `<li class="tachado"> <input type="checkbox" id="${i}" checked> ${tasks[i].name}</li>`;
  } else {
    tasksList.innerHTML += `<li> <input type="checkbox" class="js-check" id="${i}" ${tasks[i].name}</li>`;
  }
} 

const allCheckbox = document.querySelectorAll('.js-check');

function handleCheck (event) {
  const id = event.target.id;
  console.log(id);
  tasks[id].completed = !tasks[id].completed;
  console.log(tasks);
  renderTasks();
}

for(const check of allCheckbox) {
  check.addEventListener('change', handleCheck);
}

// for (const task of tasks) {
//   let checkbox = '<input= type="checkbox" class= "list">';
//   if (task.completed) {
//       checkbox = '<input= type="checkbox" checked>';
//   }
//   tasksList.innerHTML += `<li>${checkbox}${task.name}</li>`;
//   const inputs = document.querySelectorAll ('.list');
//   for (const input of inputs) {
//     input.addEventListener ('click', handleClick);
//     console.log ('click');

//   }
//   function handleClick (){
//     if (tasks.completed === true) {
//       tasks.completed === false;
//       checkbox.classList.add ('tachado') 
//     }
//     else {
//       tasks.completed === true;
//       checkbox.classList.remove ('tachado') 
      
//     }
//   }
// }


