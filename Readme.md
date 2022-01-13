### [Exp] presiones [Reg] ulares

### Métodos RegExp

## String.search()
--> Busca en un string un valor y devuelve su posición, si la encuentra!

## string.replace()
--> Busca en un string un valor y si lo encuentra lo reemplaza con un valor nuevo.


## RegExp.test()
--> busca si el patrón coincide con alguna sección del string

## RegExp.exec()
--> Busca si el patrón coincide con alguna sección del string y devuelve un objeto con la información.

### Banderas

** Las Banderas son propiedades especiales que aumentan dramáticamente las habilidades de tu expresión regular.

** y existen solo 3 que son compartidos a lo largo de todas los navegadores hasta el momento.

🔰la / /g que significa global, sin esta bandera se parara la coincidencia a la primera que encuentra, por eso se la colocamos para identificar todas las coincidencias dentro de un String.



🔰la / /i que significa case-insensitive, que independiente de si esta la coincidencia en mayúsculas y minúsculas igual se hará la coincidencia, muy efectiva cuando no importa de como se escriba la palabra.



🔰la / /m que significa multilínea, que buscara cuando tienes líneas de espacio entre texto, sin esta bandera se para la búsqueda, efectivo cuando tengas \n en un String de JavaScript.


### Clases de letras

. --> Se encarga de obtener las coincidencias de todos los caracteres alfanúmericos.

\ w --> Busca cualquier caracter alfanumérico del alfabeto latino básico, incluido el caracter de subrayado. Equivalente a [A-Za-z0-9_]. Por ejemplo, /\w/ coincide con "m" en "manzana", "5" en "$5.28", "3" en "3D" y "m" en "Émanuel".

\W --> Busca cualquier caracter que no sea un caracter de palabra del alfabeto latino básico. Equivalente a [^A-Za-z0-9_]. Por ejemplo, /\W/ o /[^A-Za-z0-9_]/ coincide con "%" en "50%" y "É" en "Émanuel".

\s --> Busca un solo caracter de espacio en blanco, incluido el espacio, tabulación, avance de página, avance de línea y otros espacios Unicode. 

\S --> Busca un solo caracter que no sea un espacio en blanco. 

\d --> Busca cualquier dígito (número arábigo). Equivalente a [0-9]. Por ejemplo, /\d/ o /[0-9]/ coincide con "2" en "B2 es el número de suite".

\D --> Busca cualquier caracter que no sea un dígito (número arábigo). Equivalente a [^0-9]. Por ejemplo, /\D/ o /[^0-9]/ coincide con "B" en "B2 es el número de suite".

\t --> Coincide con una tabulación horizontal.

\r --> Coincide con un retorno de carro.

\n --> Coincide con un salto de línea.

\v --> Coincide con una tabulación vertical.

\f --> 	Coincide con un caracter de avance de página.

### Cuantificadores

{x,y}, ?, +, *





