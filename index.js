let display = "0"
let runningTotal = 0;
let previousOperator = null;

const screen = document.querySelector(".calc-display");

function buttonClick(value) {
    if(isNaN(parseInt(value))) {
        handleSymbol(value);
    }else {
        handleNumbers(value);
    }
    rerender();
}

function handleNumbers(number) {
if(display === "0"){
      display = number;
}else {
    display += number;
}
}

function handelMath(value) {
    if(display === "0"){
        //do nothing
        return;
    }
    const intDisplay = parseInt(display);
    if(runningTotal === 0) {
        runningTotal = intDisplay;
    }else{
        flushOperation(intDisplay);
    }
   previousOperator = value;
   display = "0"
   //console.log(runningTotal);
}


function flushOperation(intDisplay){
    //  switch (previousOperator) {
    //      case "+":
    //          display = "0"
    //          break;
    //          case "-":
    //              display = "0"
    //              break;
    //              case "X":
    //                  display = "0"
    //                  case "/":
    //                  display = "0"
    //      break;
    //  }
    if(previousOperator === "+"){
        runningTotal += intDisplay
    }else if(previousOperator === "-"){
        runningTotal -= intDisplay
    }else if(previousOperator === "X"){
        runningTotal *= intDisplay
    }else if(previousOperator === "/"){
        runningTotal /= intDisplay;
    }

}



function handleSymbol(Symbol) {
    switch (Symbol) {
        case  "C":
        display = "0"
        break;
        case "=":
            if(previousOperator === null){
                //need two number to do math
                return;
            }
            flushOperation(parseInt(display));
            previousOperator === null;
            display = "" + runningTotal;
            runningTotal = 0;
             
        break;
        case  "<-":
        if(display.length === 1){
            display = "0"
        }else{
            display = display.substring(0, display.length - 1)
        }
        break;
        case "/":
        case "X":
        case "-":
        case "+":
        handelMath(Symbol);
        break;
        }
}


function init() {
    document
    .querySelector(".calc-body")
    .addEventListener("click", function(event) {
    buttonClick(event.target.innerText);
});
}

function rerender() {
    screen.innerText = display;
}

init();
