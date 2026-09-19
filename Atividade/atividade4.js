function calcular(){

    let nome=document.getElementById("nome").value;
    let tipo=document.getElementById("tipo").value;
    let consumo=Number(document.getElementById("consumo").value);

    let valor=0;
    let taxa=0;

    if(tipo=="residencial"){

        if(consumo<=100){
            valor=consumo*0.75;
        }else if(consumo<=200){
            valor=(100*0.75)+((consumo-100)*0.90);
        }else{
            valor=(100*0.75)+(100*0.90)+((consumo-200)*1.10);
        }

    }else if(tipo=="comercial"){

        if(consumo<=500){
            valor=consumo*1.20;
        }else{
            valor=(500*1.20)+((consumo-500)*1.40);
        }

    }else{

        if(consumo<=1000){
            valor=consumo*1.50;
        }else{
            valor=(1000*1.50)+((consumo-1000)*1.80);
        }

    }

    if(consumo>500){
        taxa=valor*0.12;
    }else if(consumo>300){
        taxa=valor*0.08;
    }

    let total=valor+taxa;

    let classificacao;

    if(consumo<=300){
        classificacao="BAIXO";
    }else if(consumo<=500){
        classificacao="MODERADO";
    }else{
        classificacao="ALTO";
    }

    document.getElementById("resultado").innerHTML=
        "Consumidor: "+nome+"<br>"+
        "Consumo: "+consumo.toFixed(2)+" kWh<br>"+
        "Valor da conta: R$ "+valor.toFixed(2)+"<br>"+
        "Taxa adicional: R$ "+taxa.toFixed(2)+"<br>"+
        "Valor total: R$ "+total.toFixed(2)+"<br>"+
        "Classificação: "+classificacao;
}