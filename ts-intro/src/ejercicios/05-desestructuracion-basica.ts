// -------------------- Desestructuracion de Objetos -------------------

interface Reproductor {
    volumen: number,
    segundo: number,
    cancion: string,
    detalles: Detalles,
}

interface Detalles {
    autor: string,
    año: number 
}

const reproductor: Reproductor = {
    volumen: 9,
    segundo: 36,
    cancion: 'Chandelier',
    detalles: {
        autor: 'Sia',
        año: 2015
    }
}

// const { volumen, segundo, cancion, detalles: { autor: autorDetalle } } = reproductor
// const { volumen, segundo, cancion, detalles: { autor } } = reproductor
const { volumen, segundo, cancion, detalles } = reproductor
const { autor } = detalles

console.log(`El volumen actual es de ${volumen}`)
console.log(`El segundo actual es de ${segundo}`)
console.log(`la cancion actual es de ${cancion}`)
console.log(`El autor actual es ${autor}`)
// console.log(`El autor actual es ${autorDetalle}`)



// ---------------- Desestructuracion de Arreglos -------------------------

const dbz: string[] = ['Goku', 'Broly', 'Gohan']
const [ goku, broly, p3 ] = dbz
// const [ , , p3 ] = dbz // => para sacar solo el de alguna posicion especifica

console.log(`Personaje 1: ${goku}`)
console.log(`Personaje 2: ${broly}`)
console.log(`Personaje 3: ${p3}`)


