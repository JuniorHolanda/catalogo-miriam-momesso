import dataProduct from '../../data/DataProduct.json';
import slugify from 'slugify';
import Card from '../../components/Card';

const RenderCard = ( {slug} ) => {
    return (
        <>
        {dataProduct
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
