const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;
const mathymath = require("./modules/mathymath");


app.use(express.static('server/public'));

app.use(bodyParser.urlencoded({ extended: true }));

const mathAnswer = require('./modules/mathanswers');