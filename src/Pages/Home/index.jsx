import { useRef } from 'react';
import CategorySection from '../../components/CategorySection';
import HeaderSection from '../../components/HeaderSection';
import DataCardsCategory from '../../data/DataCardsCategory.json';
import styles from './home.module.scss';
import CardCategory from '../../components/CardCategory';
import SearchBar from '../../components/SearchBar';
import HeroSectionDesktop from '../../components/HeroSectionDesktop';
import MediaQuery from '../../utils/MediaQuery/MediaQuery';
import FavoriteSection from '../../components/FavoriteSection';

const HomeSection = () => {
	const sectionRefs = useRef([]);
	const isMobile = MediaQuery('(max-width: 700px)');

	const allKeyStorage = Object.keys(localStorage);
	const favoriteKeys = allKeyStorage.filter((key) => key.includes('favorite'));
	const productId = favoriteKeys.map((key) => key.replace('favorite', ''));

	const scrollToSection = (id) => {
		sectionRefs.current[id]?.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<main className={styles.wrapper}>
			{isMobile && <HeaderSection />}
			<SearchBar className={styles.containerInpt} btnSubmit={styles.btnSubmit} />
			{!isMobile && <HeroSectionDesktop />}
			{productId.length >= 5 && <FavoriteSection listId={productId} />}

			{isMobile && (
				<nav className={styles.containerCard}>
					{DataCardsCategory.map((card) => (
						<CardCategory
							onClick={() => scrollToSection(card.id)}
							key={card.id}
							{...card}
						/>
					))}
				</nav>
			)}

			{DataCardsCategory.map((card) => (
				<CategorySection
					key={card.id}
					{...card}
					ref={(el) => (sectionRefs.current[card.id] = el)}
				/>
			))}
		</main>
	);
};

export default HomeSection;
