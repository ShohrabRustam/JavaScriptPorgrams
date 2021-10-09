var num=Number(prompt("Enter the number till you want to Guess "));
var SecretNumber=Math.floor(Math.random() * num) +1;
var GuessingNumber=Number(prompt("Guess the number till "+ num));
var count=0;
Number(count);
while (SecretNumber!=GuessingNumber)
{
	if (SecretNumber>GuessingNumber){
		alert("Number is to less GUESS large number ");
		var GuessingNumber=Number(prompt("Guess the number till "+ num));
		count++;
	}
	else
	{
		alert("Number is to large GUESS the low number ");
		var GuessingNumber=Number(prompt("Guess the number till "+ num));
		count++;
	}
}
alert("Conguration ! you Guess the correct number in " + (count +1) +" Attemps");