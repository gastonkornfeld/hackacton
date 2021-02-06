
// i need a function get sequence of buttons to make the general case of the situation that accepts 4 parameters , 
// the 4 butons that i want to be part of the sequence. so the i jus have to pass the buttons to create all the seuqences.

let winArray = [];
// first to get all the butons 
let element1 = document.getElementById("b1");
// element1.addEventListener('mouseover', )

let element2 = document.getElementById("b2");
let element3 = document.getElementById("b3");
let element4 = document.getElementById("b4");
let element5 = document.getElementById("b5");
let element6 = document.getElementById("b6");
let element7 = document.getElementById("b7");
let element8 = document.getElementById("b8");
let element9 = document.getElementById("b9");
let element10 = document.getElementById("b10");
let element11 = document.getElementById("b11");
let element12 = document.getElementById("b12");
let element13 = document.getElementById("b13");
let element14 = document.getElementById("b14");
let element15 = document.getElementById("b15");
let element16 = document.getElementById("b16");
let element17 = document.getElementById("b17");
let element18 = document.getElementById("b18");
let element19 = document.getElementById("b19");
let element20 = document.getElementById("b20");
let element21 = document.getElementById("b21");
let element22 = document.getElementById("b22");
let element23 = document.getElementById("b23");
let element24 = document.getElementById("b24");
let element25 = document.getElementById("b25");
let element26 = document.getElementById("b26");
let element27 = document.getElementById("b27");
let element28 = document.getElementById("b28");
let element29 = document.getElementById("b29");
let element30 = document.getElementById("b30");
let element31 = document.getElementById("b31");
let element32 = document.getElementById("b32");
let element33 = document.getElementById("b33");
let element34 = document.getElementById("b34");
let element35 = document.getElementById("b35");
let element36 = document.getElementById("b36");




function sequenceOf4Buttons (button1, button2, button3, button4) {
    // first if they press the button1
button1.addEventListener('click', () => {
    button1.style.border = "10px solid green";
})




// if they press the button 2
button2.addEventListener('click', () => {
    if (button1.style.border == "10px solid green"){
        button2.style.border = "10px solid green";
    }
    else {
        button2.style.border = "10px solid red";
    }
})

// if they press buton 3
button3.addEventListener('click', () => {
    if (button1.style.border == "10px solid green" && button2.style.border == "10px solid green" ){ //correct option
        button3.style.border = "10px solid green";
    }
    else if(button1.style.border == "10px solid green" && button2.style.border != "10px solid green") {
        button1.style.border = "10px solid red";
        button3.style.border = "10px solid red";
    }
    else {
        button3.style.border = "10px solid red";
    }
})


// when they press the buton 4

button4.addEventListener('click', () => {
    if (button1.style.border == "10px solid green" && button2.style.border == "10px solid green" && button3.style.border == "10px solid green"){
        button4.style.border = "10px solid green";
        console.log("Amazing you solve one sequence");
        button1.style.visibility = "hidden";
        button2.style.visibility = "hidden";
        button3.style.visibility = "hidden";
        button4.style.visibility = "hidden";
        winArray.push("one good");
        

        // the part when they get the sequence got here, have to hidden the buttons
        
    }
    else if(button1.style.border == "10px solid green" && button2.style.border == "10px solid green" && button3.style.border != "10px solid green") {
        button1.style.border = "10px solid red";
        button2.style.border = "10px solid red";
        button4.style.border = "10px solid red";
    }
    else if (button1.style.border == "10px solid green" && button2.style.border != "10px solid green" && button3.style.border != "10px solid green") {
        button1.style.border = "10px solid red";
        button4.style.border = "10px solid red";
    }
    else {
        button4.style.border = "10px solid red";
    }
})
}

// level2 buton
let level2Buton = document.getElementById("level2");

sequenceOf4Buttons (element26, element8, element15, element18);
sequenceOf4Buttons (element10, element30, element4, element24);
sequenceOf4Buttons (element12, element9, element2, element19);
sequenceOf4Buttons (element17, element22, element31, element13);
sequenceOf4Buttons (element28, element33, element14, element6);
sequenceOf4Buttons (element25, element5, element36, element34);
sequenceOf4Buttons (element3, element7, element11, element21);
sequenceOf4Buttons (element20, element23, element29, element32);
sequenceOf4Buttons (element1, element16, element27, element35);

// wining part
// take the wining buton from the page
let winingButon = document.getElementById("win");

winingButon.addEventListener('click', () => {
    if (winArray.length > 8) {
        document.body.innerHTML = "YOU WON THE FIRST LEVEL CONTRATULATIONS" 
    + "<br><br><br>";
    document.body.appendChild(level2Buton);
    level2Buton.style.display = "inline"; 
    }
    else {
        alert("You need to make dissapear all the buttons to gain acces.");
    }
})

