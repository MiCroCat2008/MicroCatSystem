input.onGesture(Gesture.TiltLeft, function () {
    basic.showLeds(`
        . # . . .
        . # . . .
        . # . . .
        . # . . .
        . # # # .
        `)
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showLeds(`
        . # # # .
        . # . . #
        . # # # .
        . # . # .
        . # . . #
        `)
})
input.onButtonPressed(Button.A, function () {
    if (input.temperature() < 0) {
        basic.showString("" + (input.temperature()))
    }
    if (input.temperature() > 0) {
        basic.showString("" + (input.temperature()))
    }
})
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    basic.showIcon(IconNames.Square)
    basic.showIcon(IconNames.SmallSquare)
    basic.showIcon(IconNames.SmallDiamond)
})
input.onButtonPressed(Button.B, function () {
    music.playMelody("G D F G C5 E B A ", 142)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.Happy)
})
basic.showString("Hello!")
basic.forever(function () {
    if (input.lightLevel() < 105) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (input.lightLevel() == 105) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . # # # .
            . . # . .
            `)
    } else if (input.lightLevel() > 128) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else {
    	
    }
})
