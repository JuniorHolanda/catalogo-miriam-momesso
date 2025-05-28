import { Link } from 'react-router-dom';
import styles from './NavBar.module.scss';

const NavBar = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.containerLogo}>
				<img
					className={styles.logo}
					src="https://res.cloudinary.com/dnr3wfqyy/image/upload/v1745342991/logo-novo-para-fundo-black_gbm10y.svg"
					alt="logo da empresa Momesso Brindes"
				/>
			</div>
			<nav className={styles.navMenu}>
				<ul className={styles.listMenu}>
					<li className={styles.menuItem}>
						<button>Home</button>
					</li>
					<li className={styles.menuItem}>
						<button>Categorias</button>
					</li>
					<li className={styles.menuItem}>
						<button>Meus Kits</button>
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
