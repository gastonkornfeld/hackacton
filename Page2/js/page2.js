

// add a score system in the future, for every question correct goes up different amounts. and for every incorrect goes down 1 point.
// i need to make two functions one to add and other to rest that will allow a parameter. and that functions
// are gonna store the score in an screen object so show it to the user permanently.
// in the end is gonna how a screen with your final score.
// to solve the puzzle is gonna give a lot of point
// i also can add a timer function (dont remember the name now), so if after 30 minutes didnt finish ,so the user is gonna lose.
// also want to put it in the screen.

let userName = "";
while (userName == "") {
    userName= prompt("In this level I will need your name");
}

let userPersonalQuestion = "";
while (userPersonalQuestion == "") {
    userPersonalQuestion = prompt("Now i need the name of your mother");


}

let userEyesColour = ""; //used in buton 32
while (userEyesColour == "") {
    userEyesColour = prompt("And the most important question. wich colour are your eyes?");


}


let divButons = document.getElementById("butons");
divButons.style.display = "none";
// lets get the score div from the document
let scoreDiv = document.getElementById("score");
// we need a variable to be iputing the score on it and start on 0
let userScore = 0;
scoreDiv.innerHTML="Score: " + userScore;
// now a fucntion that is going to add the score of every exercise. is gonna take the add score as a parameter
// if i need to rest score i just put a negative value

// function that add score to the user after every question.
function addScore (add) {
    userScore = userScore + add;
    scoreDiv.innerHTML="Score: " + userScore;
    if (userScore >= 0) {
        scoreDiv.style.color = "green";
    }
    else {
        scoreDiv.style.color = "red";
    }
} 





// Lest take the div .questions where we are gonna be putting the questions
var questionDiv = document.getElementById("questions");

// get the colour buttons in to a variable
let red = document.getElementById("red"); //clue position 1 in buton DOM display block in buton A or a(28) 
let yellow = document.getElementById("yellow"); // display block in buton Food(16). clue position 2 in buton Miss(22)
let green = document.getElementById("green"); // clue position 3 in buton random. . display block in buton Filter
let blue = document.getElementById("blue");  // display block in buton dicctionary(4). clue position 4 in buton Map (30)

// and the level 2 buton
//used in wining buton 
let level2Buton = document.getElementById("level2");

// take the wining butom from the page

let winingButon = document.getElementById("win");

winingButon.addEventListener('click', () => {
    document.body.innerHTML = "Hello " + userName + "<br><strong> YOU WON THE SECOND LEVEL CONTRATULATIONS" 
    + "<br><br><br> Your final score is: " + userScore;
    document.body.appendChild(level2Buton);
    level2Buton.style.display = "inline";
})
// also the start again buton
let startAgain = document.getElementById("startAgain"); //used in buton 14
// this is the part when they click the colour buttons to acces to the wining buton and get to the other page



// first if they press the red
red.addEventListener('click', () => {
    red.style.border = "10px solid green";
})

// if they press the duck buton
yellow.addEventListener('click', () => {
    if (red.style.border == "10px solid green"){
        yellow.style.border = "10px solid green";
    }
    else {
        yellow.style.border = "10px solid red";
    }
})

// if they press green buton
green.addEventListener('click', () => {
    if (red.style.border == "10px solid green" && yellow.style.border == "10px solid green" ){ //correct option
        green.style.border = "10px solid green";
    }
    else if(red.style.border == "10px solid green" && yellow.style.border != "10px solid green") {
        red.style.border = "10px solid red";
        green.style.border = "10px solid red";
    }
    else {
        green.style.border = "10px solid red";
    }
})


// when they press the blue buton

blue.addEventListener('click', () => {
    if (red.style.border == "10px solid green" && yellow.style.border == "10px solid green" && green.style.border == "10px solid green"){
        blue.style.border = "10px solid green";
        console.log("Amazing you solve it. Look for the winning Buton");
        winingButon.style.display = "block";
        

        // the part when they win goes here
        
    }
    else if(red.style.border == "10px solid green" && yellow.style.border == "10px solid green" && green.style.border != "10px solid green") {
        red.style.border = "10px solid red";
        yellow.style.border = "10px solid red";
        blue.style.border = "10px solid red";
    }
    else if (red.style.border == "10px solid green" && yellow.style.border != "10px solid green" && green.style.border != "10px solid green") {
        red.style.border = "10px solid red";
        blue.style.border = "10px solid red";
    }
    else {
        blue.style.border = "10px solid red";
    }
})





// lets get first the instructions buton

// after i will put all the buttoms of the screen to hidden to so when the instructions button is pressed they will appear.
// i can put another set of fake butons and instructions in the beggining and all of this buttons are gonna get hide in that moment

//i will take the marquees to hide after the instructions buton is pressed to
let marquees = document.querySelectorAll("marquee");

// i also want the footer to appear after the instruction are pressed

let footer = document.getElementById("footer");

// Buton Instructions "39"


