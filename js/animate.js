document.addEventListener("DOMContentLoaded",function(){
  if( !Cookies.get("animate") ) {
    goRight();
    Cookies.set("animate",1);
  }
  
});

function goRight() {
  $("#circle").animate({
    marginLeft: "800px"
  },3000,function(){
    goLeft();
  });
}
function goLeft() {
  $("#circle").animate({
    marginLeft: "0px"
  },3000,function(){
    goRight();
  });
}

// failed vanilla js animation
// marginLeft blank???

  // var i = 0;
  // var animationId = setInterval(function(){
  //   // animate...
  //   console.log(i, document.getElementById("circle").style.marginLeft);
  //   document.getElementById("circle").style.marginLeft = Math.max(0,parseInt(document.getElementById("circle").style.marginLeft))+10+"px";
  //   // get out after 25 steps
  //   if( i > 25 ) {
  //     clearInterval(animationId);
  //   }
  //   i++; // increase counter
  // },100);