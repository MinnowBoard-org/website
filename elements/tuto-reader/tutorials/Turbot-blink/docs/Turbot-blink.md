## Blinking the Turbot D2 LED

For IoT devices, blinking an LED is a common "Hello World" example used to show
a short example running.  Here's a quick tutorial to blink the MinnowBoard Turbot
D2 LED.

### Blinking the LED with a bash script

On the MinnowBoard Turbot there are two LEDs indicating the power status of the
board (as we learned in the [Powering Up tutorial](tutorials/powering-on-minnowboardturbot). 

The D2 LED is controllable from the OS once the system is running and can be 
configured and used via the standard GPIO interfaces.

One of the simplest ways to interface with the Linux
GPIO interfaces is through the file system.  Here's a short bash command line
script that will toggle the D2 LED on and off every second:

``` bash
cat << 'EOF' > blinkd2.sh
#!/bin/bash

# Blink the D2 LED on a MinnowBoard Turbot board
# D2 LED is GPIO 360 
LED2=360

# Tell the system we'll be using the GPIO for the D2 LED
if [ ! -d /sys/class/gpio/gpio$LED2 ]; then
        echo $LED2 > /sys/class/gpio/export
fi
# and we'll be using it for Output (out) and not Input (in)
echo out > /sys/class/gpio/gpio$LED2/direction

# alternate writing a 0 (ON) and 1 (OFF) every second, until interrupted
i=0
while true ; do
        echo $i > /sys/class/gpio/gpio$LED2/value
        sleep 1
        i=$(((i==0?1:0)))
done
EOF
chmod +x blinkd2.sh

```

You can give this script a try on your MinnowBoard Turbot running Ubuntu:

1. Within a terminal window, create a file `blinkd2.sh` containing the script
   shown above. (If you cut and paste all the text above into a command line 
   window, it will do that for you.)
2. Run the script with the ``sudo`` command:

   ``` bash
   sudo bash blinkd2.sh
   ```
   
   and you'll see the D2 LED blink on and off at a 1-second pace!  (Press CTRL-C
   to stop the script from running.)
   
   ![image](elements/tuto-reader/tutorials/Turbot-blink/MB-Turbot-D2-Blink.gif)

### Something a bit more fun: Morse Code

With the basics in hand of accessing the board's GPIO interface through the filesystem,
you can go on to create something more complex.  Here's another 
bash script to convert words (alpha-numeric characters only) on the command line 
into Morse Code displayed with the D2 LED:

``` bash
cat << 'EOF' > morse.sh
#!/bin/bash
# Morse Code display on MinnowBoard Turbot's D2 LED
# 

# Set up the gpio for the D2 LED for output
LED2=360
if [ ! -d /sys/class/gpio/gpio$LED2 ]; then
   echo $LED2 > /sys/class/gpio/export
fi
echo out > /sys/class/gpio/gpio$LED2/direction
echo 1 > /sys/class/gpio/gpio$LED2/value  # Turn off the D2 LED to start


declare -u morsetxt  # the -u forces the string to uppercase
declare -A morse     # an associative array for holding the dit-dah encodings

morse[A]=".-";    morse[B]="-...";  morse[C]="-.-."
morse[D]="-..";   morse[E]=".";     morse[F]="..-."
morse[G]="--.";   morse[H]="....";  morse[I]=".."
morse[J]=".---";  morse[K]="-.-";   morse[L]=".-.."
morse[M]="--";    morse[N]="-.";    morse[O]="---"
morse[P]=".--.";  morse[Q]="--.-";  morse[R]="--.-"
morse[S]="...";   morse[T]="-";     morse[U]="..-"
morse[V]="...-";  morse[W]=".--";   morse[X]="-..-"
morse[Y]="-.--";  morse[Z]="--..";  morse[1]=".----"
morse[2]="..---"; morse[3]="...--"; morse[4]="....-"
morse[5]="....."; morse[6]="-...."; morse[7]="--..."
morse[8]="---.."; morse[9]="----."; morse[0]="-----"
# missing characters (punctuation) are ignored

# The AARL Morse Transmission Timing Standard (for pacing)
#  dit=1 unit long, dah=3 units long with 1 unit following
#  inter-char=3 units, intra-word=7 units

function pace(){
   sleep 0.$1  ## we'll use a tenth-second as a unit
}

function dit() {
   echo 0 > /sys/class/gpio/gpio$LED2/value
   pace 1;
   echo 1 > /sys/class/gpio/gpio$LED2/value
}

function dah() {
   echo 0 > /sys/class/gpio/gpio$LED2/value
   pace 3;
   echo 1 > /sys/class/gpio/gpio$LED2/value
}

# loop until interrupted
while true ; do

   # go through each word on the command line
   for morseWord in "$@";
   do
      # and through each character of the word
      for (( i = 0; $i < ${#morseWord}; i++ ));
      do
         c=${morseWord:$i:1}
         ditdah=${morse[$c]}
         echo $c $ditdah
         # and each dit/dah of the character
         for (( j = 0; $j < ${#ditdah}; j++));
         do
            if [ "${ditdah:$j:1}" == "." ]
            then dit;
            else dah;
            fi
            pace 1;  # intra-char timing
         done
         pace 2; # inter-char timing (3 - 1 already done)
      done
      echo ""
      pace 4; # inter-word timing (7 - 3 already done)
   done
done
EOF
chmod +x morse.sh

```

You can give this script a try on your MinnowBoard Turbot running Ubuntu:

1. Within a terminal window, create a file `morse.sh` containing the script
   shown above. (If you cut and paste all the text above into a command line 
   window, it will do that for you.)
2. Run the script with the ``sudo`` command 
   and you'll see the D2 LED blinking with the Morse Code translation
   of the words given on the command line. For us humans, the script also 
   prints out the characters and dit-dah translation to the console.  (Press CTRL-C
   to stop the script from running.)

   ``` console
   $ sudo bash morse.sh HELLO FROM MY MINNOWBOARD TURBOT
  
   H ....
   E .
   L .-..
   L .-..
   O ---
   
   F ..-.
   R --.-
   O ---
   M --
   
   M --
   Y -.--
   
   M --
   I ..
   N -.
   N -.
   O ---
   W .--
   B -...
   O ---
   A .-
   R --.-
   D -..
   
   T -
   U ..-
   R --.-
   B -...
   O ---
   T -
   ```

   *This page is licensed under CC-BY-SA 3.0 and may have portions derived from other CC-BY-SA 3.0 content. See [Attributions page](attributions).