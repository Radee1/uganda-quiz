var score = 0;

/**
 * custom function called username() which checks user input on the page
 * and lets the users access the quiz after entering the required username length
 */
 //function for username
function username() {
    var input = document.getElementById("name").value;
    if (input == "") {
        alert("Name must be filled out");
    } else if (input.length < 3) {
        alert("Name must be atleast 3 characters");
    } else {
        alert("Hi '+input+' and welcome to Uganda online quiz game! Press Ok to continue to the quiz");
        window.location = "page1.html";
    }
}

//function for counting up the score
function calc(){
    score++;
}

/** 
* On page1.html load, functions show() and hide() reveal and remove the quiz questions by element ID.
* They are used to loop through the quiz questions by hiding all questions and only showing the one to be answered at a time. 
*/
//hiding elements by id
function hide(x){
    var target = document.getElementById(x);
    target.setAttribute("style", "display:none;");
}

//showing elements by id
function show(y){
    var target = document.getElementById(y);
    target.setAttribute("style", "display:inline;");
}