//Make a canvas:
var canvas = document.createElement("canvas");
document.body.appendChild(canvas);
//set up ctx and drawing and size stuff
var ctx = canvas.getContext('2d');
var width = window.innerWidth - 25;
var height = window.innerHeight - 25;
var centX = width/2;
var centY = height/2;
canvas.width = width;
canvas.height = height;
ctx.fillStyle = "white";
ctx.fillRect(0,0,width,height);
var unit = 1;
ctx.textAlign="center";
ctx.textBaseline = "middle"; 
function size(toChange){
	unit = toChange;
}
function changeCenter(x,y){
	centX = width/2-x*unit;
	centY = height/2+y*unit;
}
function axis(color="grey"){
	ctx.lineWidth = 1;
	ctx.strokeStyle = color;
	ctx.beginPath();
	ctx.moveTo(0,centY);
	ctx.lineTo(width,centY);
	ctx.moveTo(centX,0);
	ctx.lineTo(centX,height);
	ctx.stroke();
}
function sqrt(x){
	return Math.sqrt(x);
}
function text(name,xPosition,yPosition){
	ctx.shadowBlur = 2;
	ctx.shadowColor = '#F0F0F0';
	ctx.fillText(name,xPosition,yPosition);
	ctx.shadowBlur = 0;
}
function title(name,xPos,yPos,size="30",color="black"){
	ctx.font = size+"px serif";
	ctx.fillStyle = color;
	ctx.shadowBlur = 2;
	ctx.shadowColor = '#F0F0F0';
	ctx.fillText(name,centX+xPos*unit,centY-yPos*unit);
	ctx.shadowBlur = 0;
}
function pi(){
	return Math.PI;
}
function makeRegularPolygon(number,center,distance){
	var distanceToCenter = distance/(Math.cos(pi()/number)*2);
	var toReturn = [];
	for (var i = 0; i < number; i++) {
		var toAdd = new vertexFromAngle(center,pi()*2*i/number + pi()/number/2,distanceToCenter);
		toReturn.push(toAdd);
	}
	return toReturn;
}


class vertex{
	constructor(x,y,color="black"){
		this.x = x;
		this.y = y;
		this.color = color;
	}
	label(name="",direction="n",size=20, xDistance=size/2, yDist=size/2){
		var xPosition = centX+this.x*unit;
		var yPosition = centY-this.y*unit;
		var xDist = name.length*size/4;
		ctx.fillStyle = this.color;
		ctx.beginPath();
		ctx.arc(xPosition,yPosition,3,0,2*Math.PI);
		ctx.fill();
		ctx.fillStyle = this.color;
		ctx.font = size+"px serif";
		if(direction.toLowerCase() == "n"){
			text(name,xPosition,yPosition-yDist*2);

		} else if(direction.toLowerCase() == "e"){
			text(name,xPosition+xDist,yPosition);

		}else if(direction.toLowerCase() == "s"){
			text(name,xPosition,yPosition+yDist*2);

		}else if(direction.toLowerCase() == "w"){
			text(name,xPosition-xDist,yPosition);

		}else if(direction.toLowerCase() == "sw"){
			text(name,xPosition-xDist,yPosition+yDist);

		}else if(direction.toLowerCase() == "nw"){
			text(name,xPosition-xDist,yPosition-yDist);

		}else if(direction.toLowerCase() == "se"){
			text(name,xPosition+xDist,yPosition+yDist);
			
		}else if(direction.toLowerCase() == "ne"){
			text(name,xPosition+xDist,yPosition-yDist);
		}
	}
	labelCoords(direction,size=20){
		var toWrite = "("+this.x.toFixed(2)+","+this.y.toFixed(2)+")";
		this.label(toWrite,direction,size);
	}
	actualCoords(){
		return [centX+this.x*unit, centY-this.y*unit];
	}
}
class lineTwo{
	constructor(vertex1,vertex2,width=1,color="black") {
	    this.x1 = vertex1.x;
	    this.x2= vertex2.x;
	    this.y1 = vertex1.y;
	    this.y2= vertex2.y;
  	}
  	draw(){
  		ctx.lineWidth = this.width;
		ctx.strokeStyle = this.color;
	    ctx.beginPath();
		ctx.moveTo(centX+this.x1*unit,centY-this.y1*unit);
		ctx.lineTo(centX+this.x2*unit,centY-this.y2*unit);
		ctx.stroke();
  	}
}
class line{
	constructor(points,width=1,color="black"){
		this.points = points;
		this.color = color;
		this.width = width;
	}
	draw(){
		ctx.strokeStyle = this.color;
		ctx.lineWidth = this.width;
		var points = this.points;
		for (var i = 0; i < points.length-1; i++) {
			var toDraw = new lineTwo(points[i],points[(i+1)]);
			toDraw.draw();
		}
	}
}
class polygon extends line{
	constructor(points,width=1,color="black"){
		super();
		this.points = points;
		this.points.push(points[0]);
		this.color = color;
		this.width = width;
	}
}
class circle{
	constructor(center,radius,width=1,color="black"){
		this.center = center;
		this.radius = radius*unit;
		this.width = width;
		this.color = color;
	}
	draw(){
		var xPosition = centX+this.center.x*unit;
		var yPosition = centY-this.center.y*unit;

		ctx.strokeStyle = this.color;
		ctx.lineWidth = this.width;
		ctx.beginPath();
		ctx.arc(xPosition,yPosition,this.radius,0,2*Math.PI);
		ctx.stroke();
	}
}

class vertexFromAngle extends vertex{
	constructor(start,angle,distance,color="black"){
		super();
		this.x = Math.cos(angle)*distance + start.x;
		this.y = Math.sin(angle)*distance + start.y;
		this.color = color;
	}
}

class vertexFromIntersection extends vertex{
	constructor(line1,line2,distance,color="black"){
		super();
		this.x = 1001;
		this.y = 1001;
		this.color = color;
		var points1 = line1.points;
		var points2 = line2.points;

		var slope1; 
		var slope2;
		var yInter1;
		var yInter2;
		for (var i = 0; i < points1.length-1; i++) {
			slope1 = (points1[i].y - points1[i+1].y)/(points1[i].x - points1[i+1].x);
			yInter1 = slope1*points1[i+1].x - points1[i+1].y;
			for (var j = 0; j < points2.length-1; j++) {
				slope2 = (points2[j].y - points2[j+1].y)/(points2[j].x - points2[j+1].x);
				yInter2 = slope2*points2[j].x - points2[j].y;
				var xSpot = (yInter2-yInter1)/(slope1-slope2);
				var ySpot = slope1*xSpot + yInter1;
				xSpot = -xSpot;
				ySpot = -ySpot;
				if(xSpot>points1[i].x +0.01 && xSpot<points1[i+1].x -0.01 || xSpot<points1[i].x -0.01 && xSpot>points1[i+1].x +0.01){
					if(xSpot>points2[j].x +0.01 && xSpot<points2[j+1].x -0.01 || xSpot<points2[j].x -0.01 && xSpot>points2[j+1].x +0.01){
						this.x = xSpot;
						this.y = ySpot;
					}
				}
			}
		}
	}
}