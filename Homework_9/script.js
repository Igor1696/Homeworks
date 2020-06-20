'use strict'

// ----------№1
let sec=60,
    min=sec*60,
    hour=min*3;

console.log(hour);


// ----------№2
var num =1;
num += 12; 
num -= 14; 
num *= 5; 
num /= 7; 
num ++ ;          
num -- ; 


// ----------№3
let z=10,
    x=2,
    r=5;

console.log(z+x+r);


// ----------№4   
let a=17;
let b=10;
let c=a-b;
let d=7;

let result=c+d;
console.log(result);


// ----------№5
let name = 'Игорь';
         
console.log(`Привет, ${name}!`);


// ----------№6
let s='1';
if(s==='1'){
    console.log('Верно');
}else{
    console.log('Неверно');
}



// ----------№7                         
let item;                   
if (item != true){
    console.log ('Верно');
}else{
    console.log ('Неверно');
}

item != true ? console.log ('Верно') : console.log ('Неверно');




// ----------№8
let k=prompt('Введите значение', '');           

if (0<=k>=4){
    console.log('Неверно');
} else {
    console.log('Верно');   
}


// ----------№9
let j=prompt('Введите значение j');
let n=prompt('Введите значение n');
if (j>3&&j<12 || n>=7&&n<15) {
    console.log ('Верно');
} else {
    console.log ('Неверно');
}


// ----------№10
let month=prompt('Введите месяц');
if (month==12 || month<3 && month>0){ 
    console.log ('Зима');
}else if (month>=3 && month<=5){
    console.log ('Весна');
}else if (month>=6 && month<=8){
    console.log ('Лето');
}else if (month>=9 && month<=11){
    console.log ('Осень');
} 



// ----------№11
for(let i=0; i<=100; i++){
    if(i%2==0){     
        console.log(i);
    }
}






