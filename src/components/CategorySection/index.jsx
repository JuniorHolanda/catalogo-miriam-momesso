import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/bundle';
import styles from './category-section.module.scss';
import StoriesInsta from '../Stories';
import React, { useEffect, useState } from 'react';
import { LiaEyeSolid } from 'react-icons/lia';
import { Link, useNavigate } from 'react-router-dom';
import CardSearch from '../CardSearch';
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
				console.log('Erro ao carregar produtos:', error.message);;
			}
		}
		fetchProducts();
	}, []);

	const categorySlugified = slugify(category,{
		lower: true,
		strict: true,
		trim: true,
	});
	
	const isMobile = MediaQuery('(max-width: 700px)');

	return (
		<div className={styles.containerCategory} ref={ref}>
			<div className={styles.containerInfo}>
				<h2>{category}</h2>
				<p>{text}</p>
			</div>
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
						pagination={true}
						loop={true}
						modules={[Autoplay]}
						autoplay={{
							delay: 3000,
							disableOnInteraction: false, // continua mesmo com interações
						}}
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

			<div className={styles.containerCard}>
				{!products || products.length === 0 ? (
					<LoaderData />
				) : (
					<Swiper
						style={{ height: '100%' }}
						slidesPerView={isMobile ? 2 : 3}
						spaceBetween={isMobile ? 10 : 40}
						navigation={true}
					>
						{products
							.filter(
								(card) =>
									Array.isArray(card.category) &&
									card.category.some(
										(cat) => slugify(cat, { lower: true, strict: true }) === categorySlugified
									)
							)
							.map((card) => (
								<SwiperSlide key={card._id} style={{ height: '100%' }}>
									<CardSearch product={card} />
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
	);
});

export default CategorySection;
