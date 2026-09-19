let produtos = [
    "Notebook",
    "Mouse",
    "Teclado"
];

function mostrarProdutos() {

    const lista = document.getElementById("listaProdutos");

    lista.innerHTML = "";

    if (produtos.length === 0) {

        lista.innerHTML = `
            <div class="vazio">
                Nenhum produto cadastrado.
            </div>
        `;

        return;
    }

    produtos.forEach(function(produto, indice) {

        lista.innerHTML += `
            <div class="produto">

                <span>
                    <span class="indice">
                        [${indice}]
                    </span>

                    ${produto}
                </span>

            </div>
        `;
    });
}

function adicionarInicio() {

    const campo = document.getElementById("produto");

    const nomeProduto = campo.value.trim();

    if (nomeProduto === "") {

        mostrarMensagem("Digite um produto.", "erro");

        return;
    }

    produtos.unshift(nomeProduto);

    campo.value = "";

    mostrarProdutos();

    mostrarMensagem(
        "Produto adicionado no início do vetor."
    );
}

function adicionarFim() {

    const campo = document.getElementById("produto");

    const nomeProduto = campo.value.trim();

    if (nomeProduto === "") {

        mostrarMensagem("Digite um produto.", "erro");

        return;
    }

    produtos.push(nomeProduto);

    campo.value = "";

    mostrarProdutos();

    mostrarMensagem(
        "Produto adicionado no final do vetor."
    );
}

function removerPrimeiro() {

    if (produtos.length === 0) {

        mostrarMensagem(
            "Não existem produtos para remover.",
            "erro"
        );

        return;
    }

    const removido = produtos.shift();

    mostrarProdutos();

    mostrarMensagem(
        `Produto removido: ${removido}`
    );
}

function removerUltimo() {

    if (produtos.length === 0) {

        mostrarMensagem(
            "Não existem produtos para remover.",
            "erro"
        );

        return;
    }

    const removido = produtos.pop();

    mostrarProdutos();

    mostrarMensagem(
        `Produto removido: ${removido}`
    );
}

function removerEspecifico() {

    const campo = document.getElementById("posicao");

    const posicao = Number(campo.value);

    if (produtos.length === 0) {

        mostrarMensagem(
            "Não existem produtos para remover.",
            "erro"
        );

        return;
    }

    if (
        campo.value === "" ||
        posicao < 0 ||
        posicao >= produtos.length
    ) {

        mostrarMensagem(
            "Digite uma posição válida.",
            "erro"
        );

        return;
    }

    const removido = produtos.splice(posicao, 1);

    campo.value = "";

    mostrarProdutos();

    mostrarMensagem(
        `Produto removido: ${removido[0]}`
    );
}

function mostrarMensagem(texto, tipo = "sucesso") {

    const mensagem = document.getElementById("mensagem");

    mensagem.textContent = texto;

    if (tipo === "erro") {
        mensagem.style.color = "red";
    } else {
        mensagem.style.color = "green";
    }

    setTimeout(function() {

        mensagem.textContent = "";

    }, 2500);
}

mostrarProdutos();