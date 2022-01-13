
class PersonaNormal {

    constructor(
        public nombre: string,
        public direccion: string
    ) {}
}


class Hero extends PersonaNormal {
    
    constructor(
        public alterEgo:string,
        public edad: number,
        public nombreReal: string
    ) {
        super( nombreReal, 'Pueblito')
    }
}

const scarletWitch = new Hero('Scarlet Witch', 29, 'Wanda Maximoff' )
console.log(scarletWitch)