let questionInstructions = document.getElementById("Instructions");
let questionInstructionsInput = document.getElementById("question1");
let questionIndtructionsButon = document.getElementById("but1");

questionIndtructionsButon.addEventListener('click', () => {
    if (questionInstructionsInput.value == "40"){
        alert("Great");
        questionIndtructionsButon.style.backgroundColor = "green";
        questionInstructions.style.display = "none";  
        addScore (5);
    }
    else {
        alert("It is wrong Buddy");
        questionIndtructionsButon.style.backgroundColor = "Red";
        addScore (-2);
    }
})

// First i will set up the instructions of the game in the buton Instuction. so only will begin if they click on it

let instructionsLogicButon = document.getElementById("b39"); //first button of 64 the instructionss

instructionsLogicButon.addEventListener('click', () => {
    alert("Hello welcome to the level 2,  dont try to follow an order. Enjoy"); //the instructions of the beggining goes here
    alert("They are some clues happening in the console. You should check it after you resolve the exercises");
    alert("the objective of the game is to pass to the next Screen, one without buttons");
    divButons.style.display = "grid";
    questionInstructions.style.display = "block";
    instructionsLogicButon.style.display = "none";
    footer.style.display = "block";
    marquees[0].style.display = "none";
    marquees[1].style.display = "none";
    addScore(1);

    
    

})
// initialize the user name and personal question
// the personal question is used in the question 13

// Buton Number 1

// get the variables
let question1 = document.getElementById("hidden1");
let question1Input = document.getElementById("question1b");
let question1Buton = document.getElementById("but1b");


//get the main button
let LogicButon1 = document.getElementById("b1"); //2 of 64 the instructionss

// add the click event to make appear the hidden div for the question

LogicButon1.addEventListener('click', () => {
    alert("You know the value of True is 1 if you want to add it to a number?"); //the instructions of the beggining goes here
    question1.style.display = "block";
})

// chek the input of the question if it is correct when the submitt is pressed

question1Buton.addEventListener('click', () => {
    if (question1Input.value == "mercury.splice(2, 2);"){
        alert("Now mercury = [3, 6, 33] , Thanks");
        question1Buton.style.backgroundColor = "green"
        question1.style.display = "none";
        LogicButon1.style.visibility = "hidden";
        addScore (6);

    }
    else {
        question1Buton.style.backgroundColor = "red";
        alert("Wrong answer. You should go and review the splice array method");
        addScore (-2);

        
    }
})





// Buton Number 2


// get the variables
let question2 = document.getElementById("hidden2");
let question2Input = document.getElementById("question2");
let question2Buton = document.getElementById("but2");


//get the main button
let LogicButon2 = document.getElementById("b2"); //3 of 64 the instructionss

// add the click event to make appear the hidden div for the question

LogicButon2.addEventListener('click', () => {
    
    question2.style.display = "block";
})

// chek the input of the question if it is correct when the submitt is pressed

question2Buton.addEventListener('click', () => {
    if (question2Input.value == "and"){
        alert("Great you figure it out" );
        question2Buton.style.backgroundColor = "green";
        question2.style.display = "none"; 
        LogicButon2.style.visibility = "hidden"; 
        addScore (4);

    }
    else {
        question2Buton.style.backgroundColor = "red";
        alert("Wrong. You should be looking for the answer in the screen");
        addScore (-2);

    }
})






// Buton Number 3


// get the variables
let question3 = document.getElementById("hidden3");
let question3Input = document.getElementById("question3");
let question3Buton = document.getElementById("but3");


//get the main button
let LogicButon3 = document.getElementById("b3"); //4 of 64  instructionss

// add the click event to make appear the hidden div for the question

LogicButon3.addEventListener('click', () => {
    
    question3.style.display = "block";
})

// chek the input of the question if it is correct when the submitt is pressed

question3Buton.addEventListener('click', () => {
    if (question3Input.value == "Math.random()*100;"){
        alert("Correct");
        console.log("Very good.  I will give you a clue to solve this game: the Third key color is 'green'");
        console.log("Third key color is 'green'");
        question3Buton.style.backgroundColor = "green";
        question3.style.display = "none";  
        LogicButon3.style.visibility = "hidden";  
        addScore (8);

    }
    else {
        question3Buton.style.backgroundColor = "red";
        alert("Wrong. Math is a direct library form javascript, try to find the answer in w3Schools or go to the console for a clue");
        console.log(" I used *100 after the common random function");
        addScore (-1);

    }
})




// Buton Number 4

// get the variables
let question4 = document.getElementById("hidden4");
let question4Input = document.getElementById("question4");
let question4Buton = document.getElementById("but4");


//get the main button
let LogicButon4 = document.getElementById("b4"); //5 of 64  instructionss

// add the click event to make appear the hidden div for the question

LogicButon4.addEventListener('click', () => {
    
    question4.style.display = "block";
})

// chek the input of the question if it is correct when the submitt is pressed

