function sayHello() {
    alert("Hi.. ");
    alert("How Are You?");
    alert("Do you Okey?");
}    
sayHello();

function greet(person){
    console.log(`Hi, ${person}`);
}
greet('sergio');
greet('Vincent');

function findLargest(x,y) { 
    if (x > y) {
        console.log(`${x} is larger!`);
    }
    else if (x < y) {
        console.log(`${y} is larger!`);
    }
    else {
        console.log(`${x} and ${y} are equal!`);
    }
}

findLargest(28,9);

function printHeart(){
    console.log("<3");
}
printHeart();

function multiply(a, b) {
    return a * b;
}

console.log(multiply(2, 3)); // 6
console.log(multiply(9, 9)); // 81
console.log(multiply(5, 4)); // 20

let animal = "Giant Pacific Octopus";
function observe(){
 let animal = "Pajama Squid";
 console.log(animal);
}
observe();

let deadlyAnimal = "Blue-Ringed Octopus";
function handleAnimal() {
 let deadlyAnimal = "Scorpionfish";
 console.log(deadlyAnimal);
}
handleAnimal();
console.log(deadlyAnimal);
