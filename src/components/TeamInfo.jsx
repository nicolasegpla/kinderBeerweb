import { useState } from 'react'
function TeamInfo(props) {
    return(
        <>
            <section className='info--team'>
                
                <ul className='info--team__team--ul'>
                {props.children}
                </ul>
            </section>
        </>
    )
}
export { TeamInfo }