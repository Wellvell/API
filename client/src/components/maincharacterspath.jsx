import Maincharacters from './maincharacters';
import Axios from 'axios'
import { useEffect, useState } from 'react';
import arrowLeft from './img/arrow-left.png';
import arrowRight from './img/arrow-right.png';
import filter from './img/filter.png';
import search from './img/zoom.png';
import './maincharacters.scss';

function MaincharactersPath(){

    const [CharactersList, setCharactersList] = useState([]);
    const [index, setIndex] = useState(0);
    const [getFilter, setGetFilter] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [word, setWord] = useState('');
    const [descriptRace, setDescriptRace] = useState("");
    const [episode1, setEpisode1] = useState([]);
    const [episode2, setEpisode2] = useState([]);

    const handleChange = () => {
        setGetFilter(!getFilter)
    }

    useEffect(()=>{
        Axios.get('http://localhost:3001/maincharacters').then((response) => 
        {
            setCharactersList(response.data);
        });
        
    },[]);

    const slideLeft = () => {
        setIndex(index - 1);
        setDescriptRace("");
        setEpisode1([]);
        setEpisode2([]);
    };

    const slideRight = () => {
        setIndex(index + 1);
        setDescriptRace("");
        setEpisode1([]);
        setEpisode2([]);
    };

    const letsSearch = () =>{
        if (searchTerm === 'Боннибель' || searchTerm === 'Принцесса Жвачка' || searchTerm === 'ПЖ' || searchTerm === 'Бонни')
            setWord('Bonnie');
        if (searchTerm === 'Финн Мёртенс'|| searchTerm === 'Финн')
            setWord('Finn');
        if (searchTerm === 'Бетти Гроф' || searchTerm === 'Бетти')
            setWord('Betty');
        if (searchTerm === 'БиМО')
            setWord('BMO');
        if (searchTerm === 'Джейк')
            setWord('Jake');
        if (searchTerm === 'Леди Ливнерог' || searchTerm === 'Леди')
            setWord('Lady');
        if (searchTerm === 'Ледяной Король')
            setWord('IceKing');
        if (searchTerm === 'Марселин Абадир' || searchTerm === 'Марселин')
            setWord('Marselin');
        if (searchTerm === 'Принцесса Пламя (Фиби)' || searchTerm === 'Фиби'  || searchTerm === 'Принцесса Пламя')
            setWord('Phibie');
        if (searchTerm === 'Принцесса Пупырчатого Королевства' || searchTerm === 'ППК')
            setWord('PPK');
        if (searchTerm === 'Саймон Петриков' || searchTerm === 'Саймон')
            setWord('Saimon');
    }

    useEffect(() => {
        if (word !== ''){
            Axios.get(`http://localhost:3001/${word}`).then((response) => 
    {
        setCharactersList(response.data)
    });
        }
    },[word])

    const raceInfo = () =>{
        let race = CharactersList[index].Race
        let str = "";
        if (race === "Люди"){
            race = "People"
        }
        else if (race === "Роботы МО"){
            race = "MOs"
        }
        else if (race === "Конфетный народ"){
            race = "CandyPeople"
        }
        else if (race === "Собака"){
            race = "Dogs"
        }
        else if (race === "Радугарог"){
            race = "Rainicorns"
        }
        else if (race === "Волшебники"){
            race = "Magic"
        }
        else if (race === "Вампиры"){
            race = "Vampires"
        }
        else if (race === "Пламенный народ"){
            race = "Fire"
        }
        else if (race === "Пупырчатые люди"){
            race = "Lumpy"
        }
        Axios.get(`http://localhost:3001/DeskriptRace=${race}`).then((response) => 
            {
                str = JSON.stringify(response.data);
                race = str.slice(13)
                str = race;
                race = str.slice(1, -3)
                setDescriptRace(race)
            });
    }

    const epInfo1 = () => {
        let episode = CharactersList[index].FirstEpisode
        let counter;
        if (episode === "Весёлые секреты, Часть 2"){
            counter = "1";
        }
        else if (episode === "Время Бизнеса"){
            counter = "2";
        }
        else if (episode  === "Заварушка на пирушке"){
            counter = "3";
        }
        else if (episode === "Заложники любви"){
            counter = "4";
        }
        else if (episode === "Изгнаны!"){
            counter = "5";
        }
        else if (episode === "Адское пламя"){
            counter = "0";
        }
        else if (episode === "Неладно что-то в Пупырчатом Королевстве"){
            counter = "6";
        }
        Axios.get(`http://localhost:3001/Episode=${counter}`).then((response) => 
        {
            setEpisode1(response.data)
        });
    }

    const epInfo2 = () => {
        let episode = CharactersList[index].LastEpisode
        let counter;
        if (episode === "Пойдём со мной"){
            counter = "7";
        }
        else if (episode === "Три ведра"){
            counter = "8";
        }
        Axios.get(`http://localhost:3001/Episode=${counter}`).then((response) => 
        {
            setEpisode2(response.data)
        });
    }

    

    return(
        <div>
            <div className="App__container__filteres">
                <button><img src={filter} alt="Фильтр" onClick={handleChange}></img></button>
            </div>
            {
                getFilter && (
                    <div className="search">
                        <input placeholder="Введите имя персонажа" onChange={event => {setSearchTerm(event.target.value)}}></input>
                        <button onClick={letsSearch}> <img src={search} alt="search"></img> </button>
                    </div>    
                )
            }
            <div className="App__container__cards maindiv" >
                {
                    CharactersList.length > 0 && (
                        <div className="card-container">
                            {index > 0 && (
                            <button className="leftBtn" onClick={() => slideLeft()}>
                                <img src={arrowLeft} alt="arrow left"></img>
                            </button>
                            )}
                            {index < CharactersList.length - 1 && (
                            <button className="rightBtn" onClick={() => slideRight()}>
                                <img src={arrowRight} alt="arrow right"></img>
                            </button>
                            )}
                            {index > -1 && (
                                <Maincharacters
                                    key = {CharactersList.Name}
                                    Image = {CharactersList[index].Image}
                                    Name = {CharactersList[index].Name}
                                    Age = {CharactersList[index].Age}
                                    Race = {CharactersList[index].Race}
                                    Descript = {CharactersList[index].Descript}
                                    FirstEpisode = {CharactersList[index].FirstEpisode}
                                    LastEpisode = {CharactersList[index].LastEpisode}
                                    getRaceInfo = {raceInfo}
                                    race = {descriptRace}
                                    getEpInfo1 = {epInfo1}
                                    episode1 = {episode1}
                                    getEpInfo2 = {epInfo2}
                                    episode2 = {episode2}
                                    >
                                </Maincharacters>
                                )
                            }
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default MaincharactersPath;