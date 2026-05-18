/* faulty calculator */

let random = Math.random();
let a = prompt(" first number ");
let b = prompt("to do");
let c = prompt(" second number ");

let obj = {
"+" : "-" ,
"-" : "*" ,
"*" : "/" ,
"/" : "+" ,
}

if (random > 0.5 ) {
    alert (`the result is ${eval( `${a} ${b} ${c}` )}` ) ;
}

else {
    b = obj [b]; 
    alert (`the result is ${eval( `${a} ${b} ${c}` )}` ) ;
}