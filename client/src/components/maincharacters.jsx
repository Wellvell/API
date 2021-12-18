import Episode from './episode';

function Maincharacters(props) {
    return (
        <div className='character-card'>
            {/*eslint-disable-next-line*/}
            <img src={props.Image} alt="Character picture" />
            <div className="character-card__text">
                <p className="name"> <b> Имя: </b> {props.Name} </p>
                <p className="age"> <b> Возраст: </b> {props.Age} </p>
                <a href="#" className="race" onClick={props.getRaceInfo}> <b> Раса: </b> {props.Race} </a>
                <p> {props.race} </p>
                <p className="descript"> <b> Описание: </b> {props.Descript} </p>
                <p> <a href="#"  className="first-episode" onClick={props.getEpInfo1}> <b> Первое появление: </b> "{props.FirstEpisode}" </a> </p>
                <div>
                    {
                        props.episode1 &&
                        props.episode1.map((value) =>
                        <Episode
                        key = {value.Name}
                        Image = {value.Image}
                        Name = {value.Name}
                        Season = {value.Season}
                        Episode = {value.Episode}
                        Premiere = {value.Premiere}
                        Descript = {value.Descript}>
                        </Episode>
                        )
                    }
                </div>
                <p> <a href="#"  className="last-episode" onClick={props.getEpInfo2}> <b> Последнее появление: </b> "{props.LastEpisode}" </a> </p>
                <div>
                {
                    props.episode2 &&
                    props.episode2.map((value) =>
                    <Episode
                    key = {value.Name}
                    Image = {value.Image}
                    Name = {value.Name}
                    Season = {value.Season}
                    Episode = {value.Episode}
                    Premiere = {value.Premiere}
                    Descript = {value.Descript}>
                    </Episode>
                    )
                }
            </div>
            </div>
        </div>
    )
}

export default Maincharacters;