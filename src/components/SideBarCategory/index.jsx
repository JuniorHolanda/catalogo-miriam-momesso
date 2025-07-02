import styles from './sideBarCategory.module.scss';
import dataCategory from '../../data/DataCardsCategory.json'

const SideBarCategory = () => {
	return (
		<aside className={styles.sideBar}>
			<div className={styles.containerInfo}>
                <h2 className={styles.title}>Outras categorias</h2>
                <p className={styles.text}>Acesse as outras categorias</p>
            </div>

			<ul className={styles.listContainer}>
				{
                    dataCategory.map((category) => {
                        return (
                            <li>{category.category}</li>
                        )
                    })
                }
			</ul>
			<button>Compartilhar</button>
		</aside>
	);
};

export default SideBarCategory;
