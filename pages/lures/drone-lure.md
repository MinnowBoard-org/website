## Drone Lure

The Drone Lure provides a basis for using the MinnowBoard MAX as
the flight computer for a drone.(**Note:** Lures are owned and 
supported by their respective owners and manufactures. The community 
can only give you best effort support; issues should be taken to 
the respective manufacturers and designers.)

### Design files

You can find the design files on [GitHub](). All design files are released under [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). Read about what this license allows for on the Creative Commons website.

### Device addresses

- PCA9865 (PWM Chip)
  - I2C: 0x40{b}
- HMC5883L (Triple Axis Magnetometer)
  - I2C: 0x1E{b}
  - Note: This is chained off of the IMU, which is on the SPI bus{b}
- MS5611 (Barometer)
  - I2C: 0x77{b}
- ADS1015IDGT
  - I2C: 0x48{b}
- MPU-6000 (IMU)
  - SPI: LSE SPI Bus{b}
  
  ![Drone Lure](pages/lures/1198px-Drone-lure.png)
  
  ![Drone Lure](pages/lures/1200px-Drone-lure2.jpg)
  
  ![Drone Lure on MinnowBoard](pages/lures/1200px-Drone-lure-on-minnow.jpg)
