function AggiungiTask() {
    let taskInput = document.getElementById("taskInput");
    let taskTesto = taskInput.value.trim();

    if (taskTesto === "") {
        alert("Inserisci un'attività valida!");
        return;
    }

    // Crea il nuovo elemento della lista
    let li = document.createElement("li");
    li.innerHTML = `${taskTesto} <button class="delete-btn" onclick="rimuoviTask(this)">❌</button>`;

    // Aggiungi il nuovo task alla lista
    document.getElementById("taskList").appendChild(li);

    // Mostra "Parole inserite:" se non è già visibile
    document.getElementById("tasksLabel").style.display = "block";

    // Pulisce il campo di input
    taskInput.value = "";
}

function rimuoviTask(button) {
    let li = button.parentElement;
    li.style.opacity = "0";
    li.style.transform = "scale(0.9)";
    setTimeout(() => li.remove(), 300);
}

function cancellaTask() {
    document.getElementById("taskList").innerHTML = "";
    document.getElementById("tasksLabel").style.display = "none"; // Nasconde "Parole inserite:" se non ci sono task
}
