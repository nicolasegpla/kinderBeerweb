import { NavMobile } from "./NavMobile"
import { Banner } from "./Banner"
import { InfoCurso } from "./InfoCurso"
import { TeamInfo } from "./TeamInfo";
import { Teamp } from "./Teamp";
import { Aliados } from "./Aliados";
import { Aliado } from "./Aliado";
import logoBestmalz from './../assets/logoBestmalz.jpg';
import logoFermentis from './../assets/logoFermentis.jpg';
import logoIngredion from './../assets/logoIngredion.jpg';
import logoBSG from './../assets/logoBSG.jpg';
import logoCastelMalting from './../assets/logoCastelMalting.jpg';
import logoDistrines from './../assets/logoDistrines.png';



function App() {
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
        imagen: '/src/assets/cardimg.jpg',
        titulo: 'Teoría e Insumos',
        parrafo: 'En estés apartado del curso conocerás la base de la cervecería artesanal y los insumos necesarios para cocinar cerveza',
    });
    const cata = new seccionesCurso ({
        imagen: '/src/assets/cata.jpg',
        titulo: 'Cata',
        parrafo: 'El siguiente paso es la cata de cervezas que te ayudara a mejorar tus bases como cervecero',
    });
    const cocinar = new seccionesCurso ({
        imagen: '/src/assets/cocinar.jpg',
        titulo: 'Cocinar',
        parrafo: 'Por ultimo disfrutaras del proceso de primera mano del arte de cocinar cerveza participando en la elaboración de una cerveza artesanal.',
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
        imagen: '/src/assets/logo.circular.jpeg',
        nombre: 'Jose David Velasquez Perez',
        roll: 'Ponente',
        descripcion: 'Especialista en fundamentos técnicos de la elaboración de cerveza de la universidad de alicante.'
    })
    const allTeam = [];
    allTeam.push(joseDavid);
    
    // logica del codigo que nos permite imprimir los logos de los aliados
    class aliados{
        constructor({
            id,
            img
        })
        {
            this.id = id;
            this.img = img;
        }
    }
    const distrines = new aliados({
        id: 'distrines',
        img: logoDistrines
    });
    const bestmalz = new aliados({
        id: 'bestmalz',
        img: logoBestmalz
    });
    const fermentis = new aliados({
        id: 'fermentis',
        img: logoFermentis
    });
    const ingredion = new aliados({
        id: 'ingredion',
        img: logoIngredion
    });
    const BSG = new aliados({
        id: 'BSG',
        img: logoBSG
    });
    const castelMalting = new aliados({
        id: 'castel malting',
        img: logoCastelMalting
    });
    
    const aliadosList = [];
    aliadosList.push(distrines, bestmalz, fermentis, ingredion, BSG, castelMalting);
    
    return(
        <>
            <NavMobile />
            <Banner />
            <InfoCurso partesDelCurso={partesDelCurso} />
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
            <Aliados>
                {
                    aliadosList.map(aliado => (
                        <Aliado 
                            key={aliado.id}
                            id={aliado.id}
                            img={aliado.img}
                        />
                    ))
                }
            </Aliados> 
        </>
    )
}

export { App }