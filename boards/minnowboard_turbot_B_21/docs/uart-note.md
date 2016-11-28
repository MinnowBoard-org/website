# UART dies with "Too much work for irq"

This is [bug 6280](https://bugzilla.yoctoproject.org/show_bug.cgi?id=6280). A temporary fix is 
to set the receive trigger on the UART to 1 byte. This can be done through the sysfs interface 
as follows:

```
echo 1 > /sys/class/tty/ttyS0/rx_trig_bytes
``` 

This can be applied on startup through init scripts, and since it only affects the receive side 
it should not affect boot times.
