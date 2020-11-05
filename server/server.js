const express = require('express');
const bodyParser = require('body-parser');

//creating server and defining port
const app = express();
const PORT = process.env.PORT || 5000;

//giving access to req.body sent from front end to serverside
app.use(bodyParser.urlencoded({ extended: true }));

//function - creating "GET" route
app.get('/', (req, res) => {
    console.log("testytesttest");
    res.sendStatus(200);
})

app.post('/newequation', (req, res) => {
    console.log(req.body);
    res.sendStatus(200);
})



//starting up server
app.listen(PORT, () => {
    console.log(`Up and running on PORT: ${PORT}`);
});