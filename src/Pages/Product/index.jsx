import HeaderSection from "../../components/HeaderSection";
import styles from './product.module.scss';
import Gallery from "../../components/Gallery";
import InfoProduct from "../../components/infoProduct";
import slugify from "slugify";
import React, { useEffect, useState } from "react";
import axios from "axios";


const ProductSection = ({name}) => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        async function fetchProducts() {
        try {
            const response = await axios.get('https://back-end-catalogo-miriam-momesso.onrender.com/product');
            setProducts(response.data); // ajuste aqui dependendo do formato que a API retorna
        } catch (error) {
            console.error('Erro ao buscar produtos:', error);
        }
    }

    fetchProducts();
    }, []);
    
    const cardFiltered = products.find(card => slugify(card.title,{
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
