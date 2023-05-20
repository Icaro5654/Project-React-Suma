import styles from './Home.module.css'
import parque from '../../img/parque.svg'
function Home(){

    return (
        <section className={styles.home_container} >
            <h1>Bem vindo ao <span>Instituto Sumaúma</span></h1>
            <img src={parque} alt="Parque" />
        
        </section>
    )

}

export default Home