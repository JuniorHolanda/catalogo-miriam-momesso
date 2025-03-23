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
                <Link to={'/'}><FaHome /></Link>
                <button  onClick={() => navigate('/') }><FaWhatsapp /></button>
                <button  onClick={() => navigate('/') }> <FaSearch /></button>
                </div>
                <div className={styles.menuHamburger}>
                    <FaBars />
                </div>
            </div>
        </footer>
    )
}

export default Footer
