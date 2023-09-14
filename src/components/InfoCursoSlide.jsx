import { useState } from 'react'
import { CardsItemDos } from "./CardsItemDos"

function InfoCursoSlide( {partesDelCurso, count, right, left}) {

    
        
    return(
        <>
            <section className='section--info--curso'>
                <article className='section--info--curso__article'>
                    <h2 className='section--info--curso__article__h2'>Acerca de nuestro curso</h2>
                    <p className='section--info--curso__article__p'>En kinder beer aprenderás las bases de la cervecería artesanal y asi convertirte en todo un Home brewer.</p>
                    <CardsItemDos
                        imagen={partesDelCurso[count].imagen} 
                        titulo={partesDelCurso[count].titulo} 
                        parrafo={partesDelCurso[count].parrafo}
                        left={left}
                        right={right}
                    />
                </article>
            </section>
            <section className='section--selectores'>
                <div className='section--selectores__one'></div>
                <div className='section--selectores__two'></div>
                <div className='section--selectores__three'></div>
            </section>
            
            
           
        </>
    )
}

export { InfoCursoSlide }