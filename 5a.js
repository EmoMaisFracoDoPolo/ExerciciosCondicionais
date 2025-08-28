//5.a) Defina let cor = "azul"; e mostre "Cor quente" caso a cor for vermelho, "Cor fria" caso a cor for azul, ou "Cor neutra" caso a cor for marrom.

let cor = "Azul";

switch(cor){
  case "Azul":
    console.log("Cor fria");
    break;
    
  case "vermelho":
    console.log("Cor quente");
    break;
    
  case "Marrom":
    console.log("Cor neutra");
    break;
    
  default:
    console.log("Nao conheco essa cor...");
}

