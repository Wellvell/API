import Allcharacters from './allcharacters';
import Axios from 'axios'
import { useEffect, useState } from 'react';
import filter from './img/filter.png';

function AllcharactersPath(){

    const [CharactersList, SetCharactersList] = useState([]);

    useEffect(()=>{
        Axios.get('http://localhost:3001/allcharacters').then((response) => 
        {
            SetCharactersList(response.data)
        });
    },[]);

    return(
        <div>
            {
                <div className="App__container__filteres">
                    <button><img src={filter}></img></button>
                </div>
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