import './style.css';
// assigning reef to the render function
let { render } = reef;
// let { store, component } = reef;

// todo array
// let todo = [];
let datatodo = { todo: [] };

// get todos function
function gettodo() {
  if (!datatodo.todo.length) {
    alert("Todo list is empty");
  } else {
    return `
    <ul>
      ${datatodo.todo.map(function (input, index) {
      return `<li>${input} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ${Date()}  <button id="clist" data-delete = "${index}">Done</button> `
    }).join('')};
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
    alert("Input area is empty");
  } else {
    datatodo.todo.push(input.value);
    render(divtodo, gettodo());
    input.value = '';
  }
  if (typeof (Storage) != "undefined") {
    localStorage.setItem("todolist", JSON.stringify(datatodo.todo));
  }

})

// setting a default value for the todo array
datatodo.todo = JSON.parse(localStorage.getItem("todolist"));
// initiating the gettodo() function by default
render(divtodo, gettodo());

function removetodo(event) {
  let index = event.target.getAttribute('data-delete');
  if (!index) {
    return;
  } else {
    datatodo.todo.splice(index, 1);
    render(divtodo, gettodo());
  }

  // localstorage (creating a localstorage when ever the submit button is clicked)
  if (typeof (Storage) !== 'undefined') {
    localStorage.setItem("todolist", JSON.stringify(datatodo.todo));
  }
}
divtodo.addEventListener("click", removetodo);