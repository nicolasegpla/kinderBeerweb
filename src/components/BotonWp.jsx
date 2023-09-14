import whatsappImg from '../assets/whatsapp-kinderDesk.svg';
function BotonWp({ whatsApp }) {
    return(
        <>
            <button onClick={whatsApp} className="button--wp"><img src={whatsappImg} alt="logo de whatsapp" /></button>
        </>
    )
}

export { BotonWp }