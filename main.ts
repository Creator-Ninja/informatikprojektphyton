basic.showLeds(`
    . . . . .
    . . . . .
    # # # # #
    . . . . .
    . . . . .
    `)
radio.setGroup(743)
radio.setTransmitPower(7)
radio.sendValue("Vorwaerts", 0)
radio.sendValue("Lenkung", 0)
basic.forever(function on_forever() {
    
})
radio.onReceivedValue(function on_received_value(name: string, value: number) {
    
})
