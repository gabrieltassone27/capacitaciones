let funcion = () => {
    console.log("Hola")
}

let fecha = () => {
    let today = new Date();
    console.log(today.getDate(), today.getSeconds() )
    setTimeout(() => {
        // fecha()
        console.log("fin")
    }, 1000);
}

fecha()


let fechaParams = (dia, mes, anio) => {
    console.log(`La fecha es ${dia} / ${mes} / ${anio}`)
}

const date = new Date()
fechaParams(date.getDay(), date.getMonth(), date.getFullYear())

let edad = 22, nombre = "Gabriel"

let contextLiterals = (string, value1, value2) => {
    console.log(string)
    console.log(value1);
    console.log(value2);
       
}

contextLiterals(`Hola soy ${nombre} y tengo ${edad} años`)