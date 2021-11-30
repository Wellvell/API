function Maincharacters(props) {
    return (
        <div className='character-card'>
            {/*eslint-disable-next-line*/}
            <img src={props.Image} alt="Character picture" />
            <div className="character-card__text">
            <p className="name"> Имя: {props.Name} </p>
            <p className="age"> Возраст: {props.Age} </p>
            <p className="race"> Раса: {props.Race} </p>
            <p className="descript"> Описание: {props.Descript} </p>
            <p className="first-episode"> Первое появление: {props.FirstEpisode} </p>
            <p className="last-episode"> Последнее появление: {props.LastEpisode} </p>
            </div>
        </div>
    )
}

export default Maincharacters;