import styles from './kit.module.scss';
import CardSearch from '../../components/CardSearch';
import { useEffect, useRef, useState } from 'react';
import { getProducts } from '../../services/productsMomessoServices';
import LoaderData from '../../components/Loader';
import Lottie from 'react-lottie-player';
import animation from '../../animation/animation-kit.json'

const MyKit = () => {
	const allKeyStorage = Object.keys(localStorage);
	const kitKeys = allKeyStorage.filter((key) => key.includes('kit'));
	const productId = kitKeys.map((key) => key.replace('kit', ''));
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const animationRef = useRef()

	useEffect(() => {
		async function fetchProducts() {
			try {
				const response = await getProducts();
				setProducts(response);
			} catch (error) {
				console.error('Erro ao buscar produtos:', error);
			} finally {
				setLoading(false);
			}
		}
		fetchProducts();
	}, []);

	const kitProducts = products.filter((product) => productId.includes(product._id));

	return (
		<section className={styles.wrapper}>
			{loading ? (
				<div className={styles.loaderContainer}>
					<LoaderData />
				</div>
			) : (
				<div className={styles.content}>
					{kitProducts.length === 0 ? (
						<div className={styles.containerText}>
							<div>
								<h2 className={styles.title}>Nada por aqui ainda.</h2>
								<p className={styles.text}>Explore os produtos e use o ícone de kit para montar o seu.</p>
							</div>
							<div>
								<Lottie
									ref={animationRef}
									play={true}
									animationData={animation}
									loop={true}
									style={{ height: '50px' }}
								/>
							</div>
						</div>
					) : (
						<div className={styles.containerProducts}>
							{kitProducts.map((prod) => (
								<CardSearch key={prod._id} product={prod} />
							))}
						</div>
					)}
				</div>
			)}
		</section>
	);
};

export default MyKit;
