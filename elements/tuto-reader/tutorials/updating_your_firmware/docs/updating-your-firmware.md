##   Update the firmware

The MinnowBoard Turbot firmware is updated occasionally to make improvements or 
fix issues.  This tutorial explains how to check and update your board's firmware
to the latest release.

MinnowBoard Turbot boards enable two methods to update the firmware. The simple 
method for most people appears in the UEFI bootloader update tool detailed below.
The other option is direct firmware flashing via SPI Flash tool, detailed in this [tutorial](tutorials/update-firmware-using-spi-tool), 
which allows you to complete a full flash in 60 seconds, updating firmware on many 
boards quickly. This is also the method to recover a bricked device after failed 
UEFI firmware update tool. 

### The general process

1.  Find out which firmware version your MinnowBoard Turbot is running
2.  Find the latest version of the firmware available
3.  Update the firmware if needed

###  Components

To complete these steps you will need the following:

- MinnowBoard board
- USB thumb drive (2GB or larger), FAT32-formatted


###   Find out which firmware version your MinnowBoard Turbot is running

Enter the MinnowBoard Turbot UEFI boot option screen by following these steps:

1.  After the board has powered up, wait a few seconds for the message 
    **Start boot option** to appear at the bottom of the screen.
2.  Press **F2** or **DEL** (within 5 seconds) to enter the boot options screen. 
    (If you wait too long, you might end up entering the EFI shell 
    and be staring at a `Shell> ` prompt. If this happens, 
    enter `exit` and return, to get to the boot manager screen.
3.  At the top of the screen, the firmware bit support (e.g., X64) and 
    firmware version number (e.g., 0083) are displayed. You'll also see an **R** 
    for Release or **D** for Debug version for the firmware, followed by the 
    timestamp (YYMMDDHHMM) of the firmware build.

    ![image](elements/tuto-reader/tutorials/updating_your_firmware/docs/MB-FirmwareVersion.png)
    
    The MinnowBoard Turbot is MinnowBoard MAX compatible and uses the same firmware
    as the MinnowBoard MAX (hence the references to the MAX in the firmware).

###  Find the latest available version of the firmware

1. Go to Intel’s [MinnowBoard board firmware website](https://firmware.intel.com/projects/minnowboard-max). 
2. Check under the “Firmware Releases” heading for the newest firmware version.
3. If your firmware version number is lower than the newest version, 
    we recommend that you update the board's firmware.  

Our testing indicates that firmware version 0.95 has no critical issues for common 
uses for the MinnowBoard Turbot; additional firmware releases address issues 
found in the field and further testing.
   

###  Update the firmware

The MinnowBoard Turbot ships with 64-bit firmware support. UEFI requires the 
firmware and operating system loader (or kernel) be size-matched: a 64-bit UEFI 
firmware implementation can only load a 64-bit UEFI operating system boot 
loader or kernel. When updating the firmware, you may change the bit support 
if your application requires it.  (We recommend sticking with 64-bit support.)

To update the firmware of the MinnowBoard Turbot, complete the following steps:

1.  Download the firmware update zip file package to your host computer from the
    [MinnowBoard MAX firmware website](https://firmware.intel.com/projects/minnowboard-max)

    Choose the latest release version available for the bit 
    support size you need.  "Pre-built BIOS Firmware Binary images, 64-bit, 
    Release" is recommended.  There are three files in the .zip file (here's
    what's in the 0.92 Firmware zip file:
    - MinnowBoard.MAX.FirmwareUpdate.X64.efi (the EFI firmware update program)
    - MinnowBoard_MAX-Rel_0.92_BIN-ReleaseNotes.txt (release notes)
    - MNW2MAX1.X64.0092.R01.1605221712.bin (the firmware image)
2.  On your host computer, unzip the archive and copy the folder to a FAT32-formatted 
    USB thumb drive. (It's OK if there are other files on the thumb drive.)  
3.  Eject/Remove the USB thumb drive from the PC when the copy is done.
4.  Power off the MinnowBoard Turbot.  
5.  Insert the USB thumb drive into the bottom 
    USB port on your MinnowBoard Turbot and USB keyboard in the top port. 
    If you have a microSD card installed in the 
    MinnowBoard Turbot, we recommend you remove it for this update process.
6.  Power up the MinnowBoard Turbot.
7.  After a few seconds, you will see the UEFI shell and a map display of the 
    storage devices found. If your display looks like below, it means no 
    storage devices were found (for example, you didn't plug in the USB thumb 
    drive containing the firmware update file):

    ``` console
    UEFI Interactive Shell v2.1
    EDK II
    UEFI v2.40 (EDK II, 0x00010000)
    Error. No mapping found
    Press ESC in 1 seconds to skip startup.nsh or any other key to continue.
    Shell>
    ```
    
    Plug the USB thumb drive in now and turn the power to the board off and on. 
    
8.  If the USB thumb drive 
    is the only storage device plugged in (and it should be at this point), 
    then it will be device `fs0` and you'll see something like this displayed:

    ``` console
    UEFI Interactive Shell v2.1
    EDK II
    UEFI v2.40 (EDK II, 0x00010000)
    Mapping table
         FS0: Alias(s):HD7a0b:;BLK1:
              PciRoot(0x0)/Pci(0x14,0x0)/USB(0x0,0x0)/HD(1,GPT,1060B897-7EE0-435D-AE31-D894A4972E77,0x800,0xEE83DF)
         BLK0: Alias(s):
              PciRoot(0x0)/Pci(0x14,0x0)/USB(0x0,0x0)

    Press ESC in 1 seconds to skip startup.nsh or any other key to continue.
    Shell>
    ```
9.  At the prompt, enter the value for the USB thumb drive 
    
    ``` console
    Shell> fs0:
    ```

    **Note:** If you get an error saying 
    `'fs0' is not recognized as an internal or external command`, 
    check that you included the trailing colon when you typed `fs0:`

10. Navigate to the directory on the USB thumb drive that contains the firmware 
    update (where you did the unzip). Use the `ls` command to show the files
    in the current directory and the 'cd' command to change to that directory.
    Notice that the prompt changes to show you what directory you're in. 
    The UEFI shell supports using a **TAB** key for command- and file-completion 
    so you can enter `cd M` and a **TAB** instead of typing the whole directory 
    name:

    ``` console
    FS0:\> ls
    Directory of: FS0:\
    07/18/2016  11:45 <DIR>         4,096  MinnowBoard.MAX_.X64.92.R01
              0 File(s)           0 bytes
              1 Dir(s)
    FS0:\> cd MinnowBoard.MAX_.X64.92.R01
    FS0:\MinnowBoard.MAX_.X64.92.R01\> ls
    Directory of: FS0:\MinnowBoard.MAX_.X64.92.R01\
    07/18/2016  12:07 <DIR>         4,096  .
    07/18/2016  12:07 <DIR>             0  ..
    08/14/2014  19:54              23,040  MinnowBoard.MAX.FirmwareUpdateX64.efi
    05/27/2016  09:47               9,497  MinnowBoard_MAX-Rel_0.92_BIN-ReleaseNotes.txt
    05/26/2016  01:20           8,388,608  MNW2MAX1.X64.0092.R01.1605221712.bin
              3 File(s)   8,421,145 bytes
              2 Dir(s)
    FS0:\MinnowBoard.MAX_.X64.92.R01\>
    ```
 
11. Run the UEFI installer (the `.efi` program) and specify the firmware 
    image to load (the `.bin` file) -- don't forget about using the **TAB** key 
    (you can enter `Min` **TAB** ` MNW` **TAB** ):

    ``` console
    fs0:\> MinnowBoard.MAX.FirmwareUpdateX64.efi MNW2MAX1.X64.0092.R01.1605221712.bin
    Intel(R) UDK2014 Firmware Update Utility for the Intel(R) Server Board S1200V3RPS
    Version 0.97
    Copyright(c) Intel Corporation 2006 - 2014

    Reading file MNW2MAX1.X64.0092.R01.1605221712.bin

    Updating Firmware.  This may take a few minutes.
    ................................................................................
    ................................................................................
    ................................................................................
    ................................................................................
    ................................................................................
    ................................................................................
    ................................................................................
    ................................................................................
    .........................................................
    Update successful
    Shutdown system in 5 seconds ...
    ```
    
12. When the update is complete, the board shuts off.
13. Cycle power to the board and confirm that the firmware has been updated to 
    the new version number (as you did at the beginning of this tutorial).

###  Update Boot options

When you install an OS (such as Ubuntu), the installation procedure probably changed
the boot options so the OS would boot when the board was powered on.  When you 
update the MinnowBoard Turbot firmware, you'll also be resetting the boot options
back to the default firmware choice (the UEFI shell).  Here are the steps to
change the default boot option to booting into Ubuntu off the microSD card:

1. With the board powered off, plug in the microSD card with your Ubuntu installation,
   along with the USB keyboard, and HDMI monitor.
2. Power on the board and enter the UEFI boot menu (press **F2** or **DEL** during
   the initial memory check.
3. Use the arrow keys to select the `Boot Maintenance Manager` option and press enter.
4. Select `Boot Options` and press enter
5. Select `Add Boot Option` and press enter.
6. Select the `NO VOLUME LABEL` option (that's the microSD card) 
   and press enter
7. Select the lone choice `<EFI>` and press enter. Select `<ubuntu>` and press enter.
   Select `grubx64.efi` and press enter.
8. Press enter and use "Ubuntu" as the description, then use the arrow keys
   to select `Commit Changes and Exit` and press enter.  You'll return to the
   Boot Maintenance Manager screen.
9. Select `Boot Options` again and press enter.
10. Use the arrow keys to select the `Change the order` option (it will highlight
    the boot order choices.  Press enter to select them.
11. Use the arrow keys to select the `Ubuntu` boot option you just created,
    and use the **+** key repeatedly to move that selection to the top of the list 
    and press enter to make the change.
12. Press **F10** to save the changes, and **y** to confirm, and then **ESC** three
    times until you're back at the initial UEFI boot menu.
13. Press enter to `Continue` and Ubuntu will now boot (and will be set as the
    default boot configuration on future reboots of the board).  

**NOTE:** If this process fails for some reason like power interruption, and you are unable to 
flash using this process, your remedy is to use the spi flash tool linked [here](tutorials/update-firmware-using-spi-tool).


##### Try this tutorial next: 
[Blinking the Turbot D2 LED](tutorials/Turbot-blink)
***
Here's a quick tutorial that will let you blink the Turbot D2 LED.

*This page is licensed under CC-BY-SA 3.0 and may have portions derived from other CC-BY-SA 3.0 content. See [Attributions page](attributions).
