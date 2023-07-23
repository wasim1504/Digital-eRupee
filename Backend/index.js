const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
const port = 3001; 

app.use(express.json());
app.use(bodyParser.json());
app.use(cors()); 


// Create a MySQL pool for handling connections
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'digitaleRupii',
  port: 3306
});

// API endpoint for user registration
app.post('/api/register', (req, res) => {
  const { name, email, password, erupiibal } = req.body;

  // Insert the new user into the database
  pool.query(
    'INSERT INTO users (name, email, password, erupiibal) VALUES (?, ?, ?, ?)',
    [name, email, password, erupiibal], // Include erupiibal value in the query
    (err, results) => {
      if (err) {
        console.error('Error registering user:', err);
        res.status(500).json({ error: 'Error registering user' });
      } else {
        res.status(200).json({ message: 'User registered successfully' });
      }
    }
  );
});



app.get('/api/hello', (req, res) => {
  const response = { message: 'Hello world' };
  res.json(response);
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});