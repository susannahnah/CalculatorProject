console.log("pizza pizza");

let operator = "";

$(document).ready(onReady);

function onReady() {

    //connect buttons in html to button functions
    $('.operatorButton').on('click', getOperator);
    $('#sumButton').on('click', sumButtonHandler);
    $('#clearButton').on('click', clearButtonHandler);

};

//telling AJAX to get the operator actions (+ - * /) from 
//inside the particular html buttons
//calling it operator
function getOperator() {
    operator = this.innerHTML;
    console.log(operator);
};

//create sum button function 
//combinging two input numbers and using chosen operator
function sumButtonHandler() {
    const newCalc = {
        numOne: $('#firstNumber').val(),
        numTwo: $('#secondNumber').val(),
        operator: operator
    };
    console.log(newCalc);

    //command AJAX to run around and post/show my math
    $.ajax({
        method: 'POST',
        url: '/calc',
        data: newCalc

    //every request needs a response, but on the server
    }).then(function (response) {
        console.log(response);
        $.ajax({
            method: 'GET',
            url: '/calc'
        }).then(function (response) {
            console.log(response);
            $('#postCalcs').empty();
            $('#postCalcs').append(response);
        })
    });
}


//clearing out all input fields
function clearButtonHandler() {
    $('input').val('');
};

