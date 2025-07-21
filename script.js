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
const getNum = document.querySelectorAll(".row");
const display = document.querySelector(".display");
const eql = document.querySelector("#equal");
const clearBtn = document.querySelector("#clear");
const backSpcae = document.querySelector("#backspace");


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
        case "*":
            test = muliply(a, b);
            break;
        case "/":
            test = divide(a, b);
            break
    }

    // rounding upto 2 decimal places
    test = Math.round(test * 100) / 100;

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

let decA = false;
let decB = false;


let numberA;
let numberB;

// gettng the numbers
function setA (any) {

    nextTextA = String(getTextA) + String(any);
    getTextA = nextTextA;

    // if(dec){
    //     nextTextA = nextTextA
    // }

    numberA = Number(nextTextA);    
    return numberA;

}

function setB (any) {

    nextTextB = String(getTextB) + String(any);
    getTextB = nextTextB;

    numberB = Number(nextTextB);
    return numberB;

}


function accumulate () {
    if(op && numberA && numberB){
        operator(numberA, op, numberB);
        numberA = test;
        test = ''
        numberB = ''
        getTextB = ''
        nextTextB = ''
        console.log("acitvated!")
        decA = false;
        decB = false;
    }
}


function setNum (anything){
    if(!op){
        if(shouldOverwrite){
            getText = '';
            shouldOverwrite = false;
        }
        first = Number(anything);
        
        // the decimial setup
        if (anything == "." && decA){
            first = '';
        }
        
        if (anything == "." && !decA){
            first = String(anything);
            decA = true;
        }

        setA(first);
        setDisplay(first);
        
    } else{

        second = Number(anything);

        // the decimial setup
        if (anything == "." && decB){
            second = '';
        }
        
        if (anything == "." && !decB){
            second = String(anything);
            decB = true;
        }

        setB(second);
        setDisplay(second);
    }
    console.log(nextTextA);
    console.log(nextTextB);
        // break;
}

// -- the display text function
function setDisplay (a) {

    nextText = String(getText) + String(a);
    getText = nextText;
    
    return display.textContent = `${nextText}`;
}

// -- the operation function
function setOperation () {
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

    decA = false;
    decB = false;
    // test = ''

    shouldOverwrite = true;
}

// -- clear function
function clear () {
        numberA = '';
        getTextA = '';
        
        op = ''
        getText = '';
        nextText = '';
        display.textContent = '0';
        
        numberB = ''
        getTextB = ''
        nextTextB = ''
        test = '';
    
        shouldOverwrite = true;
}

// -- the backspace function
function backSpace () {
    if(test){
        clear();
    } else if (nextText && numberB){
        nextText = nextText.slice(0, -1);
        getText = '';
        setDisplay(nextText);

        numberB = numberB.toString().slice(0, -1);
        numberB = Number(numberB);
        nextTextB = '';
        getTextB = '';
        setB(numberB);
    } else if (nextText && op){
        nextText = nextText.slice(0, -1);
        getText = '';
        setDisplay(nextText);
        // op = op.slice(0,-1);
        op = ''
    } else if (nextText && numberA){
        nextText = nextText.slice(0, -1);
        getText = '';
        if(!nextText){
            nextText = '0';
        }
        setDisplay(nextText);  

        numberA = numberA.toString().slice(0,-1);
        numberA = Number(numberA);
        nextTextA = '';
        getTextA = '';
        setA(numberA);
    } else {
        nextText = nextText.slice(0, -1);
        getText = '';
        if(!nextText){
            nextText = '0';
        }
        setDisplay(nextText);
    }
}


function keyFind (e, item) {
    let arr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];
    let sp = ["/", "*", "+", "-"];

    for (let i = 0; i < sp.length; i++){
        if(e == sp[i]){
            accumulate();
            op = sp[i];
            setDisplay(op);
            shouldOverwrite = true;
        }
    }

    for (let i = 0; i < arr.length; i++){

        if(e == arr[i]){
            setNum(arr[i])
        }

        // if(e == arr[i] && item.id == (arr[i])){
        //     item.style.backgroundColor = "black";
        // }
    }

    if (e == "="){
        setOperation();
    }

    if (e == "Backspace"){
        backSpace();
    }

    if (e == "c"){
        clear();
    }

}

