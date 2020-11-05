const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const mathequations = require("./modules/mathequations");

//where math answers are stored on the server side
const answerHistory = [];

//creating server and defining port
const PORT = process.env.PORT || 5000;


//function - creating "GET" route
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', (socket) => {
    console.log('a user connected');

    //emitting to 'calculation', only listens to 'calculation' from front end
    //once it's heard, will do newCalc function
    socket.on('calculation', (newCalc) => {

        const { numOne, numTwo, operator }  = newCalc;
        const answer = mathequations(numOne, numTwo, operator);

        //adding new key value "answer" 
        newCalc.answer = answer;

        //answerHistory is an array of objects to display 
        answerHistory.push(newCalc);
        console.log(answerHistory);

        io.emit('new calculation', answerHistory.slice(-10));
    });

    //if new to the app, will get what is in current calculation history
    socket.on('getHistory', () => {
        io.emit('new calculation', answerHistory.slice(-10));

    })

});


//starting up server
http.listen(PORT, () => {
    console.log(`Up and running on PORT: ${PORT}`);
});