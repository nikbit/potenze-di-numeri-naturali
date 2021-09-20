let base = 0
let esp = 0
input.onButtonPressed(Button.A, function () {
    base = randint(1, 10)
    esp = randint(0, 4)
    basic.showNumber(base)
    basic.showString("^")
    basic.showNumber(esp)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(base ** esp)
})
