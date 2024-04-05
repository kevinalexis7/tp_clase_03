let nombre = 'Kevin'
let apellido = 'Espinola'
let sueldoActual = 20000
let porcentajeAumento = 25
let calculoAumento = (sueldoActual * porcentajeAumento)/100
let nuevoSueldo = calculoAumento + sueldoActual


console.log(`
Hola, estimad@ ${nombre + " " + apellido}
En base a su sueldo actual:
$${sueldoActual}
Ha recibido un aumento del 25%:
$${calculoAumento}
y su nuevo sueldo es de: $${nuevoSueldo}.
`);