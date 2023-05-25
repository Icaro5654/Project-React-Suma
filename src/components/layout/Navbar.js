import { Link } from 'react-router-dom'

import Container from './Container'

import styles from './Navbar.module.css';

import logo from '../../img/logo.png'

function Navbar() {

    return(
        <nav className={styles.navbar}>
            <Container>
                <Link to=""><img src={logo} alt="Instituto" width="80px" /></Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/sobre">Sobre</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/project">Projetos</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/contact">Contato</Link>
                    </li>
                </ul>
                
               
            </Container>
        </nav>
    )
}
export default Navbar