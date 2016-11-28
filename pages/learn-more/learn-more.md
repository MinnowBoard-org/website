### Why choose the MinnowBoard Turbot?

![MinnowBoard Turbot Front](pages/learn-more/MinnowBoard-Turbot-front-0009-160629-450x300.png){align-right container-40}

The MinnowBoard Turbot delivers to a sweet spot in the embedded and IoT 
development paradigm with:  
- a 64-bit Intel® Atom™ E38xx Series System on a Chip (SoC)
- a low cost, small form factor
- high performance (dual and quad core versions) 
- regulatory compliance* for immediate productization 
- open source hardware files - build your own custom version
- fast POC and prototyping through versatile extensibilty (LURES)
- adaptors for industry standard
- open source firmware that is accessible for HW bring up
- it's Intel, so OS's "just run" and your software will too
- Windows, Linux, Android, Wind River Linux, Yocto Project supported
  
### MinnowBoard MAX compatible with upgrades
The MinnowBoard Turbot has the same form factor, user connections, connector 
locations, mounting holes, and High-Speed and Low-Speed Expansion connectors as 
the [MinnowBoard MAX](http://wiki.minnowboard.org/MinnowBoard_MAX), and runs the same MinnowBoard MAX software. MinnowBoard 
Turbot boards are home to the Intel® Atom™ E3826 processor, which offers low 
energy consumption and 10% higher CPU code speed and 25% higher graphics speed 
than the original E3825 SoC. The board also provides an enhanced design including 
integrated Intel HD graphics with open source hardware-accelerated drivers for 
Linux. The Turbot has amped up its performance with the addition of a dedicated 
I2C shifter, a D2 LED now under GPIO control, a Low-Speed Expansion connector 
which can now supply power, and an I2S MCLK routed to LSE connector (audio 
interface). You can also connect to nearly unlimited devices with UARTs and USB 
3.0, SATA, and PCI Express.

### Where are they used?
MinnowBoard Turbot boards bridge the gap between makers, developers and OEMs. You can use 
MinnowBoard Turbots for anything from creating fun hobby or professional maker projects, 
to developing high performance embedded IoT applications and products as significant 
as in-vehicle infotainment and video-based motion detection with Intel® 
RealSense™ cameras. The Intel® 
Data Plane Development Kit (DPDK) in a box development kit includes a MinnowBoard 
Turbot. You’ll see the MinnowBoard Turbot being used in demos in almost every 
embedded and IoT focused event in the US and Europe because it is a versatile, 
low-cost, PC-like capable embedded board.

### Where can I find other developers?
MinnowBoard Turbot is supported by an active MinnowBoard.org community. 

### MinnowBoard Turbot variations
MinnowBoard Turbot boards combine variations of Dual Core and Quad Core.

#### Operating system support
-   Debian GNU/Linux
-   Windows 10 IoT
-   Windows 8.1
-   Android 4.4
-   Ubuntu
-   Yocto Project Custom Linux


#### Bios support
-   CoreBoot
-   UEFI System Boot Firmware
-   U-boot
-   SageBIOS
-   WinZent

### High level technical specifications

| |  |
|----|----|
|CPU    | [Dual Core Intel® Atom™ E3826](http://ark.intel.com/products/78477/Intel-Atom-Processor-E3826-1M-Cache-1_46-GHz) (2 x 1.46 GHz, 1MB cache) |
|    | [Quad Core Intel® Atom™ E3845](http://ark.intel.com/products/78475/Intel-Atom-Processor-E3845-2M-Cache-1_91-GHz?q=3845) (4 x 1.91 GHz, 2MB cache) |
|DRAM   |  2GB DDR3L 1067MT/s, on board |
|Storage    | 1x SATA2, 1x MicroSD |
|I/O Connectors   |  1x USB 2.0 host, 1x USB 3.0 host, 8x buffered GPIO, I2C, SPI, 1Gb Ethernet |
|Ethernet    | 1x 1Gb Ethernet RJ45 |
|Video   |  Intel HD Graphics, 1x micro HDMI output |
|Audio   |  Windows digital via HDMI |
|Expansion Interface   | High-speed expansion connector with additional mPCIe, SATA, USB |
|Console   | Serial via FTDI cable  |
|Boot Loader    | TianoCore UEFI, CoreBoot / SeaBIOS |
|Power   |  5VDC via coaxial power jack |
|Temperature    | Fanless ambient operating temperature: 0-40C (Wider range possible with a larger heatsink than provided with standard boards) |
|Certifications   | FCC Part 15 Class A, CE Class A, IEC-60950, RoHS/WEEE  |


### Breakout board extensibility (LURES) 
For truly fast prototyping you can explore expanding the base capability of
your MinnowBoard Turbot by connecting breakout boards to either the Low Speed 
Expansion header (LSE -top side 26 pin connector) or High Speed Expansion header
(HSE - a 60 pin high density connector on the reverse side of the board). To do 
this you'll need to purchase or design breakout boards, called Lures. 

Some lures have specific independent functionality such
as adding connections for mPCIe WiFi cards and internal mSATA SSD drives, or for
prototyping and experimenting with GPIOs and sensors. Others are adapters intended
to allow you to immediately incorporate boards from other industry standards 
or ecosystems that you may already have, such as MikroElektronika's Mikrobus 
and Seeeds's Grove standard. Plug them in and you're ready to develop.

Lures are owned and supported
by their respective owners and manufacturers. Some lures are available for purchase
while others have their schematics and project files freely available for you to use.
Read more on the [Community wiki](http://wiki.minnowboard.org/Lures).

### Create a custom derivative board   
MinnowBoard.org supports the [Open Source Hardware Association](http://oshwa.org/) principles and makes
its designs publicly available so "anyone can study, modify, distribute,
make, and sell the design or hardware based on that design." The MinnowBoard.org
Foundation is a is a US-based non-profit providing education and promotion
of the design and use of open-source software and hardware in embedded
computing, on Intel Architecture. [Read more](about)
about the MinnowBoard.org Foundation and the Open Source Hardware Association.

### Who is the manufacturer?
The MinnowBoard Turbot is manufactured by [ADI Engineering](http://www.adiengineering.com), a division of 
Silicom Ltd. 

### MinnowBoard Turbot design files

![OSHA](pages/learn-more/oshw-logo-100-px.png){align-right container-30}  

All design files available for MinnowBoard Turbot are fully
modifiable under [Creative Commons licensing](http://creativecommons.org/). The MinnowBoard Turbot is intended
to comply with all requirements and guidelines set forth by the [Open Source
Hardware Association](http://www.oshwa.org/).

For specific copyright and license terms for each file, see the contents of the file.

-   [X205 Schematic](http://wiki.minnowboard.org/images/b/bd/Minnowboard_Turbot_X205_Sch.pdf) (PDF)
-   [X205 Bill of Materials](http://wiki.minnowboard.org/images/8/85/Minnowboard_Turbot_X205_BOM.zip)
-   [X205 Schematic and F200 Layout Design Source](http://wiki.minnowboard.org/images/5/5a/Minnowboard_Turbot_F200_X205_VX_Release.zip) (Mentor Graphics Xpedition Enterprise VX)
-   [F200 Gerbers](http://wiki.minnowboard.org/images/a/af/Minnowboard_Turbot_F200_Gerber.zip)
-   [F200 3D Model](http://wiki.minnowboard.org/images/4/42/Minnowboard_Turbot_F200_3D.pdf) (Interactive PDF)
-   [F200 3D Model](http://wiki.minnowboard.org/images/e/ec/Turbot_F200_Board_STEP.zip) (STEP File)
-   [F200 STEP Library](http://wiki.minnowboard.org/images/9/9e/Turbot_F200_STEPLibrary.zip) (STEP File)

*This page is licensed under CC-BY-SA 3.0 and may have portions derived from other CC-BY-SA 3.0 content. See [Attributions page](attributions).