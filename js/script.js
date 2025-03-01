// show the task complete in activity log

const completeButtons = document.getElementsByClassName("complete-btn");

for (let button of completeButtons) {
  button.addEventListener("click", function (event) {
    // alert
    alert("Board updated Successfully");

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
