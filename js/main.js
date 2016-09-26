document.addEventListener("DOMContentLoaded",function(){
  setH1();
  document.querySelector("form").addEventListener("submit",function(event){
    var name = document.querySelector("form #name").value;
    console.log( name );
    // write the key to the Cookie
    Cookies.set("name",name );
    // stop the form from submitting
    event.preventDefault();
    setH1();
  });//end form%submit
  document.querySelector("#clear").addEventListener("click",function(event){
    //expire 
    Cookies.expire("name");
    //and reset the h1
    setH1();
  });//end #clear%click
});//end document%DOMContentLoaded


function setH1(){
  var el = document.querySelector("h1");
  if( Cookies.get("name") ) {
    el.innerText = "Hello, " + Cookies.get("name") + "!";
  } else {
    el.innerText = "My Cookie Test";
  }
}
// Cookies.set("Snack","Goldfish");
// console.log( Cookies.get("Snack") );