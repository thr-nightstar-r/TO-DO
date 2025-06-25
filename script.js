const inputbox = document.getElementById("todo-input");
const listcontainer = document.getElementById("listcontainer");


function addTask(){
    if (inputbox.value === ''){
        alert("ladle, kuch likh to sahi!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }
    inputbox.value = "";
    saveData()
}

listcontainer.addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  } 
  else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
  }
}, false);

function saveData(){
    localStorage.setItem("data", listcontainer.innerHTML);
}
function showTask(){
    listcontainer.innerHTML = localStorage.getItem("data");
}
showTask();