import { useState } from 'react'


function ContainerCardsInfo(props) {
   return(
    <>
       <ul className='info--curso__article'>
         {props.children}
       </ul>
    </>
   )
}

export { ContainerCardsInfo }