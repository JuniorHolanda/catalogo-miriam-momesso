import HeaderSection from "../../components/HeaderSection";
import styles from './product.module.scss';
import Gallery from "../../components/Gallery";
import InfoProduct from "../../components/infoProduct";
import slugify from "slugify";
import React, { useEffect, useState } from "react";
import axios from "axios";
import LoaderData from "../../components/Loader";


const ProductSection = ({name}) => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        async function fetchProducts() {
        try {
            const response = await axios.get('https://back-end-catalogo-miriam-momesso.onrender.com/product');
            setProducts(response.data);
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

    if (!cardFiltered) return (
        <main className={styles.wrapper}>
            <LoaderData/>
        </main>
    );
    
    return (
        <main className={styles.wrapper}>
            <HeaderSection id={cardFiltered.title} className={styles.headerSection}/>
            <Gallery images={cardFiltered.gallery} className={styles.gallery} />
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
