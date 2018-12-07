class Persona {

    constructor(nombre, apellido, edad){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
    }

    calcularNacimiento() {
        console.log(`Esta persona se llama ${this.nombre} ${this.apellido} nacio en el año ${new Date().getFullYear() - this.edad}`)
    }

    static metodoEstatico(){
        console.log("Para ejecutar este método no es necesario instanciar la clase.")
    }
}

let persona = new Persona("Gabriel", "Tassone", 22)
persona.calcularNacimiento()

Persona.metodoEstatico()


// Herencia

class Desarrollador extends Persona {
    constructor(nombre, apellido, edad, puesto){
        super(nombre, apellido, edad);
        this.puesto = puesto
    }
}

let desarrollador = new Desarrollador("Gabriel", "Tassone", 22, "Desarrollador Web")
console.log(desarrollador.puesto)