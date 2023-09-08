
function TarjetaCurso({ proximoCurso, ubicacion, incluye, costo, observaciones }) {
    return(
        <>
            <section className="section-tj-Curso">
                <h3 className="section-tj-Curso__h3">CURSO DE ELABORACION DE CERVEZA ARTESANAL KINDER BEER</h3>
                <ul className="section-tj-Curso__ul">
                    <li><span>Proximo Curso:</span> {proximoCurso}</li>
                    <li><span>Ubicacion:</span> {ubicacion}</li>
                    <li><span>Incluye:</span> {incluye}</li>
                </ul>
                <article className="section-tj-Curso__article">
                    <p className="section-tj-Curso__article__p">Precio:</p>
                    <div className="section-tj-Curso__article__div"><p>{costo}</p></div>
                </article>
                <p className="section-tj-Curso__p--obv"><span>Observaciones:</span> {observaciones}</p>
            </section>
        </>
    )
}

export { TarjetaCurso }