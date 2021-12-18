function Place(props) {
    return (
        <div className='place-card'>
            {/*eslint-disable-next-line*/}
            <img src={props.Image} alt="Place picture" />
            <div className="character-card__text">
                <p className="name"> <b> Название: </b> {props.Name} </p>
                <a href="#" onClick={props.getRulerInfo} className="name"> <b> Правитель: </b> {props.Ruler} </a>
                <p className={props.ruler !== "" ? "show" : "hide"}> <img src={props.ruler} alt="Ruler picture"/> </p>
                <p className="name"> <b> Тип: </b> {props.type} </p>
                <p className="descript"> <b> Описание: </b> {props.Descript} </p>
            </div>
        </div>
    )
}

export default Place;