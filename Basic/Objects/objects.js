let player = {
    nome:'Renato Augusto',
    age: 34,
    golsT:81,
    gol(g=0){
        console.log('Renato fez gol!')
        this.golsT += 1
    }

}
console.log(player.nome)
console.log(player.golsT)
player.gol()
console.log(player.golsT)

player.position = 'Meio Campo'
console.log(player)

delete player.age
console.log(player)