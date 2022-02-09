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
        alert(`Hi ${input} and welcome to Uganda online quiz game! Press Ok to continue to the quiz`);
        window.location = "page1.html";
    }
}

//function for counting up the score
function calc() {
    score++;
}

/** 
 * On page1.html load, functions show() and hide() reveal and remove the quiz questions by element ID.
 * They are used to loop through the quiz questions by hiding all questions and only showing the one to be answered at a time. 
 */
//hiding elements by id
function hide(x) {
    var target = document.getElementById(x);
    target.setAttribute("style", "display:none;");
}

//showing elements by id
function show(y) {
    var target = document.getElementById(y);
    target.setAttribute("style", "display:inline;");
}

hide("geog-section");
hide("neighbor-section");
hide("flag-section");
hide("independence-section");
hide("results-section");
show("president-section");

//president page
function page1() {
    hide("geog-section");
    hide("neighbor-section");
    hide("flag-section");
    hide("results-section");
    hide("independence-section");
    show("president-section");
}

//geog page
function page2() {
    hide("president-section");
    hide("neighbor-section");
    hide("flag-section");
    hide("results-section");
    hide("independence-section");
    show("geog-section");
}

//independence page
function page3() {
    hide("president-section");
    hide("geog-section");
    hide("results-section");
    hide("flag-section");
    hide("neighbor-section");
    show("independence-section");
}

//flag page
function page4() {
    hide("president-section");
    hide("independence-section");
    hide("geog-section");
    hide("neighbor-section");
    hide("results-section");
    show("flag-section");
}

//neighbors page
function page5() {
    hide("president-section");
    hide("results-section");
    hide("geog-section");
    hide("independence-section");
    hide("flag-section");
    show("neighbor-section");
}

//questionOne about the president 
function correct1() {
    calc();
    var input = document.getElementById("yoweri");
    input.setAttribute("class", "choice");
    //remove scoring from choice answer
    document.getElementById('yoweri').removeAttribute("onclick");
    document.getElementById('kiza').removeAttribute("onclick");
    document.getElementById('bobi').removeAttribute("onclick");
    document.getElementById('fred').removeAttribute("onclick");
}

function kiza() {
    var rong = document.getElementById("kiza");
    rong.setAttribute("class", "choice");
    document.getElementById('yoweri').removeAttribute("onclick");
    document.getElementById('kiza').removeAttribute("onclick");
    document.getElementById('bobi').removeAttribute("onclick");
    document.getElementById('fred').removeAttribute("onclick");
}

function bobi() {
    var rong = document.getElementById("bobi");
    rong.setAttribute("class", "choice");
    document.getElementById('yoweri').removeAttribute("onclick");
    document.getElementById('kiza').removeAttribute("onclick");
    document.getElementById('bobi').removeAttribute("onclick");
    document.getElementById('fred').removeAttribute("onclick");
}

function fred() {
    var rong = document.getElementById("fred");
    rong.setAttribute("class", "choice");
    document.getElementById('yoweri').removeAttribute("onclick");
    document.getElementById('kiza').removeAttribute("onclick");
    document.getElementById('bobi').removeAttribute("onclick");
    document.getElementById('fred').removeAttribute("onclick");
}

//questionTwo about the geography 
function correct2() {
    calc();
    var input = document.getElementById("eaf");
    input.setAttribute("class", "choice");
    document.getElementById('eaf').removeAttribute("onclick");
    document.getElementById('caf').removeAttribute("onclick");
    document.getElementById('north').removeAttribute("onclick");
    document.getElementById('saf').removeAttribute("onclick");
}

function caf() {
    var rong = document.getElementById("caf");
    rong.setAttribute("class", "choice");
    document.getElementById('eaf').removeAttribute("onclick");
    document.getElementById('caf').removeAttribute("onclick");
    document.getElementById('north').removeAttribute("onclick");
    document.getElementById('saf').removeAttribute("onclick");
}

function north() {
    var rong = document.getElementById("north");
    rong.setAttribute("class", "choice");
    document.getElementById('eaf').removeAttribute("onclick");
    document.getElementById('caf').removeAttribute("onclick");
    document.getElementById('north').removeAttribute("onclick");
    document.getElementById('saf').removeAttribute("onclick");
}

function saf() {
    var rong = document.getElementById("saf");
    rong.setAttribute("class", "choice");
    document.getElementById('eaf').removeAttribute("onclick");
    document.getElementById('caf').removeAttribute("onclick");
    document.getElementById('north').removeAttribute("onclick");
    document.getElementById('saf').removeAttribute("onclick");
}

