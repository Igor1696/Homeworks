// -------------№1
function fib(n) {
  let a = 1;
  let b = 1;
    for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}
console.log(fib(69)); 
   
   



//  -------------№2
for(let n = 1000, i = 1;  n >= 50; n/2, i++){
    n /= 2;
    console.log(i); //количество итераций - 5
    console.log(n); //результат деления
}
	
    
 
//  -------------№3
let obj = {
    buyer: 'Игорь',
    tell: '+380669207891',
    adress: 'Лермонтова 4',
    summ: 830,
    totalWeight: 2700,
    items : {
        1 : {
            name : 'Чашка',
            price : 100,
            weight: 200
        },
        2 : {
            name : 'Ложка',
            price : 30,
            weight: 100
        },
        3 : {
          name : 'Чайник',
          price : 550,
          weight: 2000
        },
        4 : {
          name : 'Кружка',
          price : 150,
          weight: 400
      }
    }
}

console.log(obj)
