import { NavMobile } from "./NavMobile"
import { Banner } from "./Banner"
import { InfoCurso } from "./InfoCurso"
import { TeamInfo } from "./TeamInfo";
import { Teamp } from "./Teamp";
import { TarjetaCurso } from './TarjetaCurso'
import { Footer } from "./Footer";
import { InfoCursoSlide } from "./InfoCursoSlide";
import { BotonWp } from "./BotonWp";
import imagenTeoriainfo from './../assets/cardimg.jpg';
import imagenCatainfo from './../assets/cata.jpg';
import imagenCocinarinfo from '/src/assets/cocinar.jpg';
import imagenInstructor from './../assets/logo.circular.jpeg'


function App() {
    
    const sizeWindow = window.innerWidth

    // logica del codigo que nos permite imprimir las cards con la informacion del curso
    class seccionesCurso {
        constructor ({
            imagen,
            titulo,
            parrafo,
        })
        {
            this.imagen = imagen;
            this.titulo = titulo;
            this.parrafo = parrafo;
        }
    };
    const insumos = new seccionesCurso ({
        imagen: imagenTeoriainfo,
        titulo: 'Teoría e Insumos',
        parrafo: 'En estés apartado del curso conocerás la base de la cervecería artesanal y los insumos.',
    });
    const cata = new seccionesCurso ({
        imagen: imagenCatainfo,
        titulo: 'Cata',
        parrafo: 'El siguiente paso es la cata de cervezas que te ayudara a mejorar tus bases como cervecero',
    });
    const cocinar = new seccionesCurso ({
        imagen: imagenCocinarinfo,
        titulo: 'Cocinar',
        parrafo: 'Por ultimo disfrutaras del proceso de primera mano participando en la elaboración de una cerveza artesanal.',
    });
    const partesDelCurso = [];
    partesDelCurso.push(insumos, cata, cocinar);
    
    //codigo que nos permite imprimir las cards con la informacion de los integrantes del curso
    class equipo {
        constructor({
            imagen,
            nombre,
            roll,
            descripcion,
        })
        {
            this.imagen = imagen;
            this.nombre = nombre;
            this.roll = roll;
            this.descripcion = descripcion; 
        }
    }
    const joseDavid = new equipo ({
        imagen: imagenInstructor,
        nombre: 'Jose David Velasquez Perez',
        roll: 'Ponente',
        descripcion: 'Especialista en fundamentos técnicos de la elaboración de cerveza de la universidad de alicante.'
    })
    const allTeam = [];
    allTeam.push(joseDavid);
    
    
    
    
    const cursos = [
        {
            proximoCurso: 'Domingo, junio 25 de 2023',
            ubicacion: 'Calle 20 c · 42 – 43, Bogotá/Colombia.',
            incluye: 'Almuerzo, Cerveza, Memorias de curso en PDF.',
            costo: '$350.000 COP',
            observaciones: 'Aforo limitado, para apartar el cupo es necesario anticipar el 50% del valor del curso.'
        }
    ]

    function goToPageWhatsapp() {
        window.open ('https://wa.me/573164626774');
    }

    function goToInstagram() {
        window.open ('https://www.instagram.com/kinder_beer/');
    }
    function windowInitial() {
        window.scroll(0, 0);
    }

    return(
        <>
            <NavMobile whatsApp={goToPageWhatsapp} instagramGo={goToInstagram}/>
            <Banner whatsApp={goToPageWhatsapp} />
            {sizeWindow >= 1100 ? <InfoCurso partesDelCurso={partesDelCurso} /> : <InfoCursoSlide 
                partesDelCurso={partesDelCurso}
            /> }
            <TeamInfo>
                {
                    allTeam.map((person) => 
                        <Teamp 
                            key={person.nombre}
                            img={person.imagen}
                            nombre={person.nombre}
                            roll={person.roll}
                            descripcion={person.descripcion}
                        />
                    )
                }
            </TeamInfo>
            <TarjetaCurso
                proximoCurso={cursos[0].proximoCurso}
                ubicacion={cursos[0].ubicacion}
                incluye={cursos[0].incluye}
                costo={cursos[0].costo}
                observaciones={cursos[0].observaciones}
            />
            <Footer whatsApp={goToPageWhatsapp} windowInitial={windowInitial}/>
            <BotonWp />
        </>
    )
}

export { App }