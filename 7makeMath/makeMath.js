//Your task is to create a function that does four basic mathematical operations.

//Examples(Operator, value1, value2) --> output
//('+', 4, 7) --> 11

function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
        default:
            return 0;
    }
}