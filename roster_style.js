// Verification that the js file has been included
console.info("%c roster_style.js has been included", 'color: #0851a0');


// Global Controllers:
var style = 2;                    // Style controller: Default Val - 2 (2 looks the best!)


// Function to get the variable
function getStyle(){
  if (style == 0){
    roster1();
  }
  else if( style == 1){
    roster1();
  }
  else if( style == 2){
    roster2();
  }
  else{
    roster2();  
  }
}


// Function Calls:
getStyle();


// Functions for the roster styles:
function roster1(){
document.write("<div class='broke_roster_container'>" +

"<div class='broke_roster'>" + 
  
  
  "<a href=''> Nosebeer </a><br>" +
  "<a href=''> Park </a><br>"   +
  "<a href=''> Shadow </a><br>"   +
  "<a href=''> Connect </a><br>"  +
  "<a href=''> Channel32 </a><br>"+
  "<a href='https://www.youtube.com/c/Palmerr'> Palmerr </a><br> " + 
  "<a href='https://www.youtube.com/c/DurRud'> Rud </a>" +
          "</div></div>")  
}

function roster2(){
document.write(
  "<div class='broke_roster_container'>" +
  "<div class='broke_roster'>" + 
   "<a href = 'https://youtube.com/c/nosebeer'> Nosebeer </a> X " +
    "<a href=''> Park </a> X " + 
    "<a href=''> Shadow </a> X " +  
    "<a href=''> Connect </a> X " + 
    "<a href=''> Channel32</a> X " + 
    "<a href='https://www.youtube.com/c/Palmerr'> Palmerr </a> X " + 
    "<a href='https://www.youtube.com/c/DurRud'> Rud </a>" +
    "</div>" + 
  "</div>")
}
