function calcular(){

    let nome=document.getElementById("nome").value;
    let idade=Number(document.getElementById("idade").value);
    let distancia=Number(document.getElementById("distancia").value);
    let classe=document.getElementById("classe").value;
    let bagagem=Number(document.getElementById("bagagem").value);
    let antecedencia=Number(document.getElementById("antecedencia").value);

    let valor=distancia*0.45;

    if(classe=="economica"){
        valor=valor*1;
    }else if(classe=="executiva"){
        valor=valor*1.8;
    }else{
        valor=valor*3;
    }

    let descontoIdade=0;

    if(idade<12){
        descontoIdade=valor*0.40;
    }else if(idade<=17){
        descontoIdade=valor*0.20;
    }else if(idade>=60){
        descontoIdade=valor*0.15;
    }

    let descontoAntecedencia=0;

    if(antecedencia>60){
        descontoAntecedencia=valor*0.20;
    }else if(antecedencia>=30){
        descontoAntecedencia=valor*0.10;
    }

    let descontoExtra=0;

    if((idade<12||idade>=60)&&classe=="economica"){
        descontoExtra=valor*0.05;
    }

    let valorBagagem=0;

    if(bagagem<=10){
        valorBagagem=0;
    }else if(bagagem<=20){
        valorBagagem=50;
    }else if(bagagem<=30){
        valorBagagem=100;
    }else{
        valorBagagem=150;
    }

    let totalDescontos=descontoIdade+descontoAntecedencia+descontoExtra;

    let valorFinal=valor-totalDescontos+valorBagagem;

    document.getElementById("resultado").innerHTML=
        "Passageiro: "+nome+"<br>"+
        "Preço da passagem: R$ "+valor.toFixed(2)+"<br>"+
        "Desconto por idade: R$ "+descontoIdade.toFixed(2)+"<br>"+
        "Desconto por antecedência: R$ "+descontoAntecedencia.toFixed(2)+"<br>"+
        "Desconto extra: R$ "+descontoExtra.toFixed(2)+"<br>"+
        "Valor da bagagem: R$ "+valorBagagem.toFixed(2)+"<br>"+
        "VALOR FINAL: R$ "+valorFinal.toFixed(2);
}