## Ika Lure

These are lures that do not have build files available, but information pertaining to them is still pertinent.

The Ika lure is a lure that extends the existing low-speed connection by breaking it out and adding the pieces to make allow the MinnowBoard MAX to interface with an Arduino compatible shield.

![Ika Lure](pages/ika-lure/Ika_Lure.png)

### Features

- Electrically Arduino Compatible
- 3.3v & 5.5v tolerant (flipped via jumpers)
- Produced by CircuitCo

### Pinout

This details the translation of the pinout from the existing low-speed connector to the Arduino compatible pinout.

**Note:** The Analog pins go through a Ti ADS1015
- These pins are accessed via I2C
- [Datasheet](http://www.ti.com/lit/ds/sbas473c/sbas473c.pdf)

**Note:** There are two Ti TXS0108E voltage translators attached to pins 2-13, RX and TX
- [Datasheet](http://www.ti.com/lit/ds/symlink/txs0108e.pdf)

![Ika Layout](pages/ika-lure/Ika-layout.PNG)
