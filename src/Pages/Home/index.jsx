import Category from "../../components/Category";
import CategorySection from "../../components/CategorySection";
import HeaderSection from "../../components/HeaderSection";
import DataCardsCategory from '../../data/DataCardsCategory.json'
import styles from './home.module.scss';



const HomeSection = () => {
    return (
        <main className={styles.wrapper}>
            <HeaderSection id='Catálogo'/>
            <Category />
            {
                DataCardsCategory.map((data) => (
                    <CategorySection
                        key={data.id}
                        category={data.category}
                        text={data.text}
                    />
                ))
            }
        </main>
    );
}

export default HomeSection;
