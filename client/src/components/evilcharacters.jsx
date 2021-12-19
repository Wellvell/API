import Axios  from 'axios';
import { useState } from 'react';
import pen from './img/pen.png';

function Evils(props) {
    const [abilitiesCharacter, setAbilitiesCharacter] = useState(props.Abilities)
    const [infoName, setInfoName] = useState("");
    const [flag, setFlag] = useState(false);

    const handleChange = () =>{
        if (!flag){
            setInfoName(props.Name);
            setFlag(true);
        }
        else{
            setFlag(false);
            updateCharacterName();
            setInfoName("");
        }
    }

    const updateCharacterName = () => {
        Axios.put('http://localhost:3001/evilscharactersUpdate', {Abilities: abilitiesCharacter, Name: infoName}).then((response) => {
            alert("Информация об персонаже изменена!")

        })
    };

    if(props.canChange){
        return (
            <div className='minor-row'>
                {/*eslint-disable-next-line*/}
                <img src={props.Image} alt="Character picture" />
                <div className="character-row__text">
                <p className="name"> {props.Name} </p>
                <p> {props.nameChange && infoName===props.Name ? <input type="text" placeholder={`Способности: ${abilitiesCharacter}`} onChange={event => {setAbilitiesCharacter(event.target.value)}}/> : <p> Способности: {abilitiesCharacter} </p>} </p>
                <button className="edit" onMouseMove={props.change} onClick={handleChange}><img src={pen} alt="pen" ></img></button>
                </div>
            </div>
        )
    }
    else{
        return (
            <div className='minor-row'>
                {/*eslint-disable-next-line*/}
                <img src={props.Image} alt="Character picture" />
                <div className="character-row__text">
                <p className="name"> {props.Name} </p>
                </div>
            </div>
        )
    }

}

export default Evils;