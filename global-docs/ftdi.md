# FTDI and Serial Console

Future Technology Devices International (FTDI) is the abbreviation 
commonly used to refer to the 6-pin serial interface found on the 
MinnowBoard Turbot and other devices.

## Serial configuration

When connecting over this serial interface, configure your communication 
program with the following settings:

* Interface: /dev/ttyS0
* Baud rate: 115200
* Hardware Flow Control: No
* Bits: 8
* Stop: 1

![3.3v FTDI 6-pin connector](boards/minnowboard_turbot_B_21/images/MinnowBoardMAX-A2-Serial-pinout.png) 
The serial console port (UART0), located near the SATA connector at the 
top of the board, uses a 3.3v FTDI serial cable with a 6-pin connector. 
This is a reasonably common cable, also used on the Arduino Pro, Arduino 
Pro Mini and Arduino Lilypad. The cable connector typically has a 
triangle marking pin 1 (black wire).

Pins and signal names are referenced from the cable:

Pin 1: Ground (GND) (Closest to SATA connector)
Pin 2: CTS (unused)
Pin 3: VCC 3.3V (unused)
Pin 4: TXD
Pin 5: RXD
Pin 6: RTS (unused)

**NOTE**: CTS,VCC, and RTS are not used on the debug UART header. The pinouts and connections are listed to facilitate locating and connecting a compatible adapter.

## 6-Wire Serial Console

In this case, plug the connector in exactly as it's described in the 
primary layout.

Places that carry 6-pin FTDI connector cables include:

* [Mouser](http://www.mouser.com/ProductDetail/FTDI/TTL-232R-3V3/?qs=sGAEpiMZZMuGxYVy11yKKo9Jh1vSyHd5j3BYkuIZ9TA%3d)
* [Digikey](http://www.digikey.com/product-detail/en/TTL-232R-3V3/768-1015-ND/1836393)
* [Amazon](http://www.amazon.com/GearMo%C2%AE-3-3v-Header-like-TTL-232R-3V3/dp/B004LBXO2A/ref=sr_1_2?ie=UTF8&qid=1400890304&sr=8-2&keywords=ftdi+3.3v), or [here](http://www.amazon.com/3-3V-Debug-Cable-BeagleBone-Black/dp/B00FA7LD0Y/ref=sr_1_4?ie=UTF8&qid=1400890356&sr=8-4&keywords=ftdi+3.3v)
* [Sparkfun](https://www.sparkfun.com/products/9717)

Configure your terminal emulation software with the same settings listed 
above.

## 4-Wire Serial Console

The serial console port (UART0) can also be used with a 3.3v FTDI serial 
cable with a 4-pin connector. This is a reasonably common cable, also 
used on the Arduino Pro, Arduino Pro Mini and Arduino Lilypad. If you 
are using one of the 4-wire adapters, here are the connections: 
MinnowBoard MAX A2 Serial Pinout

Pins and signal names are referenced from the cable:

Pin 1: BLACK Ground (GND) (Closest to SATA connector)
Pin 2: unused
Pin 3: RED VCC (unused)
Pin 4: GREEN TXD
Pin 5: WHITE RXD
Pin 6: unused

**Note**: The RED wire is for power however it is not internally connected on 
the MinnowBoard MAX.

Places that carry 4-pin FTDI connector cables include:

* [Adafruit](http://www.adafruit.com/products/954)
* [Watterott](http://www.watterott.com/de/Adafruit-USB-to-TTL-Serial-Cable)

Configure your terminal emulation software with the same settings listed 
above.

## 3-Wire Serial Console

The serial console port (UART0) can be used with a 3.3v FTDI serial 
cable with a 3-pin connector, for example Olimex USB-Serial-Cable-F. The 
same cable can used for debugging of a lot of other developer boards 
including HummingBoard, Raspberry Pi, Radxa Rock, Firefly-RK3288, and 
all of Olimex open source hardware boards OLinuXino. If you are using 
this cable, here are the connections:

* Pin 1: BLUE - Ground (GND) (Closest to the SATA connector)
* Pin 2: unused
* Pin 3: unused
* Pin 4: RED - TXD
* Pin 5: GREEN - RXD
* Pin 6: unused

Places that carry the appropriate Cable:

* [Olimex USB-Serial-Cable-F](https://www.olimex.com/Products/Components/Cables/USB-Serial-Cable/USB-Serial-Cable-F/)


