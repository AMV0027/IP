const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/validate', (req, res) => {
    const husbandAge = parseInt(req.body.husbandAge);
    const wifeAge = parseInt(req.body.wifeAge);
    let result;
    if (husbandAge >= 21 && wifeAge >= 21) {
        result = "Eligible for marriage";
    } else {
        result = "Not eligible for marriage";
    }
    res.send(`<h1>marriage validator</h1><br>
        <p>${result}</p><br>
        <a href="/">GO BACK</a>
        `);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

