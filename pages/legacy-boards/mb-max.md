The Real-Time clock may not function correctly (when a battery is added) because resistor R278 (back side of the board) may be missing. Adding a 1K or 2K resistor should resolve this.

#### USB

There is a potential issue when using a powered USB hub that (erroneously) provides power over the USB 3 or USB 2 input connector. This is in violation of the USB spec. If such a powered USB hub is used, the MinnowBoard MAX will use that as power; this will be rectified in a future revision of the MinnowBoard MAX.

Hubs known to cause this:

- iXCC 7 Port USB 3.0 Hub
- [Amazon Link](http://www.amazon.com/iXCC-Firmware-backwards-compatibility-External/dp/B00GLJIPK6/ref=sr_1_2?ie=UTF8&qid=1403830109&sr=8-2&keywords=ixcc+usb3+powered+hub)
- [iXCC Website](http://ixcc.com/)

We recommend you check your powered USB hub to confirm that it does not provide power back to the board, as described. If you have a hub that is doing this, please report it here and either stop using it, or use it with its external power turned off.

**NOTE:** This is not an indication that hubs do not work, or that USB does not work. This is merely an indication that some powered hubs violate the USB spec, and there is a flaw (a diode should be added) in the MinnowBoard MAX design.

Another issue might appear if a wireless USB dongle operating at 2.4 GHz (e.g., a wireless receiver for input devices) is connected to the USB2.0 port together with an USB3.0 device attached to the USB3.0 host connector. In this case the device connected to the USB dongle can become unresponsive due to radio frequency interference form the USB3.0 connection. A solution is to use an extension cable or hub to move the the dongle further away from the board. 

**NOTE:** This interference problem seems to be a general USB3.0 issue. Information on this can be found at [Intel.com](http://www.intel.com/content/www/us/en/io/universal-serial-bus/usb3-frequency-interference-paper.html).

#### UART dies with "Too much work for irq"

This is [bug 6280](https://bugzilla.yoctoproject.org/show_bug.cgi?id=6280). A temporary fix is to set the receive trigger on the UART to 1 byte. This can be done through the sysfs interface as follows:

	```
	echo 1 > /sys/class/tty/ttyS0/rx_trig_bytes
	```

This can be applied on startup through init scripts, and since it only affects the receive side it should not affect boot times.
