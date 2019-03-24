module.exports = function getZerosCount(number, base) {
  // your implementation

//разложение числа на простые множители


var array = [];
var osnovanie = base;

if (base % 2 == 0) {
  console.log (base + " чётное");
  
  osnovanie = base / 2;

  array[array.length] = 2; 
 
  return 2;

}

if (osnovanie % 3 == 0)  {
  console.log (base + " нечётное");

  osnovanie = base / 3;

  array[array.length] = 3; 

} 

if (osnovanie % 5 == 0) {
  console.log (base + " чётное");
  
  osnovanie = base / 5;

  array[array.length] = 5; 
 

}

if (osnovanie % 7 == 0)  {
  console.log (base + " нечётное");

  osnovanie = base / 7;

  array[array.length] = 7; 

} 




console.log(array);








if (false) {


console.log (number, base);


nulls (number, base);




function nulls () { //считаем нули в факториале 

 let nulls = 0;
 let count = 1;
 
 while (Math.pow(base, count) < number) {
 nulls = nulls +  Math.pow(base, count);
 count++;
 } 

 console.log ("нулей - " + nulls + " факториал числа " + number);





 // [n/p] + [n/p^2] + [n/p^3] + [n/p^4]


}

}


}