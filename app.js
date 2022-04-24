var addItem = document.getElementById("addItem");
var delItem = document.getElementById("delItem");
var list = document.getElementById("list");
addItem.addEventListener("click", function thisis() {
  
var input1 = document.getElementById("input1");
var li = document.createElement("li");
  var litext = document.createTextNode(input1.value);
  li.appendChild(litext);
  var list = document.getElementById("list");
  list.appendChild(li);
  input1.value = "";
  var delbtn = document.createElement("button");
  var deltext = document.createTextNode("Delete task");
  delbtn.appendChild(deltext);
  delbtn.setAttribute("class","red");
  delbtn.setAttribute("onclick","delfunction(this);");
  
  li.appendChild(delbtn);
  
  list.appendChild(li);
 
  var editbtn = document.createElement("button");
  var edittext = document.createTextNode("edit task");
  editbtn.appendChild(edittext);
  
  editbtn.setAttribute("onclick","editfunction(this);");
  li.appendChild(editbtn);
  
  list.appendChild(li);
  list.style.fontSize="50px";
  delbtn.style.display = "inline-block";
  
  editbtn.style.display = "inline-block";
  delbtn.style.margin="7px";
if(input1.value=="")
{
delbtn.style.diplay="none";
editbtn.style.display="none";}
else {
delbtn.style.display="inline-block";
editbtn.style.display="inline-block";}
});
function deltask(){

  var list = document.getElementById("list");
  list.innerHTML="";
}

function delfunction(e){
  var addItem = document.getElementById("addItem");
var delItem = document.getElementById("delItem");
var list = document.getElementById("list");
e.parentNode.remove();
}
function editfunction(e){
  var edit=e.parentNode.firstChild.nodeValue;
  var editall=prompt("are u sure you want to replace task",edit);
  e.parentNode.firstChild.nodeValue=editall;
}
