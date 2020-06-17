'user scrict'

// ----------№1
let sec=60;
    min=60;
    hour=3;

    result=sec*min*hour;

console.log(result);


// ----------№2
var num=1;
// num += 12; 
console.log(num +=12);//13
// num -= 14; 
console.log(num -=14);//-1
// num *= 5; 
console.log(num *=5);//-5
// num /= 7; 
console.log(num /=7);//-0.7142857142857143
// num += 1; 
console.log(num +=1);//0.2857142857142857
// num -= 1; 
console.log(num -=1);//-0.7142857142857143
alert(num);


// ----------№3
let z=10;
    x=2;
    r=5;

console.log(z+x+r);


// ----------№4
let a=17;
    b=10;
    c=a-b;
    d=7;

    result=c+d;
console.log(result);


// ----------№5
let name = 'Игорь';
text = `Привет, ${name}!`;            
console.log(text);


// ----------№6
let s='1';
if(s==='1'){
    console.log('Верно');
}else{
    console.log('Неверно');
}
if(s===1){
    console.log('Верно');
}else{
    console.log('Неверно');
}
if(s===3){
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

if (item == true){
    console.log ('Верно');
}else{
    console.log ('Неверно');
}

if (item == false){
    console.log ('Верно');
}else{
    console.log ('Неверно');
}

item == true ? console.log ('Верно') : console.log ('Неверно');

item == false ? console.log ('Верно') : console.log ('Неверно');


// ----------№8
let k=prompt('Введите значение');           //Не знаю правильно ли?

if (k <= 0) {
    console.log('Неверно');
} else if (k >= 4) {
    console.log('Неверно');
} else {
    console.log('Верно');
}


// ----------№9
let j=prompt('Введите значение j');
    n=prompt('Введите значение n');
if (j>3&&j<12 || n>=7&&n<15) {
    console.log ('Верно');
} else {
    console.log ('Неверно');
}


// ----------№10
let month=prompt('Введите месяц');
if (month==12 || month==1 || month==2){
    console.log ('Зима');
}else if (month==3 || month==4 || month==5){
    console.log ('Весна');
}else if (month==6 || month==7 || month==8){
    console.log ('Лето');
}else if (month==9 || month==10 || month==11){
    console.log ('Осень');
}


// ----------№11
for(let i=0; i<=100; i++){
    if(i%2==0){     
        console.log(i);
    }
   
}






