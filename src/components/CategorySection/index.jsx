import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
// Importa os estilos do Swipper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';

import styles from './category-section.module.scss';
import StoriesInsta from '../Stories';
import React, { useEffect, useState } from 'react';
import { LiaEyeSolid } from 'react-icons/lia';
import { Link } from 'react-router-dom';
import CardProduct from '../CardProduct';
import slugify from 'slugify';
import MediaQuery from '../../utils/MediaQuery/MediaQuery';
import LoaderData from '../Loader';
import Banners from '../../data/Banners.json';
import { getProducts } from '../../services/productsMomessoServices';

const CategorySection = React.forwardRef(({ category, text }, ref) => {
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

	const categorySlugified = slugify(category, {
		lower: true,
		strict: true,
		trim: true,
	});

	const productsFiltered = products.filter((card) =>
		Array.isArray(card.category) &&
		card.category.some(
			(cat) =>
				slugify(cat, {
					lower: true,
					strict: true,
				})
			=== categorySlugified
		)
	)
	const isMobile = MediaQuery('(max-width: 700px)');

	const getSlidesPerView = () => {
		if (productsFiltered.length <= 3) return productsFiltered.length;
		return isMobile ? 1.3 : 3.5;
	};


	return (
		<div className={styles.containerCategory} ref={ref}>
			{/* se for mobile mostra stories */}
			{isMobile && (
				<section className={styles.containerStories}>
					<StoriesInsta filter={category} />
				</section>
			)}
			
			{/* se não for mobile mostra banner */}
			{!isMobile && (
				<section className={styles.containerSwiper}>
					<Swiper
						slidesPerView={1}
						spaceBetween={0}
						navigation={true}
						pagination={{ clickable: true }}
						loop={true}
						modules={[Autoplay, Navigation, Pagination, EffectFade]}
						autoplay={{
							delay: 5000,
							disableOnInteraction: false, // continua mesmo com interações
						}}
						speed={2000}
					>
						{/* filtra os banners com base na categoria */}
						{Banners.filter((bann) => bann.category === category).map((bann) => (
							<SwiperSlide key={bann.id}>
								<img src={bann.imgBanner} alt="" />
							</SwiperSlide>
						))}
					</Swiper>
				</section>
			)}

			<div className={styles.containerProducts}>
				<h2 className={styles.title}>{category}</h2>
				<p className={styles.text}>{text}</p>
				<div className={styles.containerCard}>
					{!products || products.length === 0 ? (
						<LoaderData />
					) : (
						<Swiper
							slidesPerView={getSlidesPerView()}
							spaceBetween={isMobile ? 10 : 40}
						>
							{productsFiltered
								.map((card) => (
									<SwiperSlide key={card._id} style={{ height: '100%' }}>
										<CardProduct product={card} />
									</SwiperSlide>
								))}
						</Swiper>
					)}
				</div>
				<Link
					className={styles.btnShowCategory}
					to={`/category/${slugify(category, {
						lower: true,
						strict: true,
						trim: true,
					})}`}
				>
					<LiaEyeSolid className={styles.icon} />
					Ver mais de {category}
				</Link>
			</div>
		</div>
	);
});

export default CategorySection;
