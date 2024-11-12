const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true })); // Ensure form data is properly parsed
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

let data = [];

app.post('/submitform', (req, res) => {
    const { name, email, phone } = req.body; // Extract form fields from request body
    data.push({ name, email, phone }); // Store submitted data in the 'data' array

    let html = '<h1>Form submitted successfully</h1><br><br>';
    data.forEach((entry) => {
        html += `<p><b>Name: ${entry.name}</b></p><p>${entry.email}</p><p>${entry.phone}</p><br><br>`;
    });

    res.send(html); // Send the data back as HTML response
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT} -> http://localhost:${PORT}`);
});
