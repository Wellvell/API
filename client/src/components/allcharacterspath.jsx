import Allcharacters from './allcharacters';
import Axios from 'axios'
import { useEffect, useState } from 'react';
import filter from './img/filter.png';
import './allcharacters.scss';

function AllcharactersPath(){

    const [CharactersList, setCharactersList] = useState([]);
    const [getFilter, setGetFilter] = useState(false);
    const [getSex, setGetSex] = useState("");
    const [getRace, setGetRace] = useState("");

    useEffect(()=>{
        Axios.get('http://localhost:3001/allcharacters').then((response) => 
        {
            setCharactersList(response.data)
        });
    },[]);

    const handleChange = () => {
        setGetFilter(!getFilter)
    }

    const funcSex = (value) => {
        setGetSex(value);
        if (value !== "1"){
            Axios.get(`http://localhost:3001/Sex=${value}`).then((response) => 
            {
                setCharactersList(response.data)
            });
        }
    }

    const funcRace = (value) => {
        setGetRace(value);
        if (value !== "2"){
            Axios.get(`http://localhost:3001/Race=${value}`).then((response) => 
            {
                setCharactersList(response.data)
            });
        }
    }

    useEffect(() => {
        if (getSex !== "1" && getRace !== "2" && getSex !== "" && getRace !== ""){
            Axios.get(`http://localhost:3001/Sex=${getSex}/Race=${getRace}`).then((response) => 
            {
                setCharactersList(response.data)
            });
        }
        else if (getSex === "1" && getRace === "2"){
            Axios.get('http://localhost:3001/allcharacters').then((response) => 
        {
            setCharactersList(response.data)
        });
        }
    }, [getSex, getRace])

    return(
        <div>
            <div className="App__container__filteres">
                <button><img src={filter} alt="Фильтр" onClick={handleChange}></img></button>
            </div>
            {
                getFilter && (
                    <div className="select-container">
                        <select defaultValue="Выберите пол" onChange={(event) => funcSex(event.target.value)}>
                            <option value="1"> Выберите пол </option>
                            <option value="Female" > Женский </option>
                            <option value="Male" > Мужской </option>
                            <option value="No" > Бесполый </option>
                        </select>
                        <select defaultValue="Выберите расу" onChange={(event) => funcRace(event.target.value)}>
                            <option value="2"> Выберите расу</option>
                            <option value="Vampires" > Вампиры </option>
                            <option value="Magic" > Волшебники </option>
                            <option value="CandyPeople" > Конфетный народ </option>
                            <option value="SpaceThing" > Космическая сущность </option>
                            <option value="People" > Люди </option>
                            <option value="Fire" > Пламенный народ </option>
                            <option value="Lumpy" > Пупырчатые люди </option>
                            <option value="Rainicorns" > Радугарог </option>
                            <option value="MOs" > Роботы МО </option>
                            <option value="Dogs" > Собака </option>
                        </select>
                    </div>
                )
            }
            <div className="App__container__characters">
            {
                CharactersList &&
                CharactersList.map((value) =>
                <Allcharacters
                key = {value.Name}
                Image = {value.Image}
                Name = {value.Name}
                Category = {value.Category}>
                </Allcharacters>
                )
            }
            </div>
        </div>
    )
}

export default AllcharactersPath;