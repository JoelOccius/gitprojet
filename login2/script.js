/*function saluetation(saluer){
    return function(nom){
        console.log(`${saluer} ${nom}`);
    }
}
let saluetationEnfant = saluetation('salut');
    saluetationEnfant('Rose Berline┤');*/

/*const countNumber = function(){
    let count = 2;
    return function(){
        console.log(`${count} number`);
        count++;
    }
}
let counter = countNumber();
    counter();
    counter();
    counter();
    counter();
    counter();*/

/*var createFunction = function(){
    var array = [];
    for(let i = 0; i < 11; i++){
        array.push(function (){
            console.log(i);
        })
            
        
    }return array;
}
let tablo = createFunction();
    tablo[1]();
    tablo[2]();
    tablo[3]();
    tablo[4]();
    tablo[5]();
    tablo[6]();
    tablo[7]();
    tablo[8]();
    tablo[9]();
    tablo[10]();*/

/*const roseIt ={
    lesson: "Tecnologist",
    age: "30",
    phone: "7163339273",
    email: 'occiusjoel65@gmail.com',
    student: [],

    login(name , lastname){
        console.log(`${name} ${lastname} you are in ${this.lesson} 
        your email is ${this.email} you have ${this.age} years your 
        phone is ${this.phone} Thank you for information.`);
        this.student.push(`${name} ${lastname}`);
    }
}
roseIt.login("JOEL" , "OCCIUS");
console.log(roseIt.student);

const use = roseIt.login;

function recursif(number){
    debugger;
    let newNumber = number - 1;
    console.log(newNumber);
    if(number > 0){
        recursif(newNumber);
    }
};
recursif(21);

const country = [
    "United state",
    "Canada",
    "French",
    "Haiti",
    "Germany",
    "Brasil",
    "Venezuela",
]

function loopFor(){
    for(let i = 0; i < country.length; i++){
        console.log(country[i])
    }

}
loopFor();*/

/*const country = [
    "United state",
    "Canada",
    "French",
    "Haiti",
    "Germany",
    "Brasil",
    "Venezuela",
]
function loopForOf(){
    debugger;
    for(let text of country){
        console.log(text);
    }
};
loopForOf();

for (let x of cars) {
    text += x + "<br>";
  }*/

/*const pais =[
   {Haiti: 'United state', Germany: 'Canada'},
   {French: 'Venezuela' , Brasil: 'Bolivia'},
    
];

function loopForEach(item , counter , array){
      debugger;
        console.log(item);
    
};
pais.forEach(loopForEach);*/

/*const country = ['Haiti' , 'Brasil' , 'United state',
                  'French' , 'Canada' , 'Venezuela',
];
let text = country.map(function (item){
    return item;
});
console.log(text);*/

function country(){
    let string = "Haiti";
    while('Haiti', 'Venezuela' , 'Brasil' , 'French' , 'United state' , 'Canada'){
        console.log(string);
    }
};
country();