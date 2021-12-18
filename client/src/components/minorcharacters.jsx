function Minorcharacters(props) {
    return (
        <div className='minor-row'>
            {/*eslint-disable-next-line*/}
            <img src={props.Image} alt="Character picture" />
            <div className="minor-row__text">
            <p className="name"> {props.Name} </p>
            </div>
        </div>
    )

}

export default Minorcharacters;