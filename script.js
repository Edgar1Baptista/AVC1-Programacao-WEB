// Array para armazenar estudantes e notas
let students = [];

// Função para carregar dados salvos ao abrir a página
function loadSavedGrades() {
    const savedData = localStorage.getItem("students");
    if (savedData) {
        students = JSON.parse(savedData);
    }
}

// Função para atribuir notas aleatórias de 0 a 20
function assignGrades() {
    const name = document.getElementById("name").value;
    const matricula = document.getElementById("matricula").value;

    if (name && matricula) {
        const grade = Math.floor(Math.random() * 21); // Nota entre 0 e 20
        students.push({ name, matricula, grade });
        alert(`Nota atribuída a ${name} com sucesso!`);
        clearForm();
    } else {
        alert("Por favor, insira o nome e número de matrícula.");
    }
}

// Função para limpar o formulário
function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("matricula").value = "";
}

// Função para salvar notas
function saveGrades() {
    localStorage.setItem("students", JSON.stringify(students));
    alert("Notas salvas com sucesso!");
}

// Função para exibir o popup com as notas dos estudantes
function viewGrades() {
    const resultList = document.getElementById("resultList");
    resultList.innerHTML = ""; // limpar lista

    if (students.length > 0) {
        students.forEach((student) => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <strong>Nome:</strong> ${student.name} <br>
                <strong>Matrícula:</strong> ${student.matricula} <br>
                <strong>Nota:</strong> ${student.grade} <br>
            `;
            resultList.appendChild(listItem);
        });
        document.getElementById("popup").style.display = "flex";
    } else {
        resultList.innerHTML = "<li>Nenhum dado disponível.</li>";
        document.getElementById("popup").style.display = "flex";
    }
}

// Função para fechar o popup
function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// Função para atualizar a hora
function updateCurrentTime() {
    const timeElement = document.getElementById('current-time');
    const now = new Date();

    // Formatar a hora (HH:MM:SS)
    const formattedTime = now.toLocaleTimeString('pt-PT', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    // Exibir a hora no elemento
    timeElement.textContent = formattedTime;
}

// Atualizar a hora a cada segundo
setInterval(updateCurrentTime, 1000);

// Atualizar a hora imediatamente ao carregar a página
updateCurrentTime();
