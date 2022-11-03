input.onGesture(Gesture.ScreenUp, function () {
    music.playMelody("C C D E - - - - ", 120)
    score += score - 1
    basic.pause(2000)
    basic.showNumber(0)
    basic.pause(2000)
    basic.showString("" + (Palabras._pickRandom()))
})
input.onGesture(Gesture.ScreenDown, function () {
    music.playMelody("C D E E - - - - ", 120)
    score += score + 1
    basic.pause(2000)
    basic.showNumber(0)
    basic.pause(2000)
    basic.showString("" + (Palabras._pickRandom()))
})
let Palabras: string[] = []
let score = 0
score = 0
Palabras = [
"pescar",
"avion",
"martillo",
"arco",
"manejar",
"perro",
"libro",
"globo",
"café",
"basquetbol"
]
basic.showString("" + (Palabras._pickRandom()))
loops.everyInterval(15000, function () {
	
})
basic.forever(function () {
    if (score == 5) {
        basic.showNumber(score)
        game.gameOver()
        basic.showString("Pasa al siguiente jugador")
    }
})
