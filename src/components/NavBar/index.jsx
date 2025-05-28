import { Link } from 'react-router-dom';
import styles from './NavBar.module.scss';

const NavBar = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.containerLogo}>
				<Link to={'/'} >
					<img 
						className={styles.logo}
						src="https://res.cloudinary.com/dnr3wfqyy/image/upload/v1745342991/logo-novo-para-fundo-black_gbm10y.svg"
						alt="logo da empresa Momesso Brindes"
					/>
				</Link>
			</div>
			<nav className={styles.navMenu}>
				<ul className={styles.listMenu}>
					<li className={styles.containerMenuItem}>
						<Link className={styles.menuItem} to={'/'} >Home</Link>
					</li>
					<li className={styles.containerMenuItem}>
						<button className={styles.menuItem} >Categorias</button>
					</li>
					<li className={styles.containerMenuItem}>
						<button className={styles.menuItem}>Meus Kits</button>
					</li>
				</ul>
			</nav>
			<div className={styles.containerSearch}>
				<label htmlFor="input">Pesquisar produtos:</label>
				<input id="input" placeholder="🔍 Buscar produtos" type="text" />
			</div>
		</div>
	);
};

export default NavBar;
