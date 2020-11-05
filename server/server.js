const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;

//function - 
app.get('/', (req, res) => {
    console.log("testytesttest");
    res.sendStatus(200);
})






app.listen(PORT, () => {
    console.log(`Up and running on PORT: ${PORT}`);
});