question4Buton.addEventListener('click', () => {
    if (question4Input.value == "ਸਤ ਸ੍ਰੀ ਅਕਾਲ" || question4Input.value == "ਸਤਿ ਸ਼੍ਰੀ ਅਕਾਲ" ){
        question4Buton.style.backgroundColor = "green";
        alert("I actually dont understand Punjabi but Thanks for the hi");
        question4.style.display = "none";
        blue.style.display = "block";
        LogicButon4.style.visibility = "hidden";
        addScore (15);


    }
    else {
        alert("You are doing something wrong, why not to try google translate");
        question4Buton.style.backgroundColor = "red";
        addScore (-3);

        
    }
})





// Buton Number 5


// get the variables
let question5 = document.getElementById("hidden5");
let question5Input = document.getElementById("question5");
let question5Buton = document.getElementById("but5");


//get the main button
let LogicButon5 = document.getElementById("b5"); //6 of 64  instructionss

// add the click event to make appear the hidden div for the question

LogicButon5.addEventListener('click', () => {
    alert("Lets see your visual logic working"); //the alert message when they press goes here
    question5.style.display = "block";
})

// chek the input of the question if it is correct when the submitt is pressed

question5Buton.addEventListener('click', () => {
    if (question5Input.value == "4"){
        question5Buton.style.backgroundColor = "green";
        alert("Well done");
        question5.style.display = "none";
        LogicButon5.style.visibility = "hidden";
        addScore (5);
    }
    else {
        alert("Wrong. It is not so hard, you can do it");
        question5Buton.style.backgroundColor = "red";
        addScore (-1);

        
    }
})



// buton 6


// get the variables
let question6 = document.getElementById("hidden6");
let question6Input = document.getElementById("question6");
let question6Buton = document.getElementById("but6");


//get the main button
let LogicButon6 = document.getElementById("b6"); //7 of 64  instructionss

// add the click event to make appear the hidden div for the question

LogicButon6.addEventListener('click', () => {
    alert("A little more of Javascript"); //the alert message when they press goes here
    question6.style.display = "block";
})

// chek the input of the question if it is correct when the submitt is pressed

question6Buton.addEventListener('click', () => {
    if (question6Input.value == "6"){
        question6Buton.style.backgroundColor = "green";
        alert("Exactly good Job");
        question6.style.display = "none";
        LogicButon6.style.visibility = "hidden";
        addScore (5);

        

    }
    else {
        alert("Wrong answer. I was thinking more in something like the number of the buton");
        question6Buton.style.backgroundColor = "red";
        addScore (-1);
    }
})

// buton 7(no need of an input it is just the button)

// get the variables
let question7 = document.getElementById("hidden7");
let question7Buton = document.getElementById("but7");


//get the main button
let LogicButon7 = document.getElementById("b7"); //8 of 64  instructionss

// add the click event to make appear the hidden div for the question

LogicButon7.addEventListener('click', () => {
    
    question7.style.display = "block";
    addScore (1);

})

// chek the input of the question if it is correct when the submitt is pressed

question7Buton.addEventListener('click', () => {
    question7.style.display = "none";
    question7Buton.style.backgroundColor = "green";
    LogicButon7.style.visibility = "hidden";
        

        
    
})





// buton 8

// get the variables
let question8 = document.getElementById("hidden8");
let question8Input = document.getElementById("question8");
let question8Buton = document.getElementById("but8");


//get the main button
let LogicButon8 = document.getElementById("b8"); // 9 of 64  instructionss

// add the click event to make appear the hidden div for the question

LogicButon8.addEventListener('click', () => {
    alert("Lest talk about sorting things"); //the alert message when they press goes here
    question8.style.display = "block";
})

// chek the input of the question if it is correct when the submitt is pressed

question8Buton.addEventListener('click', () => {
    if (question8Input.value == "[100, 40, 25, 10, 5, 1]"){
        question8Buton.style.backgroundColor = "green";
        alert("Good job sorting the array");
        question8.style.display = "none";
        LogicButon8.style.visibility = "hidden";
        addScore (9);       
    }
    else {
        alert("Wron guess,You should review how the sort works for number arrays");
        question8Buton.style.backgroundColor = "red";
        addScore (-0.5);

        
    }
})




// buton 9
// get the variables
let question9 = document.getElementById("hidden9");
let question9Input = document.getElementById("question9");
let question9Buton = document.getElementById("but9");


//get the main button
let LogicButon9 = document.getElementById("b9"); // 10 of 64  instructionss

// add the click event to make appear the hidden div for the question

LogicButon9.addEventListener('click', () => {
    console.log("If he takes out 38 socks (adding the two biggest amounts, 21 and 17),"
    + " although it is very unlikely, it is possible they could all be blue and red.")
    alert("Lets see if you can find this solution. Try first without help and then you have a clue in the console if needs."); //the alert message when they press goes here
    question9.style.display = "block";
})

// chek the input of the question if it is correct when the submitt is pressed

