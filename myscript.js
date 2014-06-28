/**
 *
 * The magic starts here
 *
 */
function prepareEventHandlers() {

    // All the variables that are used throughout this function
    var myImage = document.getElementById("mainImage"),
        form1 = document.getElementById("frmSupport"),
        errorMsg = document.getElementById("errorMsg"),
        emailField = document.getElementById("email");


    myImage.onclick = function() {
        alert("You clicked on the picture!");
    }

//onfocus and onblur event handler illustration

    emailField.onfocus = function() {
        if (emailField.value == "your email") {
            emailField.value = "";
        }
    };

    emailField.onblur = function() {
        if (emailField.value === "") {
            errorMsg.innerHTML = "OOPS!";
        } else {
            errorMsg.innerHTML = "";
        }
    };

    // Handling the form submit event

        form1.onsubmit = function(event) {
            var e = event || false,
                elms = form1.elements;

            e.preventDefault();
            //prevent a form from sumbitting if no email.
            if (elms.email.value === '') {
                errorMsg.innerHTML = "NOOOOOO!";
                e.stopPropagation();
                return false;
            } else {
                //reset and allow form submission:
                errorMsg.innerHTML = "";
                console.log(this);
                return this.submit();
            }
        };
}

window.onload = function() {

    prepareEventHandlers();

}


// This tokenizes the image element that has the id "mainImage"
var myImage = document.getElementById("mainImage");
var imageArray = ["images/lol.jpg", "images/indifference.png"];
var imageIndex = 0;

// This iterates through the images in the array defined above ;)
function changeImage(){
    myImage.setAttribute("src", imageArray[imageIndex]);
    imageIndex++;
    if (imageIndex >= imageArray.length) {
        imageIndex = 0;
    }
}

// This starts the image switcher interval
var intervalHandle = setInterval(changeImage, 5000);

// This sets up resetting the image switcher interval every time the image is clicked
myImage.onclick = function() {
    clearInterval(intervalHandle);
}

