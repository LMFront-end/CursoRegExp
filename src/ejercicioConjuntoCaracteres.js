const usuarios = [
    "ManuelArri",
    "CamiloEsteban",
    "LinaMaria",
    "NicolasNiño",
    "MateoVlad",
    "animalNocturno&%",
    "e43gotee",
    "gatoConBotas12"
]

//obtener las cuentas que no contengan numeros ni caracteres

const lista = usuarios.filter((user) => {
    return user.match(/^[A-Z][a-z]+[A-Z]?[a-z]+/gm);
})

console.log(lista);