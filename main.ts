input.onButtonPressed(Button.A, function () {
    music.playMelody("C C D E - - - - ", 120)
    game.addScore(-1)
    basic.pause(1000)
    basic.showNumber(game.score())
    basic.pause(1000)
    basic.showString("" + (Palabras._pickRandom()))
})
input.onButtonPressed(Button.B, function () {
    music.playMelody("C D E E - - - - ", 120)
    game.addScore(1)
    basic.pause(1000)
    basic.showNumber(game.score())
    basic.pause(1000)
    if (game.score() == 5) {
        basic.showNumber(game.score())
        game.gameOver()
    } else {
        basic.showString("" + (Palabras._pickRandom()))
    }
})
let Palabras: string[] = []
game.setScore(0)
Palabras = [
"pescar",
"avion",
"martillo",
"arco",
"manejar",
"perro",
"libro",
"globo",
"cafe",
"basquetbol"
]
basic.showString("" + (Palabras._pickRandom()))
