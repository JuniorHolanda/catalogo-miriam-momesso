import HeaderSection from '../../components/HeaderSection';
import styles from './product.module.scss';
import Gallery from '../../components/Gallery';
import InfoProduct from '../../components/infoProduct';
import { useEffect, useState } from 'react';
import LoaderData from '../../components/Loader';
import MediaQuery from '../../utils/MediaQuery/MediaQuery';
import { getProducts } from '../../services/productsMomessoServices';
import { getProductsXbz } from '../../services/importedProductXbz';
import { useParams } from 'react-router-dom';
import { slugfyText } from '../../utils/slugfyText';


const ProductSection = () => {
	const { product } = useParams();
	const name = product
		
	const split = name.split('-')[0];
	const nameProduct = name.split('-').slice(1).join('-');
	
	const [products, setProducts] = useState([]);
	const isMobile = MediaQuery('(max-width: 700px)');

		useEffect(() => {
		async function fetchProducts() {
			try {
				if (split === 'imported') {
					const response = await getProductsXbz();
					setProducts(response);
				} else if (split === 'internal') {
					const response = await getProducts();
					setProducts(response);
				}
			} catch (error) {
				console.log('Erro ao carregar produtos:', error.message);
			}
		}
		fetchProducts();
	}, []);

	const cardFiltered = products.find(
		(card) => slugfyText(card.title) === slugfyText(nameProduct)
	);

	if (!cardFiltered)
		return (
			<main className={styles.wrapper}>
				<LoaderData />
			</main>
		);

	return (
		<main className={styles.wrapper}>
			{isMobile && <HeaderSection id={cardFiltered.title} className={styles.headerSection} />}
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
