import { useRef, useEffect } from "react";
import CategorySection from "../../components/CategorySection";
import HeaderSection from "../../components/HeaderSection";
import DataCardsCategory from '../../data/DataCardsCategory.json'
import styles from './home.module.scss';
import CardCategory from '../../components/CardCategory'

const HomeSection = () => {

    const sectionRefs = useRef([]);

    const scrollToSection = (id) => {
        console.log(sectionRefs)
        sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth" });
    };
    
    return (
        <main className={styles.wrapper}>
            <HeaderSection id='catalogo'/>
            <nav className={styles.containerCard}>
                {DataCardsCategory.map((card) =>(
                    <CardCategory
                        onClick={() => scrollToSection(card.id)}
                        key={card.id}
                        {...card}
                    />
                ))}
            </nav>
            {DataCardsCategory.map((section) => (
                <CategorySection
                    id={section.id}
                    key={section.id}
                    category={section.category}
                    text={section.text}
                    ref={(el) => (sectionRefs.current[section.id] = el)}
                />
            ))}
        </main>
    );
}

export default HomeSection;
