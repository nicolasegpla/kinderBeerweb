import { useState } from 'react'
import { ContainerCardsInfo } from './ContainerCardsInfo';
import { CardsItem } from './CardsItem';




function InfoCurso({partesDelCurso}) {
    return (
        <>
            <section className='info--curso'>
                <h2 className='info--curso__h2'>Nuestro curso</h2>
                <p className='info--curso__p'>En kinder beer aprenderás las bases de la cervecería artesanal y asi convertirte en todo un Home brewer.</p>
                <ContainerCardsInfo>
                    {partesDelCurso.map(card => (
                        <CardsItem 
                            key={card.titulo} 
                            imagen={card.imagen} 
                            titulo={card.titulo} 
                            parrafo={card.parrafo}
                        />
                    ))}
                </ContainerCardsInfo>
            </section>
        </>
    )
}

export  { InfoCurso }

