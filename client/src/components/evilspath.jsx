import Minorcharacters from './minorcharacters';
import Axios from 'axios'
import { useEffect, useState } from 'react';
import filter from './img/filter.png';
import './minorcharacters.scss';

function EvilsPath(){

    const [CharactersList, setCharactersList] = useState([]);
    const [getFilter, setGetFilter] = useState(false);
    const [getAbility, setGetAbility] = useState("0");

    useEffect(()=>{
        Axios.get('http://localhost:3001/evils').then((response) => 
        {
            setCharactersList(response.data)
        });
    },[]);

    const handleChange = () => {
        setGetFilter(!getFilter)
    }

    const funcAbilities= (value) => {
        
        if (value !== "0"){
            Axios.get(`http://localhost:3001/Abilities=${value}`).then((response) => 
            {
                setCharactersList(response.data)
            });
        }
        else{
            Axios.get('http://localhost:3001/evils').then((response) => 
            {
                setCharactersList(response.data)
            });
        }
    }


    return(
        <div>
            <div className="App__container__filteres">
                <button><img src={filter} alt="Фильтр" onClick={handleChange}></img></button>
            </div>
            {
                getFilter && (
                    <div className="select-container">
                        <select defaultValue="Выберите способности" onChange={(event) => funcAbilities(event.target.value)}>
                            <option value="0"> Выберите способности </option>
                            <option value="1" > Интеллектуальные </option>
                            <option value="2" > Магические </option>
                            <option value="3" > Физические </option>
                        </select>
                    </div>
                )
            }
            <div className="App__container__characters">
            {
                CharactersList &&
                CharactersList.map((value) =>
                <Minorcharacters
                key = {value.Name}
                Image = {value.Image}
                Name = {value.Name}
                Abilities = {value.Abilities}>
                </Minorcharacters>
                )
            }
            </div>
        </div>
    )
}

export default  EvilsPath;