// -- where it all comes together
function settingThings () {

    getNum.forEach(stuff => {

        stuff.addEventListener("mouseup", (e) => {
            let target = e.target;
            switch (target.id) {
                case "1":
                    setNum(1);
                    break;
        
                case "2":
                    setNum(2);
                    break;
                    
                case "3":
                    setNum(3);
                    break;
    
                case "4":
                    setNum(4);
                    break;

                case "5":
                    setNum(5);
                    break;

                case "6":
                    setNum(6);
                    break;

                case "7":
                    setNum(7);
                    break;
        
                case "8":
                    setNum(8);
                    break;

                case "9":
                    setNum(9);
                    break;

                case "0":
                    setNum(0);
                    break;

                case ".":
                    setNum(".");
                    break;

                case "op-plus":
                    accumulate();
                    op = "+";
                    setDisplay(op);
                    shouldOverwrite = true;
                    break;

                case "op-minus":
                    accumulate();  
                    op = "-";
                    setDisplay(op);
                    shouldOverwrite = true;          
                    break;

                case "op-mult":
                    accumulate();  
                    op = "*";
                    setDisplay(op);
                    shouldOverwrite = true;          
                    break;

                case "op-divide":
                    accumulate();  
                    op = "/";
                    setDisplay(op);
                    shouldOverwrite = true;          
                    break;
            }        
        
        })
    })

    eql.addEventListener("click", () => {
        setOperation()
    })
    
    document.addEventListener("keydown", (e) => {

        // switch (e.key) {
        //     case "1":
        //         setNum(1);
        //         break;
    
        //     case "2":
        //         setNum(2);
        //         break;
                
        //     case "3":
        //         setNum(3);
        //         break;

        //     case "4":
        //         setNum(4);
        //         break;

        //     case "5":
        //         setNum(5);
        //         break;

        //     case "6":
        //         setNum(6);
        //         break;

        //     case "7":
        //         setNum(7);
        //         break;
    
        //     case "8":
        //         setNum(8);
        //         break;

        //     case "9":
        //         setNum(9);
        //         break;

        //     case "0":
        //         setNum(0);
        //         break;

        //     case ".":
        //         setNum(".");
        //         break;

        //     case "+":
        //         accumulate();
        //         op = "+";
        //         setDisplay(op);
        //         shouldOverwrite = true;
        //         break;

        //     case "-":
        //         accumulate();  
        //         op = "-";
        //         setDisplay(op);
        //         shouldOverwrite = true;          
        //         break;

        //     case "*":
        //         accumulate();  
        //         op = "*";
        //         setDisplay(op);
        //         shouldOverwrite = true;          
        //         break;

        //     case "/":
        //         accumulate();  
        //         op = "/";
        //         setDisplay(op);
        //         shouldOverwrite = true;          
        //         break;

        //     case ("="):
        //         setOperation();
        //         break;

        //     case "Backspace":
        //         backSpace();
        //         break;
        // }

        let key = e.key;
        keyFind(key)


    })

    clearBtn.addEventListener("click", () => {
        clear();
    })
    
    backSpcae.addEventListener("mouseup", () => {
        backSpace()
    })


    // -- 
    // getNum.forEach(item => {
    //     item.addEventListener("mousedown", (e) => {
            
    //         let target = e.target;

    //         if(target.matches('button')){
    //             target.style.backgroundColor = "black"
    //             target.style.color = "white"
    //         }

    //     })

    //     item.addEventListener("mouseup", (e) => {
            
    //         let target = e.target;

    //         if(target.matches('button')){
    //             target.style.backgroundColor = "white"
    //             target.style.color = "black"
    //         }

    //     })
    // })

}




settingThings();
