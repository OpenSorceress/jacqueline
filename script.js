/* This shows a simple AJAX example, a prototype example,
 and shows you how to code the logic using just JavaScript 
 to create an input textbox, a submit button and 
 output a timer's countdown.
 */


// The AJAX example
//1. Create the request
var myRequest;

// Feature check!
if (window.XMLHttpRequest) { //does it exist? We're in Firefox, Safari, etc.
    myRequest = new XMLHttpRequest();
} else if (window.ActiveXObject) { // if not, we're in IE
    myRequest = new ActiveXObject("Microsoft.XMLHttp");
}

// 2. Create an event handler for our request to call back
myRequest.onreadystatechange = function() {
	console.log("We were called!");
	console.log(myRequest.readyState);
	// after the 4th request from the server
	// we can see that we got whatever request 
	//we were asking for.
	// if the request equals 4, let's execute this code
	// and call some DOM methods :)
    if (myRequest.readyState === 4) {
    	var p = document.createElement("p");
    	var t = document.createTextNode(myRequest.responseText);
    	p.appendChild(t);
    	document.getElementById("mainContent").appendChild(p);
    }
};

// 3. Open and send it
myRequest.open('GET', 'simple.txt', true);
// Any parameters? If not, then 'null'
myRequest.send(null);

// Simple prototype example and constructor function
function Player(n, s, r) {
	this.name = n;
	this.score = s;
	this.rank = r;
}

Player.prototype.logInfo = function() {
	console.log("I am:", this.name);
}
// Let's try another one and give it a 'promote' method 
Player.prototype.promote = function(){
	this.rank++;
	console.log("My new rank is:", this.rank);
}
var ed = new Player("Ed", 1000, 5);
ed.logInfo();
ed.promote();

var jac = new Player("Jac", 50, 42);
jac.logInfo();
jac.promote();

/* JavaScript does not have a print function
 so we can only use it to create and 
 manipulate HTML elements,
 like we will for this countdown timer in
 which I also illustrate the use 
 of global variables. Enjoy :)
*/

// Two global variables defined
var secondsRemaining;
var intervalHandle;

function resetPage() {
	document.getElementById("inputArea").style.display = "block";
}

function tick() {
	// Grab the h3 element (the countdown display)
	var timeDisplay = document.getElementById("time");
	// Convert seconds into mm:ss
	var min = Math.floor(secondsRemaining/60);
	var sec = secondsRemaining - (min * 60);
	// Add a leading zero as a string 
	//value if seconds is less than 10
	if (sec < 10) {
		sec = "0" + sec;
	}
	// Concatenate with a colon
	var message = min.toString() + ":" + sec;
	// Next, change the display
	timeDisplay.innerHTML = message;
	// Stop timer if down to zero
	if (secondsRemaining === 0) {
		alert("Done!");
		clearInterval(intervalHandle);
		resetPage();
	}
	// Subtract from seconds remaining
	secondsRemaining--;
}
function startTimer() {
	// Get contents of the "minutes" textbox
	var minutes = document.getElementById("minutes").value;
	// Sanity check if not a number
	if (isNaN(minutes)) {
		alert("Please enter a number!");
		return;
	}
	// How many seconds?
	secondsRemaining = minutes * 60;
	// Every sec, call the "tick" function
	intervalHandle = setInterval(tick, 1000);
	// Hide the form
	document.getElementById("inputArea").style.display = "none";
}

// As soon as page is loaded...
window.onload = function() {
	// create input textbox and give it an id of "minutes"
	// and define variables	
	var inputMinutes = document.createElement("input");
	inputMinutes.setAttribute("id", "minutes");
	inputMinutes.setAttribute("type", "text");
	// Create a submit or input button
	var startButton = document.createElement("input");
	startButton.setAttribute("type", "button");
	startButton.setAttribute("value", "Start Timer");
	startButton.onclick = function() {
		startTimer();
	};
	// Add to the DOM, to the div called "inputArea"
	document.getElementById("inputArea").appendChild(inputMinutes);
	document.getElementById("inputArea").appendChild(startButton);
};