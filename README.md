# diagrams
Draw a geometry problem easily with Easy Graphing! You don't even need to know javascript very well! It uses the Cartesian Coordinate System (the normal one), which is much simpler than the javascript coordinates! 
An example with comments:
http://kiraprograms.com/diagramsHowTo.js

Here are some things that you can do:
1. Change the pixel size: <br>
*size(the new size in pixels);*

2. Change the center of the screen:<br>
*changeCenter(the x position that you want in the center of the screen, y position);* <br>
Now the center of the screen is the point (1,1), by default it is 0,0.

3. Draw the Axis: <br>
*axis();*
4. Make a vertex:<br>
*var b = new vertex(x position, y position, optional color);*

5. Draw and label the vertex:<br>
*b.label(what you want to label it as, optional direction);*<br>
Or, just label the coordinates: <br>
*b.labelCoords(optional direction);*

6. Create a line (with at least 2 points):<br>
*var eabc = new line([list of the vertecies in the line], optional width, optional color);*

7. 
