
let input= document.getElementById("comments");

console.log("vanakam de mapla");

let t1=0;
let t2=0;

function res()
{
  let word=input.value;
  let tt=((t1-t2)/1000);
  let uid=document.getElementById("uid").value;
  if(tt>0)
  {
    if(uid===""){
    alert("Id enga?")
    set();
    }
    else{
    document.getElementById("Result").style.display="block";
    
  let tabRef = document.getElementById("Result").getElementsByTagName("tbody")[0];
  let newRow = tabRef.insertRow();
  
  let newCell = newRow.insertCell(0);
  let newCell1 = newRow.insertCell(1);
  let newCell2 = newRow.insertCell(2);
 
  let newText =document.createTextNode(uid);
  let newText1 =document.createTextNode(word);
  let newText2 =document.createTextNode(tt);
 
  newCell.appendChild(newText);
  newCell1.appendChild(newText1);
  newCell2.appendChild(newText2);
  

  newCell.style.border="1px solid black";
  newCell1.style.border="1px solid black";
  newCell2.style.border="1px solid black";
   

  input.value="";
  t1=t2=0;
  input.addEventListener("keyup", anykey);
  }}
  else {
    input.value="";
    alert("Solladhadhellam sei");
  }
 }


alert("Get Ready!");

function set(){
  input.value="";
  t1=t2=0;
  input.addEventListener("keyup", anykey);
 
}

function enter (event) {
 if (event.keyCode === 13) {
  event.preventDefault();
  
    if(t2>0){
      if(t1<1){
        t1=new Date().getTime();
        res();
        }
      }
    else {
    alert("Type karo");
}
}

}

function anykey (event) 
{
  if (event.keyCode !== 9)
  { 
    if (event.keyCode !== 13)
    {
      event.preventDefault();
      t2=new Date().getTime();
      input.removeEventListener("keyup", anykey);
    }
  }
}

function cli () {
  if(t2>0){
    if(t1<1){
    t1=new Date().getTime();
    res();
    }
  else   { 
    alert("word-i adikavum");
  } 
}

}


input.addEventListener("keyup",enter);
input.addEventListener("keyup", anykey);
