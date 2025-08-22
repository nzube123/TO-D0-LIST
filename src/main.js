import './style.css'

// saving every element into an array
let submit = document.getElementById("submit");
let input = document.getElementById("inputArea");
let divtodo = document.getElementById("addl");

// todo array of the various todo items
var todos = [];


function gettodos() {
  if (!todos.length) {
    alert("Empty input area")
  } else {
    return `
    <ul>
      ${todos.map(function (input, index) {
      return `<li>${input} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ${Date()}  <button class="clearlist" onlick="" data-delete="${index}">delete</button></li>`
    }).join('')}
    </ul>
    `
  }
}



// script to add element to the array that will display in the section below
submit.addEventListener("click", () => {

  // confitional statement to cjeck if the input arear is filled or empty
  if (!input.value) {
    // action when the input area is empty
    window.alert("Input Area is empty")
  } else {
    todos.push(input.value);
    divtodo.innerHTML = gettodos();
  }

  // saving the array in the array by turning it into a string
  if (typeof (Storage) !== "undefined") {
    localStorage.setItem('tsd', JSON.stringify(todos));
  }
})

todos = JSON.parse(localStorage.getItem("tsd"));
// the declaration of the function on the page by default
divtodo.innerHTML = gettodos();


var remove = document.getElementsByClassName("clearlist");
for (let i = 0; i < remove.length; i++) {

  function removetodo(event) {
    // Only run on [data-delete] items
    let index = event.target.getAttribute('data-delete');
    if (!index) return;

    // Otherwise, remove the todo and rerender the UI
    todos.splice(index, 1);
    divtodo.innerHTML = gettodos();
  }
  remove[i].addEventListener("click", removetodo)
}