import { FaHome, FaWhatsapp } from 'react-icons/fa';
import styles from './NavBarMobile.module.scss';
import { Link } from 'react-router-dom';

import React from 'react';
import { HiOutlineHome } from 'react-icons/hi';
import { HiMiniMagnifyingGlass } from 'react-icons/hi2';
import { LuPartyPopper } from 'react-icons/lu';
import { TfiDropbox } from 'react-icons/tfi';

const NavBarMobile = () => {
	return (
		<nav className={styles.wrapper}>
			<div className={styles.containerIcons}>
				<Link to="/" className={styles.link}>
					<HiOutlineHome className={styles.icon} />
				</Link>
				<Link to="/" className={styles.link}>
					<FaWhatsapp className={styles.icon} />
				</Link>
				<Link to="/" className={styles.link}>
					<HiMiniMagnifyingGlass className={styles.icon} />
				</Link>
				<Link to="/" className={styles.link}>
					<TfiDropbox className={styles.icon} />
				</Link>
				<Link to="/" className={styles.link}>
					<LuPartyPopper className={styles.icon} />
				</Link>
			</div>
		</nav>
	);
};

export default NavBarMobile;
