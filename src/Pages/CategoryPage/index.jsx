import HeaderSection from '../../components/HeaderSection'
import styles from './categoryPage.module.scss'
import dataProduct from '../../data/DataProduct.json'
import dataHoliday from '../../data/holyDay.json'
import { useParams } from 'react-router-dom'
import slugify from 'slugify'
import React from 'react'
import CardSearch from '../../components/CardSearch'

const CategoryPage = () => {

    const { category } = useParams();

    const categorySlugified = category




    
    const title = dataHoliday.filter((item) => {
        const slugTitle = slugify(item.title, { lower: true, strict: true });
        return slugTitle === category;
    } );

    return (
        <section className={styles.wrapper}>
            <HeaderSection id={title[0].title}/>
            
            {dataProduct
                .filter(card =>
                    Array.isArray(card.category) &&
                    card.category.some(cat =>
                    slugify(cat, { lower: true, strict: true }) === categorySlugified
                    )
                )
                .map(card => (
                    <CardSearch
                    key={card.id}
                    product={card}
            />
            ))}
        </section>
    )
}

export default CategoryPage
