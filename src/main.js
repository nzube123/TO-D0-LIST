import './style.css'

// saving every element into an array
let submit = document.getElementById("submit");
let input = document.getElementById("inputArea");

// script to add element to the array that will display in the section below
submit.addEventListener("click", () => {
  const create = document.createElement("li");
  create.innerHTML = input.value + "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;" + Date();
  var done = document.createElement("input");
  done.type = "checkbox"
  done.className = "clearlist";
  create.appendChild(done);
  document.getElementById("listSection").appendChild(create);


  // code to delete a particular list
  done.addEventListener("click", () => {
    create.style.display = "none";
  })

})



