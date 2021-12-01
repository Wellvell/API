import Maincharacters from './maincharacters';
import Axios from 'axios'
import { useEffect, useState } from 'react';
import arrowLeft from './img/arrow-left.png';
import arrowRight from './img/arrow-right.png';

function MaincharactersPath(){

    const [CharactersList, SetCharactersList] = useState([]);
    const [index, setIndex] = useState(0);

    useEffect(()=>{
        Axios.get('http://localhost:3001/maincharacters').then((response) => 
        {
            SetCharactersList(response.data);
        });
    },[]);

    const slideLeft = () => {
        setIndex(index - 1);
    };

    const slideRight = () => {
        setIndex(index + 1);
    };


    return(
        <div className="App__container__cards">
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
    )
}

export default MaincharactersPath;