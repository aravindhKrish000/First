
var input= document.getElementById("comments");

console.log("vanakam de mapla");

var t1;
var t2;

function res()
{

  alert(((t1-t2)/1000)+" seconds");
}


alert("Get Ready!");
function enter (event) {
 if (event.keyCode === 13) {
  event.preventDefault();
  t1=new Date().getTime();
  alert(((t1-t2)/1000)+" seconds");
}
}

function anykey (event) {
  if (event.keyCode !== 13){
      event.preventDefault();
      t2=new Date().getTime();
      input.removeEventListener("keyup", anykey);
  }
}

function cli () {
  t1=new Date().getTime();

  alert(((t1-t2)/1000)+" seconds");
   

}


input.addEventListener("keyup",enter);
input.addEventListener("keyup", anykey);
