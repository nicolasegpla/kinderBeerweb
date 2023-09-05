import { useState } from 'react'
import Frame from '/src/assets/Frame.svg'

function Teamp({ nombre, img, roll, descripcion}) {
    return(
        <>
            <li className='info--team__team--ul__li'>
                <div className='info--team__team--ul__li__div--img'>
                    <img className='info--team__team--ul__li__div--img__frame' src={Frame} alt="frame" />
                    <img className='info--team__team--ul__li__div--img__perfil' src={img} alt={nombre} />
                </div>
                <h3 className='info--team__team--ul__li__h3'>{nombre}</h3>
                <p className='info--team__team--ul__li__p--roll'>{roll}</p>
                <p className='info--team__team--ul__li__p--descripcion'>{descripcion}</p> 
            </li>
        </>
    )
}

export { Teamp }