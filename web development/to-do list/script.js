var todoList = document.getElementById("todo-list");
var inputField = document.getElementById("input-field");
var addTodoButton = document.getElementById("add-todo");
var deleteAll = document.getElementById("delete");
const addItemToList = function (event) {
  var newTodoItem = inputField.value;
  //   todoList.innerHTML += `<li>${newTodoItem} <button>X</button></li> `;

  //

  //   create a button
  var removeButtom = document.createElement("button");
  removeButtom.innerText = "Delete";

  // create edit button
  var editButton = document.createElement("button");
  editButton.innerText = "edit";
  editButton.id = "editbtn";

  // create cross button
  var doneButton = document.createElement("button");
  doneButton.innerText = "Done";

  //   event listener for remove button
  removeButtom.addEventListener("click", function () {
    newLiTag.remove();
    editButton.remove();
    // e.target.parentElement.remove();
  });

  //  event listener for edit button
  editButton.addEventListener("click", function () {
    let changedVal = prompt("Enter changed entry");
    newLiTag.innerText = changedVal;
    newLiTag.appendChild(removeButtom);
    newLiTag.appendChild(doneButton);
    newLiTag.appendChild(editButton);
  });

  // event listener for done button
  doneButton.addEventListener("click", function () {
    newLiTag.style.textDecoration = "line-through";
    color;
  });
  // create a new li tag
  var newLiTag = document.createElement("li");
  newLiTag.innerText = newTodoItem;

  // Put button inside li tag
  newLiTag.appendChild(removeButtom);

  // put li tag inside todoList
  todoList.appendChild(newLiTag);
  // put edit button inside todoList
  newLiTag.appendChild(editButton);
  // put done button inside todolist
  newLiTag.appendChild(doneButton);
  editButton.style.marginLeft = "100px";
  removeButtom.style.marginLeft = "200px";
};

deleteAll.addEventListener("click", function () {
  todoList.remove();
  addTodoButton.addEventListener("click", addItemToList);
});
addTodoButton.addEventListener("click", addItemToList);
