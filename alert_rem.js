// Verification that the js file has been included
console.info("%c alert_rem.js has been included", 'color: #0851a0');


// Global Element(s):
var altBox = document.getElementById("alertbox_con");


// Add the hide tag and remove the show tag
function disable(){                           // We could do this in one function aka the remAltBox() func, but I'd rather use 2 functions and then call it
  altBox.classList.add('hide');
}


// Remove the alertbox
function remAltBox(){
  disable();                                  // Add the hide tag so it removes the alertbox
  console.warn("Alertbox removed");
}
