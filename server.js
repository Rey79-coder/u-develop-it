const mysql = require('mysql2');
const express = require('express');

const PORT = process.env.PORT || 3037;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // Your MySQL username,
    user: 'root',
    // Your MySQL password
    password: 'UCLA@coding1',
    database: 'election'
  },
  console.log('Connected to the election database.')
);

// GET a single candidate
db.query(`SELECT * FROM candidates WHERE id = 1`, (err, row) => {
  if (err) {
    console.log(err);
  }
  console.log(row);
});

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

// Delete a candidate
db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err, result) => {
  if (err) {
    console.log(err);
  }
  console.log(result);
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

