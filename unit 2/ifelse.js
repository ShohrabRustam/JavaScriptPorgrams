var year =prompt("enter the year to find that is leap year or not ");
if (year%400==0)
console.log ("this "+ year+" year is a leap year ");
else if (year%100==0)
console.log("this  "+ year+" year is not a leap year ")
else if (year%4==0) {
	console.log("this  "+ year+" year is a leap year ")

}
else
console.log("this  "+ year+" year is not a leap year ")
