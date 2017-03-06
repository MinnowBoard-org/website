## Calamari Lure

**This board may not be available, however the board files are available below**

The Calamari Lure is designed as a demonstration board for working with the GPIO and low-speed interface. It attaches to the low-speed interface on the MinnowBoard MAX, and provides a compact and easy way to experiment with a variety of devices--without the hassle of gathering your own discrete components and doing your own breadboarding.

The Calamari Lure is produced by [CircuitCo](http://www.circuitco.com/), and is available to purchase from [Mouser](http://www.mouser.com/ProductDetail/MinnowBoard-by-CircuitCo/999-0004990). 

**Note:** Lures are owned and supported by their respective owners and manufacturers. The community can only offer best-effort help; issues should be taken to the respective manufacturers and designers.

![Calamari Lure](pages/calamari-lure/Lure-Calamari-angled.png)

![Calamari Lure](pages/calamari-lure/Lure-Calamari-top.png)

### Features

- SPI Based ADC
- 10K Slider POT
- RGB LED
- 2 PWM LEDS
- 2 TTL UART Headers
- 7-Segment Display with 595 shift register
- I2C EEPROM
- 3 Buttons

2 PWM controlled LEDS
|**Signal** | **Function** | **PadConf** |
|----|----|----|
| SIO_PWM_00   |  LED1  | PWM   |
| SIO_PWM_11   |  LED2  | PWM   |


GPIO Output controlled 7 Segment LED display (with 595 shift register)
|**Signal** | **Function** | **PadConf** | **Linux GPIO#(≤3.17)** | **Linux GPIO#(≥3.18)** |
|----|----|----|----|----|
|    GPIO_S5_2 | Clock   |  GPIO Output  | 84   | 340   |
|  LPE_I2S2_DATAIN  |  Data  |  GPIO Output  | 218   | 474   |
|  LPE_I2S2_DATAOUT  | Latch   | GPIO Output   |  219  |  475  |
|  LPE_I2S2_FRM  | Clear   | GPIO Output   | 217   | 473   |

ADC input using a variable 10K resistor slider potentiometer (via a SPI based ADC)
|**Signal** | **Function** | **PadConf** |
|----|----|----|
| SIO_SPI_CS   |  Chip Select  | SPI   |
| SIO_SPI_DO   | Data Out   |  SPI  |
| SIO_SPI_DI  | Data In   | SPI   |
| SIO_SPI_CLK  | Clock   |  SPI  |

3 GPIO inputs via three buttons
|**Signal** | **Function** | **PadConf** | **Linux GPIO#(≤3.17)** | **Linux GPIO#(≥3.18)** |
|----|----|----|----|----|
|  LPE_I2S2_CLK  | S1   | GPIO Input   | 216   | 472   |
|  SIO_UART1_CTS  | S2   | GPIO Input   |  227  |  483  |
|  SIO_UART1_RTS  | S3   | GPIO Input   | 226   | 484   |


2 TTL UART headers
|**Signal** | **Function** | **PadConf** |
|----|----|----|
| SIO_UART1_TX  | UART1 TX  | UART   |
| SIO_UART1_RX  | UART1 RX  | UART   |
| SIO_UART2_TX  | UART2 TX  | UART   |
| SIO_UART2_RX  | UART2 RX  | UART   |


RGB GPIO controlled LED
|**Signal** | **Function** | **PadConf** | **Linux GPIO#(≤3.17)** | **Linux GPIO#(≥3.18)** |
|----|----|----|----|----|
|  GPIO_S5_0  |  RED  | GPIO Output   | 82   |  338  |
|  GPIO_S5_1   | GREEN   |  GPIO Output  | 83   | 339   |
|  ILB_8254_SPKR  |  BLUE  |  GPIO Output  | 208   | 464   |


I2C EEPROM at 0x50
|**Signal** | **Function** | **PadConf** |
|----|----|----|
| SIO_I2C5_DATA  | I2C Data  | I2C   |
| SIO_I2C5_CLK  | I2C Clock  | I2C   |


### Reference material
- [PWM Tutorial](http://www.protostack.com/blog/2011/06/atmega168a-pulse-width-modulation-pwm/)
- [595 Tutorial](http://conductiveresistance.com/interactive-595-shift-register-simulator/)
- [7 Segment Display Character Mappin](http://en.wikipedia.org/wiki/Seven-segment_display_character_representations)
- [MCP320x Linux Kernel Device Driver](https://git.kernel.org/cgit/linux/kernel/git/torvalds/linux.git/tree/drivers/iio/adc/mcp320x.c?id=v3.14)
- [SPIDEV - userspace SPI character device driver interface documentation](https://www.kernel.org/doc/Documentation/spi/spidev)
- [I2CDEV - userspace I2C character device driver interface documentation](https://www.kernel.org/doc/Documentation/i2c/dev-interface)


### Components
- Single tricolored surface mount RGB LED [datasheet](Rgb-led-smd.pdf)
- 74HC595 Serial Shift Register [datasheet](74hc595.pdf)
- 7 Segment Display [datasheet](7seg-display.pdf)
- 10k Slider Potentiometer [datasheet](10k-slider.pdf)
- NPN Transistor MMBT2222A [datasheet](Mmbt2222a.pdf)
- Microchip MCP3004 SPI Based Analog-to-Digital converter [datasheet](MCP3004.pdf)
- CAT24C256W I2C based EEPROM [datasheet](CAT24C256W.pdf)

### Design files
You can find the design files on [GitHub](https://github.com/MinnowBoard-org/design-files/tree/master/expansion-boards-lures). All Calamari Lure design files are released under [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). Read about what this license allows for on the Creative Commons website.

### Test files
- [GitHub](https://github.com/MinnowBoard/minnow-max-extras)
