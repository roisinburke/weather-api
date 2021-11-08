const express = require('express');
const app = express();
port = 3000;
app.listen(port);
console.log('Server started on port: ' + port);
const axios = require('axios');
const path = require('path');

app.use(express.static(__dirname))

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,"client.html"))
});

app.get('/getWeather/:city', (req,res) => {
    var city = req.params.city;
    axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=0c4994d2c8abc97d923aa5974328092a`)
        .then((response) => {
            console.log(response.data)
            res.json(response.data)
        });
});

app.get('/getAirPol/:lat/:lon',(req,res) => {
    var lat = req.params.lat;
    var lon = req.params.lon;

    axios.get(`http://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=${lat}&lon=${lon}&appid=0c4994d2c8abc97d923aa5974328092a`)
    .then((result) => {
        console.log(result.data)
        res.json(result.data)
    });
});


