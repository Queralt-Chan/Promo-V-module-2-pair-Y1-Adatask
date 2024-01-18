"use strict";
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

const taskList = document.querySelector(".task-list");
const btnFilter = document.querySelector(".js-btn-filter");
const inputFilter = document.querySelector(".js-text-task-filter");
const githubUser = "<tu_usuario_de_github_aqui>";
const serverUrl = `https://dev.adalab.es/api/todo/`;
const message = document.querySelector(".message");
const textNewTask = document.querySelector(".js-text-task-add");
const btnAdd = document.querySelector(".js-btn-add");

function getDataApi() {
  fetch(serverUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      tasks = data.results;
      console.log(tasks);
      renderTasks(tasks);
    });
}
getDataApi();

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
btnFilter.addEventListener("click", handleFilter);
const listenCheck = () => {
  const allCheckbox = document.querySelectorAll(".js-check");
  for (const check of allCheckbox) {
    check.addEventListener("change", handleCheck);
  }
};
// const renderTasks = (tasks) => {
//   taskList.innerHTML = "";
//   for (let index = 0; index < tasks.length; index++) {
//     if (tasks[index].completed) {
//       const newTask = document.createElement (<li class= "tachado"></li>);
//       const newText = document.createTextNode (<input type="checkbox" class= "js-check" id="${index}" checked>
//     ${tasks[index].name});
//        } else {}
//    }
//   }
const renderTasks = (tasks) => {
  taskList.innerHTML = '';
  for (let index = 0; index < tasks.length; index++) {
    if (tasks[index].completed) {
      const newTask = document.createElement('li');
      const newInput = document.createElement(<input type="checkbox" class= "js-check" id="${index}" checked></input>)
      const newText = document.createTextNode($tasks[index].name);
      newInput.appendChild(newText);
      newTask.appendChild(newInput);
      taskList.appendChild(newTask);
    } else {
      const newTask2 = document.createElement ('li');
      const newInput2 = document.createElement (<input type="checkbox" class= "js-check" id="${index}" ></input>);
      const newText2 = document.createTextNode (`${tasks[index].name}`);
      newInput2.appendChild(newText2);
      newTask2.appendChild(newInput2);
      taskList.appendChild(newTask2);
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

function postNewData(event) {
  event.preventDefault();
  const newTaskData = textNewTask.value;
  const newTaskDataObject = {
    id: 16576927301334329,
    name: newTaskData,
    completed: false,
  };
  tasks.push(newTaskDataObject);
  renderTasks(tasks);
}

btnAdd.addEventListener("click", postNewData);

// // fetch(serverUrl/* 
// //   method: 'POST',
// //   headers: {'Content-Type': 'application/json'},
// //   body: JSON.stringify(newTaskDataObject),
// // }*/)
//   .then((response) => response.json())
{/* //   .then((data) => { */}
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
  //  for (const Item of tasks){
  //   const listItems

  //  }
   