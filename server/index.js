const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');

//Middleware
app.use(cors());
app.use(express.json());

//Routes

//Create a user

app.post("/users", async(req,res)=>{
  try {
    const { full_name } = req.body;

    const newTodo = await pool.query(
      "INSERT INTO users (full_name) VALUES($1)",
      [full_name]
    );

    res.json(newTodo);
    console.log(newTodo);

  } catch (err) {
    console.error(err.message);
}
});

app.post("/users2", async(req,res)=>{
  try {
    const { full_name } = req.body;

    const newTodo = await pool.query(
      "INSERT INTO users (full_name) VALUES($1)",
      [full_name]
    );

    res.json(newTodo);
    console.log(newTodo);

  } catch (err) {
    console.error(err.message);
}
});

//List of all current customers


//Find the full address based on name


//Find the full-name based on user id


//Find the company based on user id

//Change the name of a contact


//Change the email address

app.get('/', (req, res) => {
    res.send('Hello World!')
  });

app.listen(5000, ()=>{
    console.log("Server has started on port 5000")
});