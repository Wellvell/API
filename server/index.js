const mysql = require("mysql");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    database: "adventuretime",
    password: "Joker4753."
});


app.get('/allcharacters', (req, res) => {
    db.query("SELECT Name, Image, Category FROM allcharacters", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})



app.listen(3001, () => {
    console.log("Your server is running on port 3001...");
});