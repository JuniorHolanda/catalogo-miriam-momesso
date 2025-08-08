import styles from './search.module.scss';
import { useLocation } from 'react-router-dom';
import CardProduct from '../../components/CardProduct';
import { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBar from '../../components/SearchBar';
import LoaderData from '../../components/Loader';
import MediaQuery from '../../utils/MediaQuery/MediaQuery';
import HeaderSection from '../../components/HeaderSection';
import { slugfyText } from '../../utils/slugfyText';

const Search = () => {
	const isMobile = MediaQuery('(max-width: 700px)');
	const location = useLocation();
	const searchParams = new URLSearchParams(location.search);
	const rawQuery = searchParams.get('q') || '';
	const query = rawQuery.trim().toLowerCase();
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);

	// Se a busca estiver vazia, renderiza mensagem
	if (query === '')
		return (
			<section className={styles.wrapper}>
				<SearchBar className={styles.containerInpt} btnSubmit={styles.btnSubmit} />

				<h2 className={styles.noResults}>Digite algo para buscar.</h2>
			</section>
		);

	useEffect(() => {
		async function fetchProducts() {
			try {
				const response = await axios.get('https://back-end-catalogo-miriam-momesso.onrender.com/product');
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
let filteredCards = products.filter((card) => {
  const titleMatch = slugfyText(card.title).includes(query);
  const categoryMatch = card.category.some(cat => slugfyText(cat).includes(query));
  return titleMatch || categoryMatch;
});

	const count = filteredCards.length;
	const nounProduct = count === 1 ? 'Resultado' : 'Resultados';
	const heading = `${count} ${nounProduct} encontrado${count === 1 ? '' : 's'} para "${rawQuery}"`;

	return (
		<section className={styles.wrapper}>
			{isMobile && <HeaderSection className={styles.headerSearch} title={'Pesquisa'} />}
			<SearchBar btnSubmit={styles.btnSubmit} className={styles.containerInpt} />

			{loading ? (
				<div className={styles.containerLoader}>
					<LoaderData />
				</div>
			) : (
				<div className={styles.containerCards}>
					{filteredCards.length === 0 ? (
						<h2 className={styles.title}>{heading}</h2>
					) : (
						<div className={styles.containerResults}>
							<h2 className={styles.title}>{heading}</h2>
							{filteredCards.map((card) => (
								<CardProduct key={card._id} product={card} />
							))}
						</div>
					)}
				</div>
			)}
		</section>
	);
};

export default Search;