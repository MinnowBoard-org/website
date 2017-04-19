## Update Turbot Firmware via SPI Flash Programmer

Update the firmware using SPI Flash Tool (Dediprog SF100) for multiple HW. (This tutorial is based on Windows 8.1.)

You can use SPI Flash Tool, SF100, to flash Firmware on multiple hardware, which this method is especially useful for.

### General process

1. Download the firmware you want to flash
2. Use your SPI flash tool
3. Set the below critical information correctly on the tool to successfully flash firmware on your board: 
    1. Size of flash: 8 Mb{n}
    1. Block address to flash: from 0x000000 to 0x7FFFFF{n}
    1. Memory type: W25Q64{n}
    1. Programmer connect to [J1](https://www.minnowboard.org/board-viewer){n}
    
    
## Flashing steps using DediProg SF100



