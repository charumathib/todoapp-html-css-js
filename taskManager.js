var i = 0;
var activeTab = "";
document.querySelector("#add-task").onclick = function () {
  if (activeTab == ""){
    alert("Please select a class")
  }
  if (document.querySelector("#newtask input").value.length == 0) {
    alert("Please enter a name for your task");
  } else {
    document.querySelector("#" + activeTab).innerHTML += `
            <div class="task" id="text-${i}">
                <span id="taskname">
                    ${document.querySelector("#newtask input").value}
                </span>
                <span>
                <button class="priority">
                    <p style="font-size: 20px"> 🔥 </p>
                </button>
                <button class="complete">
                    <p style="font-size: 20px"> ✔️ </p>
                </button>
                <button class="delete">
                   <p style="font-size: 20px"> 🗑️ </p>
                </button>
                </span>
            </div>
        `;
  }

  var currentTasksDelete = document.querySelectorAll(".delete");
  var currentTasksComplete = document.querySelectorAll(".complete");
  var currentTasksPriority = document.querySelectorAll(".priority");

  for (var i = 0; i < currentTasksComplete.length; i++) {
    currentTasksComplete[i].onclick = function () {
      this.parentNode.parentNode.style.opacity = 0.3;
    };
  }
  for (var i = 0; i < currentTasksPriority.length; i++) {
    currentTasksPriority[i].onclick = function () {
      this.parentNode.parentNode.style.borderColor = "red";
    };
  }
  for (var i = 0; i < currentTasksDelete.length; i++) {
    currentTasksDelete[i].onclick = function () {
      this.parentNode.parentNode.remove();
    };
  }
};

function openTab(evt, tabName) {
  activeTab = "tasks" + tabName;
  tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
