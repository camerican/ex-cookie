document.addEventListener("DOMContentLoaded",function(){

});

function goRight() {
  var i = 0;
  var animationId = setInterval(function(){
    // animate...
    document.querySelector("#circle").style.marginLeft += "5px";
    // get out after 25 steps
    if( i > 25 ) {
      clearInterval(animationId);
      goLeft();
    }
    i++; // increase counter
  },100);
}
function goLeft() {
  var i = 0;
  var animationId = setInterval(function(){
    // animate...
    document.querySelector("#circle").style.marginLeft -= "5px";
    // get out after 25 steps
    if( i > 25 ) {
      clearInterval(animationId);
      goRight();
    }
    i++; // increase counter
  },100);
}