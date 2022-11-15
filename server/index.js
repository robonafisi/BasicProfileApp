const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');

//Middleware
app.use(cors());
app.use(express.json());

//Routes

//Create a user

app.post("/create_user", async(req,res)=>{
  try {
    const { first_name, last_name, email, company, street, city, state, zip, phone, birth_date, sex, date_entered } = req.body;

    const newTodo = await pool.query(
      "INSERT INTO users VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *",
      [first_name, last_name, email, company, street, city, state, zip, phone, birth_date, sex, date_entered]
    );

    res.json(newTodo.rows[0]);

  } catch (err) {
    console.error(error.message);
}
});


//List of all current users
app.get("/list_user", async(req, res)=>{
  try {

    const allusers = await pool.query("SELECT * FROM users");
    res.json(allusers.rows);

  } catch (error) {
    console.error(error.message);
  }

});

//Get a user
app.get("/users/:id", async(req, res)=>{
  try {
    const { id } = req.params;
    const allusers = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
    res.json(allusers.rows);
  } catch (error) {
    console.error(error.message);
  }
});


//Update customer's information
app.put("/update_user/:id", async(req, res)=>{
  try {
    const { id } = req.params;
    const { email } = req.body;
    const updateUser = await pool.query("UPDATE users SET email = $1 WHERE id = $2", [email, id]);
  } catch (error) {
    console.error(error.message);
  }
});


//Delete a customer
app.delete("/delete_user/:id", async(req, res)=>{
  try {
  const { id } = req.params;
  const deleteuser = await pool.query("DELETE FROM users WHERE id = $1",[id]);
} catch (error) {
  console.error(error.message);
}
});


app.get('/', (req, res) => {
    res.send('Hello World!')
  });

app.listen(5000, ()=>{
    console.log("Server has started on port 5000")
});