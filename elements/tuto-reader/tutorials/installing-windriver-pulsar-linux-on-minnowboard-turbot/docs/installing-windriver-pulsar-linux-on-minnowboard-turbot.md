## Installing Wind River Pulsar Linux

Wind River Pulsar Linux* is the industry's leading commercial open source 
software platform for building embeded devices.  This tutorial will get you up 
and running on your MinnowBoard Turbot.

### What You’ll Need
To perform these steps you’ll need:

- MinnowBoard Turbot board
- 5V 2.5A Power Supply
- microSD card (8GB or larger, Class 10) 
or USB thumb drive (2GB or larger, USB3 preferred)
- micro-HDMI to HDMI cable and HDMI-capable monitor
- USB keyboard
- USB mouse 
- Optionally a USB hub if you're loading the OS onto a USB Flash Drive
- Ethernet cable and internet connection
- host computer 

You’ll be using your host computer (and not the MinnowBoard Turbot) for these 
first steps.

### Download Wind River&copy; Pulsar&trade; Linux OS Image
1. Open a Web browser and navigate to the following URL: 
[WindRiver Releases](https://distro.windriver.com/public_feeds/WindRiver-Pulsar-Linux-MinnowBoardMax-image/Releases/)
2. Select the **Release** link for your product version.
3. Download the compressed image file (*.img.zip).
4. Extract the contents of the compressed image to a directory.  The extracted 
image file is a bootable image of Pulsar Linux.


### Load Pulsar OS on SD-Card or USB Thumb Drive
1. Insert the SD-Card or Thmb Drive into your computer.
2. Determine the drive (Windows) or device node (Linux or Mac OS X) that the 
memory device is mapped to on your host system.

On Linux, you can run the dmesg command. For example:
```
dmesg
```

On Mac OS X, you can run the diskutil list command. For example:
```
sudo diskutil list
```

3. If your Linux host system automounted the memory device, detach its file 
system from the file hierarchy by running the umount command.

The following example detaches the /media/userName/boot file system from the 
file hierarchy on a host system running Ubuntu Linux:
```
umount /media/userName/boot
```

4. If you are using a Mac OS X host system, detach its file system from the file 
hierarchy by running the diskutil unmountDisk command.

The following example detaches the /dev/diskN file system from the file 
hierarchy:
```
sudo diskutil unmountDisk /dev/diskN
```
Your device node may be different. To determine what your device node is, refer 
to the output of the diskutil list command.

5. Copy the certified image (.img file) onto your SD-Card or Flash Drive.

On Windows, you can use the Win32 Disk Imager application or something similar.
On Linux and Mac OS X, you can use the dd command or something similar.

The following example copies the certified image from a Linux host system to the 
device node /dev/sdZ:
```
sudo dd if=/path_to/pulsar7-certifiedDevice.img of=/dev/sdZ bs=1M 
```
Your device node may be different. To determine what your device node is, refer 
to the output of the dmesg command.

The following example copies the certified image from a Mac OS X host system to 
the device node /dev/rdiskN:
```
sudo dd if=/path_to/pulsar7-certifiedDevice.img of=/dev/rdiskN bs=1m
```
Your device node may be different. To determine what your device node is, refer 
to the output of the diskutil list command.

6. Safely eject and remove the SD-Card or Flash Drive when the copy operation is 
completed.

### Setup Your MinnowBoard Turbot and Boot to WindRiver Pulsar
1. Connect a USB keyboard and USB mouse to the USB ports on the board.  
2. Connect an HDMI monitor to the microHDMI port on the board.
3. Plug in ethernet cable to your board.
4. Plug the Micro SD-Card into your board. It's inserted with the metal pins 
upwards.  If you're using a Flash Drive, use the bottom USB3 port on the Turbot.
5. Plug in the power adapter to power your board on.
6. Pulsar Linux boots up to the XFCE graphical desktop.
7. Log in to the Pulsar Linux system by using **root** as the user name and 
**incendia** as the password.


**Important:**

If your board will not boot from the SD-Card and you see a black screen, you 
will need to go into the Firmware options in the Boot Manager, select ‘EFI Misc 
Device’ and press 'ENTER'. This will force a reboot to the SD-Card. To 
permanently boot from the SD-Card, you can move it the to the top of the boot 
order in the firmware (Boot Maintenance Manager / Boot Options / Change Boot 
Order). See details on [how to do this here](tutorials/updating_your_firmware).

\* Other names and brands may be claimed as the property, copyright or trademark
of others.

\**This page is licensed under CC-BY-SA 3.0 and may have portions derived from other CC-BY-SA 3.0 content. See [Attributions page](attributions).