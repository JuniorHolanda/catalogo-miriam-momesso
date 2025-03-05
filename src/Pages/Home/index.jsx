import Category from "../../components/Category";
import CategorySection from "../../components/CategorySection";
import HeaderSection from "../../components/HeaderSection";
import DataCardsCategory from '../../data/DataCardsCategory.json'
import styles from './home.module.scss';



const HomeSection = () => {
    return (
        <main className={styles.wrapper}>
            <HeaderSection title='Catálogo'/>
            <Category />
            {
                DataCardsCategory.map((categ) => (
                    <CategorySection
                        key={categ.id}
                        title={categ.title}
                        text={categ.text}
                    />
                ))
            }
        </main>
    );
}

export default HomeSection;
