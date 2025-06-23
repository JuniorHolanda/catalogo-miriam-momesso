import styles from './kit.module.scss';
import CardSearch from '../../components/CardSearch';
import { useEffect, useState } from 'react';
import { getProducts } from '../../services/productsMomessoServices';

const MyKit = () => {
	const allKeyStorage = Object.keys(localStorage);
	const kitKeys = allKeyStorage.filter((key) => key.includes('kit'));
	const productId = kitKeys.map((key) => key.replace('kit', ''));
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

	const kitProducts = products.filter((product) => productId.includes(product._id));
	console.log(kitProducts);

	return (
		<section className={styles.wrapper}>
			<div className={styles.containerProducts}>
				{kitProducts.map((prod) => (
					<CardSearch key={prod._id} product={prod} />
				))}
			</div>
		</section>
	);
};

export default MyKit;
