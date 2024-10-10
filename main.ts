basic.showArrow(ArrowNames.NorthEast)
basic.forever(function () {
    while (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.SmallHeart)
    }
    if (input.buttonIsPressed(Button.B)) {
        basic.showString("Hello!")
    }
})
