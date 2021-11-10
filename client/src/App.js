import './components/App.scss';
import './normalize.css';
import Axios from 'axios'
import Allcharacters from './components/allcharacters';
import './components/allcharacters';
import './components/allcharacters.scss';
import { useState } from 'react';


function App() {

  const [CharactersList, SetCharactersList] = useState([]);

  const getAllCharacters = () => {
  Axios.get('http://localhost:3001/allcharacters').then((response) => 
  {
    SetCharactersList(response.data)
  });
  }

  return ( 
  <div className = "App" >
    <div className="App__container">
      <div className="App__container__text">
        Welcome to Adventure Time Wiki!
        <hr></hr>
      </div>
      <div className="App__container__category">
          Выберите категорию поиска:
          <button className="App__container__category__btn1" onClick={getAllCharacters}>Все персонажи</button>
          <button className="App__container__category__btn2">Главные герои</button>
          <button className="App__container__category__btn3">Второстепенные персонажи</button>
          <button className="App__container__category__btn4">Королевская власть</button>
          <button className="App__container__category__btn5">Злодеи</button>
          <button className="App__container__category__btn6">Расы</button>
          <button className="App__container__category__btn7">Места</button>
          <button className="App__container__category__btn8">События</button>
          <button className="App__container__category__btn9">Эпизоды</button>
      </div>
      <div className="App__container__characters">
        {
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
  </div >
  );
  
}

export default App;