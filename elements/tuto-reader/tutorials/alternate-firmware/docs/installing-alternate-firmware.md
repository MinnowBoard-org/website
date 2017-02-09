## Installing Alternate Firmware: Coreboot, WinZent, and U-Boot

This tutorial provides instructions for installing alternate firmware 
on your MinnowBoard MAX or Turbot: Coreboot, WinZent, and U-Boot. 

### Coreboot
Coreboot (formerly known as LinuxBIOS) is a free and open source extended firmware 
platform that delivers a fast and secure boot experience for embedded systems as an 
alternative option to using proprietary BIOS firmware. In contrast to a conventional 
BIOS, Coreboot initializes only the minimum required hardware (such as RAM, PCI, 
serial) and then executes additional payload boot logic for the rest. This two-stage 
approach helps achieve minimal boot times and a small footprint.

With the separation of hardware initialization and later boot logic, Coreboot can do 
the following: 

- Scale from specialized applications that run directly from firmware 
- Run operating systems in flash 
- Load custom boot-loaders 
- Implement firmware standards such as PC BIOS services or UEFI 

By permitting systems the ability to include only the features necessary to run the 
target application, code and flash space required are reduced. For further information, 
refer to the [Coreboot website]( http://www.coreboot.org).

The status on Coreboot's [Supported Motherboards](http://www.coreboot.org/Supported_Motherboards) 
page indicates an unknown status for MinnowBoard boards; however, mainline coreboot 
support for MinnowBoard boards (by Sage Electronic Engineering) does exist, as shown 
on [review.coreboot.org](http://review.coreboot.org/gitweb?p=coreboot.git). Coreboot 
supports booting from Serial ATA and USB 2.0/3.0. Booting from SD storage isn't working, 
and S3 suspend/resume support isn't working either. 

Below is a step-by-step guide to building coreboot for the Minnowboard MAX and Turbot.

#### Install the dependencies

  ``` 
  $ sudo apt-get install gcc git make ncurses-dev flex bison
  ```

#### Get Coreboot 
For simplicity, put all downloads and items extracted into the same directory.

  ```
 	$ git clone http://review.coreboot.org/p/coreboot
 	$ cd coreboot
 	$ git submodule update --init --checkout
 	$ git checkout b9a0809faeeef67e46cda17cf8f7a839c6fe614c
 	$ wget https://minnowboard.org/tutorials/alternate-firmware/docs/Minnowboard_Max_Coreboot_config.txt
  ```

#### Get Intel® Firmware Support Package (Intel® FSP)
1. Download either a Windows or Linux version, depending on the needs of your system:
    1. [Windows](http://www.intel.com/content/www/us/en/embedded/software/fsp/atom-e3800-fsp-g3-windows-download.html){n}
    1. [Linux](http://www.intel.com/content/www/us/en/embedded/software/fsp/atom-e3800-fsp-g3-linux-download.html){n}
    1. Archive [Intel® FSP for Intel® Atom™ Processor E3800 Series](http://downloadcenter.intel.com/download/24496){n}
2. To extract from archive, follow the instructions in the Readme_Extract.

#### Get Intel® Binary Configuration Tool (Intel® BCT) 
1. Download either a Windows or Linux version, depending on the needs of your system: 
    1. [Windows](https://edc.intel.com/Link.aspx?id=10034){n}
    1. [Linux 32-bit](https://edc.intel.com/Link.aspx?id=10033){n}  
    1. [Linux 64-bit](https://edc.intel.com/Link.aspx?id=10032){n}

#### Setup Firmware Support Package
1. See [this guide](http://www.intel.com/content/www/us/en/embedded/products/bay-trail/atom-e3800-minnowboard-max-platform-guide.html) for the most current info. The following is from an older version previously tested to work. 

  ```
  $ cd bct
  $ ./bct --bin ../BAY_TRAIL_FSP_KIT/FSP/BAYTRAIL_FSP_GOLD_002_10-JANUARY-2014.fd  \
  --absf ../coreboot/src/vendorcode/intel/fsp/baytrail/absf/minnowmax_2gb.absf \
  --bout ../minnowboard-max.fsp
  ```

2. If you have a single core MinnowBoard MAX, change `minnowmax_2gb.absf` to `minnowmax_1gb.absf.` 
  It's not necessary to use the GUI; it does not work on every kind of Linux distro.

  ```
 	$ cd ..
  ```
  
#### Setup TXE and SPI descriptor 
1. First build a coreboot utility called ifdtool to be located within the coreboot directory:

  ```
  $ cd coreboot/util/ifdtool
  $ make
  $ cd ../../../
  ```

2. Accept the license and download the original [firmware binary]( https://firmware.intel.com/projects/minnowboard-max):

  ```
  $ mkdir MB_UEFI_Firmware
  $ unzip MB_UEFI_Firmware_v1.00.zip -d MB_UEFI_Firmware
  $ cd MB_UEFI_Firmware
  ```

3. Run “ifdtool” to extract the TXE and SPI descriptor from the firmware image:

  ```
  $ ../coreboot/util/ifdtool/ifdtool -x MNW2MAX1.X64.[version].bin
  ```

4. You should now have 4 files starting with flashregion_ . Use a symbolic link 
  to link flashregion_0_flashdescriptor.bin to descriptor.bin:

  ```
  $ ln -s flashregion_0_flashdescriptor.bin descriptor.bin
  ```

5. And do the same thing to link flashregion_1_bios.bin to txe.bin:

  ```
  $ ln -s flashregion_1_bios.bin txe.bin
  ```

6. You can safely ignore the other two flashregion files, as they won't be used.

#### Setup Coreboot 

  ```
  $ cd coreboot
  ```

In `src/soc/intel/fsp_baytrail/Kconfig` line 127, change 'string' to 'string "ME PATH"'
`$ make menuconfig`and load provided config and save config to .config

- If you have a single core Minnowboard MAX, change "Mainboard" -> "Memory SKU to build" to 1GB
- Set "Chipset" -> "ME PATH" to the directory containing TXE and SPI descriptor(../maxfirmware)

#### Building 

  ```
  $ make crossgcc
  $ make
  ```

The firmware produced is `build/coreboot.rom`


#### Building without TXE/SPI descriptor 

  ```
 $ make menuconfig
  ```

1. Set Chipset -> Include the TXE to `No`

  ```
 $ make crossgcc
 $ make
  ```

2. When flashing the firmware, flash only the last 3MB of the 8 MB image onto the 
  last 3MB of the chip. Example command using flashrom and a dediprog: 

  ```
  $ echo 00500000:007fffff coreboot > regions.txt ; sudo flashrom -p dediprog -l regions.txt -i coreboot -w coreboot.rom
  ```

3. If you accidentally overwrite the first half, you will need to reflash the 
  original firmware; instructions can be found in [Updating the firmware](tutorials/updating_your_firmware).

--- 

### WinZent

To use WinZent’s firmware on your MinnowBoard MAX or Turbot, register on 
[WinZent’s website](http://winzenttech.com/). It boots in 0.56 seconds and reboots in 0.21 seconds.

--- 

### U-Boot

In February 2015, the [U-Boot mailing list](http://lists.denx.de/pipermail/u-boot/2015-February/204622.html) 
announced that support for the MinnowBoard MAX had landed in U-Boot mainline, noting that 
you *can run it both 'bare metal' and as a coreboot payload.*

Access the U-Boot git tree [README file](http://git.denx.de/?p=u-boot.git;a=blob;f=doc/README.x86) 
for information and build instructions. **Note:** This release applies to both the MinnowBoard MAX and Turbot. 


