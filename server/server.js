const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const mathequations = require("./modules/mathequations");

//where math answers are stored on the server side
const answerHistory = [1, 2];

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
        answerHistory.push(answer);
        console.log(answerHistory);

        io.emit('new calculation', answerHistory);
    });

});

//function - post new equations to server
app.post('/newequation', (req, res) => {

    console.log(req.body);
    const { numOne, numTwo, operator }  = req.body;
    const answer = mathequations(numOne, numTwo, operator);
    answerHistory.push(answer);

    //answer from two variables put into answerHistory and sent back to front end
    res.status(200).send(answerHistory); 
})





//starting up server
http.listen(PORT, () => {
    console.log(`Up and running on PORT: ${PORT}`);
});