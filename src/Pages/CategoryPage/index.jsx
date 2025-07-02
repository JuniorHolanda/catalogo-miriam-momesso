import HeaderSection from '../../components/HeaderSection';
import styles from './categoryPage.module.scss';
import dataHoliday from '../../data/holyDay.json';
import { useParams } from 'react-router-dom';
import slugify from 'slugify';
import CardSearch from '../../components/CardSearch';
import { useEffect, useState } from 'react';
import LoaderData from '../../components/Loader';
import { getProducts } from '../../services/productsMomessoServices';
import SideBarCategory from '../../components/SideBarCategory';

const CategoryPage = () => {
	const { category } = useParams();

	const categorySlugified = category;
	console.log('Categoria:', categorySlugified);

	const title = dataHoliday.find((item) => {
		const slugTitle = slugify(item.category, {
			lower: true,
			strict: true,
			trim: true,
		});
		return slugTitle === category;
	})?.title;

	const [products, setProducts] = useState([]);
	useEffect(() => {
		async function fetchProducts() {
			try {
				const response = await getProducts();
				setProducts(response);
			} catch (error) {
				console.log('Erro ao carregar produtos:', error.message);
			}
		}
		fetchProducts();
	}, []);

	return (
		<section className={styles.wrapper}>
			<SideBarCategory />
			<div className={styles.content}>
				<HeaderSection id={title || category} className={styles.headerSection} />
				<div className={styles.container}>
					{!products || products.length === 0 ? (
						<LoaderData className={styles.loaderData} />
					) : (
						products
							.filter(
								(card) =>
									Array.isArray(card.category) &&
									card.category.some(
										(cat) =>
											slugify(cat, {
												lower: true,
												strict: true,
												trim: true,
											}) === categorySlugified
									)
							)
							.map((card) => <CardSearch key={card.id} product={card} />)
					)}
				</div>
			</div>
		</section>
	);
};

export default CategoryPage;