question9Buton.addEventListener('click', () => {
    
    if (question9Input.value == "40"){
        question9Buton.style.backgroundColor = "green";
        alert("I hope the socks were clean, good Job");
        question9.style.display = "none";
        LogicButon9.style.visibility = "hidden";
        addScore (8);
    }
    else {
        alert("Wrong, wrong wrong. well here is a little more of help, To make 100 percent certain that "
        + "he also has a pair of black socks he must take out a further two socks.");
        question9Buton.style.backgroundColor = "red";
        addScore (-1);

        
    }
})



// buton 10
// get the variables
let question10 = document.getElementById("hidden10");
let question10Input = document.getElementById("question10");
let question10Buton = document.getElementById("but10");


//get the main button
let LogicButon10 = document.getElementById("b10"); // 11 of 64  instructionss

// add the click event to make appear the hidden div for the question

LogicButon10.addEventListener('click', () => {
    question10.style.display = "block";
})

// chek the input of the question if it is correct when the submitt is pressed

question10Buton.addEventListener('click', () => {
    
    if (question10Input.value == "fixed"){
        question10Buton.style.backgroundColor = "green";
        alert("Very good");
        question10.style.display = "none";
        LogicButon10.style.visibility = "hidden";
        addScore (5);
    }
    else {
        alert("Wrong!!!!!. Please check the CSS position propertyes");
        question10Buton.style.backgroundColor = "red";
        addScore (-3);
    }
})



// buton 11
// get the variables
let question11 = document.getElementById("hidden11");
let question11Input = document.getElementById("question11");
let question11Buton = document.getElementById("but11");


//get the main button
let LogicButon11 = document.getElementById("b11"); // 12 of 64  instructionss

// add the click event to make appear the hidden div for the question

LogicButon11.addEventListener('click', () => {
    question11.style.display = "block";
})

// chek the input of the question if it is correct when the submitt is pressed

question11Buton.addEventListener('click', () => {
    
    if (question11Input.value == "peter"){
        question11Buton.style.backgroundColor = "green";
        alert("Did you tought about fofo for a second?");
        question11.style.display = "none";
        LogicButon11.style.visibility = "hidden";
        addScore (5);
    }
    else {
        alert("Wrong guess. The problem is actually telling you");
        question11Buton.style.backgroundColor = "red";
        addScore (-2);

        
    }
})




// buton 12
// get the variables
let question12 = document.getElementById("hidden12");
let question12Input = document.getElementById("question12");
let question12Buton = document.getElementById("but12");


//get the main button
let LogicButon12 = document.getElementById("b12"); // 13 of 64  instructionss

// add the click event to make appear the hidden div for the question

LogicButon12.addEventListener('click', () => {
    question12.style.display = "block";
    console.log("There is a Face in to the hear");
})

// chek the input of the question if it is correct when the submitt is pressed

question12Buton.addEventListener('click', () => {
    
    if (question12Input.value == "7"){
        question12Buton.style.backgroundColor = "green";
        alert("You have a good eye for faces");
        question12.style.display = "none";
        LogicButon12.style.visibility = "hidden";
        addScore (6);

        

    }
    else {
        alert("Wrong. Try to look with more details, or the console");
        question12Buton.style.backgroundColor = "red";
        addScore (-0.5);
    }
})



// buton 13
// get the variables
let question13 = document.getElementById("hidden13");
let question13Input = document.getElementById("question13");
let question13Buton = document.getElementById("but13");


//get the main button
let LogicButon13 = document.getElementById("b13"); // 14 of 64  instructionss

// add the click event to make appear the hidden div for the question

LogicButon13.addEventListener('click', () => {
    question13.style.display = "block";
    
})

// chek the input of the question if it is correct when the submitt is pressed

question13Buton.addEventListener('click', () => {
    
    if (question13Input.value == userPersonalQuestion){ //this variable is in line 62
        question13Buton.style.backgroundColor = "green";
        alert("Seems like someone remember the mothers name");
        question13.style.display = "none";
        LogicButon13.style.visibility = "hidden";
        addScore (5);
    }
    else {
        alert("Wrong answer, mmm did you lie before?");
        question13Buton.style.backgroundColor = "red";
        addScore (-25);
    }
})



// buton 14
// get the variables
let question14 = document.getElementById("hidden14");

let question14Buton = document.getElementById("but14");


//get the main button
let LogicButon14 = document.getElementById("b14"); // 15 of 64  instructionss

// add the click event to make appear the hidden div for the question

LogicButon14.addEventListener('click', () => {
    question14.style.display = "block";
    LogicButon14.style.visibility = "hidden";
    
})

// the eraing progress part

question14Buton.addEventListener('click', () => {
    addScore (25);
    document.body.innerHTML = "Hello " + userName + "<br>seems like you erase the game, you have to start again" + "<br><br><br> Your final score is: " + userScore;
    document.body.appendChild(startAgain);
    startAgain.style.display = "inline";

        

    
})



// buton 15
// get the variables
let question15 = document.getElementById("hidden15");
let question15Input = document.getElementById("question15");
let question15Buton = document.getElementById("but15");


