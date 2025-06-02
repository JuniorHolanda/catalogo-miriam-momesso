import { useRef } from 'react';
import CategorySection from '../../components/CategorySection';
import HeaderSection from '../../components/HeaderSection';
import DataCardsCategory from '../../data/DataCardsCategory.json';
import styles from './home.module.scss';
import CardCategory from '../../components/CardCategory';
import HeroSearch from '../../components/HeroSearch';
import HeroSectionDesktop from '../../components/HeroSectionDesktop';

const HomeSection = () => {
	const sectionRefs = useRef([]);

	const scrollToSection = (id) => {
		sectionRefs.current[id]?.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<main className={styles.wrapper}>
			<HeroSearch />
			<HeroSectionDesktop />
			<nav className={styles.containerCard}>
				{DataCardsCategory.map((card) => (
					<CardCategory
						onClick={() => scrollToSection(card.id)}
						key={card.id}
						{...card}
					/>
				))}
			</nav>
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
