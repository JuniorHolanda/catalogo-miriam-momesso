import HeaderSection from '../../components/HeaderSection';
import styles from './categoryPage.module.scss';
import dataHoliday from '../../data/holyDay.json';
import { useParams } from 'react-router-dom';
import slugify from 'slugify';
import React from 'react';
import CardSearch from '../../components/CardSearch';
import { useEffect, useState } from 'react';
import axios from 'axios';
import LoaderData from '../../components/Loader';

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
				const response = await axios.get('https://back-end-catalogo-miriam-momesso.onrender.com/product');
				setProducts(response.data); // ajuste aqui dependendo do formato que a API retorna
			} catch (error) {
				console.error('Erro ao buscar produtos:', error);
			}
		}

		fetchProducts();
	}, []);

	return (
		<section className={styles.wrapper}>
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
		</section>
	);
};

export default CategoryPage;
