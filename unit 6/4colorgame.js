
var color=generateRandomColor(6);
var h1=document.querySelector("h1");
var square=document.querySelectorAll(".Square");
var pickedColor=picked_Color();
var colorDisplay=document.getElementById("colorDisplay");
colorDisplay.textContent=pickedColor;
var messageDisplay=document.getElementById("message");
var resetButton=document.getElementById("reset");


resetButton.addEventListener("click",function()
{
	color = generateRandomColor(6);
	pickedColor = picked_Color();
	colorDisplay.textContent=pickedColor;
	h1.style.background="Grey";

});
 

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
			h1.style.background=clickedColor;
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


function picked_Color()
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