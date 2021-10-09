function factorial(num)
{
	var fact=1;
	for (var i=1;i<=num;i++)
		fact*=i;
	alert(fact);
	console.log("the factorial of the number is "+ fact);
}
factorial(5);