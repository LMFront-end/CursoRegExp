const paginas = [
    "www.google.com",
    "www.facebook.com",
    "www.udemy.com",
    "www.twitter.com",
    "www.google.com",
    "www.regexr.com"
]

//Agrupar y alternación
/**
 * (foo)
 * (?=) --> mirada adelante, busca un elemento que tenga lo que se encuentra dentro del ()
 * (?<=)
 * (|) --> operador OR
 * (?!) --> Busca un elemento que no tenga lo que se encuentra dentro del ()
 * (?<!)
 */

//filtrar los dominios

const p1 = paginas.map((pagina) => {
    return pagina.match(/(?<=www\.)[a-zA-Z0-9]+\.?[a-z]+(?=\.com)/gi)
});

console.log(p1);