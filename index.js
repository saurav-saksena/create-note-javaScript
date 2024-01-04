const input = document.getElementById("input--text");
const listcontainer = document.querySelector(".notes--ul");

function addNotes() {
  if (input.value == "") {
    let errorMsg = document.getElementById("error");
    errorMsg.style.opacity = 1;
    setTimeout(() => {
      errorMsg.style.opacity = 0;
    }, 1500);
  } else {
    let newNote = document.createElement("li");
    newNote.innerHTML = input.value;
    listcontainer.appendChild(newNote);
    let removeButton = document.createElement("span");
    removeButton.innerHTML = "&#128473; ";
    removeButton.setAttribute("title", "remove note");
    newNote.appendChild(removeButton);
  }
  input.value = "";
  saveDataInStorage();
}

listcontainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName == "LI") {
      e.target.classList.toggle("checked");
      saveDataInStorage();
    } else if (e.target.tagName == "SPAN") {
      e.target.parentElement.remove();
      saveDataInStorage();
    } else {
      alert("something went wrong");
    }
  },
  false
);

function saveDataInStorage() {
  localStorage.setItem("notesData", listcontainer.innerHTML);
}
function getDataFromStorage() {
  listcontainer.innerHTML = localStorage.getItem("notesData");
}
getDataFromStorage();
