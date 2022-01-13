// Clases de letras
const srt1 = '45 gatos estaban sentados sobre 22 piramides';

const ltr = srt1.match(/\d/g);
console.log(ltr);

const match = srt1.match(/\D/g);
console.log(match);

const pnt = srt1.match(/\./g);
console.log(pnt);

const pnt2 = srt1.match(/./g);
console.log(pnt2);

const esp1 = srt1.match(/\S/g);
console.log(esp1);

const esp2 = srt1.match(/\s/g);
console.log(esp2);

const replace = srt1.replace(/\s/g, "Lina");
console.log(replace);