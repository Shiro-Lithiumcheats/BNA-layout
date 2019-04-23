// This javascript modifies the sub-header text of the site
// Credits to catbox.moe for the script itself


// Verification that the js file has been included
console.info("%c sub_header.js has been included", 'color: #0851a0');


// Global Controller(s):
var enabled = 1;


// Array of our mottos (add/ change if you want):
var mottos = [
  "We be making good bread",
  "Westside Hittas",
  "Diamonds in our cocaine",
  "Bitch snatchers and glock owners",
  "Rolexes and Bars",
  "Benzo Overload",
  "popp addy now im superman",
  "conec got longer conec got faster",
];


// Randomizing the motto (sub_heading) string:
  var num = Math.floor( Math.random() * mottos.length );
  var motto = mottos[ num ];
  var mottoStr = '<div class="broke_sub_header" id="subMotto">'  + motto + '</div>' ;
  var mottoTxt = document.getElementById("subMotto").innerHTML;
    document.getElementById("subMotto").innerHTML = motto;
// document.write(mottoStr); document.close()


//Functons to fade our motto
function fadeOut(){                                   // Add hide then remove show so we can fade the image out
  subMotto.classList.add('hide');
  subMotto.classList.remove('show');
}


function fadeIn(){                                    // Remove hide and then add show so we can fade the image in
  num = Math.floor( Math.random() * mottos.length );
  motto = mottos[ num ];
  subMotto.classList.add('show');
  subMotto.classList.remove('hide');
}



// Timers to fade out then fade in the motto text:
setInterval( function(){
  fadeOut();
}, 4000);

setInterval( function(){
  fadeIn();
  document.getElementById("subMotto").innerHTML = motto;
  console.warn(" %c Motto changed to: " + motto, "color: #e0520b");
}, 4999);
