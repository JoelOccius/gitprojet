/*function plusPetitQue(x , y){ 
/*'X' et "Y" sont des entiers,renvoie (return)
le plus grand nombre.
S'ils sont egaux ,renvoie l'un ou l'autre.
  let number = 0;

   if(x == y){
    return x;
   }else if(x > y){
    return x;
   }else{
    return y;
   }
} console.log(plusPetitQue(10 , 50));

 function majeur(age){
    /*Determiner si la personne peut participer a
     l'evenement en function de son age.
     si vous avez  18 ans ou plus vous devez return a
      String:"Autoriser".sinon "non autoriser".votre codo.

      let personne = "Andre" ;
      if(age >18)
        return personne + " vous devez participer a l evenement.";

      else(age < 18)
        return personne + " vous n avez pas autorise ";
      
 }console.log(majeur(19));

 function conection(status){
    /*L'argument "status" represente l'etat de conection d'un utilisateur
    Si le status  est egal a 1 l'utilisateut est enline
    Si le status est egal a 2 l'utilisateur est Absent.
    Sinon nous suposons que l'utilisateur est hors ligne.
    revoie l'etat de conection de l'utilisateur.
    votre code.

    let Argument = 0
    if(status == 1){
        return "Utilisateur est enligne";
    }else if(status == 2){
        return "Utilisateur est Absent";
    }else{
        return "Nous suposons que utilisateur hors line";
    }
 } console.log(conection(2))

 function salut(langue){
    /*Renvoyer un message d'acceuil dans trois langues differents.
    Si "langue"est "Allemand",renvoie "Guten Tag"!
    Si "langue"est "Mandarin",renvoie "Ni Hao"!
    Si "langue"est "Anglais",renvoie "Hello"!
    Si "langue" n'est aucune des reponses renvoiees ci-dessu ou 
    << non definit>> renvoie B... Votre code

    let lanngue = "Creole";
    if(langue == "Allemand"){
        console.log("Guten Tag");
    }else if(langue == "Mandarin"){
        console.log("Ni Hao")
    }else if(langue == "Anglais"){
        console.log("Hello")
    }else{
        console.log("La langue non definit B...")
    }
}salut("Espagnol");

 function color(couleur){
   /* La function recoit une couleur.Renvoie la chaine 
    corespondante.Dans le cas ou la couleur recue est 
    bleu ---> c'est du bleu.
    Dans le cas ou la couleur recue est 
    Vert ---> c'est du Vert.
    Dans le cas ou la couleur recue est 
    Orange ---> c'est du Orange.
    s'ils ne s'agit d'aucune de ces couleurs -->couleur Introuvable.
    Votre Code.

   
    
    switch(couleur){
        case "bleu":
            return "C'est du bleu";
        case "vert":
            return "C'est du vert"; 
        case "orange":
            return "C'est d'orange";  
        default:
            return "Couleur introuvable";  

    }
 
 }console.log((color("rouge")));

 function cestDixOuCinq(num){
    //renvoie vrai si est 10 ou 5.Sinon
   // renvoie False.Votre Code.

   let numero = 0;
   if(num == 10 ){
    return "Vrai";
    
   }else if(num == 5){
    return "Vrai"
   }
   else{
    return "False";
   }
   
 }console.log(cestDixOuCinq(2))

 function cestDansLaRange(num){
    //Renvoie vrai si nun inferieur a 50 et surperieur a 20.
    //Sinon false.votre code.

    let numero = 0;
    if(num <= 50 && num >= 20) return true;
    
    else return false;
    
 } console.log(cestDansLaRange(49))

 function nombreEntier(num){
   /* Renvoie vrai si num est entier,qu'il soit positif, negatif ou zero.
    Exemple: 0,8 -->faux.Exemple: -10 -->vrai
    Exemple: 1 -->vrai.Sinon Renvoie:false.Votre code

    const entier = 0;
    if(num % 1== 0){
        return true;
    }
    else{
        return false;
    }
 }console.log(nombreEntier(1000))

 function FizzBizz(num){
    /*Si num est divisible par 3 renvoie Fizz.
    Si num est divisible par 5 renvoie Bizz.
    Si num est divisible par 3 par 5(les deux) renvoie FizzBizz.
    Sinon renvoie false.Votre code.

    let divisible = 0;
    if(num % 3 == 0 && num % 5 == 0) return "Fizzbizz";
    else if(num % 3 == 0) return "Fizz";
    else if(num % 5 == 0) return "Bizz";
    else return false
    

 }console.log(FizzBizz(30));

 function OperateurLogique(num1 , num2 , num3){
    /*La fonction reçoit trois nombres diferents.
     Si num1 est superieur à num2 et num3 c'est également positif,
     return -->Le nombre...
     Si l'un des trois nombres est negatif,renvoie
     -->Il a des negatifs.
     Si num3 superieur à num1 et num2 augmente sa valeur de 1
     et renvoie la nouvelle nombre.
     Si tous les argurments sont nulles renvoie errur.
    Si aucune de ces conditions ci-dessus n'est remplie
    renvoie false.Votre code.

    let number = 1 > 2 && 3;
    if(num1 > num2 && num3){
        return "Le nombre c'est positif";
    }else if(num1 < num2 && num3){
        return "Il a des negatifs.";
    }else if(num3 > num1 && num2 ){ num3=num3 + 1
        return "La nouvelle nombre";
    }else if(num2 == 0 || num3 == 0 || num1 == 0){
        return "Erreur";
    }else{
        return "False";
    }
 }
   console.log(OperateurLogique(5 , 7 , 9));
 function nombrePrimier(num){
    /*Renvoie vrai si num est premier.
     Sinon renvoie false.
    [Indique 1] un nombre premier n'est pas divisible par lui-même et 1.
    [Indique 2] vous pouvez resouder ce probleme en utilisant une boucle <<for>>.
    [Marque]  les nombres negatifs 0 et 1 ne sont des nombres premiers.
     Votre Code.Code

     if (num <= 0 || num == 1) return "les nombres negatifs 0 et 1 ne sont des nombres premiers.";
     if(num % 2 == 0)return "n'est pas un nombre premier";
     else return "Nombre premier"

 } console.log(nombrePrimier(-16))

 function positif(valeur){
  //  Si 'valeur' est vrai renvoie Je suis vrai.
   // Sinon renvoie Je suis faux.Votre code.

   const jeSuisVrai = "OCCIUS";
   if(valeur > 0 ) return "Je suis vrai";
   else return false
    
   
   

 }console.log(positif(-8))

 function aTroisChiffres(num){
    //Si le num compote 3 chiffres.Renvoie vrai.
    //Sinon renvoie false.Votre code.

    if (num >= 100 && num <= 999)return true;
    else return false;
 }console.log(aTroisChiffres(12))

 function doWhile(num) {
   /* Imprimente une fonction qui augmente la valeur de 5
    jusqu'à une limite de 8 fois
    renvoie la valeur finale.Votre code.

    let valeur = 0;
    do{ 
        num = num + 90;
        valeur++
        
    }while(valeur < 8){return num;
    }
     }console.log(doWhile(1));

     let number = 12;
     console.log(number);

     const string = "Rose Berline";
     console.log(string);

     function numbera(a , b){
        let nume = a + b;
        return nume;
     }console.log(numbera(34 , 56));

     function lepLusGrand(c , d){
        let numb = c > d;
        if(numb = c > d){
            return c;
        }else if(numb = c == d){
            return c;
        }else{
            return d;
        }
     }console.log(lepLusGrand(80 , 80));

     function meme(nimero){
        if(nimero % 8 == 0){
            return true
        }else{
            return false
        }

     }console.log(meme(7))


     function meetVowel(string){
        for(let i = 0; i < string.lengh; i++){
            if(string[i] == "J"){
                return "I meet the vowel"
            }
            
            
        } return "I meetn't the vowel."
    }console.log(meetVowel("JOEL"));
    
    let numbeir = 20;
    console.log(numbeir);
    
    function peopleAge(age){
        for(let i = 0; i < age.lengh; i++){
            if(age [i] >= 18 || [i] == 90){
                return "You can participate."
            }else if(age [i] < 18){
                return "You must to waist."
            }
        } return "You can't"
    }console.log(peopleAge(92));*/

    function sub(){
        let n1 = document.getElementById("numero1").value
        let n2 = document.getElementById("numero2").value

        let numero1 = parseFloat(n1);
        let numerto2 = parseFloat(n2);

        let sub = numero1 - numerto2;
        window.alert("The result of the subtraction is: " - sub);
    }