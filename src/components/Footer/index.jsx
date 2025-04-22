import { FaHome, FaWhatsapp, FaBars } from "react-icons/fa";
import styles from './footer.module.scss'
import { Link, useNavigate } from "react-router-dom";
import { LuPartyPopper } from "react-icons/lu";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import Holiday from "../Holidays";
import dataHoliday from '../../data/holyDay.json'


function Footer() {
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);
    return (
        <footer className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.shortcut}>
                    <Link className={styles.icon} to={'/'}><FaHome /></Link>
                    <a className={styles.icon} href="https://wa.me/551138070539?text=Ol%C3%A1%2C%20vim%20do%20cat%C3%A1logo%20e%20gostaria%20de%20ver%20os%20produtos%20que%20voc%C3%AAs%20trabalham."><FaWhatsapp/></a>
                </div>
                <div className={styles.menuHamburger}>
                    {showMenu &&
                    <aside>
                        <button className={styles.containerCloseMenu}
                            onClick={() => setShowMenu(!showMenu)}>
                            <IoClose className={styles.closeMenu} />
                        </button>

                        <div className={styles.info}>
                            <h2>Datas Comemorativas</h2>
                            <p>Confira nossas promoções e novidades!</p>
                        </div>

                        <ul>
                            {[...dataHoliday].reverse() .map((item) => (
                                <li
                                    key={item.id}
                                    onClick={() => setShowMenu(!showMenu)}>
                                    <Holiday card={item} />
                                </li>
                            ))}
                        </ul>
                    </aside>}
                    <button
                        className={styles.containerIconHoliday}
                        onClick={() => setShowMenu(!showMenu)}>
                        <LuPartyPopper />
                    </button>
                </div>
            </div>
        </footer>
    )
}

export default Footer
