import styles from './NavBar.module.scss';

const NavBar = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.logo}>
                <img src="https://res.cloudinary.com/dnr3wfqyy/image/upload/v1745342991/logo-novo-para-fundo-black_gbm10y.svg" alt="logo da empresa Momesso Brindes" />
            </div>
		</div>
	);
};

export default NavBar;