//questionThree about independence
function correct3() {
    calc();
    var input = document.getElementById("uhuru");
    input.setAttribute("class", "choice");
    document.getElementById('uhuru').removeAttribute("onclick");
    document.getElementById('fourth').removeAttribute("onclick");
    document.getElementById('fifth').removeAttribute("onclick");
    document.getElementById('sixth').removeAttribute("onclick");
}

function fourth() {
    var rong = document.getElementById("fourth");
    rong.setAttribute("class", "choice");
    document.getElementById('uhuru').removeAttribute("onclick");
    document.getElementById('fourth').removeAttribute("onclick");
    document.getElementById('fifth').removeAttribute("onclick");
    document.getElementById('sixth').removeAttribute("onclick");
}

function fifth() {
    var rong = document.getElementById("fifth");
    rong.setAttribute("class", "choice");
    document.getElementById('uhuru').removeAttribute("onclick");
    document.getElementById('fourth').removeAttribute("onclick");
    document.getElementById('fifth').removeAttribute("onclick");
    document.getElementById('sixth').removeAttribute("onclick");
}

function sixth() {
    var rong = document.getElementById("sixth");
    rong.setAttribute("class", "choice");
    document.getElementById('uhuru').removeAttribute("onclick");
    document.getElementById('fourth').removeAttribute("onclick");
    document.getElementById('fifth').removeAttribute("onclick");
    document.getElementById('sixth').removeAttribute("onclick");
}

//questionFour about the flag colors
function correct4() {
    calc();
    var input = document.getElementById("byr");
    input.setAttribute("class", "choice");
    document.getElementById('byr').removeAttribute("onclick");
    document.getElementById('rgg').removeAttribute("onclick");
    document.getElementById('ybr').removeAttribute("onclick");
    document.getElementById('byb').removeAttribute("onclick");
}

function ybr() {
    var rong = document.getElementById("ybr");
    rong.setAttribute("class", "choice");
    document.getElementById('byr').removeAttribute("onclick");
    document.getElementById('rgg').removeAttribute("onclick");
    document.getElementById('ybr').removeAttribute("onclick");
    document.getElementById('byb').removeAttribute("onclick");
}

function rgg() {
    var rong = document.getElementById("rgg");
    rong.setAttribute("class", "choice");
    document.getElementById('byr').removeAttribute("onclick");
    document.getElementById('rgg').removeAttribute("onclick");
    document.getElementById('ybr').removeAttribute("onclick");
    document.getElementById('byb').removeAttribute("onclick");
}

function byb() {
    var rong = document.getElementById("byb");
    rong.setAttribute("class", "choice");
    document.getElementById('byr').removeAttribute("onclick");
    document.getElementById('rgg').removeAttribute("onclick");
    document.getElementById('ybr').removeAttribute("onclick");
    document.getElementById('byb').removeAttribute("onclick");
}

//questionFive about neighbors
function correct5() {
    calc();
    var input = document.getElementById("ss");
    input.setAttribute("class", "choice");
    document.getElementById('rw').removeAttribute("onclick");
    document.getElementById('tz').removeAttribute("onclick");
    document.getElementById('ke').removeAttribute("onclick");
    document.getElementById('ss').removeAttribute("onclick");
}

function ke() {
    var rong = document.getElementById("ke");
    rong.setAttribute("class", "choice");
    document.getElementById('rw').removeAttribute("onclick");
    document.getElementById('tz').removeAttribute("onclick");
    document.getElementById('ke').removeAttribute("onclick");
    document.getElementById('ss').removeAttribute("onclick");
}

function tz() {
    var rong = document.getElementById("tz");
    rong.setAttribute("class", "choice");
    document.getElementById('rw').removeAttribute("onclick");
    document.getElementById('tz').removeAttribute("onclick");
    document.getElementById('ke').removeAttribute("onclick");
    document.getElementById('ss').removeAttribute("onclick");
}

function rw() {
    var rong = document.getElementById("rw");
    rong.setAttribute("class", "choice");
    document.getElementById('rw').removeAttribute("onclick");
    document.getElementById('tz').removeAttribute("onclick");
    document.getElementById('ke').removeAttribute("onclick");
    document.getElementById('ss').removeAttribute("onclick");
}

//show results
function results() {
    hide("neighbor-section");
    show("results-section");

    var questionOne = document.getElementById("yoweri");
    questionOne.setAttribute("class", "correct");

    var questionTwo = document.getElementById("eaf");
    questionTwo.setAttribute("class", "correct");

    var questionThree = document.getElementById("uhuru");
    questionThree.setAttribute("class", "correct");

    var questionFour = document.getElementById("byr");
    questionFour.setAttribute("class", "correct");

    var questionFive = document.getElementById("ss");
    questionFive.setAttribute("class", "correct");

    document.getElementById("points").innerHTML = score;
}