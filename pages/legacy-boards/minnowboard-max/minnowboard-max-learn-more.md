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

### LSE layout

The Linux GPIO base address changed (by adding 256) from Linux kernel versions 3.17 to 3.18, so you'll need to know which kernel version you're using to select the correct GPIO numbers. This table lists the GPIO number for both the 3.17 and earlier kernels, and 3.18 and later kernels, for each pin on the connector:

![MinnowBoard MAX LSE Layout](pages/legacy-boards/minnowboard-max/lse-layout.png)

