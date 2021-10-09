var color=[
"rgb(255, 0, 0)",
"rgb(255, 255, 0)",
"rgb(0, 255, 0)",
"rgb(0, 255, 255)",
"rgb(0, 0, 255)",
"rgb(255, 0, 255)",
];
var square=document.querySelectorAll(".Square");
var pickedColor=color[3];
var colorDisplay=document.getElementById("colorDisplay");
colorDisplay.textContent=pickedColor;
var messageDisplay=document.getElementById("message");

for (var i=0;i<square.length;i++)
{
	square[i].style.background=color[i];


	square[i].addEventListener('click',function()
	{
		var clickedColor=this.style.background;
 
		if(clickedColor===pickedColor)
		{

			alert("Correct");
		}
		else{
		alert("Wrong !")
	} 

	});
} 
