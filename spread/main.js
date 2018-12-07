let array = [1,2,3];
console.log(...array)

let object = {
    nombre: "Gabriel",
    apellido: "Tassone",
    edad: 22,    
}

let persona = {...object, id: 10040}

console.log(persona.nombre, persona.apellido, persona.edad, persona.id)

console.log({nombre, apellido, edad} = object)


// Funcion con valores por defecto

let empleado = ( nombre, apellido, edad = 20, id = 10000 ) => {
    console.log(nombre, apellido, edad, id)
}

empleado(persona)