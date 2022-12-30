let aldutos
let crianças
let tempo
function churrascometro(event){
   event.preventDefault();
   aldutos = document.getElementById('aldutos').value;
   crianças = document.getElementById('crianças').value;
   tempo= document.getElementById('tempo').value;
   return res();
   
} 
document.getElementById('formes').addEventListener('submit',churrascometro);
function res(){
   let res= document.getElementById('res')
    
   let carne =quantcarner(tempo)*aldutos +(quantcarner(tempo) /2 * crianças);
   let bebida=quantbebida(tempo)*aldutos +(quantbebida(tempo) /2 * crianças)

   res.innerHTML = (`aldutos ${aldutos} horas${tempo} crinças${crianças}  carne${carne}kg bebidas${bebida}`) 

}
function  quantcarner(tempo){
 if(tempo => 6){
     return 650;
   }else{
     return 400;
   }
}
function quantbebida(tempo){
   if(tempo => 6){
      return 1500;
      
    }else{
      return 1000;
    }
}