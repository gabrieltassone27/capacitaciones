var pruebaVar = "Variable fuera del bloque"

if (true) {
    let pruebaLet = "Variable de bloque"
}

console.log(pruebaVar)

if (typeof (pruebaLet) != "undefined") {
    console.log(pruebaLet)
}
else {
    console.log("La variable es una variable de bloque")
}