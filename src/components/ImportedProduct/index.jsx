import { useEffect, useState } from 'react';
import { getProductsXbz } from '../../services/importedProductXbz';
import MediaQuery from '../../utils/MediaQuery/MediaQuery.jsx';
import { useParams } from 'react-router-dom';
import styles from './importedProduct.module.scss';
import SideBarCategory from '../SideBarCategory/index.jsx';
import HeaderSection from '../HeaderSection/index.jsx';
import LoaderData from '../Loader/index.jsx';
import { slugfyText } from '../../utils/slugfyText.js';
import CardImported from '../cardImported/index.jsx';

const ImportedProduct = () => {
	const { imported } = useParams();
	const isMobile = MediaQuery('(max-width: 700px)');
	const filterCategory = imported;
	const [products, setProducts] = useState([]);

	useEffect(() => {
		async function fetchProducts() {
			try {
				const response = await getProductsXbz();
				// const filtered = response.filter((product) => product.nome.includes(filterCategory));
				const filtered = response.filter((product) =>
					product.nome.toLowerCase().includes(filterCategory.toLowerCase())
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
			{!isMobile && <SideBarCategory />}
			<div className={styles.content}>
				<HeaderSection className={styles.headerSection} />
				<div className={styles.container}>
					{!products || products.length === 0 ? (
						<LoaderData className={styles.loaderData} />
					) : (
						products.map((card) => <CardImported key={card._id} product={card} />)
					)}
				</div>
			</div>
		</section>
	);
};

export default ImportedProduct;
