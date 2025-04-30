import slugify from 'slugify';
import Card from '../../components/Card';
import { useEffect, useState } from 'react';
import axios from 'axios';

const RenderCard = ( {slug} ) => {

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

    return (
        <>
            {products
                .filter( card =>
                Array.isArray(card.category) &&
                card.category.some(cat =>
                    slugify(cat, { lower: true, strict: true }) === slug
                )
                )

                .map(card => (
                <Card 
                    key={card.id}
                    product={card}
                />
            ))}
        </>
    )
}

export default RenderCard
