import { FaHome, FaWhatsapp, FaBars, FaSearch } from "react-icons/fa";
import { PiGlobeBold } from "react-icons/pi";
import styles from './footer.module.scss'
import { Link, useNavigate } from "react-router-dom";


function Footer() {
    
    const navigate = useNavigate();
    
    return (
        <footer className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.shortcut}>
                    <Link className={styles.icon} to={'/'}><FaHome /></Link>
                    <button className={styles.icon} onClick={() => navigate('/') }><FaWhatsapp /></button>
                    <button className={styles.icon} onClick={() => navigate('/') }> <FaSearch /></button>
                </div>
                <div className={styles.menuHamburger}>
                    <FaBars />
                </div>
            </div>
        </footer>
    )
}

export default Footer
