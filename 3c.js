//3.c) Defina let dia = 3; e mostre "Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta" ou "Sábado".

let dia = 3;

if(dia <= 7){
    if(dia === 1){
        console.log("Domingo");
    }
    else if(dia === 2){
        console.log("Segunda - Feira");
    }
    else if(dia === 3){
        console.log("Terca - Feira");
    }
    else if(dia === 4){
        console.log("Quarta - Feira");
    }
    else if(dia === 5){
        console.log("Quinta - Feira");
    }
    else if(dia === 6){
        console.log("Sexta - Feira");
    }
    else{
        console.log("Sabado");
    }
}
else{
    console.log("Esse dia da Semana nao existe...");
}