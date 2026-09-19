let notas = [];
function adicionarNota() {

    // Pega o valor digitado
    let valor = document.getElementById("nota").value;

    // Converte o texto para número
    let nota = Number(valor);

    // Verifica se a nota é válida
    if (valor === "") {

        alert("Digite uma nota.");

        return;
    }

    if (nota < 0 || nota > 10) {

        alert("A nota deve estar entre 0 e 10.");

        return;
    }

    // Adiciona a nota ao vetor
    notas.push(nota);

    // Limpa o campo
    document.getElementById("nota").value = "";

    // Atualiza a tela
    mostrarNotas();

}

function mostrarNotas() {

    let lista = document.getElementById("listaNotas");

    // Limpa a lista
    lista.innerHTML = "";

    // Percorre o vetor
    for (let i = 0; i < notas.length; i++) {

        lista.innerHTML += `
            <li>
                Aluno ${i + 1}:
                <strong>${notas[i].toFixed(1)}</strong>
            </li>
        `;
    }

    // Atualiza quantidade
    document.getElementById("quantidade").innerHTML =
        notas.length;

    // Calcula os resultados
    calcularResultados();

}

function calcularResultados() {

    // Verifica se o vetor está vazio
    if (notas.length === 0) {

        document.getElementById("media").innerHTML = "0.00";

        document.getElementById("maior").innerHTML = "0.00";

        document.getElementById("menor").innerHTML = "0.00";

        return;
    }

    // Variável para armazenar a soma
    let soma = 0;

    // Inicializa maior e menor
    let maior = notas[0];

    let menor = notas[0];


    // Percorre o vetor
    for (let i = 0; i < notas.length; i++) {

        // Soma as notas
        soma = soma + notas[i];


        // Verifica maior nota
        if (notas[i] > maior) {

            maior = notas[i];
        }


        // Verifica menor nota
        if (notas[i] < menor) {

            menor = notas[i];
        }
    }


    // Calcula a média
    let media = soma / notas.length;


    // Mostra os resultados
    document.getElementById("media").innerHTML =
        media.toFixed(2);

    document.getElementById("maior").innerHTML =
        maior.toFixed(2);

    document.getElementById("menor").innerHTML =
        menor.toFixed(2);
}

function limparNotas() {

    // Cria um novo vetor vazio
    notas = [];

    // Atualiza a tela
    mostrarNotas();
}