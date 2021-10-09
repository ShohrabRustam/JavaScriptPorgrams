var todos=[];
var input=prompt("what would you like todo 1.new 2.list 3.delete 4. quit?");
while(input!="quit"){
if (input=="new")
{
	var Newtodo=prompt("Enter new todo");
	todos.push(Newtodo);
}
else if (input=="list")
{
	console.log(todos);
}
else if(input=="delete")
 {
 	todos.pop();
}
input=prompt("what would you like todo 1.new 2.list 3.delete 4. quit?");

}
console.log("OK you quit the App ");


