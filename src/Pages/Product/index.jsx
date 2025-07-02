import HeaderSection from '../../components/HeaderSection';
import styles from './product.module.scss';
import Gallery from '../../components/Gallery';
import InfoProduct from '../../components/infoProduct';
import slugify from 'slugify';
import { useEffect, useState } from 'react';
import LoaderData from '../../components/Loader';
import MediaQuery from '../../utils/MediaQuery/MediaQuery';
import { getProducts } from '../../services/productsMomessoServices';
import { Helmet } from 'react-helmet';

const ProductSection = ({ name }) => {
	const [products, setProducts] = useState([]);
	const isMobile = MediaQuery('(max-width: 700px)');

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

	const cardFiltered = products.find(
		(card) =>
			slugify(card.title, {
				lower: true,
				strict: true,
				trim: true,
			}) === name
	);

	if (!cardFiltered)
		return (
			<main className={styles.wrapper}>
				<LoaderData />
			</main>
		);

	return (
		<main className={styles.wrapper}>
			<Helmet>
				<title>{cardFiltered.title} | Catalogo Momesso</title>
				<meta property="og:title" content={cardFiltered.title} />
				<meta property="og:description" content={cardFiltered.title} />
				<meta property="og:image" content={cardFiltered.thumbnailUrl} />
				<meta property="og:type" content="website" />
			</Helmet>
			;{isMobile && <HeaderSection id={cardFiltered.title} className={styles.headerSection} />}
			<Gallery images={cardFiltered.gallery} className={styles.gallery} />
			<InfoProduct
				name={cardFiltered.title}
				category={cardFiltered.category}
				measure={cardFiltered.measure}
				text={cardFiltered.text}
				id={cardFiltered._id}
			/>
		</main>
	);
};

export default ProductSection;
