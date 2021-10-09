var radius =prompt("Enter the radius of the circle ");
var height =prompt("Enter the height of the of rectangle/triangle ");
var breadth=prompt("enter the breadth of the rectangle/triangle");
var  PI=3.14;
var area='circle';
switch(area)
{
case 'circle' :
console.log("the area of the circle is " + 2*PI*radius);
break;
case 'rectangle':
console.log("the area of the rectangle is " + height*breadth);
break;
case 'triangle' :
console.log("the area of the triangle is " + (breadth*height)/2);
break;
default:
console.log("Invalid data ");
}