//get the main button
let LogicButon15 = document.getElementById("b15"); // 16 of 64  instructionss

// add the click event to make appear the hidden div for the question

LogicButon15.addEventListener('click', () => {
    question15.style.display = "block";
    
})

// chek the input of the question if it is correct when the submitt is pressed

question15Buton.addEventListener('click', () => {
    
    if (question15Input.value == "376"){ 
        question15Buton.style.backgroundColor = "green";
        alert("Good job Milking the answer");
        question15.style.display = "none";
        LogicButon15.style.visibility = "hidden";
        addScore (7);

    }
    else {
        alert("Thats wrong, a little of help 37 is part of the solution");
        question15Buton.style.backgroundColor = "red";
        addScore (-1);
    }
})



// buton 16
// get the variables
let question16 = document.getElementById("hidden16");
let question16Input = document.getElementById("question16");
let question16Buton = document.getElementById("but16");


//get the main button
let LogicButon16 = document.getElementById("b16"); // 17 of 64  instructionss

// add the click event to make appear the hidden div for the question

LogicButon16.addEventListener('click', () => {
    question16.style.display = "block";
    
})

// chek the input of the question if it is correct when the submitt is pressed

question16Buton.addEventListener('click', () => {
    
    if (question16Input.value == "egg"){ 
        question16Buton.style.backgroundColor = "green";
        alert("mmm... Who dont like a good ommelette");
        question16.style.display = "none";
        yellow.style.display = "block";
        LogicButon16.style.visibility = "hidden";
        addScore (5);
        

    }
    else {
        alert("Wrong answer, another clue. Did you know there is more than 50 ways to cook them");
        question16Buton.style.backgroundColor = "red";
        addScore (-2);
        
    }
})




// buton 17 guide
// get the variables
let question17 = document.getElementById("hidden17");
let question17Input = document.getElementById("question17");
let question17Buton = document.getElementById("but17");


//get the main button
let LogicButon17 = document.getElementById("b17"); // 18 of 64  instructionss

// add the click event to make appear the hidden div for the question

LogicButon17.addEventListener('click', () => {
    question17.style.display = "block";
    alert("Well if you are looking for a guide of what to do in general, there is another buton for that");
    
})

// chek the input of the question if it is correct when the submitt is pressed

question17Buton.addEventListener('click', () => {
    
    if (question17Input.value == "piano"){ 
        question17Buton.style.backgroundColor = "green";
        alert("Correct");
        question17.style.display = "none";
        LogicButon17.style.visibility = "hidden";
        addScore (5);
        
        

    }
    else {
        alert("Wrong answer. Whell Bethoven was one of the best");
        question17Buton.style.backgroundColor = "red";
        addScore (-2);
        
    }
})




// buton 18
// get the variables
let question18 = document.getElementById("hidden18");
let question18Input = document.getElementById("question18");
let question18Buton = document.getElementById("but18");


//get the main button
let LogicButon18 = document.getElementById("b18"); // 19 of 64  instructionss

// add the click event to make appear the hidden div for the question

LogicButon18.addEventListener('click', () => {
    question18.style.display = "block";
    
    
})

// chek the input of the question if it is correct when the submitt is pressed

question18Buton.addEventListener('click', () => {
    
    if (question18Input.value == "the"){ 
        question18Buton.style.backgroundColor = "green";
        alert("Good catch it is Correct");
        question18.style.display = "none";
        LogicButon18.style.visibility = "hidden";
        addScore (5);
        
        

    }
    else {
        alert("Wrong. Dont spend too much time looking in the alphabet");
        question18Buton.style.backgroundColor = "red";
        addScore (-2);
        
    }
})




// buton 19
// get the variables
let question19 = document.getElementById("hidden19");
let question19Input = document.getElementById("question19");
let question19Buton = document.getElementById("but19");


//get the main button
let LogicButon19 = document.getElementById("b19"); // 20 of 64  instructionss

// add the click event to make appear the hidden div for the question

LogicButon19.addEventListener('click', () => {
    question19.style.display = "block";
    
    
})

// chek the input of the question if it is correct when the submitt is pressed

question19Buton.addEventListener('click', () => {
    
    if (question19Input.value == "m"){ 
        question19Buton.style.backgroundColor = "green";
        alert("Very good, Correct answer");
        question19.style.display = "none";
        LogicButon19.style.visibility = "hidden";
        addScore (5);
        
        

    }
    else {
        alert("Wrong. Again,look more in to the letters");
        question19Buton.style.backgroundColor = "red";
        addScore (-2);
        
    }
})


// buton 20
// get the variables
let question20 = document.getElementById("hidden20");
let question20Input = document.getElementById("question20");
let question20Buton = document.getElementById("but20");


//get the main button
let LogicButon20 = document.getElementById("b20"); // 21 of 31  instructionss

// add the click event to make appear the hidden div for the question
question20Buton.addEventListener('mouseover', () => {
    question20Buton.style.backgroundColor = "yellow";
})
LogicButon20.addEventListener('click', () => {
    question20.style.display = "block";
})

