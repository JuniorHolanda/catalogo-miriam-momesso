import { useRef, useEffect } from "react";
import CategorySection from "../../components/CategorySection";
import HeaderSection from "../../components/HeaderSection";
import DataCardsCategory from '../../data/DataCardsCategory.json'
import styles from './home.module.scss';
import CardCategory from '../../components/CardCategory'

const HomeSection = () => {
    const categoryRefs = useRef([]);

    const handleScroll = (id) => {
        const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    }

    
    return (
        <main className={styles.wrapper}>
            <HeaderSection id='catalogo'/>
            <nav className={styles.containerCard}>
                {DataCardsCategory.map((card) =>(
                    <CardCategory
                        key={card.id}
                        {...card}
                        onClick={handleScroll}
                    />
                ))}
            </nav>
            {DataCardsCategory.map((data, index) => (
                <CategorySection
                    id={data.id}
                    key={data.id}
                    category={data.category}
                    text={data.text}
                    ref={(el) => (categoryRefs.current[data.id] = el)}
                />
            ))}
        </main>
    );
}

export default HomeSection;
