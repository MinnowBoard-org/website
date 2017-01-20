This tutorial shows you how to install Windows 10 full desktop version on your Minnowboard.  This process will not immediately need a purchased serial key, but you eventually need one.

### Items needed:
- [Silverjaw Expansion SATA Lure](get-a-board) with M-SATA Harddrive or External SATA Harddrive
- 4GB+ USB Flash Thumb drive (Used to create bootable WIN installer. USB3 recommended for speed.)
- USB Keyboard and mouse
- Ethernet cable and internet access
- Computer running Windows


### Create Windows 10 bootable USB Drive
- In order to install the OS, you will need to create a Windows 10 bootable USB drive using the Microsoft Creation Tool.  This tool will download Windows 10 and create the installer for you.  Download the tool [HERE](https://www.microsoft.com/en-us/software-download/windows10/).  This takes up to 30 minutes in total to complete. 

INSERT PHOTO HERE

### Setup MinnowBoard Turbot. 
1. Plug in keyboard or USB hub with keyboard and mouse in top USB slot.  
2. Plug in bootable WIN 10 installer USB Flash Drive in the bottom USB slot.  The bottom slot (blue) is the faster USB3 port.
3. Plug in ethernet cable.
4. Plug in micro-HDMI cable to your Turbot and monitor.
5. Make sure your SilverJaw Lure or SATA drive is attached to your Turbot.

INSERT PHOTO HERE

### Boot to USB installer
1. Plug in your power to the Turbot.  This will begin the boot sequence.
2. If the board boots from the USB, go to the next step.
3. If the board boots to the board shell, you will need to tell your Turbot to boot from the USB Flash Drive.  To do this exit, to the Firmware, go to Boot Manager, highlight **'EFI USB Device'**, press **‘ENTER’**.  This will reboot the board from the USB Flash Drive.  If you need further details on how to do this, please see the Firmware Tutorial [HERE](tutorials/updating_your_firmware).

### Install Windows to the SATA Drive
1. When booting from the Windows Installer USB Flash Drive, you will see the Windows logo.
2. Follow on-screen instructions and install the version of Windows 10 that you would like to use.
3. This installation process can take up to 30 minutes.
4. When installation is complete, the Windows installer will ask you to turn off your PC.  Hit the **‘POWER’** button on your Turbot or unplug the power.
5. Remove the USB Flash Drive from the Turbot.
6. Restart or power up the Turbot with the USB keyboard and mouse attached.
7. Windows will now startup and need internet access to complete.

### Boot up and You're Ready to Go
1. Windows will now update using the internet ethernet connection.  This may take more than 2 hours depending on your connection speed and how many updates are needed.
2. Your MinnowBoard is now running Windows 10 and you can proceed with development.
