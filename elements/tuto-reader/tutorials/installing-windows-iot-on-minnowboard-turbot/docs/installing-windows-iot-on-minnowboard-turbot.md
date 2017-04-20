## Installing Windows IoT Core

Microsoft* has created a special IoT Core* version of Windows which lets you get up and 
running fast. You'll use Visual Studio to develop and create your next project.

These installation instructions were customized from [Windows IoT Dev site](https://developer.microsoft.com/en-us/windows/iot).
You can follow either set of instructions to get Windows IoT Core up and running
on your MinnowBoard Turbot.

### Components
To perform these steps you’ll need:

- MinnowBoard Turbot board
- 5V 2.5A Power Supply
- microSD card (8GB or larger, Class 10)
- USB SD card Adapter (needed to mount it on your Windows computer)
- microHDMI to HDMI cable and HDMI-capable monitor
- USB keyboard
- USB mouse
- Ethernet cable and internet connection
- Host computer running Windows

You’ll be using your host computer (and not the MinnowBoard Turbot) for these first steps.

### Get the Tools
1.  On your computer, make sure you are running the public release of Windows 10 
    (version 10.0.10240 or better). You can find your current build number by 
    clicking the start button, typing "winver", and hitting the Enter key.
1.  Download and install [Windows 10 IoT Core Dashboard here](http://go.microsoft.com/fwlink/?LinkID=708576).


### Setup Your MinnowBoard Turbot
1.  Connect a USB keyboard to one of the USB ports on the board. Connect an HDMI 
    monitor to the microHDMI port on the board. Connect a network cable to the 
    Ethernet port on the board. Make sure your development PC is on the same network.
1.  Update and change your firmware to 32 bit. The MinnowBoard Turbot ships with 
    64 bit firmware, but Windows IoT requires 32 bit. Follow the instructions 
    on our [firmware tutorial page](tutorials/updating_your_firmware).


### Use Dashboard to Download Windows IoT Core OS on SD card
1.  Open the Windows 10 IoT Core Dashboard you downloaded and installed from the 
    Get the tools page.
1.  Click "Set up a new device".
1.  Select **MinnowBoard Max** from the dropdown. Each board has its own specialized 
    image and this one will work for ALL MinnowBoard boards. See choices in 
    screenshot below.
1.  Make sure your microSD card is compliant. Plug it into your computer using a 
    USB card adapter. SD cards need to be at least 8GB in size. Slower and older 
    cards are inconsistent when flashing and may fail to work. Class 4 SD cards 
    are not supported and at a minimum Class 10 SD cards should be used.
1.  Enter device name and password. Wifi isn’t necessary since we will connect 
    via Ethernet.
1.  Choose a unique name for your device and a new Administrator password for the 
    device.  The login name will be ‘Administrator’ unless you change it.
1.  Download and install Windows 10 IoT Core to your SD card.

A window will pop up to show you the progress. This step can take several minutes 
depending on the speed of your SD card.

![image](elements/tuto-reader/tutorials/installing-windows-iot-on-minnowboard-turbot/docs/ms-dashboard.png)

### Boot Your MinnowBoard Turbot Running Windows IoT Core OS
1.  Plug the microSD card into your board. It's inserted with the metal pins upwards.
1.  We recommend that you plug in a USB keyboard and mouse to the board.
1.  Plug in the power adapter to power your board on.

**Important:**
First boot will take several minutes as the operating system does its initial 
installation. You should see the blue Windows logo on your monitor. If you have 
specified a different device name from default (minwinpc) it will cause a restart 
to happen automatically.

If your board will not boot from the SD card and you see a black screen, you will 
need to go into the Firmware options in the Boot Manager, select ‘EFI Misc Device’ 
and press 'ENTER'. This will force a reboot to the SD card. To permanently boot 
from the SD card, you can move it to the top of the boot order in the 
firmware (Boot Maintenance Manager / Boot Options / Change Boot Order). See details 
on [how to do this here](tutorials/updating_your_firmware).

### Next Steps
You should now see the Windows IoT Core desktop and have the ability to use Visual 
Studio to connect to and develop for your MinnowBoard Turbot.

Continue at Step 2 / Section 4 of their [Development instructions](https://developer.microsoft.com/en-us/windows/iot/Docs/GetStarted/mbm/sdcard/stable/getstartedstep2).

\*Other names and brands may be claimed as the property, copyright or trademark of others.


