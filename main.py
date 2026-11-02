def on_button_pressed_a():
    radio.send_value("Vorwaerts", pins.analog_read_pin(AnalogReadWritePin.P10))
    radio.send_value("Lenkung", 0)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_received_value(Voerwaerts, Vor):
    global Vorw
    Vorw = Vor
radio.on_received_value(on_received_value)

Vorw = 0
basic.show_leds("""
    . . . . .
    . . . . .
    # # # # #
    . . . . .
    . . . . .
    """)
radio.set_group(254)
radio.set_transmit_power(7)

def on_forever():
    servos.P0.run(Vorw)
    servos.P1.run(Vorw)
basic.forever(on_forever)

Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.LEFT, 0)