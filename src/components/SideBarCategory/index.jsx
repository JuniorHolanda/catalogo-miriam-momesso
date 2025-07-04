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
            
			<Helmet>
				{/* Título da aba do navegador */}
				<title>{metaTag}</title>

				{/* Meta padrão */}
				<meta name="description" content="Brindes personalizados para empresas - conheça nossa linha de brindes promocionais exclusivos." />

				{/* Open Graph (Facebook, WhatsApp, LinkedIn) */}
				<meta property="og:type" content="website" />
				<meta property="og:title" content={metaTag} />
				<meta property="og:description" content={`Conheça nossa linha de brindes ${metaTag}`} />
				<meta property="og:image" content={'https://res.cloudinary.com/dnr3wfqyy/image/upload/v1750166131/bag-max_6_jythnj.jpg'} />
				<meta property="og:url" content={'https://res.cloudinary.com/dnr3wfqyy/image/upload/v1750166131/bag-max_6_jythnj.jpg'} />

				{/* Twitter Cards (opcional) */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content={metaTag} />
				<meta name="twitter:description" content={`Conheça nossa linha de brindes ${metaTag}`} />
				<meta name="twitter:image" content={'https://res.cloudinary.com/dnr3wfqyy/image/upload/v1750166131/bag-max_6_jythnj.jpg'} />
			</Helmet>


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
