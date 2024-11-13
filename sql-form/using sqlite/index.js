const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Initialize SQLite database
const db = new sqlite3.Database('./event_registration.db', (err) => {
    if (err) throw err;
    console.log('Connected to SQLite database');
});

// Create the `registrations` table if it doesn't exist
db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS registrations (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            email TEXT,
            phone TEXT
        )
    `);
});

app.use(express.static(path.join(__dirname, 'public')));

// Register a new participant
app.post('/register', (req, res) => {
    const { name, email, phone } = req.body;
    const query = 'INSERT INTO registrations (name, email, phone) VALUES (?, ?, ?)';
    db.run(query, [name, email, phone], function (err) {
        if (err) {
            console.error(err.message);
            res.status(500).send('Error in registration');
        } else {
            res.send('Registration successful');
        }
    });
});

// Get all registrations
app.get('/registrations', (req, res) => {
    const query = 'SELECT * FROM registrations';
    db.all(query, [], (err, rows) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Error retrieving registrations');
        } else {
            res.json(rows);
        }
    });
});

// Update a registration by ID
app.put('/update/:id', (req, res) => {
    const { name, email, phone } = req.body;
    const query = 'UPDATE registrations SET name = ?, email = ?, phone = ? WHERE id = ?';
    db.run(query, [name, email, phone, req.params.id], function (err) {
        if (err) {
            console.error(err.message);
            res.status(500).send('Error updating registration');
        } else {
            res.send('Registration updated successfully');
        }
    });
});

// Delete a registration by ID
app.delete('/delete/:id', (req, res) => {
    const query = 'DELETE FROM registrations WHERE id = ?';
    db.run(query, [req.params.id], function (err) {
        if (err) {
            console.error(err.message);
            res.status(500).send('Error deleting registration');
        } else {
            res.send('Registration deleted successfully');
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
