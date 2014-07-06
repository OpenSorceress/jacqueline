// Simple AJAX example

// 1. Create the request
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

// Open and send it
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

// JavaScript does not have any output/print functions
// so we can only use it to manipulate HTML elements