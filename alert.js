/* TODO: - Allow administrator(s) to edit the box css (color, padding, w+h, background, etc...)
         - Make it so it doesn't run off a global variable but rather capture events
*/        


// Verification that the JS has been included
console.info("%c Alert.js has been included", 'color: #0851a0');


// Global Variables

/* Controllers:
Change this value to
get the desired alert
you want. ( 0 - 4 )
*/
var show = 4;           // The style of alert box you want - Default Val: 0 (hidden)
var str;                // The current string of the alert box - Default Val: None (THIS WILL BE OVERWRITTEN)


// Colors:
var uTube = "#87040c";  // Dark read
var sCloud = "#f7822e"; // Orange
var site = "#474441";   // Dark Grey


// Event Declaration:
var Upload = 1;
var uploadStr = "New video has been uploaded";
var sUpload = 2;
var sUploadStr = "New music has been uploaded";
var Announcement = 3;
var AnnounceStr = "Member pages are underdevelopment";
var Shoutout = 4;
var shoutoutStr = "<a href='http://lithiumcheats.mybb.us/'> Check out Lithiumcheats (click me) </a>"
var tipStr = "(click to hide)";
    
    
// Actual Codens:

// Get the event then draw if able:
function getEvent(){
show = show;
str = "";
  if (show == 1) {
    Upload;
    str = uploadStr;
    drawAlertBox();
  }
  else if(show == 2){
    sUpload;
    str = sUploadStr;
    drawAlertBox();
  }
  else if(show == 3){
    Announcement;
    str = AnnounceStr;
    drawAlertBox();
  }
  else if(show == 4){
    Shoutout;
    str = shoutoutStr;
    drawAlertBox();
  }
  else {
    show = 0;
  }
}


// Draw the alert box with HTML:
function drawAlertBox(){
  document.write(
    "<div class='broken_alert_container' id='alertbox_con' onclick='remAltBox()'>" +
    "<div class='broke_alert'>" + str + " " + tipStr +  
    "</div>" + "</div>" );
    console.warn("box has been drawn for:" + show);
}


// Debugging
// Get Show Value:
function getShowValue(){
  console.warn(show);  
}


// Function Calling:
getEvent();
