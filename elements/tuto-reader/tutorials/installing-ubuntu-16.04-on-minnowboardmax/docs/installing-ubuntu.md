## Installing Ubuntu 16.04.1 LTS

Despite its small size, the MinnowBoard Turbot can run desktop PC versions
of operating systems such as Linux* and Windows*. This tutorial explains
how to install a popular Linux release, Ubuntu 16.04.1 LTS. Once installed, you can
use regular Linux commands and programs to explore and develop applications 
using the MinnowBoard Turbot and connected devices.

The Turbot does not come with an OS pre-installed. It only takes a 
few steps to use your own computer to download an OS image, create a bootable USB 
thumb drive, and install that image on a microSD card on the MinnowBoard Turbot.

### Components

To complete these steps you will need the following:

- MinnowBoard board
- 5V 2.5A Power Supply
- USB thumb drive (GB or larger)
- microSD card (16GB Class 10 or larger)
- microHDMI to HDMI cable and HDMI-capable monitor
- USB keyboard
- Ethernet cable and internet connection
- optionally a USB mouse (and USB hub)
- host computer running Windows*, Linux*, or OS X

You'll be using your host computer (and not the MinnowBoard Turbot) for these 
first steps.

### Download Ubuntu 16.04.1 (LTS) Desktop image

Download an ISO image of [Ubuntu 16.04.1 LTS desktop](http://old-releases.ubuntu.com/releases/xenial/ubuntu-16.04-desktop-amd64.iso)
from the Ubuntu website.  This ISO image is in a special format used to create
a bootable image on the thumb drive (in the next step).  This is a large 
download (~ 1.5GB) and may take a while to download depending on your internet speed.

### Make a bootable USB drive
The step to create a bootable Ubuntu image on the USB drive is a bit different 
depending on the OS your host computer is running. While it's tempting to just
copy the image to the USB thumb drive, this won't create the needed boot image
structure on the USB thumb drive, so please follow one of these suggested steps:
- For Windows* users, we strongly recommend you follow these 
  [Create a USB Stick on Windows](http://www.ubuntu.com/download/desktop/create-a-usb-stick-on-windows) instructions. 
- For Ubuntu users, follow the 
  [Create a USB Stick on Ubuntu](http://www.ubuntu.com/download/desktop/create-a-usb-stick-on-ubuntu) 
  instructions.
- For Mac users, follow the 
  [Create a USB Stick on OS X](http://www.ubuntu.com/download/desktop/create-a-usb-stick-on-mac-osx) 
  instructions.

### Set up the MinnowBoard Turbot

Now you can proceed to set up the MinnowBoard Turbot.  As we did for powering up
the board, you'll need to:
1. Connect a microHDMI cable from the board to your monitor (and turn the monitor on)
1. Connect a USB keyboard to the top USB connector.  While not required, it's easier
   to install Ubuntu with a mouse, so you'd need to connect a USB hub to the top
   USB connector on the MinnowBoard Turbot, and then connect the keyboard and mouse
   into the hub.
1. Plug the Ethernet cable into your network port and into the MinnowBoard Turbot
   Ethernet jack
1. Connect the 5v power connector to the board, but not into the wall outlet just yet
1. Plug the USB thumb drive with the Ubuntu image you just created into the bottom USB connector.
1. Plug the microSD card into the microSD card slot (insert the microSD card with
   the connectors up)

   Things should now look like this:

   ![image](elements/tuto-reader/tutorials/installing-ubuntu-16.04-on-minnowboardmax/docs/MinnowBoard-Turbot-KB-USB-power-Network-HDMI.png)

### Boot the board from the USB thumb drive
Now that the board is set up, we're ready to turn it on and start the boot and
OS installation. 

1.  Plug the 5V power supply into an outlet.
1.  The MinnowBoard Turbot will power on.  Quickly press F2 on your keyboard to
    get to the UEFI menu.  If you missed it and end up with a screen looking
    like this:

    ![image](elements/tuto-reader/tutorials/installing-ubuntu-16.04-on-minnowboardmax/docs/MB-boot-w-cards.png)
    
    type in `exit` and press return and you'll end up at the UEFI menu:

    ![image](elements/tuto-reader/tutorials/installing-ubuntu-16.04-on-minnowboardmax/docs/MB-bootManager.png)
    
1.  Press the down arrow to highlight the `Boot Manager` option and press enter
    to get to the Boot Options screen:

    ![image](elements/tuto-reader/tutorials/installing-ubuntu-16.04-on-minnowboardmax/docs/MB-bootOptions.png)
    
1.  Press the down arrow to highlight the `EFI USB Device` option (that's the USB
    thumb drive with the Ubuntu ISO boot image on it), and press enter.  This will
    kick off the booting process starting with a GNU GRUB (GRand Unified Bootloader) 
    option screen:

    ![image](elements/tuto-reader/tutorials/installing-ubuntu-16.04-on-minnowboardmax/docs/MBgrub.jpg)
   
    Press the down arrow key to highlight `Install Ubuntu` and press enter to start 
    the Ubuntu installer.
1.  After a few seconds, you'll see the Ubuntu logo with some progress indicator
    dots, followed by the Ubuntu installer graphical interface.  If you have a mouse
    connected you can click on the options and buttons.  If you just have a keyboard
    connected, you'll need to use the arrow and tab keys to move through the choices
    and buttons (and press enter or spacebar to "click").
    
### Installation options

During Ubuntu's installation you will be prompted to make several decisions. 
If you're not using a mouse, you'll see the buttons or fields highlighted
as you press the tab key to move around. 

Installation is straightforward, 
but let's walk through the steps for your reference.

For installation, select the following:

**Screen 1: Welcome**
- Select English (or your preferred language) and then Continue

**Screen 2: Preparing to install Ubuntu**
- Verify **Download updates...** and **Install third-party software...** are
  **not** selected, then Continue  (checking these options on adds a lot of
  time to the installation process and is something you can do later)

**Screen 3: Installation type**
-  Select **Erase disk and install Ubuntu**, then **Install Now**
-  Write the changes to disks? (verify the disk is the MMC/SD card), then Continue

**Screen 4: Where are you?**
-  Select **Los Angeles Time** for the US Pacific time zone, for example: 
   if you only have a keyboard connected,
   use the tab key to highlight the field (if it's not already selected) 
   and start typing the name and press enter when a match shows up
-  Select your location, then Continue

**Screen 5: Keyboard layout**
-  Select **English (US)** (or your local language keyboard) then Continue

**Screen 6: Who are you?**
-  Enter your name, computer name, username, and password (when you start
   typing your name, the installer will provide suggestions for the other
   fields that you can use (or change as you'd like).
-  Select **Log in automatically**, do not select **Encrypt my home folder**, 
   then Continue

And with that, the installation will proceed on its own, copying files from the
image on the USB thumb drive onto the microSD card that will be your storage
device on the MinnowBoard Turbot. (This will take about 30 minutes to complete
and you'll see a progress bar as it's working.)  

You can also install the OS onto a real SATA hard drive or SSD drive instead of 
using a microSD card, but we'll save that for a future tutorial example.

### After the automated installation completes

The installation program installed and configured the base Ubuntu Desktop 
onto the MinnowBoard Turbot.

1.  When it is finished, select **Restart Now.** It will take several seconds to reboot.
2.  The MinnowBoard Turbot should boot from the microSD card this time, and bring up the 
    Ubuntu desktop. (Because you selected **Log in automatically** during the 
    setup, you won't be asked for a login or password.)
3.  You can remove the USB thumb drive now.
4.  If the system
    is idle long enough, the screen locker may kick-in and you'll be asked for
    the password you specified to unlock the system.  You can disable this in
    the Ubuntu Security and Privacy settings (uncheck "Waking from suspend" and 
    "Returning from blank screen")

At this point, you can use the MinnowBoard Turbot as you would a desktop PC.  
Explore the Ubuntu interface, check out the installed programs and file system, 
open a shell prompt (terminal) and play with the linux command-line shell, and more.

### Update the installed Ubuntu software

Security and software updates are frequently made available, and it's a good idea (as you 
would with your PC) to keep your software up-to-date.  While your Ubuntu system
is running and connected to the network, it will occasionally check for updates
and let you know to install them.  But you may not keep your MinnowBoard Turbot
on all the time as you would for a desktop PC, so we can also ask the system
to update manually.

You can update the system to have the latest software 
and security patches via the command line (you'll need to have the network 
connection working on the MinnowBoard Turbot for this step):

1.  Navigate the user interface to launch the `terminal` program by pressing **ALT-F1**.
2.  Press **ENTER** to start the "Search your computer" application.
3.  Type "terminal" and press enter to launch the `terminal` application.
4.  Once the terminal is launched, update the operating system by using 
    these commands (running `sudo` may ask you for your password):

    ``` bash
    sudo apt-get -y update
    sudo apt-get -y dist-upgrade
    ```
    
    This first update and upgrade can take a long time (even an hour or two) depending
    on your network speed and the number of software upgrades that need to be
    installed.  Subsequent upgrades will typically have fewer files to download
    and install and be much faster.
    
6.  You should now reboot to ensure you are running with all the latest software: 
    by running the command `sudo reboot` (running `sudo` may ask you for your 
    password)

With that, you've got an updated Ubuntu installation ready to go. 

### Try this tutorial next: 
[Blinking the Turbot D2 LED](tutorials/Turbot-blink)
***
Here's a quick tutorial that will let you blink the Turbot D2 LED.
