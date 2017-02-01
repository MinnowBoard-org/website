## Installing Windows 10

This tutorial shows you how to install Windows 10 full desktop version on your MinnowBoard board.  

**Note:** This install process will not immediately need a purchased serial key, but you'll eventually need one to continue using the OS. Also, Windows 10 will NOT install on an SD card or USB flash drive. Per their requirement, it will only install onto a hard drive. 

### Components
- [Silverjaw expansion SATA lure](get-a-board) with M-SATA hard drive or external SATA hard drive. **Note:** This tutorial shows a path using the Silverjaw expansion board (lure) with an m-SATA drive on it for installation. It can also be installed using the SATA expansion port with an external powered hard drive.
- 4GB+ USB Flash drive (Used to create bootable WIN installer; USB3 recommended for speed)
- USB Keyboard and mouse
- Ethernet cable and internet access
- Computer running Windows

### Create Windows 10 bootable USB drive
To install the OS, you will need to create a Windows 10 bootable USB drive using the Microsoft Creation Tool. This tool will download Windows 10 and create the installer for you. [Download the tool](https://www.microsoft.com/en-us/software-download/windows10/). This may take up to 30 minutes to complete. 

![image](elements/tuto-reader/tutorials/installing-windows-10-on-minnowboard/docs/Win-10-tool.png)

### Setup MinnowBoard board 
1. Plug in keyboard or USB hub with keyboard and mouse in top USB slot.  
2. Plug in bootable WIN 10 installer USB flash drive in the bottom USB slot. The bottom slot (blue) is the faster USB3 port.
3. Plug in ethernet cable.
4. Plug in micro HDMI cable to your board and monitor.
5. Make sure your SilverJaw lure or SATA drive is attached to your board.

### Boot to USB installer
1. Plug in your power to the board. This will begin the boot sequence.
2. If the board boots from the USB, go to the next section.
3. If the board boots to the board shell, you will need to tell your board to boot from the USB flash drive by doing the following: 
    a. Exit to the firmware{n} 
    b. Go to Boot Manager{n} 
    c. Highlight **'EFI USB Device'**{n} 
    d. Press **‘ENTER’**{n}  
    e. This will reboot the board from the USB flash drive. If you need further details on how to do this, see the [Update your firmware tutorial](tutorials/updating_your_firmware).{n}

### Install Windows to the m-SATA drive
1. When booting from the Windows installer USB flash drive, you will see the Windows logo.
2. Follow the on-screen instructions and install the version of Windows 10 that you would like to use. You should see your m-SATA drive listed as the only choice of where to install. This installation process can take up to 30 minutes. 
3. When installation is complete, the Windows installer will ask you to turn off your PC. Press the **‘POWER’** button on your board or unplug the power.
4. Remove the USB flash drive from the board.
5. Restart or power up the board with the USB keyboard and mouse attached.
6. Windows will now startup and need internet access to complete.

### Boot up and you're ready to go
1. Windows will now update using the internet ethernet connection. This may take more than two hours depending on your connection speed and how many updates are needed. 
2. Just like a desktop, it may require a reboot when complete.
3. Once the OS updates are completed, your board is now running Windows 10 and you can proceed with development.
