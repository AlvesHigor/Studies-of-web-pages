class player{
    constructor(name,position,golsN){
        this.name = name
        this.position = position
        this.golsN = golsN
    }
    golsMach(){
        console.log(`O ${this.name} já marcou ${this.golsN} em sua carreira.`)
    }
}

const Neymar = new player("Naymar","Atacante",400)

Neymar.golsMach()

const Pele = new player("Pele","Atacante",1000)

Pele.golsMach()

console.log(typeof player)