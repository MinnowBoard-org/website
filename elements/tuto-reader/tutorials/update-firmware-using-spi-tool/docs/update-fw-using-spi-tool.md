## Update Turbot Firmware via SPI Flash Programmer

The tutorial will update the firmware using SPI Flash Tool (DediProg SF100). You can use the tool to flash firmware on multiple hardware, which this method is especially useful for. (This tutorial is based on Windows 8.1.) 

### General process

1. Download the firmware you want to flash
2. Use your SPI flash tool
3. Set the below critical information correctly on the tool to successfully flash firmware on your board: 
    1. Size of flash: 8 Mb{n}
    1. Block address to flash: from 0x000000 to 0x7FFFFF{n}
    1. Memory type: W25Q64{n}
    1. Programmer connect to [J1](https://www.minnowboard.org/board-viewer){n}
    
### Components

To complete these steps you will need the following:

- [DediProg SF100 ISP IC Programmer](http://www.dediprog.com/pd/spi-flash-solution/sf100)

   ![image](elements/tuto-reader/tutorials/update-firmware-using-spi-tool/docs/IMAGE 1)
   
- [DediProg software](http://www.dediprog.com/download?u=42&l=SF100+ISP+IC+Programmer)
- USB Type A Male to Type A Female cable for your programmer (optional)


### Flashing steps using DediProg SF100

1. Download the firmware update zip file package to your host computer from the [MinnowBoard MAX firmware website](https://firmware.intel.com/projects/minnowboard-max). Refer to previous [Update the firmware tutorial](/updating_your_firmware) for details.
2. Unzip the archive on your host computer. 
3. Download DediProg software and USB Driver (see image below) on [the Dediprog site](http://www.dediprog.com/download?u=42&l=SF100+ISP+IC+Programmer) and Install DediProg software and USB Driver. **Note:** At the time of writing this tutorial, the latest version of DediProg software is 6.0.5.17.

![image](elements/tuto-reader/tutorials/update-firmware-using-spi-tool/docs/IMAGE 2)

4. Connect SF100 ISP IC Programmer tool to your host computer.
5. Install the USB Driver that you downloaded from DediProg site. You should see the green LED light up on the SF100 tool.

![image](elements/tuto-reader/tutorials/update-firmware-using-spi-tool/docs/IMAGE 3)

6. Connect SPI cable to J1 connector on MinnowBoard as shown below. **Note:** The red line on the cable is aligned with white dot marked on the board designating pin1.

![image](elements/tuto-reader/tutorials/update-firmware-using-spi-tool/docs/IMAGE 4)
![image](elements/tuto-reader/tutorials/update-firmware-using-spi-tool/docs/IMAGE 5)
![image](elements/tuto-reader/tutorials/update-firmware-using-spi-tool/docs/IMAGE 6)

7. Start DediProg software application. You will see a "Memory Type Ambiguity" popup. Select W25Q64 and press OK.

![image](elements/tuto-reader/tutorials/update-firmware-using-spi-tool/docs/IMAGE 7)

8. Open up the Advanced Settings dialog box by pressing Config button on the top of screen. 

![image](elements/tuto-reader/tutorials/update-firmware-using-spi-tool/docs/IMAGE 8)

9. The firmware binary file to be flashed is 8MB. Make sure the flashing option is configured to flash the full size onto your board. Verify that ‘Download a whole file to chip option’ is selected.

![image](elements/tuto-reader/tutorials/update-firmware-using-spi-tool/docs/IMAGE 9)

10. Press File button on the top of the screen to load binary file to flash on the board.

![image](elements/tuto-reader/tutorials/update-firmware-using-spi-tool/docs/IMAGE 10)
![image](elements/tuto-reader/tutorials/update-firmware-using-spi-tool/docs/IMAGE 11)

11. Now it’s time to start flashing firmware binary on the board. Press the black Start button on the SF100 ISP IC Programmer tool. **Note:** During flash, the orange Busy LED will light up on the SF100 ISP IC Programmer tool.

![image](elements/tuto-reader/tutorials/update-firmware-using-spi-tool/docs/IMAGE 12)
![image](elements/tuto-reader/tutorials/update-firmware-using-spi-tool/docs/IMAGE 13)
![image](elements/tuto-reader/tutorials/update-firmware-using-spi-tool/docs/IMAGE 14)

12. Once flashing is completed, the green Pass LED will light up. Unplug the SPI cable from the board and replace it with the next hardware you need to flash the firmware binary on. Repeat step 11 above for each hardware.

