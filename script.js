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
    return test;
}

// query selectors
const getNum = document.querySelector(".row");
const display = document.querySelector(".display");
const btn = document.querySelector(".ops");



getNum.addEventListener("mouseup", (e) => {
    let target = e.target;
    switch (target.id) {
        case "1":
            if(first!=undefined){
                second = 1;
                display.textContent = `${second}`;
            } else{
                first = 1;
                display.textContent = `${first}`;
            }
            console.log(first);
            console.log(second)
            break;
        case "2":
            if(first!=undefined){
                second = 2;
                display.textContent = `${second}`;
            } else{
                first = 2;
                display.textContent = `${first}`;
            }
            console.log(first);
            console.log(second)
            break;
        case "3":
            if(first!=undefined){
                second = 3;
                display.textContent = `${second}`;
            } else{
                first = 3;
                display.textContent = `${first}`;
            }
            console.log(first);
            console.log(second)
            break;

        case "op-plus":
            op = "+";
            break;
        case "op-minus":
            op = "-";
            break;
    }
})

btn.addEventListener("click", () => {
    
    operator(first, op, second);
    display.textContent = `${test}`;
    first=undefined;
    second=undefined;
})


