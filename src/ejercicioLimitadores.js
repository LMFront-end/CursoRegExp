const frases = [
    "Avena es mi secreto favorito",
    "una tiene las pepas con mayonesa",
    "avena hecha de semillas con Creto",
    "avena tiene unas semillas de cretoriano"
];

// Mostrar todas las frases que tengan avena al principio

const eje1 = frases.filter((frase) => {
    return frase.match(/^avena [a-zA-Z]+/gim);
})

console.log(eje1);

//filtrar solo aquella frase que tenga la palabra creto

const eje2 = frases.filter((frase) => {
    return frase.match(/\bcreto\b/gim);
})
console.log(eje2);