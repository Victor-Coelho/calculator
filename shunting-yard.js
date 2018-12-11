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
    
    return stackValue;

    
}