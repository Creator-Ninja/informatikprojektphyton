input.onButtonPressed(Button.A, function on_button_pressed_a() {
    radio.sendValue("Vorwaerts", pins.analogReadPin(AnalogReadWritePin.P10))
    radio.sendValue("Lenkung", 0)
})
radio.onReceivedValue(function on_received_value(Voerwaerts: string, Vor: number) {
    
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
basic.forever(function on_forever() {
    servos.P0.run(Vorw)
    servos.P1.run(Vorw)
})
Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Left, 0)
