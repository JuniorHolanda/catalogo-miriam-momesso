import dataCategory from '../../data/DataCardsCategory.json';
import dataHoliday from '../../data/holyDay.json';

const DropDawnMenu = () => {

    
	return (
		<div className={styles.containerListSubMenu}>
			<div className={styles.categorySubMenu}>
				<h2 className={styles.subCategoryTitle}>Brindes costuráveis</h2>
				<ul className={styles.containerSubMenu}>
					{filterData(dataCategory)}
				</ul>
			</div>
			<div className={styles.categorySubMenu}>
				<h2 className={styles.subCategoryTitle}>Datas Comemorativas</h2>
				<ul className={styles.containerSubMenu}>
					{filterData(dataHoliday)}
				</ul>
			</div>
			<div className={styles.categorySubMenu}>
				<h2 className={styles.subCategoryTitle}>Brindes Importados</h2>
				<ul className={styles.containerSubMenu}>
					{filterData(dataCategory)}
				</ul>
			</div>
		</div>
	);
};

export default DropDawnMenu;
