// creating operators functions
function add (a, b) {
    return a + b;
}

function subtract (a, b) {
    return a - b;
}

function muliply (a, b) {
    return a * b;
}

function divide (a, b) {
    return a / b;
}


// display variables
let first;
let op;
let second;

let shouldOverwrite = false;

// query selectors
const getNum = document.querySelector(".row");
const display = document.querySelector(".display");
const btn = document.querySelector(".ops");
const clearBtn = document.querySelector("#clear");


let test;
// the operator function
function operator (a, op, b) {
    
    switch (op) {
        case "+":
            test = add(a, b);
            break;
        case "-":
            test = subtract(a, b);
            break;
    }
    console.log(test);
    return test;
}

// the display function
let getTextA = '';
let nextTextA = '';

let getTextB = '';
let nextTextB = '';

let nextText = '';
let getText = '';

let numberA;
let numberB;


// gettng the numbers
function setA (any) {

    nextTextA = String(getTextA) + String(any);
    getTextA = nextTextA;

    numberA = Number(nextTextA);    
    return numberA;

}

function setB (any) {

    nextTextB = String(getTextB) + String(any);
    getTextB = nextTextB;

    numberB = Number(nextTextB);
    return numberB;

}

// -- the display text function
function setDisplay (a) {

    nextText = String(getText) + String(a);
    getText = nextText;
    
    return display.textContent = `${nextText}`;
}


function settingThings () {

    getNum.addEventListener("mouseup", (e) => {
        let target = e.target;
        switch (target.id) {
            case "1":
                if(!op){
                    if(shouldOverwrite){
                        getText = '';
                        shouldOverwrite = false;
                    }
                    first = 1;
                    setA(first);
                    setDisplay(first);
                } else{
                    second = 1;
                    setB(second);
                    setDisplay(second);
                }
                console.log(nextTextA);
                console.log(nextTextB);
                break;
    
            case "2":
                if(!op){
                    if(shouldOverwrite){
                        getText = '';
                        shouldOverwrite = false;
                    }
                    first = 2;
                    setA(first);
                    setDisplay(first);
                } else{
                    second = 2;
                    setB(second);
                    setDisplay(second);
                }
                console.log(nextTextA);
                console.log(nextTextB);
                break;
                
            case "3":
                if(!op){
                    if(shouldOverwrite){
                        getText = '';
                        shouldOverwrite = false;
                    }
                    first = 3;
                    setA(first);
                    setDisplay(first);
                } else{
                    second = 3;
                    setB(second);
                    setDisplay(second);
                }
                console.log(nextTextA);
                console.log(nextTextB);
                break;
    
            case "op-plus":
                op = "+";
                setDisplay(op);
                shouldOverwrite = true;
                break;
            case "op-minus":
                op = "-";
                setDisplay(op);  
                shouldOverwrite = true;          
                break;
        }
            
    
    })

    getNum.addEventListener("click", (e) => {
        let target = e.target;
        

        if(target.id == "equal"){        
            operator(numberA, op, numberB);
            display.textContent = `${test}`;
            // getText = test;
            // numberA = test;
            // getTextB = '';
            
            numberA = test;
            getTextA = '';
            
            op = ''
            getText = test;
            nextText = ''
            
            numberB = ''
            getTextB = ''
            nextTextB = ''

            shouldOverwrite = true;
        };
        
    })
    
    clearBtn.addEventListener("click", () => {
        numberA = '';
        getTextA = '';
        
        op = ''
        getText = '';
        nextText = '';
        display.textContent = '.';
        
        numberB = ''
        getTextB = ''
        nextTextB = ''
    
        shouldOverwrite = true;

    })
    

}

settingThings();






























///----------------------
// getNum.addEventListener("mouseup", (e) => {
//     let target = e.target;
//     switch (target.id) {
//         case "1":
//             if(first!=undefined){
//                 second = 1;
//                 setDisplay(second);
//             } else{
//                 first = 1;
//                 setDisplay(first);
//             }
//             console.log(first);
//             console.log(second)
//             break;

//         case "2":
//             if(first!=undefined){
//                 second = 2;
//                 setDisplay(second);
//             } else{
//                 first = 2;
//                 setDisplay(first);
//             }
//             console.log(first);
//             console.log(second)
//             break;

//         case "3":
//             if(first!=undefined){
//                 second = 3;
//                 setDisplay(second);
//             } else{
//                 first = 3;
//                 setDisplay(first);
//             }
//             console.log(first);
//             console.log(second)
//             break;

//         case "op-plus":
//             op = "+";
//             setDisplay(op);
//             break;
//         case "op-minus":
//             op = "-";
//             setDisplay(op);            
//             break;
//     }
// })