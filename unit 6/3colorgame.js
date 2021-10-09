
var color=generateRandomColor(6);
var square=document.querySelectorAll(".Square");
var pickedColor=pickedColor();
var colorDisplay=document.getElementById("colorDisplay");
colorDisplay.textContent=pickedColor;
var messageDisplay=document.getElementById("message");
 
for (var i=0;i<square.length;i++)
{
	square[i].style.background=color[i];


	square[i].addEventListener('click',function(){

		var clickedColor=this.style.background;
		console.log(clickedColor,pickedColor);
		if(clickedColor===pickedColor)
		{

			messageDisplay.textContent="Correct";
			changeColor(clickedColor);
		}
		else{
		this.style.background="Grey";
		messageDisplay.textContent="Try Again"
	} 

	});
	
}
 function changeColor(color)
{
for (var i=0;i<square.length;i++)
{
	square[i].style.background=color; 
}
}
function pickedColor()
{
	var random=Math.floor(Math.random()*6);
	return color[random];

}
function generateRandomColor(num)
{
	var array=[];
	for (var i=0;i<num;i++)
	{
		array.push(RandomColor());

	}
	return array;
}
function RandomColor()
{
	var r=Math.floor(Math.random()*256);

	var g=Math.floor(Math.random()*256);

	var b=Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g +", " + b +")"
}