// chek the input of the question if it is correct when the submitt is pressed

question20Buton.addEventListener('click', () => {
    
    if (question20Input.value == "9.678"){ 
        question20Buton.style.backgroundColor = "green";
        alert("Precisely");
        question20.style.display = "none";
        LogicButon20.style.visibility = "hidden";
        addScore (7);
    }
    else {
        alert("Wrong. You should check the method again");
        question20Buton.style.backgroundColor = "red";
        addScore (-1);
    }
})


// buton 21


// get the variables
let question21 = document.getElementById("hidden21");
let question21Input = document.getElementById("question21");
let question21Buton = document.getElementById("but21");


//get the main button
let LogicButon21 = document.getElementById("b21"); // 22 of 64  instructionss

// add the click event to make appear the hidden div for the question

LogicButon21.addEventListener('click', () => {
    question21.style.display = "block";
    
    
})

// chek the input of the question if it is correct when the submitt is pressed
question21Buton.addEventListener('mouseover', () => {
    question21Buton.style.backgroundColor = "yellow";
})
question21Buton.addEventListener('click', () => {
    
    if (question21Input.value == "14"){ 
        question21Buton.style.backgroundColor = "green";
        alert("Well done");
        question21.style.display = "none";
        LogicButon21.style.visibility = "hidden";
        addScore (5);
    }
    else {
        alert("Wrong. The '%' calculates the rest in the division");
        question21Buton.style.backgroundColor = "red";
        addScore (-2);
    }
})


// buton 22


// get the variables
let question22 = document.getElementById("hidden22");
let question22Input = document.getElementById("question22");
let question22Buton = document.getElementById("but22");


//get the main button
let LogicButon22 = document.getElementById("b22"); // 23 of 64  instructionss

// add the click event to make appear the hidden div for the question

LogicButon22.addEventListener('click', () => {
    question22.style.display = "block";
    
    
})

// chek the input of the question if it is correct when the submitt is pressed
question22Buton.addEventListener('mouseover', () => {
    question22Buton.style.backgroundColor = "yellow";
})
question22Buton.addEventListener('click', () => {
    
    if (question22Input.value == "undefined"){ 
        question22Buton.style.backgroundColor = "green";
        alert("Correct");
        console.log("the second key color is \"Duck\"");
        question22.style.display = "none";
        LogicButon22.style.visibility = "hidden";
        addScore (6);
        
        

    }
    else {
        alert("Wrong. The variable is declared but does not have a value so...");
        question22Buton.style.backgroundColor = "red";
        addScore (-1);
        
    }
})


// buton 23


// get the variables
let question23 = document.getElementById("hidden23");
let question23Input = document.getElementById("question23");
let question23Buton = document.getElementById("but23");


//get the main button
let LogicButon23 = document.getElementById("b23"); // 24 of 64  instructionss

// add the click event to make appear the hidden div for the question

LogicButon23.addEventListener('click', () => {
    question23.style.display = "block";
    
    
})

// chek the input of the question if it is correct when the submitt is pressed

question23Buton.addEventListener('click', () => {
    
    if (question23Input.value == "15"){ 
        question23Buton.style.backgroundColor = "green";
        alert("Well done");
        question23.style.display = "none";
        LogicButon23.style.visibility = "hidden";
        addScore (5);
        
        

    }
    else {
        alert("Wrong. Try to find a logic between the numbers.");
        question23Buton.style.backgroundColor = "red";
        addScore (-1);
        
    }
})


// buton 24


// get the variables
let question24 = document.getElementById("hidden24");
let question24Input = document.getElementById("question24");
let question24Buton = document.getElementById("but24");


//get the main button
let LogicButon24 = document.getElementById("b24"); // 25 of 64  instructionss

// add the click event to make appear the hidden div for the question

LogicButon24.addEventListener('click', () => {
    question24.style.display = "block";
    
    
})

// chek the input of the question if it is correct when the submitt is pressed

question24Buton.addEventListener('click', () => {
    
    if (question24Input.value == "150"){ 
        question24Buton.style.backgroundColor = "green";
        alert("Yes, this is the profit.");
        question24.style.display = "none";
        LogicButon24.style.visibility = "hidden";
        addScore (6);
        
        

    }
    else {
        alert("Wrong. Think Well. She didnt sell all of the shirts.");
        question24Buton.style.backgroundColor = "red";
        addScore (-1);
        
    }
})

// buton 25


// get the variables
let question25 = document.getElementById("hidden25");
let question25Input = document.getElementById("question25");
let question25Buton = document.getElementById("but25");


//get the main button
let LogicButon25 = document.getElementById("b25"); // 26 of 64  instructionss

// add the click event to make appear the hidden div for the question

LogicButon25.addEventListener('click', () => {
    question25.style.display = "block";
    
    
})

// chek the input of the question if it is correct when the submitt is pressed

