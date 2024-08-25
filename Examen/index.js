function multiplucation(c , d){
    let number = c * d;
    return number;
}
//console.log(multiplucation(2 , 5));

function compter(number){
    for(let i = 0; i <= number; i++){
       console.log( i)
    }
}
compter(10);

function vowel(lettre){
     
     if(lettre === "a"|| lettre === "e" || lettre === "i"
      || lettre === "o" || lettre === "u" || lettre === "y"){
        return "C'est une voyelle"
      }else{
        return "Incorrecte"
      }
}
console.log(vowel("e"));

function meetAvowel(string){
    for(let i = 0; i < string.length; i++){
        if(string[i] === "s"){
           return "I meet the s.";
        }
    }
    return "error";
}
console.log(meetAvowel("occius"));

/*function recursif(number){
  debugger;
  let newNumber = number - 1;
  
  console.log(newNumber);

  if(number > 0 ){
    recursif(newNumber);
  }
}
 recursif(20);
 homework_recursion_with_javascript*/

 function returnFirstItem(array){
  /*return the first element of the array recived by parameter. Your code.*/
  return array[0]
 }
 console.log(returnFirstItem([1 , 2 , 3 , 4]))

 function returnLastItem(array){ 
 /*return last element of the array recived by parameter. Your code.*/
  return array[array.length - 1]

 };
 console.log(returnLastItem([1 , 2 , 3 , 6]));

 function getArrayLength(array){
  //return the length of the array recived by parameter.Your code.
  return array.length 
 }
 console.log(getArrayLength([1 , 2 , 3 , 6]));

 function incrementByOne(array){
  /*The array recived by parameter contains number,
  return an array with the elements incremented by +1.Your Code.*/
  var newArray = []
  for(var i = 0; i < array.length; i++){
    newArray.push(array[i] + 1)
  }
  return newArray
 }
 console.log(incrementByOne([1 , 2 , 3 , 4]));

 function addItemToFinalDelArray(array , elements){
  //Adds the elementto the end of the recived array.return the array. Your code. 
  array.push(elements);
  return array
 }
 console.log(addItemToFinalDelArray([1 , 2 , 3 , 4],8));

 function addItemToBeginningOfArray(array , elements){
  //Adds the item to the beginning of the recived array.return the array. Your code. 
  array.unshift(elements);
  return array
 }
 console.log(addItemToBeginningOfArray([1 , 2 , 3 , 4],8));

 function wordsToPhrase(words){
  /*The argurment words is an array of String.Return a string 
  where all the words are concatenanted with a space between each word. 
  Exemple:['Hello , words']=>'Hello , words!'*/
  return words.join(' ')
 }
 console.log(wordsToPhrase(['Hello' , 'words!']));

 function arrayContains(array , element){
  //Check if the element exists within the recived array. 
  //Return true if it is or false if it is Not. Your Code.
  for(var i = 0; i < array.length; i++){
    if(array[i] === element){
      return 'the element exists an array'
    }return 'the element don t exist an array'
   } 
 }
 console.log(arrayContains([1 , 2 , 3 , 4]));

 /*function addNumbers(arrayOfnumbers){
   //The arrayOfnumbers parameter must be an array number. 
   //Add all the element and return the Result. Your code. 

   for(var i = 0; i < array.length; i++){
    if(arrayOfnumbers[i] === element){
      return 'the element exists an array'
    }return 'the element dont exist an array'
   }
 }
 console.log(addNumbers([1 , 2 , 3 , 4],8));*/

 function averageTesteResult(testsResult){
  //The parameter resultTestsis an array of number. I terates (in a loop)
  //The elements of the array and return the average of the Note... your code . 
  var average =  testsResult.reduce(function(sum , element){
    return sum + element
  },0);
   return average / testsResult.length

    
 }
 console.log(averageTesteResult([4 , 12 , 71 , 31]));

 function addNumber(arrayOfnumber){
  //The arrayOfnumbers parameter must be an array number. 
  //Add all the element and reurn the Result. Your code.
  return arrayOfnumber.reduce(function(sum , element){
    return sum + element
  },0);
 }
 console.log(addNumber([4 , 12 , 71 , 31]));

 function largestNumbers(arrayOfNum){
  //The paramer arrayOfNum is an array of number return the lagest number. Your code. 
  return Math.max(...arrayOfNum)
 }
 console.log(largestNumbers([4 , 7 , 9]));

 function multiplyArguments(array){
  /*Use the arguments keyword to multiply all arguments return the product. 
  If no arguments are passed , return . If an argument is passed simply return it. 
  [HINT] 'Argurment'is an array. Your code. */
  let multiply = 1;
  if (arguments.length === 0) return 0;
  for(let i = 0; i < arguments.length; i++){
     multiply = multiply * arguments[i];

  }
  return multiply;
 };
 console.log(multiplyArguments(5 , 5 , 5 , 5 , 5));

 function countElement(array){
  //Devep a function that returns the number of elements in the array whose value is greater than 18. Your code. 
  for(let i = 0; i < array.length; i++){
    if(array[i] > 18){
      console.log(array[i])
    }
  }

 }
 countElement([20 , 8 , 11 , 9 , 12]);

 function dayOfweek(dayNums){
  /*suppose the days of the week are coded as 1 sunday 2 monday and so on. 
  "3 tuesday 4 wednesday 5 thursday 6 friday 7 saturday"Perform a function that given the number of the day 
  of the week return: It's the weeken.If the day corresponds to saturday or sunday. It is a busness day otherwise.*/
  if(dayNums === 'sunday' || dayNums === 'saturday'){
    return 'It s the weeken'
  }
  else{
    return 'It is busness day otherwise'
  }
 }
 console.log(dayOfweek('sunday'));

 function multiplucation(a , b){
  let number = a * b;
  return number;
 }
 console.log(multiplucation(100 , 100));

 function counter(number){
  for(let i = 0; i < number; i++){
    console.log(i)
  }
 }counter(25)

 function vowel(lete){
  if(lete === "a" || lete === "e" || lete === "i" || lete === "o" || lete === "u" || lete === "y"){
    return "It's a vowel"
  }else{
    return "It's a consonant"
  }
 }console.log(vowel("s"));

 function meetingAleter(string){
  for(let i = 0; i < string.length; i++){
    if(string[i] === "o"){
      return "I meet the leter"
    }else{
      return "error"
    }
  }
 }console.log(meetingAleter("Jean"));

 /*function recursif(number){
  debugger;
  let newNumber = number - 2;
  console.log(newNumber);
  if(number > 0){
    recursif(newNumber)
  }
 }recursif(20)*/

 function average1(result){
  var average0 = result.reduce(function (sun , element){
    return sun + element
  },0);
  return average0 / result.length
 }console.log(average1([13 , 13 , 13 , 13 , 13]));

 function lePlusGrandNombre(deNombre){
  return Math.max(...deNombre)
 } 
 console.log(lePlusGrandNombre([24 , 62, 3 , 11]));

 function multiplucationArgument(multiplie){
  if(arguments.length === 0) return 0;
  for(let i = 0; i < arguments.length; i++){
    multiplie = multiplie * arguments[i];
  }
  return multiplie
 }
 console.log(multiplucationArgument(2 , 2 , 2 , 2));

 function conterElement(array){
  for(let i = 0; i < array.length; i++){
    if(array[i] > 10){
      console.log(array[i])
    }
  }
 }
 conterElement([13 , 3 , 4 , 11]);

 function jourDeSemene(jourNum){
  if(jourNum === 'samedi' || jourNum === 'dimanche'){
    return 'Aujourdhui c est un jour weeken'
  }else{
    return 'c est un jour de travail'
  }
 }
 console.log(jourDeSemene('dimanche'));

 function conter(deZeroAdix){
  for(let i = 0; i < deZeroAdix; i++){
    console.log(i)
  }
 }
 conter(10);

 function nFactorial(n){
    if( n === 1 || n === 0) return 1
    if( n < 0) return "error"
    return n * nFactorial( n - 1)
};
console.log(nFactorial(7));
