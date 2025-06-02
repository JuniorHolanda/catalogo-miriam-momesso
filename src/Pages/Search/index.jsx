import styles from './search.module.scss';
import { useLocation } from 'react-router-dom';
import CardSearch from '../../components/CardSearch';
import HeaderSection from '../../components/HeaderSection';
import { useEffect, useState } from 'react';
import axios from 'axios';
import HeroSearch from '../../components/HeroSearch';
import LoaderData from '../../components/Loader';

const Search = () => {
	const location = useLocation();
	const searchParams = new URLSearchParams(location.search);
	const rawQuery = searchParams.get('q') || '';
	const selectedCategory = searchParams.get('categoria') || '';
	const query = rawQuery.trim().toLowerCase();
	const category = selectedCategory.trim().toLowerCase();
	const [products, setProducts] = useState([]);

	const [loading, setLoading] = useState(true);

	// Se a busca estiver vazia, renderiza mensagem
	if (query === '')
		return (
			<section className={styles.wrapper}>
				<HeroSearch />
				<h2 className={styles.noResults}>Digite algo para buscar.</h2>
			</section>
		);

	useEffect(() => {
		async function fetchProducts() {
			try {
				const response = await axios.get(
					'https://back-end-catalogo-miriam-momesso.onrender.com/product'
				);
				setProducts(response.data);
			} catch (error) {
				console.error('Erro ao buscar produtos:', error);
			} finally {
				setLoading(false);
			}
		}
		fetchProducts();
	}, []);

	//filtra os produtos com base na query e na categoria
	let filteredCards = products.filter((card) => card.title.trim().toLowerCase().includes(query));

	// Se uma categoria for selecionada, filtra os produtos por categoria
	// Se a categoria estiver vazia, não filtra por categoria

	filteredCards.forEach((element) => {
		console.log(element.category);
	});

	if (category) {
		filteredCards = filteredCards.filter((card) => {
			return (
				Array.isArray(card.category) &&
				card.category.map((cat) => cat.trim().toLowerCase()).includes(category)
			);
		});
	}

	const count = filteredCards.length;
	const nounProduct = count === 1 ? 'Resultado' : 'Resultados';
	const heading = `${count} ${nounProduct} encontrado${
		count === 1 ? '' : 's'
	} para "${rawQuery}"`;

	return (
		<section className={styles.wrapper}>
			<HeroSearch />
			<h2>{heading}</h2>

			{loading ? (
				<div className={styles.container}>
					<LoaderData />
				</div>
			) : (
				<div className={styles.container}>
					{filteredCards.length === 0 ? (
						<p className={styles.noResults}>Nenhum produto encontrado.</p>
					) : (
						filteredCards.map((card) => <CardSearch key={card.id} product={card} />)
					)}
				</div>
			)}
		</section>
	);
};

export default Search;
