import styles from './favoriteSection.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
// Importa os estilos do Swipper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';

import { getProducts } from '../../services/productsMomessoServices';
import { useState, useEffect } from 'react';
import CardSearch from '../CardSearch';

const FavoriteSection = ({ style, listId }) => {
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

	const favoriteProducts = products.filter((product) => listId.includes(product._id));

	// favoriteProducts.map((product) => console.log(product.title));
	return (
		<section className={styles.wrapper}>
			<div className={styles.content}>
				<div className={styles.cta}>
					<h2 className={styles.title}>
						Seus produtos <br />
						<strong>favoritos</strong>
						<br />
						em um único lugar
					</h2>
					<p className={styles.text}>
						Nesta seção ficam os produtos que você marcou como favorito⭐️.
						<br />
						Assim,{' '}
						<strong>
							sempre que quiser rever suas melhores escolhas, é só passar por aqui.
						</strong>
						Nada de perder tempo procurando de novo, seus favoritos estão todos
						reunidos.
					</p>
				</div>

				<div className={styles.swiper}>
					<div className={styles.swiperContainer}>
						<Swiper
							slidesPerView={5}
							spaceBetween={20}
							navigation={true}
							pagination={{ clickable: true }}
							loop={true}
							modules={[Autoplay, Navigation, Pagination, EffectFade]}
							autoplay={{
								delay: 3000,
								disableOnInteraction: false,
							}}
							speed={1500}
						>
							{favoriteProducts.map((item) => (
								<SwiperSlide>
									<CardSearch key={item.id} product={item} />
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FavoriteSection;
