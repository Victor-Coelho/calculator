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