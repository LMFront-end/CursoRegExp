const d = document;

const parrafo1 = d.querySelector('.parrafo1'),
    parrafo2 = d.querySelector('.parrafo2');

/* console.log(parrafo1.innerText);
console.log(parrafo2.innerText); */

// quitar los numeros del parrafo
let newParrafo1 = parrafo1.innerText.replace(/\d/g, "");

// Reemplazar los dobles espacios por solo un espacio.

newParrafo1 = newParrafo1.replace(/\s\s/g, " ");


let newParrafo2 = parrafo2.innerText.replace(/\w+/g, "creepypastas");


parrafo1.innerHTML = newParrafo1;
parrafo2.innerHTML = newParrafo2;