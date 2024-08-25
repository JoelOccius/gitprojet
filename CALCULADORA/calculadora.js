function Adição(){
   let n1 = document.getElementById("numero1").value
   let n2 = document.getElementById("numero2").value


   let numero1 = parseFloat(n1);
   let numero2 = parseFloat(n2);

   let Adiçâo = numero1 + numero2;
   window.alert("O resultado da adição é: " + Adiçâo)

   
};

function subtração(){
   let n1 = document.getElementById("numero1").value
   let n2 = document.getElementById("numero2").value

   let numero1 = parseFloat(n1);
   let numero2 = parseFloat(n2);

   let Sub = numero1 - numero2;
   window.alert("O resultado de subtração é: " + Sub)
};

function Divisão(){
   let n1 = document.getElementById("numero1").value
   let n2 = document.getElementById("numero2").value

   let numero1 = parseFloat(n1);
   let numero2 = parseFloat(n2);

   let Divisão = numero1 / numero2;
   window.alert("O resultado de Divisão é: " + Divisão)
};

function Multiplicação(){
   let n1 = document.getElementById("numero1").value
   let n2 = document.getElementById("numero2").value

   let numero1 = parseFloat(n1);
   let numero2 = parseFloat(n2);

   let Multiplicação = numero1 * numero2;
   window.alert("O resultado de Multiplicação é: " + Multiplicação)
};



