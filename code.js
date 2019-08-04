//The center is, by default, (0,0), but can be changed:
//Change the unit size:
size(150 /*new size*/);
changeCenter(0.5,1); //now the center of the screen is the point (1,1) (by default it is 0,0).
//draw the axis:
axis();

//make a new vertex:
var b = new vertex(-2/*x position*/,2 /*yPosition*/,"blue" /*color (optional)*/);
var d = new vertex(sqrt(3)*2 - 1,-1);
var origin = new vertex(0,0);

//Make a regular polygon (creates a list of points that make up the regular polygon, where the bottom edge is horisontal):
var tri = makeRegularPolygon(5/*number of points*/,origin/*center*/,2/*distance between points*/);
var e = new vertexFromAngle(tri[3],pi()/4, 5);

//multipoint line (needs at leas 2 vertecies)
var eabc = new line([e,tri[3],b,tri[1]],3/*width (optional)*/,"orange"/*color (optional)*/);

//Polygon (doesn't need to come from a regular polygon)
var equalateral = new polygon([tri[0],tri[1],tri[2],tri[3],tri[4]]/*list of points*/,5/*width (optional)*/,"red" /*color(optional)*/);

//circle!
var myCircle = new circle(e,100);

//Find a vertex based on the intersection of 2 lines
var intersect = new vertexFromIntersection(eabc,equalateral);

//Write text in a random place:
title("My Cool Graph!",1/*x-position*/,3/*y-position*/,50/*size*/,"green"/*color*/);

//draw the shapes
eabc.draw();
equalateral.draw();
myCircle.draw();
//draw and label the vertecies:
b.label("b"/*what you want to label it as*/,"NW"/*direction (optional)*/);
e.label("e","n");
tri[0].label("g","e");
tri[1].label("d");
tri[2].label("c");
tri[3].label("a","sw");
tri[4].label("h","se");
intersect.label("f");
origin.label("origin","e");
b.labelCoords("S");
e.labelCoords("w");
intersect.labelCoords("w");

//you can run this code to see what it will output!!
