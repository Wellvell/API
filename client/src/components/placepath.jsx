import Place from './place';
import Axios from 'axios'
import { useEffect, useState } from 'react';
import arrowLeft from './img/arrow-left.png';
import arrowRight from './img/arrow-right.png';
import filter from './img/filter.png';
import './minorcharacters.scss';
import './place.scss';

function PlacePath(){

    const [CharactersList, setCharactersList] = useState([]);
    const [index, setIndex] = useState(0);
    const [getFilter, setGetFilter] = useState(false);
    const [getRuler, setGetRuler] = useState("");

    const handleChange = () => {
        setGetFilter(!getFilter)
    }

    useEffect(()=>{
        Axios.get('http://localhost:3001/place').then((response) => 
        {
            setCharactersList(response.data);
        });
        
    },[]);

    const slideLeft = () => {
        setIndex(index - 1);
        setGetRuler("");
    };

    const slideRight = () => {
        setIndex(index + 1);
        setGetRuler("");
    };
  
    const rulerInfo = () =>{
        let ruler = CharactersList[index].Ruler
        let str = "";
        switch (ruler){
            case "Принцесса Черепаха":
                ruler = 1;
                break;
            case "Великий Мастер Волшебник":
                ruler = 2;
                break;
            case "Граф Лимонохват":
                ruler = 3;
                break;
            case "Боннибель":
                ruler = 4;
                break;
            case "Принцесса Завтрак":
                ruler = 5;
                break;
            case "Ледяной Король":
                ruler = 6;
                break;
            case "Гроб Гоб Глоб Грод":
                ruler = 7;
                break;
            case "Бог Тусовок":
                ruler = 8;
                break;
            case "Принцесса Пламя (Фиби)":
                ruler = 9;
                break;
            case "Принцесса Пупырчатого Королевства":
                ruler = 10;
                break;
            case "Принцесса Слизь":
                ruler = 11;
                break;
            case "Принцесса Хот-Дог":
                ruler = 12;
                break;
            case "Принцесса Ягода":
                ruler = 13;
                break;
            case "Хансон Абадир":
                ruler = 14;
                break;
        
            }
         
        Axios.get(`http://localhost:3001/ImgRuler=${ruler}`).then((response) => 
            {
                str = JSON.stringify(response.data);
                ruler = str.slice(18)
                str = ruler;
                ruler = str.slice(1, -3)
                setGetRuler(ruler)
            });
    }

    const funcType = (value) => {
        setIndex(0);
        if (value !== "0"){
            Axios.get(`http://localhost:3001/Type=${value}`).then((response) => 
            {
                setCharactersList(response.data)
            });
        }
        else{
            Axios.get('http://localhost:3001/place').then((response) => 
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
                        <select defaultValue="Выберите тип" onChange={(event) => funcType(event.target.value)}>
                            <option value="0"> Выберите тип</option>
                            <option value="1" > Королевства </option>
                            <option value="2" > Другое </option>
                        </select> 
                    </div>
                )
            }
            <div className="App__container__place maindiv" >
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
                                <Place
                                    key = {CharactersList.Name}
                                    Image = {CharactersList[index].Image}
                                    Name = {CharactersList[index].Name}
                                    Ruler = {CharactersList[index].Ruler}
                                    type = {CharactersList[index].type}
                                    Descript = {CharactersList[index].Descript}
                                    getRulerInfo = {rulerInfo}
                                    ruler = {getRuler}
                                    >
                                </Place>
                                )
                            }
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default PlacePath;