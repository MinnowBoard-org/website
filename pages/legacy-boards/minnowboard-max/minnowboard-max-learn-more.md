## MinnowBoard MAX 

MinnowBoard MAX is the second generation MinnowBoard (released in July 2014), updating and replacing the original MinnowBoard. The MinnowBoard MAX board has an upgraded 64-bit Intel® Atom™; E3800 (Bay Trail-I) processor with better graphics and revised I/O, shrinks the footprint by more than half, supports additional operating systems (Linux*, Android*, and Windows*) and significantly improves on the original board on price, performance, and energy consumption.

### Technical specifications

| |  |
|----|----|
|Category    | Feature |
| Core Logic  | 64-bit Intel®Atom™ E38xx Series SoC; $139 MSRP: E3825 (dual-core, 1.33 GHz); Integrated Intel HD Graphics with Open Source hardware-accelerated drivers for Linux OS |
| Memory  | DDR3 RAM System Memory; $139 MSRP: 2 GB; 8 MB SPI Flash System Firmware Memory  |
| Video  | Intel HD Graphics (1920x1080 max resolution); HDMI 1.4a (micro HDMI connector)  |
| Audio | Digital via HDMI; Analog available separately via MinnowBoard MAX Lure (sold separately)  |
| I/O  | Micro SDSDIO; SATA2 3Gb/sec (Port multipliers not supported via on-board SATA); USB 3.0 (host); USB 2.0 (host); Serial debug via FTDI cable (sold separately); 10/100/1000 Ethernet RJ-45 connector  |
| Experimenter Features  | 8 x Buffered GPIO pins (2 pins support PWM); I2C &amp; SPI bus; 2 x 16550 HS UARTs, one with CTS/RTS; System Firmware Flash Programming Header (compatible with Dedi-Prog programmer)  |
| Board Dimensions  | 99 x 74mm (2.9 x 3.9in)  |
| Temperature Range  | 0 – 40 deg C (Contact CircuitCo for industrial temp range needs)  |
| Power | 5V (min 2.5A) DC (Sold separately)  |
| Operating Systems  | Supported: Debian GNU, Ubuntu, Fedora, Linux Mint; Yocto Project Compatible; Android 4.4 (Kitkat) and 5.0 (Lollipop) System; Microsoft Windows 8.1 and 10  |
| System Boot Firmware  | UEFI Firmware; Coreboot; SageBIOS |

### Board layout
Here are photos showing the MinnowBoard MAX board layout identifying key hardware items; items are described later in this section.

![MinnowBoard MAX Board Layout 1](pages/legacy-boards/minnowboard-max/MinnowBoardMAX-board-layout1.png)

NOTE: On Rev A1 boards and beyond, FTDI serial pin 1 is nearest the SATA connector, but on A0 boards pin 1 is furthest away. (A0 boards are rare, and are only being documented for completeness.)

![MinnowBoard MAX Board Layout 1](pages/legacy-boards/minnowboard-max/MinnowBoardMAX-board-layout2.png)

NOTE: Some items, such as the Real Time Clock battery pad are not populated when the boards are manufactured.

![MinnowBoard MAX Board Layout 1](pages/legacy-boards/minnowboard-max/MinnowBoardMAX-board-layout3.png)

#### Power plug

The Minnowboard Max uses a 5.5 x 2.1mm barrel 5V power plug (+/- .25V or 4.75 - 5.25V), Recommended minimum 2.5A power supply. It is a Center Positive power supply, indicating that the center (tip) of the output plug is positive (+), the outer barrel is negative (-).
The 2.5A recommendation is just a simple calculation of:

  ```
  500mA (USB2) + 900mA (USB3) + 500mA (core) + 500mA (other peripherals) = 2400mA
  ```

