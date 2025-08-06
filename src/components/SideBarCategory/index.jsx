import styles from './sideBarCategory.module.scss';
import RenderCategory from '../renderCategory';
import dataCategory from '../../data/DataCardsCategory.json';
import dataImported from '../../data/importedCategory.json';

const SideBarCategory = ({type}) => {

	console.log(type)

	return (
		<aside className={styles.sideBar}>
			<div className={styles.containerInfo}>
				<h2 className={styles.title}>Outras categorias</h2>
				<p className={styles.text}>Acesse as outras categorias</p>
			</div>

			<ul className={styles.listContainer}>
				{
					type === 'category' ? <RenderCategory listCategory={dataCategory} />
					: <RenderCategory isImported={true} listCategory={dataImported}/>
				}
			</ul>
		</aside>
	);
};

export default SideBarCategory;
