serial.redirectToUSB()
serial.setBaudRate(BaudRate.BaudRate9600)
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    serial.writeLine("" + (input.acceleration(Dimension.X)))
    serial.writeLine("" + (input.acceleration(Dimension.Y)))
    serial.writeLine("" + (input.acceleration(Dimension.Z)))
    basic.pause(100)
})
