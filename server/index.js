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
    password: "Joker4753"
});


app.get('/allcharacters', (req, res) => {
    db.query("SELECT Name, Image, Category FROM allcharacters", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/maincharacters', (req, res) => {
    db.query("SELECT * FROM maincharacters", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Sex=Female', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Sex = 'Женский' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Sex=Male', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Sex = 'Мужской' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Race=Magic', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Race = 'Волшебники' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Race=CandyPeople', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Race = 'Конфетный народ' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Race=SpaceThing', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Race = 'Космическая сущность' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Race=People', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Race = 'Люди' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Sex=Female/Race=Magic', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Sex = 'Женский' AND Race = 'Волшебники'", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Sex=Female/Race=CandyPeople', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Sex = 'Женский' AND Race = 'Конфетный народ'", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Sex=Female/Race=SpaceThing', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Sex = 'Женский' AND Race = 'Космическая сущность'", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Sex=Female/Race=People', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Sex = 'Женский' AND Race = 'Люди'", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Sex=Male/Race=Magic', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Sex = 'Мужской' AND Race = 'Волшебники'", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Sex=Male/Race=CandyPeople', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Sex = 'Мужской' AND Race = 'Конфетный народ'", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Sex=Male/Race=SpaceThing', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Sex = 'Мужской' AND Race = 'Космическая сущность'", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Sex=Male/Race=People', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Sex = 'Мужской' AND Race = 'Люди'", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Bonnie', (req, res) => {
    db.query("SELECT * FROM maincharacters WHERE Name = 'Боннибель' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Finn', (req, res) => {
    db.query("SELECT * FROM maincharacters WHERE Name = 'Финн Мёртенс' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.listen(3001, () => {
    console.log("Your server is running on port 3001...");
});