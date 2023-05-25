
import styles from './Home.module.css'


import parque from '../../img/parque.svg'
import Parque1 from '../../img//Parque1.jpg'



function Home(){

    return (
        <section className={styles.home_container}>
            <h1>Bem vindo ao <span>Instituto Sumaúma</span></h1>

            <h3>O Parque Estadual Sumaúma foi criado através do decreto nº23.721 
                de 5 de setembro de 2003 com uma área de 51 hectares. É a primeira 
                Unidade de Conservação Estadual localizada na cidade de Manaus, Amazonas, 
                Brasil.</h3>

            <img src={Parque1} alt="Parque"/>    


        </section>
    )

}

export default Home

//COLOCAR O SLIDE DENTRO DE UMA DIV AINDA HJ