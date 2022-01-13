interface Pasajero {
    nombre: string,
    hijos?: string[]
}

const pasajero1: Pasajero = {
    nombre: 'Agatha'
}

const pasajero2: Pasajero = {
    nombre: 'Wanda',
    hijos: ['Billy', 'Tomy']
}

function imprimeHijos(pasajero: Pasajero): void {
    
    const cuantosHijos = pasajero.hijos?.length || 0

    console.log(cuantosHijos)
}

imprimeHijos(pasajero2)
imprimeHijos(pasajero1)