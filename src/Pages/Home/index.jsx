import { useEffect, useRef, useState } from 'react';
import CategorySection from '../../components/CategorySection';
import HeaderSection from '../../components/HeaderSection';
import DataCardsCategory from '../../data/DataCardsCategory.json';
import styles from './home.module.scss';
import CardCategory from '../../components/CardCategory';
import SearchBar from '../../components/SearchBar';
import HeroSectionDesktop from '../../components/HeroSectionDesktop';
import MediaQuery from '../../utils/MediaQuery/MediaQuery';
import FavoriteSection from '../../components/FavoriteSection';
import Lottie from 'react-lottie-player';
import entraceAnimation from '../../animation/vinheta-miriam-momesso.json'

const HomeSection = () => {
	const sectionRefs = useRef([]);
	const isMobile = MediaQuery('(max-width: 700px)');
	const [loading, setLoading] = useState(false);
	const animationRef = useRef();

	useEffect(() => {
		const hasLoaded = sessionStorage.getItem('catalogLoaded')

		if (!hasLoaded){
			setLoading(true);
			const timer = setTimeout(() => {
				setLoading(false);
				sessionStorage.setItem('catalogLoaded', 'true');
			}, 6000);
			return () => clearTimeout(timer)
		}


	}, []);

	const allKeyStorage = Object.keys(localStorage);
	const favoriteKeys = allKeyStorage.filter((key) => key.includes('favorite'));
	const productId = favoriteKeys.map((key) => key.replace('favorite', ''));

	const scrollToSection = (id) => {
		sectionRefs.current[id]?.scrollIntoView({ behavior: 'smooth' });
	};

	if (loading) {
		return (
			<main className={styles.wrapperEntrace}>
				<Lottie
					ref={animationRef}
					play={true}
					animationData={entraceAnimation}
					loop={true}
					className={styles.entraceLottie}
					style={{ height: '400px' }}
				/>
			</main>
		);
	}

	return (
		<main className={styles.wrapper}>
			{isMobile && <HeaderSection />}
			<SearchBar className={styles.containerInpt} btnSubmit={styles.btnSubmit} />
			{!isMobile && <HeroSectionDesktop />}
			{productId.length >= 5 && <FavoriteSection listId={productId} />}

			{isMobile && (
				<nav className={styles.containerCard}>
					{DataCardsCategory.map((card) => (
						<CardCategory onClick={() => scrollToSection(card.id)} key={card.id} {...card} />
					))}
				</nav>
			)}

			{DataCardsCategory.map((card) => (
				<CategorySection key={card.id} {...card} ref={(el) => (sectionRefs.current[card.id] = el)} />
			))}
		</main>
	);
};

export default HomeSection;
