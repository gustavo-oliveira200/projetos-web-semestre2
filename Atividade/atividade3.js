function calcular() {

    let valor = Number(document.getElementById("valor").value);
    let distancia = Number(document.getElementById("distancia").value);
    let cliente = document.getElementById("cliente").value;
    let pagamento = document.getElementById("pagamento").value;

    let desconto = 0;
    let frete = 0;

    if (cliente == "vip") {
        desconto = valor * 0.05;
    } else if (cliente == "premium") {
        desconto = valor * 0.10;
    } else {
        desconto = 0;
    }
    if (pagamento == "pix") {
        desconto = desconto + (valor * 0.05);
    }
    if (distancia <= 50) {
        frete = 15;
    } else if (distancia <= 150) {
        frete = 30;
    } else {
        frete = 50;
    }
    if (valor > 500) {
        frete = 0;
    }
    if (cliente == "premium" && valor > 1000) {
        frete = 0;
    }

    let valorFinal = valor - desconto + frete;

    document.getElementById("resultado").innerHTML =
        "VALOR ORIGINAL: R$ " + valor.toFixed(2) + "<br>" +
        "DESCONTO: R$ " + desconto.toFixed(2) + "<br>" +
        "FRETE: R$ " + frete.toFixed(2) + "<br>" +
        "VALOR FINAL: R$ " + valorFinal.toFixed(2);
}

