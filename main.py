while input.button_is_pressed(Button.A):
    basic.show_icon(IconNames.SMALL_HEART)

def on_forever():
    basic.show_string("Hello!")
basic.forever(on_forever)
