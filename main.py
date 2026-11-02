basic.show_leds("""
    . . . . .
    . . . . .
    # # # # #
    . . . . .
    . . . . .
    """)
radio.set_group(743)
radio.set_transmit_power(7)
radio.send_value("Vorwaerts", 0)
radio.send_value("Lenkung", 0)

def on_forever():
    pass
basic.forever(on_forever)
def on_received_value(name, value):
    pass
radio.on_received_value(on_received_value)