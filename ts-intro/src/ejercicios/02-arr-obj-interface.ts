/*
    ===== Código de TypeScript =====
*/

// ARRAY 
let habilidades: string[] = ['caos', 'power', 'control mental'] ;

habilidades.push('creacion')
console.log(habilidades)


// INTERFACES
interface Personaje{
    name: string,
    años: number,
    power: number,
    hijos?: string[]
}

// OBJETOS (usa interfaces)
const magneto: Personaje = {
    name: 'Erik',
    años: 55,
    power: 90
}

magneto.hijos = ['Lorna', 'Wanda', 'Nina']

console.table(magneto)