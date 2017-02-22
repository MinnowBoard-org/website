## MinnowBoard MAX 

MinnowBoard MAX is the second generation MinnowBoard (released in July 2014), updating and replacing the original MinnowBoard. The MinnowBoard MAX board has an upgraded 64-bit Intel® Atom™; E3800 (Bay Trail-I) processor with better graphics and revised I/O, shrinks the footprint by more than half, supports additional operating systems (Linux*, Android*, and Windows*) and significantly improves on the original board on price, performance, and energy consumption.

### Technical Specifications

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

#### LSE Layout

The Linux GPIO base address changed (by adding 256) from Linux kernel versions 3.17 to 3.18, so you'll need to know which kernel version you're using to select the correct GPIO numbers. This table lists the GPIO number for both the 3.17 and earlier kernels, and 3.18 and later kernels, for each pin on the connector:

![MinnowBoard MAX LSE Layout](pages/legacy-boards/minnowboard-max/lse-layout.png)

