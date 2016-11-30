## Power up the MinnowBoard Turbot

This is where it all begins! This tutorial will walk you through the steps to 
power up your new MinnowBoard Turbot.

### Components 

To get started, you will need 
these necessary hardware components (see [Get a board](get-a-board) for recommendations):

- MinnowBoard Turbot Board
- 5V 2.5A Power Supply
- HDMI cable (HDMI micro male to HDMI male, or whatever your monitor requires)
- 1920x1080 or larger monitor with an HDMI port (or HDMI adapter)
- USB keyboard 
 

### Connect your MinnowBoard Turbot

1.  **Connect a monitor**  
    Connect the monitor cable (HDMI-micro male to HDMI male) to a 1920x1080 or 
    larger monitor and to the MinnowBoard Turbot.
1.  **Connect a keyboard**  
    Connect a USB keyboard to the MinnowBoard Turbot USB 2.0 connector (top USB port).
1.  **Connect power**  
    Connect the power cable to the MinnowBoard Turbot but don't plug it into
    the wall outlet quite yet.  Your setup should look like this:

    ![image](elements/tuto-reader/tutorials/powering-on-minnowboardturbot/docs/MB-Turbot-poweron-900px.png)
    
    All set?  Then plug the power supply into the wall outlet and power up the 
    board.  There are two LEDs on the board that give you information about
    the board's power:  D1 (on the left) is on when the board has power connected
    and D2 (on the right) is on when the CPU has power.  If you do an OS shutdown
    and power off for example, D1 will be on but D2 will be off (indicating the
    board has power applied, but the CPU has been turned off.)
    
    ![image](elements/tuto-reader/tutorials/powering-on-minnowboardturbot/docs/MB-Turbot-power-on.png) 
    
    If you plug in the board and the D2 LED blinks, that can mean accessories
    connected to your Turbot board are drawing too much power: the SoC tries to
    boot, draws too much power, and resets. Disconnect any extra accessories
    such as USB devices other than a keyboard or memory stick and try powering
    on again.  If the D2 light does not come on at all, this can mean the board
    has been damaged by using a power supply greater than 5V. {bg-warning}

1.  **Interact with the UEFI shell**  
    When the MinnowBoard Turbot is first powered on, it will do a quick memory 
    check and then start running the on-board firmware for the
    [UEFI shell](https://software.intel.com/en-us/articles/uefi-shell). (For now
    let's ignore options for pressing a F2, DEL, or ESC key.)
    The UEFI shell is a firmware program that lets you examine
    and configure the board, move files between connected devices (like a USB
    memory stick and SD memory card), set the system date and time, and more.  

    With just your power, monitor, and keyboard connected, you'll see the following:
    
    ``` console
    UEFI Interactive Shell v2.1
    EDK II
    UEFI v2.50 (EDK II, 0x00010000)
    Error. No mapping found
    Press ESC in 1 seconds to skip startup.nsh or any other key to continue.
    Shell>
    ```
    
    The "Error. No mapping found" message simply indicates there is no filesystem 
    storage device found, which makes sense because there's nothing plugged in 
    the USB or microSD card slot.
    
    At this shell prompt, you can interact with the board.  Let's check on the
    system date using the `date` command:
    
    ``` console
    Shell> date
    09/10/2015
    Shell>
    ```
   
    As you can see, the board doesn't know what the date really is, (it's showing
    you the date the firmware was built). You may see a different date depending
    on which firmware version you're running. You can set the correct date on the
    board using the `date` command: 
    
    ``` console
    Shell> date 8/9/2016
    Shell> date 
    08/09/2016
    Shell>
    ```
    
    You can also set the time by using the `time` shell command (using a 24-hour
    clock).  Give it a try yourself by entering: `time 16:36` for 4:36 PM (use your 
    current local time), and then check
    the time by entering: `time`.  
    
    If you install a battery on the MinnowBoard
    Turbot, it will remember the date and time while the board is turned off so
    you won't have to set the date and time when you power up the board. {bg-info}
{steps-list}

At this point you've got the MinnowBoard Turbot powered up and you can explore 
the board using the UEFI shell.  The `help -b` command will display all the
UEFI shell commands.  You can learn more about the UEFI shell and its commands 
on the [MinnowBoard Wiki](http://wiki.minnowboard.org/UEFI) and at 
[https://software.intel.com/en-us/articles/uefi-shell](https://software.intel.com/en-us/articles/uefi-shell).  

If you enter `exit` to the UEFI shell, you'll be taken to the UEFI boot menu where
you can explore and set board configuration options, including boot order, something
we'll use in the next step.

##### Try this tutorial next: 
[Install Ubuntu 16.04](tutorials/installing-ubuntu-16.04-on-minnowboardmax)
***
Despite its small size, the MinnowBoard Turbot can run desktop PC versions of
operating systems such as Linux* and Windows*. This tutorial explains how to
install a popular Linux release, Ubuntu 16.0.

*This page is licensed under CC-BY-SA 3.0 and may have portions derived from other CC-BY-SA 3.0 content. See [Attributions page](attributions).
