# Diagrams
Draw a geometry problem easily with Diagrams! You don't even need to know javascript very well! It uses the Cartesian Coordinate System (the normal one), which is much simpler than the javascript coordinate system! Unlike some other graphing programs, you don't need to learn a whole new programming language, because it is just part of javascript (the most common programming language on gitHub).<br>
Diagrams can create an image like the one below:
![something went wrong with displaying the image](http://kiraprograms.com/diagramsExampleImg.png)
## Coming soon: <br>
1. Label the length of a line automatically
2. Draw a line based on the equation
3. An editor where you can can create a diragram withought knowing any code.
4. Download the end result (not take a screenshot).
5. Rotate the regular polygon.
## Resources
An example with comments: http://kiraprograms.com/diagramsHowTo.js.<br>
Use this without downloading it, or use this link: http://kiraprograms.com/diagrams.js.
## Save the end result
There are 2 ways of doing this:
1. Take a screenshot of the computer screen.
2. Right click the image and choose *Save image as...* or *Copy image*.
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

# Drawing Things:
## Vertecies:
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

## Line:
Create line the list of points e -> a -> b -> c (please use at least 2 points), with a width of 3 (default = 1). We can make it green (the default is black).
```javascript
var eabc = new line([e,a,b,c], 3, "green");
//Draw it:
eabc.draw();
```

## Polygon:
Create a polygon with the a list of the points a,b, and c. A polygon needs at least 3 points. The width and color are the same as in a line.<br>
```javascript
var abc = new polygon([a,b,c], 3, "green");
//Draw it:
abc.draw();
```

## Circle:
Create a circle with point a in the middle, and a radius of 2. The width and color are the same as in a line. <br>
```javascript
var myCircle = new circle(a, 2, , optional color);
//Draw it:
myCircle.draw();
```

## Regular Polygon:
Create a regular polygon (returns a list of vertecies that need to be connected and drawn)<br>
```javascript
var pentagon = makeRegularPolygon(number of points, vertex in the center, the distance between 2 points);
```
Create polygon that connects those vertecies:<br>
```javascript
var pentagonPolygon = new polygon(pentagon);
pentagonPolygon.draw();
```

## Vertex from Intersection:
Create a vertex from an intersection of a line/polygon (please choose 2 lines that only intersect in one place):
```javascript
var intersectionPoint = new intersection(eabc,dfg);
```
## Vertex from angle and point:
Create a vertex 2 units away from point a, in the direction pi()/3 radians (see below for refrence on the directions).
```javascript
var myVertexFromAngle = new vertexFromAngle(a,pi()/3,2);
```
![something went wrong with displaying the image](http://kiraprograms.com/vertexFromAngleImg.png)

## Make a title or just random text:
Write "What is the angle <ABC if CDEFG is a pentagon?" at the point (0,3) with a size of 100px (default = 30px) and color of blue (default is black)
The text is automatically centered.
```javascript
title("What is the angle <ABC if CDEFG is a pentagon?", 0, 3, 100, "blue");
```

## Find the javascript coordinates:
In javascript, the point (0,0) is in the top-left corner. When you increase the x position, you move right. When you increase the y position, you move down. If you want to draw different things of your own, you can use this. 
```javascript
var javascriptCoordinates = vertex.actualCoords();
```
# A few shortcuts:
## Pi (helpful when dealing with radians):
```javascript
//returns pi
pi();
```

## Square roots:
Find the square root of 5:
```javascript
//Returns 2.2360679775 (the square root of 5)
sqrt(5)
```
## An example (creates the image on top):
```javascript
//The center is, by default, (0,0), but can be changed:
//Change the unit size:
size(150);
changeCenter(0.5,1); //now the center of the screen is the point (1,1) (by default it is 0,0).
//draw the axis:
axis();

//make a new vertex:
var b = new vertex(-2,2,"blue");
var d = new vertex(sqrt(3)*2 - 1,-1);
var origin = new vertex(0,0);

//Make a regular polygon (creates a list of points that make up the regular polygon, where the bottom edge is horisontal):
var pent = makeRegularPolygon(5,origin,2/*distance between points*/);
var e = new vertexFromAngle(pent[3],pi()/4, 5);

//multipoint line (needs at leas 2 vertecies)
var eabc = new line([e,pent[3],b,pent[1]],3,"orange");

//Polygon (doesn't need to come from a regular polygon)
var equalateral = new polygon([pent[0],pent[1],pent[2],pent[3],pent[4]],5,"red");

//circle!
var myCircle = new circle(e,1);

//Find a vertex based on the intersection of 2 lines
var intersect = new vertexFromIntersection(eabc,equalateral);

//Write text in a random place:
title("My Cool Graph!",1,3,50,"green");

//draw the shapes
eabc.draw();
equalateral.draw();
myCircle.draw();
//draw and label the vertecies:
b.label("b","NW");
e.label("e","n");
pent[0].label("g","e");
pent[1].label("d");
pent[2].label("c");
pent[3].label("a","sw");
pent[4].label("h","se");
intersect.label("f");
origin.label("origin","e");
b.labelCoords("S");
e.labelCoords("w");
intersect.labelCoords("w");

//you can run this code to see what it will output!!
```
