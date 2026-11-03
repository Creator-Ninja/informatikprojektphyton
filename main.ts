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
    Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, Vorw)
})
