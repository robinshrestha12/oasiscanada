const express =require('express');

require('dotenv').config();

const app = express();

const axios = require ('axios');

const port = process.env.port || 8080;

const cors = require('cors');

const pool = require('./connection');

app.use(cors());

app.use(express.json());

app.listen(port, () =>{
  console.log(`Dabase server running on port ${port}`);

});
app.get("/", (req, res) => res.send('Welcome to backend'));
app.get("/users", async (req, res) =>{
  try{
    const getAllusers = await pool.query(
      'SELECT * FROM users ORDER BY id ASC'
    );
    res.json(getAllusers.rows);
  }
  catch(err){
    console.log(err.message);
  }
});

app.post("/users", async (req, res) =>{
try {
  const {firstName, lastName, userEmail, code, userPassword } = req.body;

  console.log( "req body ", req.body);

  const newUser = await pool.query("INSERT INTO users(firstName, lastName, userEmail, code, userPassword) VALUES ( $1, $2, $3, $4, $5) RETURNING *", [firstName, lastName, userEmail, code, userPassword]);

  res.json(newUser.rows[0]);

} catch(err) {
  console.error(err.message);
}

});