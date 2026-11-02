input.onButtonPressed(Button.A, function () {
    radio.sendValue("Vorwaerts", pins.analogReadPin(AnalogReadWritePin.P10))
    radio.sendValue("Lenkung", 0)
})
radio.onReceivedValue(function (Voerwaerts, Vor) {
    Vorw = Vor
})
let Vorw = 0
basic.showLeds(`
    . . . . .
    . . . . .
    # # # # #
    . . . . .
    . . . . .
    `)
radio.setGroup(254)
radio.setTransmitPower(7)
Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Left, 0)
basic.forever(function () {
    servos.P0.run(Vorw)
    servos.P1.run(Vorw)
})
