let Rechts = 0
let Links = 0
let max_links = 0
let max_rechts = 0
let Bak = 0
let Gas = 0
let Stuur = 0
radio.setGroup(7)
basic.forever(function () {
    Stuur = Math.constrain(input.rotation(Rotation.Roll), -45, 45)
    Gas = Math.constrain(input.rotation(Rotation.Pitch), -45, 45)
    if (input.buttonIsPressed(Button.A)) {
        Bak += 1
    } else if (input.buttonIsPressed(Button.B)) {
        Bak += -1
    }
    Bak = Math.constrain(Bak, 0, 110)
    if (Stuur >= 0) {
        max_rechts = 255
        max_links = Math.map(Stuur, 0, 45, 255, -255)
    } else {
        max_links = 255
        max_rechts = Math.map(Stuur, 0, -45, 255, -255)
    }
    Links = Math.map(Gas, -45, 45, max_links, max_links * -1)
    Rechts = Math.map(Gas, -45, 45, max_rechts, max_rechts * -1)
    radio.sendValue("links", Links)
    radio.sendValue("rechts", Rechts)
    radio.sendValue("bak", Bak)
    basic.pause(10)
})
control.inBackground(function () {
    while (true) {
        if (Links >= 170) {
            led.plot(0, 0)
        } else {
            led.unplot(0, 0)
        }
        if (Links >= 85) {
            led.plot(0, 1)
        } else {
            led.unplot(0, 1)
        }
        led.plot(0, 2)
        if (Links <= -85) {
            led.plot(0, 3)
        } else {
            led.unplot(0, 3)
        }
        if (Links <= -170) {
            led.plot(0, 4)
        } else {
            led.unplot(0, 4)
        }
        basic.pause(10)
        if (Rechts >= 170) {
            led.plot(4, 0)
        } else {
            led.unplot(4, 0)
        }
        if (Rechts >= 85) {
            led.plot(4, 1)
        } else {
            led.unplot(4, 1)
        }
        led.plot(4, 2)
        if (Rechts <= -85) {
            led.plot(4, 3)
        } else {
            led.unplot(4, 3)
        }
        if (Rechts <= -170) {
            led.plot(4, 4)
        } else {
            led.unplot(4, 4)
        }
    }
})
