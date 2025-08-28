//3.b) Defina let temperatura = 22; e mostre se está "Frio", "Agradável" ou "Quente".

let temperatura = 29;

MaxFrio = 18;
MaxAgradavel = 28;
MaxQuente = 40;

if(temperatura <= MaxFrio){
    console.log("Esta frio");
}
else if(temperatura > MaxFrio && temperatura <= MaxAgradavel){
    console.log("Esta agradavel");
}
else{
    console.log("Esta Quente");
}