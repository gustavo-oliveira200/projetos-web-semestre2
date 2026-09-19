function calcular() { 
 
    let nome = document.getElementById("nome").value; 
    let salario = Number(document.getElementById("salario").value); 
    let emprestimo = Number(document.getElementById("emprestimo").value); 
    let parcela = Number(document.getElementById("parcelas").value); 
    let divida = Number(document.getElementById("divida").value); 
 
    let valorParcela = emprestimo / parcela; 
 
    let comprometimento = ((valorParcela + divida) / salario) * 100; 
 
    if (salario < 1500) { 
 
        document.getElementById("resultado").innerHTML = 
            "Cliente: " + nome + "<br>" + 
            "Empréstimo NEGADO! Salário inferior a R$ 1.500,00."; 
 
    } else if (comprometimento <= 30) { 
 
        document.getElementById("resultado").innerHTML = 
            "Cliente: " + nome + "<br>" + 
            "Valor da parcela: R$ " + valorParcela.toFixed(2) + "<br>" + 
            "Comprometimento da renda: " + comprometimento.toFixed(2) + "%<br>" + 
            "Empréstimo APROVADO!"; 
 
    } else if (comprometimento <= 40) { 
 
        document.getElementById("resultado").innerHTML = 
            "Cliente: " + nome + "<br>" + 
            "Valor da parcela: R$ " + valorParcela.toFixed(2) + "<br>" + 
            "Comprometimento da renda: " + comprometimento.toFixed(2) + "%<br>" + 
            "Empréstimo CONDICIONADO A ANÁLISE."; 
 
    } else { 
 
        document.getElementById("resultado").innerHTML = 
            "Cliente: " + nome + "<br>" + 
            "Valor da parcela: R$ " + valorParcela.toFixed(2) + "<br>" + 
            "Comprometimento da renda: " + comprometimento.toFixed(2) + "%<br>" + 
            "Empréstimo NEGADO! Comprometimento acima de 40%."; 
 
    } 
}