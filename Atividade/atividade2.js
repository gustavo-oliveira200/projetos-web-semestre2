function calcular() {

    let nome = document.getElementById("nome").value;
    let av1 = Number(document.getElementById("av1").value);
    let av2 = Number(document.getElementById("av2").value);
    let trabalho = Number(document.getElementById("trabalho").value);
    let frequencia = Number(document.getElementById("frequencia").value);

    let media = (av1 * 0.35) + (av2 * 0.45) + (trabalho * 0.20);

    if (frequencia < 75) {

        document.getElementById("resultado").innerHTML =
            "Aluno: " + nome + "<br>" +
            "Média final: " + media.toFixed(2) + "<br>" +
            "Frequência: " + frequencia + "%<br>" +
            "REPROVADO POR FREQUÊNCIA.";

    } else if (media >= 7) {

        document.getElementById("resultado").innerHTML =
            "Aluno: " + nome + "<br>" +
            "Média final: " + media.toFixed(2) + "<br>" +
            "Frequência: " + frequencia + "%<br>" +
            "APROVADO!";

    } else if (media >= 5) {

        let exame = 7 - media;

        document.getElementById("resultado").innerHTML =
            "Aluno: " + nome + "<br>" +
            "Média final: " + media.toFixed(2) + "<br>" +
            "Frequência: " + frequencia + "%<br>" +
            "EM EXAME.<br>" +
            "Nota necessária no exame: " + exame.toFixed(2);

    } else {

        document.getElementById("resultado").innerHTML =
            "Aluno: " + nome + "<br>" +
            "Média final: " + media.toFixed(2) + "<br>" +
            "Frequência: " + frequencia + "%<br>" +
            "REPROVADO POR NOTA.";

    }
}

