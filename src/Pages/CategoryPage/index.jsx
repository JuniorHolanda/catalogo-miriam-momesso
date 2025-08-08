import HeaderSection from '../../components/HeaderSection';
import styles from './categoryPage.module.scss';
import { useLocation, useParams } from 'react-router-dom';
import CardProduct from '../../components/CardProduct';
import { useEffect, useState } from 'react';
import LoaderData from '../../components/Loader';
import { getProducts } from '../../services/productsMomessoServices';
import SideBarCategory from '../../components/SideBarCategory';
import MediaQuery from '../../utils/MediaQuery/MediaQuery';
import { slugfyText } from '../../utils/slugfyText';
import { getProductsXbz } from '../../services/importedProductXbz';

const CategoryPage = () => {
	const { imported, category } = useParams();
	const params = imported || category;
	const location = useLocation();
	const routType = location.pathname.includes('/imported') ? 'imported' : 'category';
	const [products, setProducts] = useState([]);

	useEffect(() => {
		async function fetchProducts() {
			try {
				if (routType === 'imported') {
					const response = await getProductsXbz();
					setProducts(response);
				} else if (routType === 'category') {
					const response = await getProducts();
					setProducts(response);
				}
			} catch (error) {
				console.log('Erro ao carregar produtos:', error.message);
			}
		}
		fetchProducts();
	}, [routType]);

	const isMobile = MediaQuery('(max-width: 700px)');

	return (
		<section className={styles.wrapper}>
			{!isMobile && <SideBarCategory type={routType} />}
			<div className={styles.content}>
				<HeaderSection title={params || category} className={styles.headerSection} />
				<div className={styles.container}>
					{!products || products.length === 0 ? (
						<LoaderData className={styles.loaderData} />
					) : (
						products
							.filter(
								(card) =>
									Array.isArray(card.category) &&
									card.category.some((cat) => slugfyText(cat) === params)
							)
							.map((card) => <CardProduct key={card._id} product={card} type={routType} />)
					)}
				</div>
			</div>
		</section>
	);
};

export default CategoryPage;
