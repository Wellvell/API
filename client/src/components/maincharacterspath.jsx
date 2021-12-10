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
    };

    const slideRight = () => {
        setIndex(index + 1);
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