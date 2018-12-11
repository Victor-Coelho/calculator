let inputBox = document.querySelector(".input-box");
/* When the user presses a button, discovers what button was pressed and appends that number (or operation) to the value string attached to the input type. it basically displays on the screen what the user selects. */
document.addEventListener("click", function(event) {
    if(event.target.matches(".grid-cells")) {
        if(event.target.matches(".btn1")) {
            inputBox.setAttribute("value", inputBox.getAttribute("value")+"1");
        } else if(event.target.matches(".btn2")) {
            inputBox.setAttribute("value", inputBox.getAttribute("value")+"2");
        } else if(event.target.matches(".btn3")) {
            inputBox.setAttribute("value", inputBox.getAttribute("value")+"3");
        } else if(event.target.matches(".btn4")) {
            inputBox.setAttribute("value", inputBox.getAttribute("value")+"4");
        } else if(event.target.matches(".btn5")) {
            inputBox.setAttribute("value", inputBox.getAttribute("value")+"5");
        } else if(event.target.matches(".btn6")) {
            inputBox.setAttribute("value", inputBox.getAttribute("value")+"6");
        } else if(event.target.matches(".btn7")) {
            inputBox.setAttribute("value", inputBox.getAttribute("value")+"7");
        } else if(event.target.matches(".btn8")) {
            inputBox.setAttribute("value", inputBox.getAttribute("value")+"8");
        } else if(event.target.matches(".btn9")) {
            inputBox.setAttribute("value", inputBox.getAttribute("value")+"9");
        } else if(event.target.matches(".btn0")) {
            inputBox.setAttribute("value", inputBox.getAttribute("value")+"0");
        } else if(event.target.matches(".btnPlus")) {
            inputBox.setAttribute("value", inputBox.getAttribute("value")+"+");
        } else if(event.target.matches(".btnMinus")) {
            inputBox.setAttribute("value", inputBox.getAttribute("value")+"-");
        } else if(event.target.matches(".btnMultiply")) {
            inputBox.setAttribute("value", inputBox.getAttribute("value")+"X");
        } else if(event.target.matches(".btnDivide")) {
            inputBox.setAttribute("value", inputBox.getAttribute("value")+"/");
        } else if(event.target.matches(".btnClear")) {
            console.log("CLEAR");
        } else if(event.target.matches(".btnEqual")) {
            console.log("SINAL DE IGUAL");
        }
    }
});

function orderPrecedence(stack, operator) {
    if(stack[stack.length - 1] === operator) {
        return true;
    } else if(stack[stack.length - 1] === "X" || stack[stack.length - 1] === "/") {
        return true;
    } else if(operator === "+" || operator === "-") {
        return true;
    }
    return false;
}

function applyOp(value1, value2, operator) {
    if(operator === "+") {
        return value2 + value1;
    } else if(operator === "-") {
        return value2 - value1;
    } else if(operator === "X") {
        return value2*value1;
    } else {
        return value2/value1;
    }
}

function evaluateExpression(string) {
    let expression = string.split("");
    for(let i = 0; i < expression.length; i++) {
        if(expression[i] !== "X" && expression[i] !== "+" && expression[i] !== "-" && expression[i] !== "/") {
            expression[i] = Number(expression[i]);
        }
    }

    /* Stacks used by the algorithm */
    let stackValue = [];
    let stackOperator = [];

    while(expression.length > 0) {
        let nextToken = expression.shift();
        if(typeof(nextToken) === "number") {
            stackValue.push(nextToken);
        } else {
            while(stackOperator.length > 0 && orderPrecedence(stackOperator, nextToken)) {
                let thisOp = stackOperator.pop();
                let value1 = stackValue.pop();
                let value2 = stackValue.pop();
                let thisResult = applyOp(value1, value2, thisOp);
                stackValue.push(thisResult);
            }
            stackOperator.push(nextToken);
        }
    }

    while(stackOperator.length > 0) {
        let thisOp = stackOperator.pop();
        let value1 = stackValue.pop();
        let value2 = stackValue.pop();
        let thisResult = applyOp(value1, value2, thisOp);
        stackValue.push(thisResult);
    }
    
    return Number(stackValue[0]);
}