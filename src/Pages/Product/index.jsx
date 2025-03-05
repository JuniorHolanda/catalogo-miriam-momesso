import HeaderSection from "../../components/HeaderSection";
import styles from './product.module.scss';
import cards from '../../data/DataProduct.json'
import Product from "../../routers/Product";
import Gallery from "../../components/Gallery";


const ProductSection = ({id}) => {
    const cardFiltered = cards.find(card => card.id === id);

    return (
        <main className={styles.wrapper}>
            <HeaderSection id={cardFiltered.title}/>
            <Gallery />
        </main>
    );
}

export default ProductSection;
