function doMath(x, y, znak) {
    x = prompt('Enter x number');
    y = prompt('Enter y number');
    znak = prompt('Enter operator "znak" (+, -, *, /, %, **)');
    console.log(x, znak, y);
    let calc = function (x, y, znak) {
        return znak(x, y);
    };
    let add = function (x, y) {
        return x + y;
    };
    let subtract = function (x, y) {
        return x - y;
    };
    let multiply = function (x, y) {
        return x * y;
    };
    let divide = function (x, y) {
        return x / y;
    };
    let remaind = function (x, y) {
        return x % y;
    };
    let exponent = function (x, y) {
        return x ** y;
    };
 
    switch (znak) {
        case "+":
            return calc(x, y, add);
        case "-":
            return calc(x, y, subtract);
        case "*":
            return calc(x, y, multiply);
        case "/":
            return calc(x, y, divide);
        case "%":
            return calc(x, y, remaind);
        case "**":
            return calc(x, y, exponent);
 
    }
}
 
console.log(doMath());