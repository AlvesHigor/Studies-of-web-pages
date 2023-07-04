
const player = function(name, position, golsN){
    Name = name,
    Position = position,
    Gols = golsN

    this.getName = function(){
        return Name
    }
    this.getPos = function(){
        return Position
    }
    this.getGols = function(){
        return Gols
    }
}

const Neymar = new player("Neymar","Atacante",400)
console.log(Neymar.getPos())
const Renato = new player("Renato Augusto", "Meio Campo", 80)
console.log(Renato.getName())