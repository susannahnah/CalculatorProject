//abstraction of math equations
// create math functions using x, y, and operator variables
const tacoMath = function(x, y, operator) {
    
    //create variable that will be returned at end function
    let result;
    
    //create math operations/string recognition 
    if (operator === "+") {
        result = Number(x) + Number(y); 
    }
    else if(operator === "-") {
        result = Number(x) - Number(y);
    }
    else if(operator === "*") {
        result = Number(x) * Number(y);
    }
    else (
        result = Number(x) / Number(y)
    )
    return result; 

}


module.exports = tacoMath; 