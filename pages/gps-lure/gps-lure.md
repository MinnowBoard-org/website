## GPS Lure

The GPS lure is perfect for developing a timing source for your network. 
With proper setup, this acts as a Stratum-1 NTP clock for your network. 
The GPS Lure plugs into the Low Speed Expansion (LSE) connector on top 
of MinnowBoard development boards. This lure is produced by [Smallworks](http://smallworks.com/) 
and is available to purchase from [Netgate](https://store.netgate.com/Lures/GPS.aspx). 

**Note:** Lures are owned and supported by their respective owners 
and manufactures. The community can only give you best effort support; 
issues should be taken to the respective manufacturers and designers.

![GPS Lure](pages/gps-lure/Minnowboard_GPSlure_Top.png)

### Features
- GPS mdodule: -165 dBm sensitivity, 10 Hz updates, 66 channels
- Internal patch antenna + U.FL connector for external active GPS antenna (not included)
- Labeling on board calling out each pin
- Built-in data logging
- PPS output on fix
- 20 mA current draw
- RoHS compliant

The board has an internal antenna, but we highly recommend an external 
antenna with U.FL connector in order to get the best possible signal 
from your unit. The best signal will be achieved when the antenna is 
positioned on a surface level with the horizon and a clear view of the sky. 

### GPS module overview

This MinnowBoard development board GPS Lure ultizes the MediaTek new generation GPS 
Chipset MT3339 to achieve the industry’s highest level of sensitivity (-165dBm ) 
and instant Time-to-First Fix (TTFF) with lowest power consumption for precise 
GPS signal processing to give the ultra-precise positioning under low receptive, 
high velocity conditions. This is a high quality GPS module that can track upto 
22 satellites on 66 channels, a built-in antenna or optional external connector, 
and has an excellent high sensitivity receiver (-165 dB tracking). It can handle 
upto 10 location updates a second for high speed, high sensitivity logging or tracking. 

The module a revision of POT (Patch On Top) GPS Module with an extra embedded function 
for external antenna I/O and comes with automatic antenna switching function and short 
circuit protection, also features a antenna system called “Antenna Advisor” that helps 
with the detections and notifications of different antenna statuses, including active 
antenna connection, antenna open circuit and antenna shortage.

Up to 12 multi-tone active interference canceller (ISSCC2011 award), customer can have
more flexibility in system design. Supports up to 210 PRN channels with 66 search channels 
and 22 simultaneous tracking channels, Module supports various location and navigation 
applications, including autonomous GPS,QZSS, SBAS(note) ranging (WAAS, EGNO, GAGAN, MSAS), AGPS.

The GPS Lure is excellent low power consumption characteristic (acquisition 82mW, 
tracking 66mW), power sensitive devices, especially portable applications, need not 
worry about operating time anymore and user can get more fun.

### GPS module technical details

- Satellites: 22 tracking, 66 searching
- Patch Antenna Size: 15mm x 15mm x 4mm
- Update rate: 1 to 10 Hz
- Position Accuracy: < 3 meters (all GPS technology has about 3m accuracy)
- Velocity Accuracy: 0.1 meters/s
- Warm/cold start: 34 seconds
- Acquisition sensitivity: -145 dBm
- Tracking sensitivity: -165 dBm
- Maximum Velocity: 515m/s
- Vin range: 3.0-5.5VDC
- MTK3339 Operating current: 25mA tracking, 20 mA current draw during navigation
- Output: NMEA 0183, 9600 baud default
- DGPS/WAAS/EGNOS supported
- FCC E911, RoHS, REACH compliant
- Up to 210 PRN channels
- Jammer detection and reduction
- Multi-path detection and compensation



