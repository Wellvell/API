import './components/App.scss';
import './normalize.css';
import AllcharactersPath from './components/allcharacterspath';
import MaincharactersPath from './components/maincharacterspath';
import './components/allcharacters';
import './components/allcharacters.scss';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {

  return ( 
    <BrowserRouter>
      <div className = "App" >
        <div className="App__container">
          <div className="App__container__text">
            Welcome to Adventure Time Wiki!
            <hr></hr>
          </div>
          <div className="App__container__category">
              Выберите категорию поиска:
              <Link to="/allcharacters"><button className="App__container__category__btn1">Все персонажи</button></Link>
              <Link to="/maincharacters"><button className="App__container__category__btn2">Главные герои</button></Link>
              <button className="App__container__category__btn3">Второстепенные персонажи</button>
              <button className="App__container__category__btn4">Королевская власть</button>
              <button className="App__container__category__btn5">Злодеи</button>
              <button className="App__container__category__btn6">Расы</button>
              <button className="App__container__category__btn7">Места</button>
              <button className="App__container__category__btn8">События</button>
              <button className="App__container__category__btn9">Эпизоды</button>
          </div>
          <Routes>
            <Route path="/allcharacters" element={<AllcharactersPath/>}/>
            <Route path="/maincharacters" element={<MaincharactersPath/>}/>
          </Routes>
        </div>
      </div >
  </BrowserRouter>
  );
  
}

export default App;