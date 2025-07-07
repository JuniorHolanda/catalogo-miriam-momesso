import styles from './sideBarCategory.module.scss';
import RenderCategory from '../renderCategory';
import dataCategory from '../../data/DataCardsCategory.json';
import { Helmet } from 'react-helmet-async';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SideBarCategory = () => {
    const {category} = useParams();
    const [metaTag, setMetaTag] = useState('');
    
    useEffect(() => {
        setMetaTag(category)    
    }, [category]);


	return (
		<aside className={styles.sideBar}>

			<div className={styles.containerInfo}>
				<h2 className={styles.title}>Outras categorias</h2>
				<p className={styles.text}>Acesse as outras categorias</p>
			</div>

			<ul className={styles.listContainer}>
				<RenderCategory listCategory={dataCategory} />
			</ul>
			<button>Compartilhar</button>
		</aside>
	);
};

export default SideBarCategory;
