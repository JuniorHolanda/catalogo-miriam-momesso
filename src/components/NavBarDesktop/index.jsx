import { Link } from 'react-router-dom';
import styles from './navBar.module.scss';
import { useState } from 'react';
import dataCategory from '../../data/DataCardsCategory.json';
import dataHoliday from '../../data/holyDay.json';
import SearchBar from '../SearchBar';
import slugify from 'slugify';

const NavBar = () => {
	const [subCategory, setSubCategory] = useState();

	const filterData = (data) =>
		data.map((item) => (
			<li key={item.id} className={styles.subMenuItem}>
				<Link
					to={`/category/${slugify(item.category, {
						lower: true,
						strict: true,
						trim: true,
					})}`}
					className={styles.linkSubMenu}
				>
					<div className={styles.containerImgSubMenu}>
						<img src={item.img} alt="" />
					</div>
					<p>{item.category}</p>
				</Link>
			</li>
		));

	const showSubMenu = () => {
		setSubCategory(true);
	};
	const hiddenSubMenu = () => {
		setSubCategory(false);
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.content}>
				<div className={styles.containerLogo}>
					<Link to={'/'}>
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
							<Link className={styles.menuLink} to={'/'}>
								Home
							</Link>
						</li>
						<li
							onMouseEnter={showSubMenu}
							onMouseLeave={hiddenSubMenu}
							className={styles.containerMenuItem}
						>
							<span className={styles.menuList}>
								<h2 className={styles.menuItem}>Categorias</h2>
								{subCategory && (
									<div className={styles.containerListSubMenu}>
										<div className={styles.categorySubMenu}>
											<h2 className={styles.subCategoryTitle}>
												Brindes costuráveis
											</h2>
											<ul className={styles.containerSubMenu}>
												{filterData(dataCategory)}
											</ul>
										</div>
										<div className={styles.categorySubMenu}>
											<h2 className={styles.subCategoryTitle}>
												Datas Comemorativas
											</h2>
											<ul className={styles.containerSubMenu}>
												{filterData(dataHoliday)}
											</ul>
										</div>
										<div className={styles.categorySubMenu}>
											<h2 className={styles.subCategoryTitle}>
												Brindes Importados
											</h2>
											<ul className={styles.containerSubMenu}>
												{filterData(dataCategory)}
											</ul>
										</div>
									</div>
								)}
							</span>
						</li>
						<li className={styles.containerMenuItem}>
							<Link className={styles.menuLink} to={'/kit'}>
								Meu Kit
							</Link>
						</li>
					</ul>
				</nav>
				<SearchBar
					reduce={true}
					className={styles.containerInpt}
					btnSubmit={styles.btnSubmit}
				/>
			</div>
		</div>
	);
};

export default NavBar;
