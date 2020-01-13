
var input= document.getElementById("comments");

var t1;
var t2;
function res() {
document.getElementById("speed")=(t1-t2)/1000;

}
alert("Get Ready!");
function enter (event) {
 if (event.keyCode === 13) {
  event.preventDefault();
  t1=new Date().getTime();
  document.getElementById("speed")=(t1-t2)/1000;

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

  document.getElementById("speed")=(t1-t2)/1000;
    

}


input.addEventListener("keyup",enter);
input.addEventListener("keyup", anykey);
