var pruebaVar = "Variable fuera del bloque"

const pruebaConst = "Constante fuera del bloque"

if (true) {
    let pruebaLet = "Variable de bloque"
    const pruebaConstB = "Constante dentro del bloque"
}

console.log(pruebaVar)

if (typeof (pruebaLet) != "undefined") {
    console.log(pruebaLet)
}
else {
    console.log("La variable es una variable de bloque")
}

if (typeof (pruebaConstB) != "undefined") {
    console.log(pruebaConstB)
}
else {
    console.log("La constante está definida dentro del bloque")
}

const persona = {nombre: "Gabriel", apellido: "Tassone"}

persona.nombre = "Gabriel Iván"

console.log(persona)