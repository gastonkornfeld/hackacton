
// Lest take the div .questions where we are gonna be putting the questions
var questionDiv = document.getElementById("questions");

// get the colour buttons in to a variable
let red = document.getElementById("red");
let yellow = document.getElementById("yellow");
let green = document.getElementById("green");
let blue = document.getElementById("blue");



// lets try first getting the instructions question

// adter i will put all the buttoms of the screen to hidden to so when the instructions button is pressed they will appear.
// i can put another set of fake butons and instructions in the beggining and all of this buttons are gonna get hide in that moment

// Buton Instructions "39"


let questionInstructions = document.getElementById("Instructions");
let questionInstructionsInput = document.getElementById("question1");
let questionIndtructionsButon = document.getElementById("but1");

questionIndtructionsButon.addEventListener('click', () => {
    if (questionInstructionsInput.value == "40"){
        alert("Great");
        questionIndtructionsButon.style.backgroundColor = "green";
        questionInstructions.style.display = "none";  
    }
    else {
        alert("It is wrong Buddy");
        questionIndtructionsButon.style.backgroundColor = "Red";
    }
})

// First i will set up the instructions of the game in the buton Instuction. so only will begin if they click on it

let instructionsLogicButon = document.getElementById("b39"); //first button of 64 the instructionss

instructionsLogicButon.addEventListener('click', () => {
    alert("Hello welcome to My logic game: there is many ways to get to pass the exercise so dont try to follow an order. Enjoy"); //the instructions of the beggining goes here
    questionInstructions.style.display = "block";

    
    

})




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
    }
    else {
        question1Buton.style.backgroundColor = "red";
        alert("You should go and review the splice array method");
        
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
    alert(""); //the alert message when they press goes here
    question2.style.display = "block";
})

// chek the input of the question if it is correct when the submitt is pressed

question2Buton.addEventListener('click', () => {
    if (question2Input.value == "and"){
        alert("Great you figure it out" );
        question2Buton.style.backgroundColor = "green";
        question2.style.display = "none";  
    }
    else {
        question2Buton.style.backgroundColor = "red";
        alert("You should be looking for the answer in the screen");
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
    alert(""); //the alert message when they press goes here
    question3.style.display = "block";
})

// chek the input of the question if it is correct when the submitt is pressed

question3Buton.addEventListener('click', () => {
    if (question3Input.value == "Math.random()*100;"){
        alert("Very good. I will give you a clue to solve this game: the Third key color is 'green'");
        question3Buton.style.backgroundColor = "green";
        question3.style.display = "none";    
    }
    else {
        question3Buton.style.backgroundColor = "red";
        alert("Math it is a direct library form javascript, try to find the answer in w3Schools or go to the console for a clue");
        console.log(" I used *100 after the common random function");
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
    alert(""); //the alert message when they press goes here
    question4.style.display = "block";
})

// chek the input of the question if it is correct when the submitt is pressed

question4Buton.addEventListener('click', () => {
    if (question4Input.value == "ਸਤ ਸ੍ਰੀ ਅਕਾਲ"){
        question4Buton.style.backgroundColor = "green";
        alert("I actually dont understand Punjabi but Thanks for the hi");
        question4.style.display = "none";
        blue.style.display = "block";

    }
    else {
        alert("You are doing something wrong, why not to try google translate");
        question4Buton.style.backgroundColor = "red";
        
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
        

    }
    else {
        alert("Common it is not so hard");
        question5Buton.style.backgroundColor = "red";
        
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
        

    }
    else {
        alert("I was thinking more in something like the number of the buton");
        question6Buton.style.backgroundColor = "red";
        
    }
})

// buton 7(no need of an input just the button)

// get the variables
let question7 = document.getElementById("hidden7");
let question7Buton = document.getElementById("but7");


//get the main button
let LogicButon7 = document.getElementById("b7"); //8 of 64  instructionss

// add the click event to make appear the hidden div for the question

LogicButon7.addEventListener('click', () => {
    
    question7.style.display = "block";
})

// chek the input of the question if it is correct when the submitt is pressed

question7Buton.addEventListener('click', () => {
    question7.style.display = "none";
    question7Buton.style.backgroundColor = "green";
        

        
    
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
    if (question8Input.value == "[100,40,25,10,5,1]"){
        question8Buton.style.backgroundColor = "green";
        alert("Good job sorting the array");
        question8.style.display = "none";
        

    }
    else {
        alert("You should review how the sort works for number arrays");
        question8Buton.style.backgroundColor = "red";
        
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
        

    }
    else {
        alert("well here is a little more of help, To make 100 percent certain that "
        + "he also has a pair of black socks he must take out a further two socks.");
        question9Buton.style.backgroundColor = "red";
        
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
        

    }
    else {
        alert("Please chek the CSS position propertys");
        question9Buton.style.backgroundColor = "red";
        
    }
})