- Universal Power Supply from Digikey - 5V@3A - [CUI EMSA050300-P5P-SZ](http://www.digikey.com/product-detail/en/EMSA050300-P5P-SZ/T1088-P5P-ND/2352082)
- Power Supply from Sparkfun - 5V@2A - [TOL-12889](https://www.sparkfun.com/products/12889)
- Power Supply from SeeedStudio - 5V@2A SKU: [POW06182B](http://www.seeedstudio.com/depot/Wall-Adapter-Power-Supply-5VDC-2A-p-1508.html?cPath=1_4)

**NOTE:** If you try to power both a MinnowBoard MAX **AND** a hard drive (spinning or SSD) off of the same power supply, please use a minimum of 3A supply, preferably 4A. Failure to do so will likely result in odd behavior of the MAX as the whole system may be pushed into a brown-out situation.

#### SD card

The MinnowBoard has a microSD card interface built into the board. Some things to note:

- The microSD card goes in opposite to what most folks would expect, with the pads going upwards from the top of the board
- UHS is NOT supported. There is an option in the firmware to enable it if you would like to test it with your specific card, but it is unlikely to be stable. Additional information on this can be found at the firmware tutorial, or by going into the firmware menu and traversing to Main Menu -> Device Manager -> South Cluster Configuration -> LPSS & SCC Configuration -> DDR50 Capability Support
- Linux kernels 4.6 and higher have a change to the way they enumerate the mmcblk devices. Before 4.6 the Linux kernel would (most likely) enumerate to mmcblk0 for the microSD card. With Linux kernel 4.6 and newer the microSD card will (likely) enumerate to mmcblk2. If you are using the device, please be aware of that change, and that the Linux kernel rarely guarantees enumeration of devices unless explicitly using a unique identifier (like the UUID for partitions). More information on the commit that causes this can be found [here](http://git.kernel.org/cgit/linux/kernel/git/torvalds/linux.git/commit/?id=9aaf3437aa72ed5370bf32c99580a3fa2c330e3d). 

#### Serial console

On your host computer, configure your terminal emulation software with these settings:

- /dev/ttyS0
- Baud rate: 115200
- Hardware Flow Control: No
- Bits: 8
- Stop: 1

The serial console port (UART0), located near the SATA connector at the top of the board, uses a 3.3v FTDI serial cable with a 6-pin connector. This is a reasonably common cable, also used on the Arduino Pro, Arduino Pro Mini and Arduino Lilypad. The cable connector typically has a triangle marking pin 1 (black wire).

![FTDI](pages/legacy-boards/minnowboard-max/serial-console.png)

**NOTE:** CTS,VCC, and RTS are not used on the debug UART header. The pinouts and connections are listed to facilitate locating and connecting a compatible adapter.
**NOTE:** On Rev A1 boards and beyond, FTDI serial pin 1 is nearest the SATA connector, but on A0 boards pin 1 is furthest. (A0 boards are rare, and are only being documented for completeness.)

##### 6-Wire serial console

In this case, plug the connector in exactly as it's described in the primary layout.

Places that carry 6-pin FTDI connector cables include:

- [Mouser](http://www.mouser.com/ProductDetail/FTDI/TTL-232R-3V3/?qs=sGAEpiMZZMuGxYVy11yKKo9Jh1vSyHd5j3BYkuIZ9TA%3d)
- [Digikey](http://www.digikey.com/product-detail/en/TTL-232R-3V3/768-1015-ND/1836393)
- [Amazon](http://www.amazon.com/GearMo%C2%AE-3-3v-Header-like-TTL-232R-3V3/dp/B004LBXO2A/ref=sr_1_2?ie=UTF8&qid=1400890304&sr=8-2&keywords=ftdi+3.3v),or [here](http://www.amazon.com/3-3V-Debug-Cable-BeagleBone-Black/dp/B00FA7LD0Y/ref=sr_1_4?ie=UTF8&qid=1400890356&sr=8-4&keywords=ftdi+3.3v)
- [Sparkfun](https://www.sparkfun.com/products/9717)

Configure your terminal emulation software with the same settings listed above.

##### 4-Wire serial console

The serial console port (UART0) can also be used with a 3.3v FTDI serial cable with a 4-pin connector. This is a reasonably common cable, also used on the Arduino Pro, Arduino Pro Mini and Arduino Lilypad. If you are using one of the 4-wire adapters, here are the connections: 

![FTDI](pages/legacy-boards/minnowboard-max/serial-cable-pinout.png)
	
Pins and signal names are referenced from the cable:

- Pin 1: BLACK Ground (GND) (Closest to SATA connector)
- Pin 3: RED VCC (Not connected)
- Pin 4: GREEN TXD
- Pin 5: WHITE RXD

**Note:** The RED wire is for power and is not internally connected on the MinnowBoard MAX. CTS,VCC, and RTS are not used on the debug UART header. The pinouts and connections are listed to facilitate locating and connecting a compatible adapter.

Places that carry 4-pin FTDI connector cables include:

- [Adafruit](http://www.adafruit.com/products/954)
- [Watterott](http://www.watterott.com/de/Adafruit-USB-to-TTL-Serial-Cable)

Configure your terminal emulation software with the same settings listed above.

##### 3-Wire serial console

The serial console port (UART0) can be used with a 3.3v FTDI serial cable with a 3-pin connector, for example Olimex USB-Serial-Cable-F. The same cable can used for debugging of a lot of other developer boards including HummingBoard, Raspberry Pi, Radxa Rock, Firefly-RK3288, and all of Olimex open source hardware boards OLinuXino. If you are using this cable, here are the connections: 

- Pin 1:BLUE - Ground (GND) (Closest to the SATA connector)
- Pin 4:RED - TXD
- Pin 5:GREEN - RXD

![Debugging MinnowBoard MAX with Olimex USB-Serial-Cable-F](pages/legacy-boards/minnowboard-max/Minnowboard-max-debug-olimex-usb-serial-cable-f.PNG)

**NOTE:** CTS,VCC, and RTS are not used on the debug UART header. The pinouts and connections are listed to facilitate locating and connecting a compatible adapter.

Places that carry the appropriate Cable: [Olimex USB-Serial-Cable-F](https://www.olimex.com/Products/Components/Cables/USB-Serial-Cable/USB-Serial-Cable-F/)

#### High Speed UART1

Available on the Low Speed Expansion this Uart is 16550 compatible and appears as /dev/ttyS4
CTS/RTS signaling is available

#### High Speed UART2
Available on the Low Speed Expansion this Uart is 16550 compatible and appears as /dev/ttyS5
CTS/RTS signaling is NOT available

#### D1 (LED)

D1 is the power indicator LED; when lit, power is being provided to the board.

#### D2 (LED)

D2 is the On/Off status indicator LED; when lit the CPU itself has come up and is working, the system is running.
**Note:** On later revisions of the board (A4+), this LED defaults to being on, but is controllable via a GPIO.

#### HDMI

The MinnowBoard MAX uses a Type D micro-HDMI connector. This is a standard port; cables and adapters are readily available from most electronics stores.

#### HDMI CEC

While the MAX (from a hardware perspective) supports HDMI CEC, the signal is, unfortunately, not passed completely from the micro-hdmi connector to the CPU. This means we lack the ability to directly manipulate CEC from the A1 and A2 revisions of the hardware. It has been proposed that this be resolved in a later revision of the board, but it is unknown at which point (if it ever is) rectified.

On the Turbot HDMI CEC is plumbed through to the SoC, and is connected to GPIO_S0_SC_58 (which should be Linux GPIO # 212 on older kernels and 468 on newer kernels)

#### Ethernet

The MinnowBoard MAX uses a Realtek RTL8111GS-CG PCIe based chipset to provide a 10/100/1000 Ethernet connection.

#### Low Speed Expansion Connector (Top)

The low speed expansion connector uses 0.1" (2.54 mm) male header pins in a 2 x 13 array, for a total of 26 pins. Pin 1 is in the row closest to the power connector, and closest to the board edge.

**NOTES:**

- All I/O on the Low Speed Expansion Connector is at 3.3V levels. THE PINS ARE NOT 5v TOLERANT.
- For typical usage, the pins should be able to output up to 10mA, per pin. For normal operations you SHOULD NOT exceed that limit.
- Most LEDs tend to have a forward current need of more than 10mA, and thus may not work (directly) off of the LSE pins. It is suggested you use a transistor and drive it via the GPIO instead of direct connection.

##### LSE layout

The Linux GPIO base address changed (by adding 256) from Linux kernel versions 3.17 to 3.18, so you'll need to know which kernel version you're using to select the correct GPIO numbers. This table lists the GPIO number for both the 3.17 and earlier kernels, and 3.18 and later kernels, for each pin on the connector:

![MinnowBoard MAX LSE Layout](pages/legacy-boards/minnowboard-max/lse-layout.png)

