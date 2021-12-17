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



///////////////////////общие запросы//////////////////////////////////////

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

//////////////////////////////пол////////////////////////////////////////

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

app.get('/Sex=No', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Sex = 'Бесполый' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})


///////////////////////Раса/////////////////////////////////////////

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

app.get('/Race=Vampires', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Race = 'Вампиры' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Race=Fire', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Race = 'Пламенный народ' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Race=Lumpy', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Race = 'Пупырчатые люди' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Race=Rainicorns', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Race = 'Радугарог' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Race=MOs', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Race = 'Роботы МО' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Race=Dogs', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Race = 'Собака' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Race=Banana', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Race = 'Бананы' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Race=Wolfes', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Race = 'Волки' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Race=Mars', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Race = 'Марсианин' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Race=None', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Race = 'Неизвестно' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Race=Orgalog', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Race = 'Оргалорг' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Race=Elephant', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Race = 'Слон' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Race=Peoplebutnot', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Race = 'Человекоподобные' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

///////////////////////Описание рас/////////////////////////////////////////

app.get('/DeskriptRace=Magic', (req, res) => {
    db.query("SELECT Descript FROM races WHERE Name = 'Волшебники' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/DeskriptRace=CandyPeople', (req, res) => {
    db.query("SELECT Descript FROM races WHERE Name = 'Конфетный народ' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/DeskriptRace=SpaceThing', (req, res) => {
    db.query("SELECT Descript FROM races WHERE Name = 'Космическая сущность' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/DeskriptRace=People', (req, res) => {
    db.query("SELECT Descript FROM races WHERE Name = 'Люди' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/DeskriptRace=Vampires', (req, res) => {
    db.query("SELECT Descript FROM races WHERE Name = 'Вампиры' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/DeskriptRace=Fire', (req, res) => {
    db.query("SELECT Descript FROM races WHERE Name = 'Пламенный народ' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/DeskriptRace=Lumpy', (req, res) => {
    db.query("SELECT Descript FROM races WHERE Name = 'Пупырчатые люди' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/DeskriptRace=Rainicorns', (req, res) => {
    db.query("SELECT Descript FROM races WHERE Name = 'Радугарог' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/DeskriptRace=MOs', (req, res) => {
    db.query("SELECT Descript FROM races WHERE Name = 'Роботы МО' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/DeskriptRace=Dogs', (req, res) => {
    db.query("SELECT Descript FROM races WHERE Name = 'Собака' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/DeskriptRace=Banana', (req, res) => {
    db.query("SELECT Descript FROM races WHERE Name = 'Бананы' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/DeskriptRace=Wolfes', (req, res) => {
    db.query("SELECT Descript FROM races WHERE Name = 'Волки' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/DeskriptRace=Mars', (req, res) => {
    db.query("SELECT Descript FROM races WHERE Name = 'Марсианин' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/DeskriptRace=None', (req, res) => {
    db.query("SELECT Descript FROM races WHERE Name = 'Неизвестно' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/DeskriptRace=Orgalog', (req, res) => {
    db.query("SELECT Descript FROM races WHERE Name = 'Оргалорг' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/DeskriptRace=Elephant', (req, res) => {
    db.query("SELECT Descript FROM races WHERE Name= 'Слон' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/DeskriptRace=Peoplebutnot', (req, res) => {
    db.query("SELECT Descript FROM races WHERE Name = 'Человекоподобные' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

//////////////////////Раса + женский пол//////////////////////////////////////////

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

app.get('/Sex=Female/Race=Vampires', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Sex = 'Женский' AND Race = 'Вампиры'", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Sex=Female/Race=Fire', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Sex = 'Женский' AND Race = 'Пламенный народ'", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Sex=Female/Race=Lumpy', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Sex = 'Женский' AND Race = 'Пупырчатые люди'", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Sex=Female/Race=Rainicorns', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Sex = 'Женский' AND Race = 'Радугарог'", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Sex=Female/Race=MOs', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Sex = 'Женский' AND Race = 'Роботы МО'", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Sex=Female/Race=Dogs', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Sex = 'Женский' AND Race = 'Собака'", function (err, data) {
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


app.get('/Sex=Female/Race=Banana', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Sex = 'Женский' AND Race = 'Бананы' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Sex=Female/Race=Wolfes', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Sex = 'Женский' AND Race = 'Волки' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Sex=Female/Race=Mars', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Sex = 'Женский' AND Race = 'Марсианин' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Sex=Female/Race=None', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Sex = 'Женский' AND Race = 'Неизвестно' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Sex=Female/Race=Orgalog', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Sex = 'Женский' AND Race = 'Оргалорг' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Sex=Female/Race=Elephant', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Sex = 'Женский' AND Race = 'Слон' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Sex=Female/Race=Peoplebutnot', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Sex = 'Женский' AND Race = 'Человекоподобные' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

//////////////////////Раса + мужской пол//////////////////////////////////////////

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


app.get('/Sex=Male/Race=Vampires', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Sex = 'Мужской' AND Race = 'Вампиры'", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Sex=Male/Race=Fire', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Sex = 'Мужской' AND Race = 'Пламенный народ'", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Sex=Male/Race=Lumpy', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Sex = 'Мужской' AND Race = 'Пупырчатые люди'", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Sex=Male/Race=Rainicorns', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Sex = 'Мужской' AND Race = 'Радугарог'", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Sex=Male/Race=MOs', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Sex = 'Мужской' AND Race = 'Роботы МО'", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Sex=Male/Race=Dogs', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Sex = 'Мужской' AND Race = 'Собака'", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Sex=Male/Race=Banana', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Sex = 'Мужской' AND Race = 'Бананы' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Sex=Male/Race=Wolfes', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Sex = 'Мужской' AND Race = 'Волки' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Sex=Male/Race=Mars', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Sex = 'Мужской' AND Race = 'Марсианин' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Sex=Male/Race=None', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Sex = 'Мужской' AND Race = 'Неизвестно' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Sex=Male/Race=Orgalorg', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Sex = 'Мужской' AND Race = 'Оргалорг' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Sex=Male/Race=Elephant', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Sex = 'Мужской' AND Race = 'Слон' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Sex=Male/Race=Peoplebutnot', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Sex = 'Мужской' AND Race = 'Человекоподобные' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})


//////////////////////Раса + бесполый пол//////////////////////////////////////////

app.get('/Sex=No/Race=MOs', (req, res) => {
    db.query("SELECT * FROM allcharacters WHERE Sex = 'Бесполый' AND Race = 'Роботы МО'", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})


///////////////////////////////Главные персонажи//////////////////////////////////////////

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

app.get('/Betty', (req, res) => {
    db.query("SELECT * FROM maincharacters WHERE Name = 'Бетти Гроф' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/BMO', (req, res) => {
    db.query("SELECT * FROM maincharacters WHERE Name = 'БиМО' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Jake', (req, res) => {
    db.query("SELECT * FROM maincharacters WHERE Name = 'Джейк' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Lady', (req, res) => {
    db.query("SELECT * FROM maincharacters WHERE Name = 'Леди Ливнерог' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/IceKing', (req, res) => {
    db.query("SELECT * FROM maincharacters WHERE Name = 'Ледяной Король' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Marselin', (req, res) => {
    db.query("SELECT * FROM maincharacters WHERE Name = 'Марселин Абадир' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Phibie', (req, res) => {
    db.query("SELECT * FROM maincharacters WHERE Name = 'Принцесса Пламя (Фиби)' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/PPK', (req, res) => {
    db.query("SELECT * FROM maincharacters WHERE Name = 'Принцесса Пупырчатого Королевства' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.get('/Saimon', (req, res) => {
    db.query("SELECT * FROM maincharacters WHERE Name = 'Саймон Петриков' ", function (err, data) {
        if (err) return console.log(err);
        else{
            res.send(data)
        }
    })
})

app.listen(3001, () => {
    console.log("Your server is running on port 3001...");
});