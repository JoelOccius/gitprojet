var saluer = "Welcom ";
var therme = "To the Class javascript"
console.log(saluer + therme)

var nameTecnologic = "JOEL OCCIUS";
console.log(nameTecnologic.length)

function mult(x , y){
    let multiplication = x * y;
    return multiplication

}console.log(mult(500 , 1000));

function sum (h , j , k , l){
    let add = 12 + 24 + 30 + 50;
    return add
}console.log(sum(12 , 24 , 30 , 50))

function canWork(year){
    let name = "Emmania ";
    if(year >= 18){
        return name + "you can work";
    }else{
        return name + "you can't work";
    }
}console.log(canWork(12));

console.log(Math.pow(5 , 5));

console.log(Math.round(0.50));

console.log(Math.ceil(4.10));

console.log(Math.floor(7.80));

console.log(Math.max(1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9));

console.log(Math.min(1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9));

let fistTEMP = 3 + 75 == 78;
console.log(fistTEMP);

function egual(u , v){
     if(u == v){
        return true;
     }else{
        return false
     }
}console.log(egual(6 , 5));

function isEven(num){
    if(num % 2 == 0){
        return true;
    }else{
        return false;
    }
}console.log(isEven(2001 , 10));

function array(string){
    for(let i = 0; i < string.length; i++){
        if(string[i] == "z")return true;
    }   return false
}console.log(array("hachary"));

function mult(c , d){
    let number = c * d;
    return number;
}console.log(mult(3 , 10));

let food =[
    "Mango",
    "Corn",
    "Watermelon",
    "beet",
    "Cucumber",
    "Tomatoes",
]; console.log(food)