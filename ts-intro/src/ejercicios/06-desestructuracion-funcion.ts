export interface Productos {
    desc: string,
    precio: number
}

const telefono: Productos = {
    desc: 'Motorola One',
    precio: 30000
}

const pc: Productos = {
    desc: 'PC Gamer',
    precio: 90000
}

export function calculaISV(productos: Productos[]): number[]{
    let total = 0
    productos.forEach(({precio}) => {
        total += precio
    })
    return [total, total * 0.15]
}

const articulos: Productos[] = [telefono, pc]
const [ total, isv] = calculaISV(articulos)
// console.log(`total: ${total}`)
// console.log(`ISV: ${isv}`)