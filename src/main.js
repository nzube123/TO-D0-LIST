import './style.css';
// assigning reef to the render function
let { store, component } = reef;
let { render } = reef;
// todo array
let todo = [];
// get todos function
function gettodo() {
  if (!todo.length) {
    alert("Todo list is empty")
  } else {
    return `
    <ul>
      ${todo.map(function (input, index) {
      return `<li>${input} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ${Date()}  <button id="clist" data-delete = "${index}">Delete</button> `
    }).join('')}
    </ul>
    `
  }
}
// various elements like add button inputarea and the section where the data is to be displayed
let submit = document.getElementById("submit");
let input = document.getElementById("inputArea");
let divtodo = document.getElementById("addl");

//function to be carried out anytime the Add button is clicked
submit.addEventListener("click", () => {
  if (!input.value) {
    alert("Input area is empty")
  } else {
    todo.push(input.value);
    render(divtodo, gettodo());
    input.value = '';
  }
})

// adding value to the localstorage whenever a render function is carried out
document.addEventListener("reef:render", function () {
  localStorage.setItem("todolist", JSON.stringify(todo));
  console.log("was updated");
})

// setting a default value for the todo array
todo = JSON.parse(localStorage.getItem("todolist"));

// initiating the gettodo() function by default
render(divtodo, gettodo())

function removetodo(event) {
  let index = event.target.getAttribute('data-delete');
  if (!index) {
    return;
  } else {
    todo.splice(index, 1);
    render(divtodo, gettodo())
  }

  // localstorage (creating a localstorage when ever the submit button is clicked)
  if (typeof (Storage) != 'undefined') {
    localStorage.setItem("todolist", JSON.stringify(todo));
  }
}
divtodo.addEventListener("click", removetodo);