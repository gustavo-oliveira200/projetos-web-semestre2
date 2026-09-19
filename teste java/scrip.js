function calcular(){
    let peso = Number(document.getElementById("peso").value);
    let altura = Number(document.getElementById("altura").value);
    let nome = (document.getElementById("nome").value);

    let imc = peso/(altura*altura);
    let mensagem
   
    if (imc<18.5){
       mensagem = "Abaixo do peso"
    }
    else if (imc<24.9){
       mensagem = "Peso normal"
    }
     else if (imc<29.9){
        mensagem = "Sobrepeso"
     }
       else if (imc<34.9){
       mensagem = "Obesidade grau 1"
     }
     else if (imc<39.9){
       mensagem = "Obesidade grau 2"
     }
     else{
      mensagem = "Obesidade grau 3"
     }
   
        document.getElementById("resultado").innerHTML=
        "Nome: "+ nome +
        "<br>Peso KG: "+peso.toFixed(2)+
        "<br>IMC: "+imc.toFixed(2)+
        "<br>"+ mensagem;
   }
    