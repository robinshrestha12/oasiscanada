const express =require('express');

require('dotenv').config();

const app = express();

const axios = require ('axios');

const port = 8080;

const cors = require('cors');

const pool = require('./connection');

app.use(cors());

app.use(express.json());

app.listen(port, () =>{
  console.log(`Dabase server running on port ${port}`);

});

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