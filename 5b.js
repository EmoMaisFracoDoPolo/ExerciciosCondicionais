//5.b) Com let dia = 5;, mostre o dia da semana (1 = Domingo, 2 = Segunda, ...).

let dia = 5;

switch(dia){
  case 1:
    console.log("Domingo");
    break;
    
  case 2:
    console.log("Segunda - feira");
    break;
    
  case 3:
    console.log("Terca - feira");
    break;
  
  case 4: 
    console.log("Quarta - feira");
    break;
    
  case 5:
    console.log("Quinta - feira");
    break;
  
  case 6: 
    console.log("Sexta - feira");
    break;
    
  case 7:
    console.log("Sabado");
    break;
    
  default:
    console.log("Não conheco esse dia...");
}