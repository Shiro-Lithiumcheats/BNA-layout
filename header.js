// Verification that the js file has been included:
console.info("%c header.js has been included", 'color: #0851a0');


// Global Variables:

// Elements:
var header = document.getElementsByClassName("broke_header").innerHTML;

// Controllers:                     
var enabled = 1;                    // Modifer to enable the animation -> Default Val = 1 | [0-1]
const character = '$'                 // Character that the header letters get set to after the timer
const color = '#1b490b'               // Dark green

// Main Arrays:
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", ]; // I apologize for doing the array this way, I learned a better way but don't feel like incorporating it in this one.

// Randomizing the letter for the header:
var rndLetter = Math.floor( Math.random * letters.length);
var letter = letters[ rndLetter ];


// Functions:

  // Randomize the letters Function:
  function randLetters(){
  for (var i = 0; i < 10; i++){
  rndLetter = Math.floor( Math.random * letters.length);
  letter = letters[ rndLetter ];
  }
  setHeader();
  console.warn("%c Header function has been called" , 'color: #893206');
}
 
 
  // Set Text Function:
  function setHeader(){
  header = document.getElementsByClassName("broke_header").innerHTML;
  header = "";
  console.warn("%c Header has been set to: " + header, 'color: #893206');      // So we can track the header progress through each timer sequence
}
  
  
// Function Calling:
randLetter();
