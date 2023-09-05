function Aliado({id, img}) {
    return(
        <>
            <li className="section--aliados__ul__li">
                <a href="#"><img className="section--aliados__ul__li__img--logo" src={img} alt={id} /></a>
            </li>
        </>
    )
}

export { Aliado }