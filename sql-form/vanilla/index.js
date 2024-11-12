const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'amv2712005',
    database: 'event_registration'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database');
});

app.use(express.static(path.join(__dirname, 'public')));

app.post('/register', (req, res) => {
    const { name, email, phone } = req.body;
    const query = 'INSERT INTO registrations (name, email, phone) VALUES (?, ?, ?)';
    db.query(query, [name, email, phone], (err, result) => {
        if (err) throw err;
        res.send('Registration successful');
    });
});

app.get('/registrations', (req, res) => {
    const query = 'SELECT * FROM registrations';
    db.query(query, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.put('/update/:id', (req, res) => {
    const { name, email, phone } = req.body;
    const query = 'UPDATE registrations SET name = ?, email = ?, phone = ? WHERE id = ?';
    db.query(query, [name, email, phone, req.params.id], (err, result) => {
        if (err) throw err;
        res.send('Registration updated successfully');
    });
});

app.delete('/delete/:id', (req, res) => {
    const query = 'DELETE FROM registrations WHERE id = ?';
    db.query(query, [req.params.id], (err, result) => {
        if (err) throw err;
        res.send('Registration deleted successfully');
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
