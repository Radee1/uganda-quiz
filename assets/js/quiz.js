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

hide("geog-section");
hide("neighbor-section");
hide("flag-section");
hide("independence-section");
hide("results-section");
show("president-section");

//president question
function page1() {
    hide("geog-section");
    hide("neighbor-section");
    hide("flag-section");
    hide("results-section");
    hide("independence-section");
    show("president-section");
}

//geog question
function page2() {
    hide("president-section");
    hide("neighbor-section");
    hide("flag-section");
    hide("results-section");
    hide("independence-section");
    show("geog-section");
}

//independence question
function page3() {
    hide("president-section");
    hide("geog-section");
    hide("results-section");
    hide("flag-section");
    hide("neighbor-section");
    show("independence-section");
}

//flag question
function page4() {
    hide("president-section");
    hide("independence-section");
    hide("geog-section");
    hide("neighbor-section");
    hide("results-section");
    show("flag-section");
}

//neighbors question
function page5() {
    hide("president-section");
    hide("results-section");
    hide("geog-section");
    hide("independence-section");
    hide("flag-section");
    show("neighbor-section");
}