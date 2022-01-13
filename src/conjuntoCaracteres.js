const str = 'Nunca pienso en las consecuencias de fallar un gran tiro… cuando se piensa en las consecuencias se está pensando en un resultado negativo by: Michael';

const p1 = str.match(/[mnh]/g);
console.log(p1);

const p2 = str.match(/[A-Z]/g);
console.log(p2);

const p3 = str.match(/[a-z]/g);
console.log(p3);

const p4 = str.match(/[^aei]/g);
console.log(p4);

const p5 = str.match(/[0-9]/g);
console.log(p5)