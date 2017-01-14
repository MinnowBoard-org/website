#### [MinnowBoard Turbot Dual Core](get-a-board)
- Intel® Atom™ Processor E3826 [Technical Specs](http://ark.intel.com/products/78477/Intel-Atom-Processor-E3826-1M-Cache-1_46-GHz?q=E3826)
- Performance: 1.46 GHz, 1M cache, 7W TDP
- **Why we chose it:** For the first MinnowBoard Turbot, we liked the 
sweet spot of the E3826 dual core at 1.46 GHz. It meets a broad range 
of compute applications, has extended temp and a 7W TDP that allows 
fanless operation under typical loads, and the SoC cost is lower than 
the quad-core option. There are many other factors we considered, 
including those that are common across the E3800 series line: 
AES-NI instructions, graphics, 4-lane PCI express 2.0, virtualization, etc. 

#### [MinnowBoard Turbot Quad Core](get-a-board)
- Intel® Atom™ Processor E3845 [Technical Specs](http://ark.intel.com/products/78475/Intel-Atom-Processor-E3845-2M-Cache-1_91-GHz?q=E3845#@specifications)
- Performance: 1.91 GHz, 2M cache, 10W TDP
- **Why we chose it:** While the E3826 is a solid BayTrail choice 
for the above reasons, some of our target developers argued that 
on a compute-per-gram basis the E3845 quad core at 10W TDP is 
desirable for applications with heavy compute loads—think spatial 
imaging and 3D route planning for robotics and drones—especially 
since an E3845 is fully compatible with the E3826 Turbot 
dual-core firmware and software support. These developers were 
maxing out the E3826 SoC with these compute intensive loads, 
so we listened and partnered with ADI Engineering to design 
the MinnowBoard Turbot quad core with E3845.

**About the Intel® Atom™ processor E3800 series:** Formerly 
codenamed BayTrail, the series consists of [six SoC SKUs](http://ark.intel.com/products/series/78160/Intel-Atom-Processor-E3800-Series#@Embedded) ranging from one to four cores, 512KB to 2M cache, 
3W to 10W TDP, and frequency from 1.33GHz to 1.91Ghz. These 
SoCs are based on the Silvermont microarchitecture, utilizing 
Intel’s 22nm process technology with 3-D tri-gate transistors, 
which deliver significant improvements in computational 
performance and energy efficiency. The E3800 product family 
is the first SoC designed for intelligent systems, delivering 
outstanding compute, graphical, and media performance while 
operating in an extended range of thermal conditions.
