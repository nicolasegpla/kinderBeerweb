import { useState } from 'react'
function TeamInfo(props) {
    return(
        <>
            <section className='info--team'>
                <h2 className='info--team__h2--title'>Ponente</h2>
                <ul className='info--team__team--ul'>
                {props.children}
                </ul>
            </section>
        </>
    )
}
export { TeamInfo }