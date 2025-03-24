import { useRef } from "react";
import CategorySection from "../../components/CategorySection";
import HeaderSection from "../../components/HeaderSection";
import DataCardsCategory from '../../data/DataCardsCategory.json'
import styles from './home.module.scss';
import CardCategory from '../../components/CardCategory'




const HomeSection = () => {

    const categoryRefs = useRef({});

  // Função de scroll
 const scrollToCategory = (id) => {
    console.log(id)
    categoryRefs.current[id]?.scrollIntoView({ behavior: 'smooth' });
  };


    return (
        <main className={styles.wrapper}>
            <HeaderSection id='Catálogo'/>
            <nav className={styles.containerCard}>
                {DataCardsCategory.map((card) =>(
                    <CardCategory
                        key={card.id}
                        {...card}
                        onClick={() => scrollToCategory(card.id)}
                    />
                ))}
            </nav>
            {DataCardsCategory.map((data, index) => (
                <CategorySection
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
