import { useEffect, useRef } from "react"
function Aliados(props) {

    const ulSlide = useRef(null);
    //ulSlide.current.children[0].style.background = `#fff`;

    const siguiente = () => {
        if(ulSlide.current.children.length > 0) {
            //obtenemos el primer elemento
            const primerElemento = ulSlide.current.children[0];

            //establecemos la transicion para el ulSlide
            ulSlide.current.style.transition = `1000ms ease-out all`;
            const sizeSlide = ulSlide.current.children[0].offsetWidth;
            //movemos el ulSiled
            ulSlide.current.style.transform = `translateX(-${sizeSlide}px)`;
            

            const transicion =() => {
                //reiniciamos la posicion del slider
                ulSlide.current.style.transition = `none`;
                ulSlide.current.style.transform = `translateX(0)`;
                //tomammos el primer elemento y lo enviamos al final
                ulSlide.current.appendChild(primerElemento);
            }

            //EventListener para cuando termine la animacion

            ulSlide.current.addEventListener('transitionend', transicion);
        }else {
            console.log('no hay elementos');
        }
           
    }
    useEffect(() => {
        setInterval(() => {
            siguiente();
        },2000)
    }, [])
    
    return(
        <>  <section className="section--aliados">
                <h2 onClick={siguiente} className="section--aliados__h2">Marcas</h2>
                <ul  ref={ulSlide} className="section--aliados__ul">
                    {props.children}
                </ul>

            </section>
        </>
    )
}

export { Aliados }