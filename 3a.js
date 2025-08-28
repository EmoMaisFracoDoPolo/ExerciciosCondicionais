//3.a) Com let nota = 75;, mostre a letra da nota: "A", "B" ou "C".

let nota = 75;

X = 100 / 3; //Terço da nota que é aproximadamente 33.33

A = X + X + X;  // 99.99% OU 100%
B = X + X;      // 66.66%
C = X;          // 33.33%

if(nota >= A){
    console.log("Sua nota foi A");
}
else if(nota <= C){
    console.log("Sua nota foi C");
}
else{
    console.log("Sua nota foi B");
}

//Deve ter outra forma mais facil é melhor de fazer, até acho que notas em A, B, C e D seriam melhores talvez...
//teriam uma poercentagem de 25%.