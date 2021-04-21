var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const fetch = require('node-fetch');
const cors = require('cors');
const bodyParser = require('body-parser')
const { url } = require('inspector');
const dotenv = require('dotenv');
dotenv.config();

const app = express()

app.use(express.static('dist'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('../client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

const API_KEY = process.env.API_KEY

app.post('/', async (req, res) => {
    const url = req.body.formText;
    const baseURL = `https://api.meaningcloud.com/sentiment-2.1?key=${API_KEY}&lang=en&url=${url}`;
    const result = await fetch(baseURL, {
        method: 'POST'
    })
    try {
        const newData = await result.json();
        console.log(newData)
        res.send(newData);
    }
    catch (error) {
        console.log("error", error);
    }
});

