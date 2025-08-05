import { useEffect, useState } from 'react';
import { getProductsXbz } from '../../services/importedProductXbz';
import MediaQuery from '../../utils/MediaQuery/MediaQuery.jsx';
import { useParams } from 'react-router-dom';
import styles from './importedProduct.module.scss';
import SideBarCategory from '../SideBarCategory/index.jsx';
import HeaderSection from '../HeaderSection/index.jsx';
import LoaderData from '../Loader/index.jsx';
import CardSearch from '../CardSearch/index.jsx';
import { slugfyText } from '../../utils/slugfyText.js';

const ImportedProduct = () => {
	const { imported } = useParams();
	const isMobile = MediaQuery('(max-width: 700px)');
	const filterCategory = imported;
	console.log(filterCategory)
	const titleCategory = filterCategory.replaceAll('-', ' ');
	const titleCategoryCapitalized = titleCategory.charAt(0).toUpperCase() + titleCategory.slice(1);
	const [products, setProducts] = useState([]);

	useEffect(() => {
		async function fetchProducts() {
			try {
				const response = await getProductsXbz();
				const filtered = response.filter((product) =>
					product.category.some((cat) => slugfyText(cat) === slugfyText(filterCategory))
				);
				setProducts(filtered);
			} catch (error) {
				console.log('Erro ao carregar produtos:', error.message);
			}
		}
		fetchProducts();
	}, [filterCategory]);

	return (
		<section className={styles.wrapper}>
			{!isMobile && <SideBarCategory imported={true} />}
			<div className={styles.content}>
				<HeaderSection id={titleCategoryCapitalized} className={styles.headerSection} />
				<div className={styles.container}>
					{!products || products.length === 0 ? (
						<LoaderData className={styles.loaderData} />
					) : (
						products.map((card) => <CardSearch key={card._id} product={card} imported={true} />)
					)}
				</div>
			</div>
		</section>
	);
};

export default ImportedProduct;
