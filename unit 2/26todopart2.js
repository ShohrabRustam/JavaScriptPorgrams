var todos=[];
var input=prompt("what would you like todo 1.new 2.list 3.delete 4. quit?");
while(input!="quit"){
if (input=="new")
{
	addtodo();
}
else if (input=="list")
{
	listtodo();
}
else if(input=="delete")
 {
 deletetodo();
}
input=prompt("what would you like todo 1.new 2.list 3.delete 4. quit?");

}
console.log("OK you quit the App ");
function addtodo()
{
	var Newtodo=prompt("Enter new todo");
	todos.push(Newtodo);
}
function deletetodo()
{	var ind=prompt("Enter index todo delete list ");
 	todos.splice(ind,1);
 	console.log("Deleted Todo");
 }
function listtodo()
{
	todos.forEach(function(todo,index)
	{
		console.log("**************");
		console.log((index+1) +" : " + todo);
	
	});
		console.log("**************");
}

