import { useState } from 'react'
import { ContainerCardsInfo } from "./ContainerCardsInfo"
import { CardsItemDos } from "./CardsItemDos"
import rowLeft from '../assets/chevron-left.svg'
import rowRight from '../assets/chevron-right.svg'
function InfoCursoSlide( {partesDelCurso}) {


    const [count, setCount] = useState(0);

    function right() {
        count > 1 ? setCount(0) : setCount(count + 1)
    }
    function left() {
        count == 0  ? setCount(2) : setCount(count - 1)
    }

    return(
        <>
            <section className='section--info--curso'>
                <button onClick={left} className='section--info--curso__button--left'><img src={rowLeft} alt="" /></button>
                <article className='section--info--curso__article'>
                    <h2 className='section--info--curso__article__h2'>Acerca de nuestro curso</h2>
                    <p className='section--info--curso__article__p'>En kinder beer aprenderás las bases de la cervecería artesanal y asi convertirte en todo un Home brewer.</p>
                    
                    <CardsItemDos
                        imagen={partesDelCurso[count].imagen} 
                        titulo={partesDelCurso[count].titulo} 
                        parrafo={partesDelCurso[count].parrafo}
                    />
                    
                </article>
                <button onClick={right} className='section--info--curso__button--right'><img src={rowRight} alt="" /></button>
            </section>
            <section>
                <div></div>
                <div></div>
                <div></div>
            </section>
            
            
           
        </>
    )
}

export { InfoCursoSlide }