question25Buton.addEventListener('click', () => {
    
    if (question25Input.value == "d"){ 
        question25Buton.style.backgroundColor = "green";
        alert("Correct, the method is call getElementsByTagName");
        question25.style.display = "none";
        console.log("The first keycolor is \"red\"");
        LogicButon25.style.visibility = "hidden";
        addScore (5);
    }
    else {
        alert("Wrong. Try to put the letter corresponding to the correct option");
        question25Buton.style.backgroundColor = "red";
        addScore (-5);
        
    }
})




// buton 26


// get the variables
let question26 = document.getElementById("hidden26");
let question26Input = document.getElementById("question26");
let question26Buton = document.getElementById("but26");


//get the main button
let LogicButon26 = document.getElementById("b26"); // 27 of 64  instructionss

// add the click event to make appear the hidden div for the question

LogicButon26.addEventListener('click', () => {
    question26.style.display = "block";
    
    
})

// chek the input of the question if it is correct when the submitt is pressed

question26Buton.addEventListener('click', () => {
    
    if (question26Input.value == "28"){ 
        question26Buton.style.backgroundColor = "green";
        alert("Well done, nice count");
        question26.style.display = "none";
        LogicButon26.style.visibility = "hidden";
        addScore (7);
    }
    else {
        alert("Wrong. Think in how many rows 3 cuts will do");
        question26Buton.style.backgroundColor = "red";
        addScore (-0.5);
        
    }
})

// buton 27


// get the variables
let question27 = document.getElementById("hidden27");
let question27Input = document.getElementById("question27");
let question27Buton = document.getElementById("but27");


//get the main button
let LogicButon27 = document.getElementById("b27"); // 28 of 37  instructionss

// add the click event to make appear the hidden div for the question

LogicButon27.addEventListener('click', () => {
    question27.style.display = "block";
    
    
})

// chek the input of the question if it is correct when the submitt is pressed

question27Buton.addEventListener('click', () => {
    
    if (question27Input.value == "11"){ 
        question27Buton.style.backgroundColor = "green";
        alert("Great, you know how to use the browser");
        question27.style.display = "none";
        LogicButon27.style.visibility = "hidden";
        addScore (6);
    }
    else {
        alert("Wrong. Remember first to divide then to add");
        question27Buton.style.backgroundColor = "red";
        addScore (-1);
        
    }
})


// buton 28


// get the variables
let question28 = document.getElementById("hidden28");
let question28Input = document.getElementById("question28");
let question28Buton = document.getElementById("but28");


//get the main button
let LogicButon28 = document.getElementById("b28"); // 29 of 64  instructionss

// add the click event to make appear the hidden div for the question

LogicButon28.addEventListener('click', () => {
    question28.style.display = "block";
    console.log("The number is greater than 100");
    
    
})

// chek the input of the question if it is correct when the submitt is pressed

question28Buton.addEventListener('click', () => {
    
    if (question28Input.value == "1000"){ 
        question28Buton.style.backgroundColor = "green";
        alert("Perfect, you won a red cube");
        question28.style.display = "none";
        red.style.display = "block";
        LogicButon28.style.visibility = "hidden";
        addScore (10);
    }
    else {
        console.log("The number is also greater than 900");
        alert("Wrong. you should google it or think better");
        question28Buton.style.backgroundColor = "red";
        addScore (-3);
        
    }
})




// buton 29


// get the variables
let question29 = document.getElementById("hidden29");
let question29Input = document.getElementById("question29");
let question29Buton = document.getElementById("but29");


//get the main button
let LogicButon29 = document.getElementById("b29"); // 30 of 64  instructionss

// add the click event to make appear the hidden div for the question

LogicButon29.addEventListener('click', () => {
    question29.style.display = "block";
    console.log("The number is greater than 100");
    
    
})

// chek the input of the question if it is correct when the submitt is pressed

question29Buton.addEventListener('click', () => {
    
    if (question29Input.value == "4"){ 
        question29Buton.style.backgroundColor = "green";
        alert("Well done");
        question29.style.display = "none";
        LogicButon29.style.visibility = "hidden";
        addScore (5);
    }
    else {
        alert("Really?. try whit the first 10 numbers and you will get it");
        question29Buton.style.backgroundColor = "red";
        addScore (-2);
        
    }
})




// buton 30


// get the variables
let question30 = document.getElementById("hidden30");
let question30Input = document.getElementById("question30");
let question30Buton = document.getElementById("but30");


//get the main button
let LogicButon30 = document.getElementById("b30"); // 31 of 64  instructionss

// add the click event to make appear the hidden div for the question

LogicButon30.addEventListener('click', () => {
    question30.style.display = "block";
   
    
    
})

// chek the input of the question if it is correct when the submitt is pressed

question30Buton.addEventListener('click', () => {
    
    if (question30Input.value == "[90, 8, 18, 32, 50]"){ 
        question30Buton.style.backgroundColor = "green";
        alert("Well done you got another clue");
        console.log("The key colour number 4 is \"Blue\"");
        question30.style.display = "none";
        LogicButon30.style.visibility = "hidden";
        addScore (30);
    }
    else {
        alert("Wrong review the map method, also put an space after the coma.");
        question30Buton.style.backgroundColor = "red";
        addScore (-2);
        
    }
})




