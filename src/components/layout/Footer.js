import {FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaYoutube,  } from 'react-icons/fa'
import {SiGmail} from 'react-icons/si'
import styles from './Footer.module.css'

function Footer() {

    return (
    <footer className={styles.footer}>
        <ul className={styles.social_list}>
            <li>
                <FaFacebook />
            </li>
            <li>
                <FaInstagram />
            </li>
            <li>
                <FaLinkedin  />
            </li>
            <li>
                <FaWhatsapp />
            </li>
            <li>
                <FaYoutube />
            </li>
            <li>
                <SiGmail />
            </li>
        </ul>
        <p className={styles.copy_right}>
            <span>Instituto Sumaúma</span> &copy; 2023
        </p>
    </footer>
    )
    
}
export default Footer