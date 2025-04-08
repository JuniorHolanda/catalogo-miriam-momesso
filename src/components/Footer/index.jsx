import { FaHome, FaWhatsapp, FaBars } from "react-icons/fa";
import styles from './footer.module.scss'
import { Link, useNavigate } from "react-router-dom";


function Footer() {
    
    const navigate = useNavigate();
    
    return (
        <footer className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.shortcut}>
                    <Link className={styles.icon} to={'/'}><FaHome /></Link>
                    <a className={styles.icon} href="https://wa.me/551138070539?text=Ol%C3%A1%2C%20vim%20do%20cat%C3%A1logo%20e%20gostaria%20de%20ver%20os%20produtos%20que%20voc%C3%AAs%20trabalham."><FaWhatsapp/></a>
                </div>
                <div className={styles.menuHamburger}>
                    <FaBars className={styles.icon} />
                </div>
            </div>
        </footer>
    )
}

export default Footer
