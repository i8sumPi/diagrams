# Diagrams
Draw a geometry problem easily with Diagrams! You don't even need to know javascript very well! It uses the Cartesian Coordinate System (the normal one), which is much simpler than the javascript coordinate system! Unlike some other graphing programs, you don't need to learn a whole new programming language, because it is just part of javascript (the most common programming language on gitHub).
## Coming soon: <br>
1. Find the largest circle that can fit inside a polygon
2. Draw a line based on the equation
3. An editor where you can can create a diragram withought knowing any code.
4. Download the end result (not take a screenshot)
## Resources
An example with comments: http://kiraprograms.com/diagramsHowTo.js.<br>
Use this without downloading it, or use this link: http://kiraprograms.com/diagrams.js.

# Setting up the screen:
Change the pixel size to 100 (1 pixel becomes 100 pixels): <br>
```javascript
size(100)
```

Change the center of the screen to the point (1,1), by default it is 0,0.<br>
```javascript
changeCenter(1,1);
```

Draw the Axis: <br>
```javascript
axis();
```

# Make shapes
Make a vertex in the point (-1,2), with color red (by default it is black):<br>
```javascript
var b = new vertex(-1, 2, "red");
````

Draw and label the vertex:<br>
```javascript
b.label(what you want to label it as, optional direction);
```
Or, just label the coordinates: <br>
```javascript
b.labelCoords(optional direction);
```
Or, just draw the point with no label:
```javascript
b.label();
```

Create a line (with at least 2 points):<br>
```javascript
var eabc = new line([list of the vertecies in the line], optional width, optional color);
```

Create a polygon:<br>
```javascript
var abc = new polygon([list of vertecies in the polygon],optional width, optional color);
```

Create a circle: <br>
```javascript
var myCircle = new circle(center vertex, radius, optional width, optional color);
```

Draw a line/ polygon/ circle:<br>
```javascript
eabc.draw();
```

Create a regular polygon (returns a list of vertecies that need to be connected and drawn)<br>
```javascript
var pentagon = makeRegularPolygon(number of points, vertex in the center, the distance between 2 points);
```
Create polygon that connects those vertecies:<br>
```javascript
var pentagonPolygon = new polygon(pentagon);
pentagonPolygon.draw();
```

Create a vertex from an intersection of a line/polygon (please choose 2 lines that only intersect in one place):
```javascript
var intersectionPoint = new intersection(eabc,dfg);
```

Create a vertex from an angle from a point:
![something went wrong with displaying the image](http://kiraprograms.com/diagramsPicture.png)

Write text or a label in a random place:
```javascript
title("the text you want", x position, y position, optional size, optional color
```
