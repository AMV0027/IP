const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.use(bodyParser());


app.post('/submit', (req, res) => {
    const { name, age } = req.body;
    res.send(`
        <h1>Form Submitted</h1>
        <p>Name: ${name}</p>
        <p>Age: ${age}</p>
        <a href="/">Go Back</a>
    `);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
