import HeaderSection from "../../components/HeaderSection";
import styles from './product.module.scss';
import cards from '../../data/DataProduct.json'
import Product from "../../routers/Product";
import Gallery from "../../components/Gallery";
import StudioBrin from "../../components/StudioBrin";


const ProductSection = ({id}) => {
    const cardFiltered = cards.find(card => card.id === id);

    return (
        <main className={styles.wrapper}>
            <HeaderSection id={cardFiltered.title}/>
            <Gallery images={cardFiltered.gallery} />
            <h2 className={styles.titles}>PERSONALIZE</h2>
            <StudioBrin studioBrin={cardFiltered.studioBrin} title={cardFiltered.title} />
        </main>
    );
}

export default ProductSection;
