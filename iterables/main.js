let colores = ['Amarillo', 'Verde', 'Azul', 'Rojo']

function iterador(array) {
    let count = 0

    return {
        next: function() {
            if(count < array.length)
                return {value: array[count++], done: false}
            else
                return{value: undefined, done: true}
        }
    }
}

let refIterator = iterador(colores)

for(let i = 0; i<=colores.length; i++)
{
    console.log(refIterator.next())
}