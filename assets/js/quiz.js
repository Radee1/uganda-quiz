var score = 0;

/**
 * function for the creating the username
 */
function username() {
    var input = document.getElementById("name").value;
    if (input == "") {
        alert("Name must be filled out");
    } else if (input.length < 3) {
        alert("Name must be atleast 3 characters");
    } else {
        alert("Hi '+input+' and welcome to Uganda online quiz gane! Press Ok to continue to the quiz");
        window.location = "page1.html";
    }
}