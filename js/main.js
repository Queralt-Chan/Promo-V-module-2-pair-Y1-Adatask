'use strict';
let tasks = [];
/*const tasks = [
  { name: 'Recoger setas en el campo', completed: true },
  { name: 'Comprar pilas', completed: true },
  { name: 'Poner una lavadora de blancos', completed: true },
  {
    name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
    completed: false,
  },
];*/

const taskList = document.querySelector('.task-list');
const btnFilter = document.querySelector('.js-btn-filter');
const inputFilter = document.querySelector('.js-text-task-filter');
const githubUser = '<tu_usuario_de_github_aqui>';
const serverUrl = `https://dev.adalab.es/api/todo/`;
const message=document.querySelector('.message');
const textNewTask = document.querySelector('.js-text-task-add');
const btnAdd = document.querySelector('.js-btn-add');


function getDataApi (){
fetch(serverUrl)
.then((response) => response.json())
.then ((data) => {
  console.log(data);
  tasks=data.results;
  console.log(tasks);
  renderTasks(tasks);
});
}
getDataApi ();

// const renderMessage () => {
//   const filterDataTrue = tasks.filter((results) => results.completed);
//   console.log(filterDataTrue);
//   if (filterDataTrue){
//     message.innerHTML=`Tienes ${}`
//   }
// }

//renderTasks(tasks);
//Completa el código;
 //Guarda la respuesta obtenida enla variable para el listado de tareas: `tasks`

function handleFilter(event) {
  event.preventDefault();
  const valueInput = inputFilter.value;
  const arrayFilter = tasks.filter((task) => task.name.includes(valueInput));
  console.log(arrayFilter);
  renderTasks(arrayFilter);
}
btnFilter.addEventListener('click', handleFilter);
const listenCheck = () => {
  const allCheckbox = document.querySelectorAll('.js-check');
  for (const check of allCheckbox) {
    check.addEventListener('change', handleCheck);
  }
};
const renderTasks = (tasks) => {
  taskList.innerHTML = '';
  for (let index = 0; index < tasks.length; index++) {
    /*let classCss = tasks[index].completed ? 'tachado' : null;
  taskList.innerHTML += `<li class= "${classCss}"> 
    ${tasks[index].name}
  </li>`;*/
    if (tasks[index].completed) {
      //tasks[index].completed === true
      taskList.innerHTML += `<li class= "tachado"> 
    <input type="checkbox" class= "js-check" id="${index}" checked>
    ${tasks[index].name}
  </li>`;
    } else {
      taskList.innerHTML += `<li> 
    <input type="checkbox" class= "js-check" id="${index}" >
    ${tasks[index].name}
  </li>`;
    }
  }
  listenCheck();
};

function handleCheck(event) {
  const id = event.target.id;
  console.log(id);
  tasks[id].completed = !tasks[id].completed;
  console.log(tasks);
  renderTasks(tasks);
}
renderTasks(tasks);

function postNewData (event) {
  event.preventDefault();
  const newTaskData = textNewTask.value;
  const newTaskDataObject = {id: 16576927301334329, name: newTaskData, completed: false};
  tasks.push(newTaskDataObject);
  renderTasks(tasks);
}

btnAdd.addEventListener('click', postNewData);

  // // fetch(serverUrl/* {
  // //   method: 'POST',
  // //   headers: {'Content-Type': 'application/json'},
  // //   body: JSON.stringify(newTaskDataObject),
  // // }*/)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     if (data.success) {
  //       tasks.push(newTaskDataObject);
  //       localStorage.setItem('newTaskAdded', newTaskDataObject);
  //       renderTasks(tasks);

  //       //Completa y/o modifica el código:
  //       //Agrega la nueva tarea al listado
  //       //Guarda el listado actualizado en el local storage
  //       //Visualiza nuevamente el listado de tareas
  //       //Limpia los valores de cada input ????
  //       //muestra un mensaje de error.
  //     }
  //   });
