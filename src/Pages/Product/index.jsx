import HeaderSection from "../../components/HeaderSection";
import styles from './product.module.scss';
import dataProduct from '../../data/DataProduct.json'
import Gallery from "../../components/Gallery";
import InfoProduct from "../../components/infoProduct";
import slugify from "slugify";
import { replace } from "react-router-dom";


const ProductSection = ({name}) => {
    
    const cardFiltered = dataProduct.find(card => slugify(card.title,{
        lower: true,
        strict: true,
        trim: true
    }) === name);
    
    return (
        <main className={styles.wrapper}>
            <HeaderSection id={cardFiltered.title}/>
            <Gallery images={cardFiltered.gallery} />
            {/* <h2 className={styles.titles}>PERSONALIZE</h2> */}
            {/* /* <StudioBrin
                studioBrin={cardFiltered.studioBrin}
                title={cardFiltered.title}
                printing={cardFiltered.printing}
            /> */}
            <InfoProduct
                name={cardFiltered.title}
                category={cardFiltered.category}
                measure={cardFiltered.measure}
                text={cardFiltered.text}
            />
        </main>
    );
}

export default ProductSection;
