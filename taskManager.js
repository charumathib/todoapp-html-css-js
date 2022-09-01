// keeps track of which tab is active
var activeTab = "";

// defines behavior when the "Add" button is clicked
document.querySelector("#add-task").onclick = function () {
  // alerts user if class or taskname has not been chosen
  if (activeTab == "") {
    alert("Please select a class");
  }
  else if (document.querySelector("#newtask input").value.length == 0) {
    alert("Please enter a name for your task");
  } 
  // adds new task to active tab's div when a task when valid input is provided
  else {
    document.querySelector("#" + activeTab).innerHTML += `
        <div class="task">
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

  // set onclick behavior for all task buttons
  var currentTasksDelete = document.querySelectorAll(".delete");
  var currentTasksComplete = document.querySelectorAll(".complete");
  var currentTasksPriority = document.querySelectorAll(".priority");

  // make task div transparent if completed button is clicked
  for (var i = 0; i < currentTasksComplete.length; i++) {
    currentTasksComplete[i].onclick = function () {
      this.parentNode.parentNode.style.opacity = 0.3;
    };
  }

  // make task div have a red border if priority button is clicked
  for (var i = 0; i < currentTasksPriority.length; i++) {
    currentTasksPriority[i].onclick = function () {
      this.parentNode.parentNode.style.borderColor = "red";
    };
  }

  // remove task div if delete button is clicked
  for (var i = 0; i < currentTasksDelete.length; i++) {
    currentTasksDelete[i].onclick = function () {
      this.parentNode.parentNode.remove();
    };
  }
};

/*  This function "opens" a tab by clearing out content of all tabs and then rendering the content of the currently
    active tab. It then renders just the content associated with the active tab and changes the className of the associated
    button to include the word "active" so that it inherits different CSS properties (darker shade).
*/
function openTab(evt, tabName) {
  activeTab = "tasks" + tabName;
  // clear all tab content
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  // populate content for active tab
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  // change CSS styling for active tab button
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}
