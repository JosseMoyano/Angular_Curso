function sumar (a: number, b: number): number {
    return (a + b)
}

const resta = (a: number, b: number): number => a - b; 

function multiplicar(numero: number, otroNumero?: number, base: number = 2): number {
    return numero * base
}


interface PersonajeLOR {
    nombre: string,
    pv: number,
    // mostrarHP: Function
    mostrarHP: () => void
}

function curar (personaje: PersonajeLOR, curarX: number): void {
    personaje.pv += curarX;
    console.log(personaje);
}

const nuevoPersonaje: PersonajeLOR = {
    nombre : 'Lisa',
    pv: 900,
    mostrarHP(){
        console.log(`Puntos de vida: ${this.pv}`)
    }
}

curar(nuevoPersonaje, 100)
nuevoPersonaje.mostrarHP()