// buton 31


// get the variables
let question31 = document.getElementById("hidden31");
let question31Input = document.getElementById("question31");
let question31Buton = document.getElementById("but31");


//get the main button
let LogicButon31 = document.getElementById("b31"); // 32 of 64  instructionss

// add the click event to make appear the hidden div for the question

LogicButon31.addEventListener('click', () => {
    question31.style.display = "block";
    
    
    
})

// chek the input of the question if it is correct when the submitt is pressed

question31Buton.addEventListener('click', () => {
    
    if (question31Input.value == "[45, 25]"){ 
        question31Buton.style.backgroundColor = "green";
        alert("Well done you got another cube");
        question31.style.display = "none";
        green.style.display = "block"; 
        LogicButon31.style.visibility = "hidden";
        addScore (25);
    }
    else {
        alert("Wrong, Chek out again what filter method does, also put space after the coma.");
        question31Buton.style.backgroundColor = "red";
        addScore (-2);
        
    }
})



// buton 32


// get the variables
let question32 = document.getElementById("hidden32");
let question32Input = document.getElementById("question32");
let question32Buton = document.getElementById("but32");


//get the main button
let LogicButon32 = document.getElementById("b32"); // 33 of 37  instructionss

// add the click event to make appear the hidden div for the question

LogicButon32.addEventListener('click', () => {
    question32.style.display = "block";
    
    
    
})

// chek the input of the question if it is correct when the submitt is pressed

question32Buton.addEventListener('click', () => {
    
    if (question32Input.value == userEyesColour){ 
        question32Buton.style.backgroundColor = "green";
        alert("Well done you are the driver, I told you your eyes colour is going to be important");
        question32.style.display = "none";
        LogicButon32.style.visibility = "hidden";
        addScore (7);
    }
    else {
        alert("Wrong, Read again the problem clues");
        question32Buton.style.backgroundColor = "red";
        addScore (-2);
    }
})




// buton 33


// get the variables
let question33 = document.getElementById("hidden33");
let question33Input = document.getElementById("question33");
let question33Buton = document.getElementById("but33");


//get the main button
let LogicButon33 = document.getElementById("b33"); // 34 of 37  instructionss

// add the click event to make appear the hidden div for the question

LogicButon33.addEventListener('click', () => {
    question33.style.display = "block";
    
    
    
})

// chek the input of the question if it is correct when the submitt is pressed

question33Buton.addEventListener('click', () => {
    
    if (question33Input.value == "5"){ 
        question33Buton.style.backgroundColor = "green";
        alert("Well done finding the answer");
        question33.style.display = "none";
        LogicButon33.style.visibility = "hidden";
        addScore (6);
    }
    else {
        alert("Wrong, Lock how the line follow a patern");
        question33Buton.style.backgroundColor = "red";
        addScore (-1);
    }
})




// buton 34


// get the variables
let question34 = document.getElementById("hidden34");
let question34Input = document.getElementById("question34");
let question34Buton = document.getElementById("but34");


//get the main button
let LogicButon34 = document.getElementById("b34"); // 35 of 37  instructionss

// add the click event to make appear the hidden div for the question

LogicButon34.addEventListener('click', () => {
    question34.style.display = "block";
    
    
    
})

// chek the input of the question if it is correct when the submitt is pressed

question34Buton.addEventListener('click', () => {
    
    if (question34Input.value == "dictionary"){ 
        question34Buton.style.backgroundColor = "green";
        alert("Correct, objects in python are call dictionary");
        question34.style.display = "none";
        LogicButon34.style.visibility = "hidden";
        addScore (7);
    }
    else {
        alert("Wrong, in Javascript this will be an object");
        question34Buton.style.backgroundColor = "red";
        addScore (-2);
    }
})









// buton 35


// get the variables
let question35 = document.getElementById("hidden35");
let question35Buton = document.getElementById("but35");


//get the main button
let LogicButon35 = document.getElementById("b35"); // 36 of 37  instructionss

// add the click event to make appear the hidden div for the question

LogicButon35.addEventListener('click', () => {
    question35.style.display = "block";
    
    
    
})

// add 50 points and hidden the button

question35Buton.addEventListener('click', () => {
    LogicButon35.style.visibility = "hidden";
    addScore (50);
    question35.style.display = "none";
})








// buton 36

//get the main button
let LogicButon36 = document.getElementById("b36"); // 37 of 37  instructionss

// add the click event to give the main clue

LogicButon36.addEventListener('click', () => {
    alert("If you are lucky you press this buton in the beggining");
    console.log("Only Exercises name (DOM, FOOD, MISS, RANDOM, DICTIONARY,A or a, MAP and FILTER ) are necesary to solve the game");
    addScore (5);
    LogicButon36.style.visibility = "hidden";
    
})




        
    





