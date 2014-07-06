// Simple AJAX example

// 1. Create the request
var myRequest;

// Feature check!
if (window.XMLHttpRequest) { //does it exist? We're in Firefox, Safari, etc.
    myRequest = new XMLHttpRequest();
} else if (window.ActiveXObject) {// if not, we're in IE
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