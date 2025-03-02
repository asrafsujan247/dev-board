// random color for body

document
  .getElementById("color-theme-btn")
  .addEventListener("click", function () {
    const number1 = Math.floor(Math.random() * (255 - 0) + 0);
    const number2 = Math.floor(Math.random() * (255 - 0) + 0);
    const number3 = Math.floor(Math.random() * (255 - 0) + 0);
    const randomColor = `rgb(${number1}, ${number2}, ${number3})`;
    document.getElementById("body").style.backgroundColor = randomColor;
  });

// current date in task details section
const currentDate = new Date().toDateString();
const dayName = currentDate.split(" ")[0];
const otherDateDetails = currentDate.split(" ").slice(1, 4).join(" ");

document.getElementById("current-day").innerText = `${dayName} ,`;
document.getElementById("current-date").innerText = otherDateDetails;

// show the task complete in activity log
const completeButtons = document.getElementsByClassName("complete-btn");

let taskCount = 0;

for (let button of completeButtons) {
  button.addEventListener("click", function (event) {
    // alert
    alert("Board updated Successfully");

    // task count
    taskCount++;
    if (taskCount === 6) {
      alert("Congrats!!! You have completed all the current tasks");
    }
    // btn disable
    button.setAttribute("disabled", "");

    // task remaining
    const taskRemaining = parseInt(
      document.getElementById("task-remaining").innerText
    );
    document.getElementById("task-remaining").innerText = taskRemaining - 1;

    // task completed
    const taskCompleted = parseInt(
      document.getElementById("task-completed").innerText
    );
    document.getElementById("task-completed").innerText = taskCompleted + 1;

    // task complete time
    const currentDate = new Date();
    const currentTime = currentDate.toLocaleTimeString([], {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
    });

    // activity log message
    const cardTitle =
      event.target.parentNode.parentNode.childNodes[1].childNodes[3].innerText;
    const messageContainer = document.getElementById("message-container");
    const p = document.createElement("p");
    p.classList.add("bg-blue-50", "text-gray-500", "p-3", "mb-4", "rounded-lg");
    p.innerText = `You have Complete The Task ${cardTitle} at ${currentTime}`;
    messageContainer.appendChild(p);
  });
}

// clear history

document
  .getElementById("clear-history-btn")
  .addEventListener("click", function () {
    document.getElementById("message-container").innerText = "";
  });

// discover something to navigate to the blog section

document
  .getElementById("discover-something")
  .addEventListener("click", function () {
    window.location.href = "blog.html";
  });
