## Making a USB serial port connection

You can interact with a MinnowBoard Turbot through a serial connection to your
host computer.  This tutorial shows you how.

A serial connection to your MinnowBoard Turbot can be used to work with a headless board 
configuration (without a keyboard and monitor) or as a debugging aid even if 
your board has a keyboard and monitor. Note that a serial port connection only 
works with text-based input and output and cannot support graphical user 
interface capabilities such as a mouse. 

### Components

To complete these steps you will need the following:

- MinnowBoard MAX or Turbot
- 3.3v FTDI serial to USB cable (with 6-pin or 4-pin connector) - only pins
  1, 4, and 5 are used
- Terminal emulation software on your host computer

### Connecting the FTDI serial cable

The FTDI cable connects to the MinnowBoard Turbot J4 connector and to an available
USB port on your host computer.  Note that Pin 1 is indicated on the MinnowBoard
Turbot and on the FTDI cable connector with a triangle. 

![FTDI serial connection to MinnowBoard Turbot](elements/tuto-reader/tutorials/ftdi-serial-connection/docs/MinnowBoard-Turbot-FTDI.png)

### Configuring Your Host Computer

After connecting the FTDI cable to your MinnowBoard Turbot and your host computer, 
power on the Turbot.  On Windows systems, an automatic install of a device
driver normally happens. If the FTDI serial port isn't recognized as a new
device on your host computer, you'll need to manually install a virtual COM 
port (VCP) driver.

#### FTDI Drivers

Virtual COM port (VCP) drivers are available from the 
[FTDI VCP Drivers download page](http://www.ftdichip.com/Drivers/VCP.htm) for
Windows, Linux, and Mac OS X.  Follow the instructions on that page to locate
the proper driver for your OS.  [Installation guides](http://www.ftdichip.com/Support/Documents/InstallGuides.htm)
are also available.


On a Windows host, after installing the FTDI drivers, you'll see a new USB 
serial port COM port show up in Device Manager list when the FTDI cable is 
connected and your MinnowBoard Turbot is running:

![FTDI COM port](elements/tuto-reader/tutorials/ftdi-serial-connection/docs/device-manager-COMport.png)

On a Linux host, you can use `dmesg | grep FTDI` to see what COM port was 
assigned to the connected board.  You should see something like this 
(indicating, in this case, `/dev/ttyUSB0` was assigned):

``` console
$ dmesg | grep FTDI
[10170.987708] USB Serial support registered for FTDI USB Serial Device
[10170.987915] ftdi_sio 9-1:1.0: FTDI USB Serial Device converter detected
[10170.991172] usb 9-1: FTDI USB Serial Device converter now attached to ttyUSB0
[10170.991219] ftdi_sio: v1.6.0:USB FTDI Serial Converters Driver
```

#### Terminal emulation software

The terminal emulation software running on your host computer communicates with
the MinnowBoard Turbot over a virtual COM port (assigned by the OS) via the FTDI
serial cable.

Suggested terminal emulation programs include:  
* For Windows: [Tera Term](https://osdn.net/projects/ttssh2/releases/) or 
  [PuTTY](http://www.putty.org/) 
* For Linux: `screen` or `minicom` are likely already installed as part of your
  Linux system, and puTTY can be installed with: `sudo apt-get install putty` 
* For Mac OS X: `iTerm` is included in the OS distribution and free alternatives
  such as [iTerm2](http://www.iterm2.com) are also available.

Follow your terminal emulation software instructions to configure it
with baud rate: 115200, Hardware flow control: No, Bits: 8, and Stop: 1 and 
make a connection with the COM port listed in device manager for Windows (e.g., 
COM4 in the example above) or `dmesg` on Linux to see which serial
port was assigned (e.g., `/dev/ttyUSB0`).

On a Linux host, you can connect to the MinnowBoard Turbot using, for example:

``` bash
sudo screen /dev/ttyUSB0 115200
```

### Making the connection

Once you have the FTDI cable connected and are running the terminal emulation
software configured to talk over the cable, when you reboot the MinnowBoard
Turbot you'll see the same UEFI BIOS screens on your connected HTMI monitor and on
the terminal emulation window on your host computer.  Once the system switches
to a graphics mode (such as booting a Linux GUI), output to the serial port will
stop until some application running on the MinnowBoard Turbot writes to the serial port.

If you're running linux on your Turbot, you can output messages to the 
serial port for example, by using shell commands on your board (as root):

``` bash
stty -F /dev/ttyS0 speed 115200
echo Hello from my MinnowBoard Turbot > /dev/ttyS0
```

You can also read text input from the terminal.  Here's an example using shell
commands running (as root) on your MinnowBoard Turbot:

``` bash
cat /dev/ttyS0
```

As you type in the terminal window on your host computer each line is sent and 
will display on your MinnowBoard Turbot's monitor when you press the Enter key.  Use a 
CNTL-D to indicate you're done entering input.

While we're using shell commands to demonstrate how to communicate, your 
application running on the board can also read and write to the serial 
connection as an input/output device.

You can also configure Linux running on the MinnowBoard Turbot to allow a root user to 
login via a connected serial console. Check out the Ubuntu 
documentation [SerialConsoleHowto](https://help.ubuntu.com/community/SerialConsoleHowto)
to see how.

*This page is licensed under CC-BY-SA 3.0 and may have portions derived from other CC-BY-SA 3.0 content. See [Attributions page](attributions).
