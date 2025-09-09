import './style.css'
// assigning reef to the render function
// let { render } = reef;
let { signal, component } = reef;


// todo array
let datatodo = signal({
  todo: JSON.parse(localStorage.getItem("todolist")) || []
});

// selecting the div where the data is to be displayed
let divtodo = document.getElementById("addl");

// get todos function
component(divtodo, function gettodo() {
  if (!datatodo.todo.length) {
    alert("Todo list is empty");
  } else {
    return `
    <ul>
      ${datatodo.todo.map(function (input, index) {
      return `<li>${input} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ${Date()}  <button id="clist" data-delete = "${index}">Done</button> `
    }).join('')}
    </ul>
    `
  }
});

// various elements like add button inputarea and the section where the data is to be displayed
let submit = document.getElementById("submit");
let input = document.getElementById("inputArea");

//function to be carried out anytime the Add button is clicked
submit.addEventListener("click", () => {
  if (!input.value) {
    alert("Input area is empty");
  } else {
    datatodo.todo.push(input.value);
    input.value = '';
  }
    localStorage.setItem("todolist", JSON.stringify(datatodo.todo));
})

// setting a default value for the todo array
// datatodo.todo = JSON.parse(localStorage.getItem("todolist"));
// initiating the gettodo() function by default

function removetodo(event) {
  let index = event.target.getAttribute('data-delete');
  if (!index) {
    return;
  } else {
    datatodo.todo.splice(index, 1);
  }

  // localstorage (creating a localstorage when ever the submit button is clicked)
  localStorage.setItem("todolist", JSON.stringify(datatodo.todo));
}
divtodo.addEventListener("click", removetodo);