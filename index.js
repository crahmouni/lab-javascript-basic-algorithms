// Iteration 1: Names and Input

let hacker1 = "Chahinaz";
console.log("The driver's name is " + hacker1);

let hacker2 = "Ana";
console.log("The navigator's name is " + hacker2);


// Iteration 2: Conditionals

let hacker1 = "Chahinaz";
let hacker2 = "Ana";

if (hacker1.length > hacker2.length) {
    console.log("The driver has the longest name, it has " + hacker1.length + " characters.");
} else if (hacker1.length < hacker2.length) {
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.");
} else {
    console.log("Wow, you both have equally long names, " + hacker1.length + " characters!");
}


// Iteration 3: Loops

// 3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".

let hacker1 = "Chahinaz";
let spacedUpperCase = "";

for (let i = 0; i < hacker1.length; i++) {
    if (i === hacker1.length -1) {
        spacedUpperCase += hacker1[i].toUpperCase();  
    } else {
        spacedUpperCase += hacker1[i].toUpperCase() + " ";
    }
} 
console.log(spacedUpperCase);


// 3.2 Print all the characters of the navigator's name in reverse order, i.e., "nhoJ".

let hacker2 = "Ana";
let reversedName = "";

for (let i = hacker2.length -1; i >= 0; i--) {
    reversedName += hacker2[i];
}
console.log(reversedName);

// 3.3


if (hacker1.localeCompare(hacker2) < 0) {
    console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) > 0) {
    console.log("Yo, the navigator goes first, definitely.");
} else {
    console.log("What?! You both have the same name?");
}
