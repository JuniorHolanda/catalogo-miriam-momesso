import { FaHome, FaRegBookmark, FaWhatsapp } from 'react-icons/fa';
import styles from './NavBarMobile.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { HiOutlineHome } from 'react-icons/hi';
import { LuPartyPopper } from 'react-icons/lu';
import { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import Holiday from '../HolidaysCard';
import dataHoliday from '../../data/holyDay.json';

const NavBarMobile = () => {
	const [showHolidays, setShowHolidays] = useState(false);
	const navigate = useNavigate();

	return (
		<nav className={styles.wrapper}>
			{showHolidays && (
				<aside className={styles.containerAside}>
					<button className={styles.containerCloseMenu} onClick={() => setShowHolidays(!showHolidays)}>
						<IoClose className={styles.closeMenu} />
					</button>

					<div className={styles.info}>
						<h2>Datas Comemorativas</h2>
						<p>Confira nossas promoções e novidades!</p>
					</div>

					<ul className={styles.listHolidays}>
						{[...dataHoliday].reverse().map((item) => (
							<li key={item.id} onClick={() => setShowHolidays(!showHolidays)}>
								<Holiday card={item} />
							</li>
						))}
					</ul>
				</aside>
			)}
			<ul className={styles.containerIcons}>
				<li className={styles.listItem}>
					<Link to="/" className={styles.link}>
						<HiOutlineHome className={styles.icon} />
					</Link>
				</li>
				<li className={styles.listItem}>
					<a href="https://api.whatsapp.com/send?phone=5511974783545&text=Ol%C3%A1" className={styles.link}>
						<FaWhatsapp className={styles.icon} />
					</a>
				</li>
				<li className={styles.listItem}>
					<Link to="/kit" className={styles.link}>
						<FaRegBookmark className={styles.icon} />
					</Link>
				</li>
				<li className={styles.listItem}>
					<button onClick={() => setShowHolidays(!showHolidays)} className={styles.link}>
						<LuPartyPopper className={styles.icon} />
					</button>
				</li>
			</ul>
		</nav>
	);
};

export default NavBarMobile;
