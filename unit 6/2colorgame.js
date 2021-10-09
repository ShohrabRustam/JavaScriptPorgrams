var color=[
"rgb(255, 0, 0)",
"rgb(255, 255, 0)",
"rgb(0, 255, 0)",
"rgb(0, 255, 255)",
"rgb(0, 0, 255)",
"rgb(255, 0, 255)",
];
var square=document.querySelectorAll(".Square");
var pickedColor=RandomColor();
var colorDisplay=document.getElementById("colorDisplay");

var messageDisplay=document.getElementById("message");
colorDisplay.textContent=pickedColor;

for (var i=0;i<square.length;i++)
{
	square[i].style.background=color[i];


	square[i].addEventListener('click',function()
	{
		var clickedColor=this.style.background;
 
		if(clickedColor===pickedColor)
		{

			messageDisplay.textContent="Correct";
			changeColor(clickedColor);
		}
		else{
			this.style.background="Grey";
		massegeDisplay.textContent="Wrong!!";
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

function RandomColor()
{
	var random=Math.floor(Math.random()*color.length)
	return color[random];
}
