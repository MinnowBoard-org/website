## High Speed Expansion (HSE) connector

### Overview

![MinnowBoard Turbot Backside](pages/max-hse/MB-TurbotB-0003-161107-1024x768.png){align-right container-50}

MinnowBoard MAX compatible boards have a High Speed Expansion (HSEv1) connector
on the bottom side of the board that expose:

* SATA
* PCI-Express
* GPIO pins
* I2C
* USB
* eXtended Debug Port (XDP)


### HSEv1 Layout

|Description                         | Pin|Pin | Description                   |
------------------------------------:|:--:|:--:|:------------------------------|
| Ground                             |  1 |  2 | Ground                        |
| mSATA_TX_P                         |  3 |  4 | mSATA_RX_P                    |
| mSATA_TX_N                         |  5 |  6 | mSATA_RX_N                    |
| +5V SB                             |  7 |  8 | +5V SB                        |
| mPCIE_REFCLK_P                     |  9 | 10 | USB_HOST_DP                   |
| mPCIE_REFCLK_N                     | 11 | 12 | USB_HOST_DN                   |
| Ground                             | 13 | 14 | Ground                        |
| mPCIE_TX_P                         | 15 | 16 | mPCIE_RX_P                    |
| mPCIE_TX_N                         | 17 | 18 | mPCIE_RX_N                    |
| +5V SB                             | 19 | 20 | +5V SB                        |
| EXP_I2C_SCL (I2C #6)               | 21 | 22 | mPCIE_WAKEB                   |
| EXP_I2C_SDA (I2C #6)               | 23 | 24 | mPCIe_CLKREQ3_B               |
| Ground                             | 25 | 26 | Ground                        |
| EXP_GPIO1                          | 27 | 28 | EXP_GPIO3                     |
| EXP_GPIO2                          | 29 | 30 | EXP_GPIO4                     |
| +5V SB                             | 31 | 32 | +5V SB                        |
| EXP_GPIO6 (XDP_H_OBSDATA_A1)       | 33 | 34 | EXP_GPIO5 (XDP_H_OBSDATA_A0)  |
| EXP_GPIO7 (XDP_H_OBSDATA_A2)       | 35 | 36 | EXP_GPIO8 (XDP_H_OBSDATA_A3)  |
| Ground                             | 37 | 38 | Ground                        |
| XDP_H_PRDYB                        | 39 | 40 | XDP_H_PREQB_PB                |
| PMC_RSMRST                         | 41 | 42 | FP_PWRBTN                     |
| +5V SB                             | 43 | 44 | +5V SB                        |
| PMC_CORE_PWROK                     | 45 | 46 | PMC_RSTBTN                    |
| PMC_PLTRST_R_V1P8                  | 47 | 48 | ILB_RTC_TESTB                 |
| Ground                             | 49 | 50 | Ground                        |
| XDP Power Rail Status (3.3v ~250mA)| 51 | 52 | XDP_H_TRSTB                   |
| XDP Power Rail Status (1.8v ~250mA)| 53 | 54 | XDP_H_TCK                     |
| +V1P8A                             | 55 | 56 | XDP_H_TMS                     |
| +V1P8A                             | 57 | 58 | XDP_H_TDI                     |
| Ground                             | 59 | 60 | Ground                        |

### Connector information
The HSEv1 connector uses a TE Connectivity-compatible 60-pin
header. We recommend using the 3-5177986-2 or the 60POS .8MM FH 8H GOLD part
that rises 7.85mm. This permits using 3/8" standoffs at the corners for
attaching an expansion board to the MinnowBoard Turbot.

Link to [A99190CT-ND at digikey](http://www.digikey.com/product-detail/en/5177985-2/A99190CT-ND/1894007).

Mating connectors are listed at the bottom and include:

A99196DKR-ND - CONN PLUG 60POS .8MM FH 5H GOLD  
A115336-ND - CONN PLUG 60POS DL BRD/BRD VERT  
5179030-2-ND - CONN PLUG 60POS FH .8MM BRD-BRD  
5177984-2-ND - CONN PLUG 60POS VERT FH .8MM  
**A99215CT-ND - CONN PLUG 60POS .8MM FH 8H GOLD**   <-- Recommended connector  
A99209CT-ND - CONN PLUG 60POS .8MM FH 7H GOLD  
A99203CT-ND - CONN PLUG 60POS .8MM FH 6H GOLD  
A99196CT-ND - CONN PLUG 60POS .8MM FH 5H GOLD  
A99215TR-ND - CONN PLUG 60POS .8MM FH 8H GOLD  
A99209TR-ND - CONN PLUG 60POS .8MM FH 7H GOLD  
