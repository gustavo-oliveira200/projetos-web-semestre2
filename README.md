# Projetos Web — 2º semestre

Projetos acadêmicos desenvolvidos no curso de Sistemas de Informação para praticar HTML, CSS e JavaScript. Os exercícios exploram formulários, cálculos, estruturas condicionais, vetores e atualização de conteúdo na página.

## Tecnologias e conceitos

- **HTML5:** estrutura das páginas, campos de entrada e botões.
- **CSS3:** apresentação visual dos formulários e resultados.
- **JavaScript:** funções, variáveis, operadores, condicionais, laços e vetores.
- **DOM:** leitura dos campos e atualização dos resultados na tela.

Os projetos utilizam arquivos HTML, CSS e JavaScript, sem instalação de dependências.

## Atividade Prática 01 — JavaScript

As cinco atividades abaixo correspondem ao documento de **Design de Interfaces II**, do 2º semestre, datado de **26/08/2026**.

| Nº | Projeto | Objetivo do exercício | Código |
| --- | --- | --- | --- |
| 1 | Aprovação de empréstimo | Calcular parcela e comprometimento da renda, com aprovação, análise ou recusa conforme os critérios do enunciado. | [HTML](Atividade/atividade1.html) · [JavaScript](Atividade/atividade1.js) |
| 2 | Notas e situação do aluno | Calcular a média ponderada de AV1 (35%), AV2 (45%) e trabalho (20%), considerando também a frequência. | [HTML](Atividade/atividade2.html) · [JavaScript](Atividade/atividade2.js) |
| 3 | Compra com desconto e frete | Simular o valor final de uma compra conforme tipo de cliente, pagamento e distância da entrega. | [HTML](Atividade/atividade3.html) · [JavaScript](Atividade/atividade3.js) |
| 4 | Consumo de energia elétrica | Calcular uma conta simulada conforme tipo de consumidor, consumo em kWh e taxas adicionais. | [HTML](Atividade/atividade4.html) · [JavaScript](Atividade/atividade4.js) |
| 5 | Compra de passagem aérea | Calcular o preço conforme distância, classe, idade, antecedência e bagagem, exibindo descontos e total. | [HTML](Atividade/atividade5.html) · [JavaScript](Atividade/atividade5.js) |

As regras e os valores dessas simulações são os utilizados na atividade acadêmica.

## Outros exercícios

| Projeto | Funcionalidades presentes | Código |
| --- | --- | --- |
| Cadastro de alunos | Adicionar nomes a um vetor, listar alunos, mostrar a quantidade e remover o último cadastro. | [HTML](Cadastrar-aluno/index.html) · [JavaScript](Cadastrar-aluno/script.js) |
| Cadastro de notas | Adicionar notas, exibir quantidade, média, maior e menor nota e limpar o vetor. | [HTML](projetoVetor2/index.html) · [JavaScript](projetoVetor2/script.js) |
| Gerenciador de produtos | Adicionar no início ou no fim, remover o primeiro, o último ou um item por posição, usando métodos de vetores. | [HTML](projetoVetor3/index.html) · [JavaScript](projetoVetor3/script.js) |
| Calculadora de IMC | Receber nome, peso e altura, calcular o IMC e exibir uma classificação. | [HTML](teste%20java/index.html) · [JavaScript](teste%20java/scrip.js) |

A calculadora de IMC está na pasta `teste java`, mas foi desenvolvida em **JavaScript**. Ela utiliza a fórmula `peso / (altura * altura)`, com peso em quilogramas e altura em metros. A revisão dos limites de classificação está entre as melhorias pendentes.

## Organização das pastas

| Pasta | Conteúdo |
| --- | --- |
| `Atividade/` | Cinco exercícios da Atividade Prática 01, cada um com HTML, CSS e JavaScript próprios. |
| `Cadastrar-aluno/` | Cadastro de alunos em vetor. |
| `projetoVetor2/` | Cadastro e estatísticas de notas. |
| `projetoVetor3/` | Gerenciador de produtos. |
| `teste java/` | Calculadora de IMC; o arquivo JavaScript se chama `scrip.js`. |

## Como executar

### 1. Baixe o repositório

Use **Code → Download ZIP** no GitHub e extraia a pasta, ou clone pelo terminal:

```bash
git clone https://github.com/gustavo-oliveira200/projetos-web-semestre2.git
cd projetos-web-semestre2
```

### 2. Abra o exercício no navegador

Abra o arquivo HTML do projeto desejado na pasta baixada. Exemplos:

- `Atividade/atividade1.html`: aprovação de empréstimo.
- `Cadastrar-aluno/index.html`: cadastro de alunos.
- `projetoVetor3/index.html`: gerenciador de produtos.
- `teste java/index.html`: calculadora de IMC.

Mantenha os arquivos CSS e JavaScript nas respectivas pastas para que os caminhos usados no HTML continuem funcionando.

Os links das tabelas deste README abrem o **código no GitHub**. Para interagir com as páginas, abra os arquivos locais no navegador.

### 3. Interaja com a página

Preencha os campos e utilize os botões para visualizar os resultados. Nos projetos de vetores, as alterações ficam apenas na memória da página e são reiniciadas ao recarregá-la.

## Estado atual e próximas melhorias

As implementações estão disponíveis para estudo e evolução. A documentação foi organizada pela leitura dos arquivos e dos enunciados; isso não representa uma validação completa do funcionamento.

- [ ] Ampliar a validação de campos vazios, números inválidos e valores fora dos limites.
- [ ] Ajustar os limites das faixas na calculadora de IMC e impedir cálculos com altura zero.
- [ ] Confirmar com o enunciado complementar ou com o professor a fórmula da nota de exame: o código atual usa `7 - media`, mas o documento não define como combinar a nota do exame com a média anterior.
- [ ] Confirmar os critérios de cálculo por faixas e de classificação do consumo de energia; o código atual usa cobrança progressiva por faixas.
- [ ] Validar posições inteiras ao remover produtos e nomes compostos apenas por espaços no cadastro de alunos.
- [ ] Inserir nomes digitados como texto, evitando sua interpretação como HTML.
- [ ] Padronizar nomes de pastas e melhorar acessibilidade e apresentação em telas pequenas.
- [ ] Adicionar persistência com `localStorage` aos projetos de cadastro.
- [ ] Incluir capturas de tela e uma demonstração online.

## Autor

[Gustavo Oliveira dos Santos](https://github.com/gustavo-oliveira200)  
Estudante de Sistemas de Informação.
