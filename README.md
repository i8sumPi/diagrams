# Diagrams
Draw a geometry problem easily with Diagrams! You don't even need to know javascript very well! It uses the Cartesian Coordinate System (the normal one), which is much simpler than the javascript coordinate system! Unlike some other graphing programs, you don't need to learn a whole new programming language, because it is just part of javascript (the most common programming language on gitHub).
## Coming soon: <br>
1. Find the largest circle that can fit inside a polygon
2. Draw a line based on the equation
3. An editor where you can can create a diragram withought knowing any code.
4. Download the end result (not take a screenshot).
5. Rotate the regular polygon.
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

//Draw and label the vertex:
b.label(what you want to label it as, optional direction);

//Or, just label the coordinates: <br>
b.labelCoords(optional direction);

//Or, just draw the point with no label:
b.label();
```

Create line the list of points e -> a -> b -> c (please use at least 2 points), with a width of 3 (default = 1). We can make it green (the default is black).
```javascript
var eabc = new line([e,a,b,c], 3, "green");
//Draw it:
eabc.draw();
```

Create a polygon with the a list of the points a,b, and c. A polygon needs at least 3 points. The width and color are the same as in a line.<br>
```javascript
var abc = new polygon([a,b,c], 3, "green");
//Draw it:
abc.draw();
```

Create a circle with point a in the middle <br>
```javascript
var myCircle = new circle(center vertex, radius, optional width, optional color);
//Draw it:
myCircle.draw();
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
