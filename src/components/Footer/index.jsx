import { FaHome, FaWhatsapp, FaBars } from "react-icons/fa";
import { PiGlobeBold } from "react-icons/pi";

import styles from './footer.module.scss'

function Footer() {

    return (
        <footer className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.shortcut}>
                    <FaHome />
                    <FaWhatsapp />
                    <PiGlobeBold />
                </div>
                <div className={styles.menuHamburger}>
                    <FaBars />
                </div>
            </div>
        </footer>
    )
}

export default Footer
