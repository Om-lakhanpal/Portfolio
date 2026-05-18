/*
random name generator 
*/

let random = Math.random() ;
let first , second , thrid ;

if (random < 0.33) {
    first = "om";
} 

else if ( random < 0.66 && random >= 0.33){
    first = "prince";   
}

else{
   first = "tommy";   
}

random = Math.random() ;
if (random < 0.33) {
    second = "k.";
} 

else if ( random < 0.66 && random >= 0.33){
    second = "l.";   
}

else{
   second = "r.";   
}

random = Math.random() ;
if (random < 0.33) {
    thrid = "pal";
} 

else if ( random < 0.66 && random >= 0.33){
    thrid = "gupta";   
}

else{
   thrid = "pitt";   
}

console.log (`${first} ${second} ${thrid}`)