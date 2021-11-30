
function Allcharacters(props) {

    let main = 0;
    let minor = 0;
    let ruler = 0;
    let evil =  0;
    let str = props.Category;

    for(let i=0; i < str.length; i++){
        if (str[i] ==="1"){
            main = 1;
        }
        if (str[i] ==="2"){
            minor = 1;
        }
        if (str[i] ==="3"){
            ruler = 1;
        }
        if (str[i] ==="4"){
            evil = 1;
        }
    }

    if (main === 1 && minor === 0 && ruler === 0 && evil === 0){
        return (
            <div className='character-row'>
                {/*eslint-disable-next-line*/}
                <img src={props.Image} alt="Character picture" />
                <div className="character-row__text">
                <p className="name"> {props.Name} </p>
                <p className="main"> Главный герой </p>
                </div>
            </div>
        )
    }
    if (main === 0 && minor === 1 && ruler === 0 && evil === 0){
        return (
            <div className='character-row'>
                {/*eslint-disable-next-line*/}
                <img src={props.Image} alt="Character picture" />
                <div className="character-row__text">
                <p className="name"> {props.Name} </p>
                <p className="minor"> Второстепенный персонаж </p>
                </div>
            </div>
        )
    }
    if (main === 0 && minor === 0 && ruler === 0 && evil === 1){
        return (
            <div className='character-row'>
                {/*eslint-disable-next-line*/}
                <img src={props.Image} alt="Character picture" />
                <div className="character-row__text">
                <p className="name"> {props.Name} </p>
                <p className="evil"> Злодей </p>
                </div>
            </div>
        )
    }
    if (main === 0 && minor === 0 && ruler === 1 && evil === 0){
        return (
            <div className='character-row'>
                {/*eslint-disable-next-line*/}
                <img src={props.Image} alt="Character picture" />
                <div className="character-row__text">
                <p className="name"> {props.Name} </p>
                <p className="ruler"> Королевская власть </p>
                </div>
            </div>
        )
    }
    if (main === 1 && minor === 0 && ruler === 1 && evil === 0){
        return (
            <div className='character-row'>
                {/*eslint-disable-next-line*/}
                <img src={props.Image} alt="Character picture" />
                <div className="character-row__text">
                <p className="name"> {props.Name} </p>
                <p className="main"> Главный герой </p>
                <p className="ruler"> Королевская власть </p>
                </div>
            </div>
        )
    }
    if (main === 0 && minor === 1 && ruler === 1 && evil === 0){
        return (
            <div className='character-row'>
                {/*eslint-disable-next-line*/}
                <img src={props.Image} alt="Character picture" />
                <div className="character-row__text">
                <p className="name"> {props.Name} </p>
                <p className="minor"> Второстепенный персонаж </p>
                <p className="ruler"> Королевская власть </p>
                </div>
            </div>
        )
    }
    if (main === 0 && minor === 0 && ruler === 1 && evil === 1){
        return (
            <div className='character-row'>
                {/*eslint-disable-next-line*/}
                <img src={props.Image} alt="Character picture" />
                <div className="character-row__text">
                <p className="name"> {props.Name} </p>
                <p className="evil"> Злодей </p>
                <p className="ruler"> Королевская власть </p>
                </div>
            </div>
        )
    }
}

export default Allcharacters;