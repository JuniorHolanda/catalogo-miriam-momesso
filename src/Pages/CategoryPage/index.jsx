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
import { Helmet } from 'react-helmet-async';

const CategoryPage = () => {
	const { category } = useParams();

	const categorySlugified = category;

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
				<Helmet>
				{/* Título da aba do navegador */}
				<title>{category}</title>

				{/* Meta padrão */}
				<meta name="description" content="Brindes personalizados para empresas - conheça nossa linha de brindes promocionais exclusivos." />

				{/* Open Graph (Facebook, WhatsApp, LinkedIn) */}
				<meta property="og:type" content="website" />
				<meta property="og:title" content={category} />
				<meta property="og:description" content={`Conheça nossa linha de brindes ${category}`} />
				<meta property="og:image" content={'https://res.cloudinary.com/dnr3wfqyy/image/upload/v1750166131/bag-max_6_jythnj.jpg'} />
				<meta property="og:url" content={'https://res.cloudinary.com/dnr3wfqyy/image/upload/v1750166131/bag-max_6_jythnj.jpg'} />

				{/* Twitter Cards (opcional) */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content={category} />
				<meta name="twitter:description" content={`Conheça nossa linha de brindes ${category}`} />
				<meta name="twitter:image" content={'https://res.cloudinary.com/dnr3wfqyy/image/upload/v1750166131/bag-max_6_jythnj.jpg'} />
			</Helmet>

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
