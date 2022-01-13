const d = document;
const parrafo = d.querySelector(".parrafo1");

let newParrafo = parrafo.innerText.replace(/\u00FC/g, "u");

newParrafo = newParrafo.replace(/z/g, "s")

newParrafo = newParrafo.replace(/\s/g, " ");

newParrafo = newParrafo.replace(/\$/g, " ");
parrafo.innerHTML = newParrafo;