import { calculaISV, Productos } from "./06-desestructuracion-funcion";

const carritoCompras: Productos[] = [
    {
        desc: 'Telefono 1',
        precio: 100
    },
    {
        desc: 'telefono 2',
        precio: 150
    }
]

const [ total, isv ] = calculaISV(carritoCompras); 
console.log(`Total: ${total}`)
console.log(`ISV: ${isv}`)