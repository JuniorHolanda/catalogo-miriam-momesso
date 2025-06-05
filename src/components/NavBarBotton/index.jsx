import { Link } from 'react-router-dom';
import styles from './navBarBotton.module.scss';
import { HiOutlineHome } from "react-icons/hi";
import { FaWhatsapp } from 'react-icons/fa';
import { LuPartyPopper } from 'react-icons/lu';
import { HiMagnifyingGlass } from 'react-icons/hi2';

const NavBarBotton = () => {
    return (
        <nav className={styles.wrapper}>
            <Link className={styles.homeContainer}>
                <HiOutlineHome className={styles.iconHome} />
            </Link>
            <Link className={styles.homeContainer}>
                <FaWhatsapp className={styles.iconHome} />
            </Link>
            <Link className={styles.homeContainer}>
                <LuPartyPopper className={styles.iconHome} />
            </Link>
            <Link className={styles.homeContainer}>
                <HiMagnifyingGlass className={styles.iconHome} />
            </Link>
        </nav>
    )
}

export default NavBarBotton
