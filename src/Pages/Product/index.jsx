import HeaderSection from "../../components/HeaderSection";
import styles from './product.module.scss';
import dataProduct from '../../data/DataProduct.json'
import Gallery from "../../components/Gallery";
import StudioBrin from "../../components/StudioBrin";


const ProductSection = ({id}) => {
    const cardFiltered = dataProduct.find(card => card.id === id);

    return (
        <main className={styles.wrapper}>
            <HeaderSection id={cardFiltered.title}/>
            <Gallery images={cardFiltered.gallery} />
            <h2 className={styles.titles}>PERSONALIZE</h2>
            <StudioBrin
                studioBrin={cardFiltered.studioBrin}
                title={cardFiltered.title}
                printing={cardFiltered.printing}
            />
        </main>
    );
}

export default ProductSection;
