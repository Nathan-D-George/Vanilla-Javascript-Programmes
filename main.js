const prompt = require("prompt-sync")();

let name  = prompt("What is your name?");
let len   = name.length;
let index = Math.round( (Math.random()*len) );
console.log('name is ',name,' index is ',index,' letter is ',name[index]);
