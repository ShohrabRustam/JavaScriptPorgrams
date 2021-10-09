var name =prompt("Enter the name of the user ");
var age=Number(prompt("Enter the Age of user "));
alert("Hello "+name);
console.log("Hello "+name);
if (age <0)
{
	console.log("your age is not correct ");
	alert("your age is not correct ");
}
else if (age==21)
{
	console.log ("Happy 21th birthday ");
	alert("Happy 21th birthday " );
}
else if (age%(Math.sqrt(age))==0)
{
	alert("your age is a perfect square ");
	console.log ("your age is a perfect square");
}

else if (age%2!=0)
{
	console.log("your age is odd! ")
	alert("your age is odd! ");
}