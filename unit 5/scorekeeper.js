var p1button=document.querySelector("#p1");
var p1score=0;
var p2button=document.querySelector("#p2");
var p2score=0;

var p=document.querySelector("p");
var winnerScoreDisplay=document.querySelector("p span");

var gameover=false;
var winningScore=5;
var numInput=document.querySelector("input");

var p1display=document.querySelector("#p1display");
p1button.addEventListener('click',function(){
	if(!gameover){
	p1score++;

	if(p1score===winningScore)
	{
		p1display.classList.add("winner");
		p1display.style.color="Green";
		console.log("Game Over");
		alert("Game Over");
		gameover=true;
	}
	p1display.textContent=p1score;
}
});

var p2display=document.querySelector("#p2display");
p2button.addEventListener('click',function(){
	if(!gameover){
	p2score++;
	if(p2score===winningScore)
	{
		p2display.classList.add("winner");
		p2display.style.color="green";
		console.log("Game Over");
		alert("Game Over ");
		gameover=true;
	}
	p2display.textContent=p2score;
}
});
function reset()
{
	p1score=0;
	p2score=0;
	p1display.textContent=0;
	p2display.textContent=0;
	p1display.classList.remove("winner");
	p2display.classList.remove("winner");
	gameover=false;
}

var resetButton=document.querySelector("#reset");
resetButton.addEventListener("click",function(){
	reset();
	
});

numInput.addEventListener('click',function()
{
	winnerScoreDisplay.textContent=numInput.value;
	winningScore=Number(numInput.value);


}); 