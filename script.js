//your JS code here. If required.
let element=document.getElementById("level");
let level=1;
let current=element;
while(current.parentElement){
	current=current.parentElement;
	level++;
}

alert(`The level of the element is: ${level}`);










