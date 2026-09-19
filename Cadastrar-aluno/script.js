// Criação de um vetor vazio
let alunos = [];

function adicionarAluno() {

    // Pega o valor digitado no campo
    let nome = document.getElementById("nomeAluno").value;

    // Verifica se o campo está vazio
    if (nome === "") {

        alert("Digite o nome do aluno.");

        return;
    }

    // Adiciona o nome no final do vetor
    alunos.push(nome);

    // Limpa o campo
    document.getElementById("nomeAluno").value = "";

    // Mostra os alunos na tela
    mostrarAlunos();
}

function mostrarAlunos() {

    // Localiza a lista no HTML
    let lista = document.getElementById("listaAlunos");

    // Limpa a lista
    lista.innerHTML = "";

    // Percorre o vetor
    for (let i = 0; i < alunos.length; i++) {

        lista.innerHTML += `
            <li>
                ${i + 1} - ${alunos[i]}
            </li>
        `;
    }

    // Mostra a quantidade de alunos
    document.getElementById("totalAlunos").innerHTML =
        alunos.length;
}

function removerUltimoAluno() {

    // Verifica se o vetor está vazio
    if (alunos.length === 0) {

        alert("Não existem alunos cadastrados.");

        return;
    }

    // Remove o último elemento do vetor
    alunos.pop();

    // Atualiza a lista
    mostrarAlunos();
}