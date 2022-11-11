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
    const { first_name } = req.body;
    const { last_name } = req.body;
    const { email } = req.body;
    const { company }= req.body;
    const { street }= req.body;
    const { city }= req.body;
    const { state }= req.body;
    const { zip }= req.body;
    const { phone }= req.body;
    const { birth_date }= req.body;
    const { sex }= req.body;
    const { date_entered }= req.body;
    console.log(req.body);

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