import HeaderSection from '../../components/HeaderSection'
import styles from './categoryPage.module.scss'
import dataProduct from '../../data/DataProduct.json'
import dataHoliday from '../../data/holyDay.json'
import { useParams } from 'react-router-dom'
import slugify from 'slugify'
import React from 'react'
import CardSearch from '../../components/CardSearch'

const CategoryPage = () => {

const { categoria } = useParams();

const title = dataHoliday.filter((item) => {
    const slugTitle = slugify(item.title, { lower: true, strict: true });
    return slugTitle === categoria;
} );

return (
    <section className={styles.wrapper}>
        <HeaderSection id={title[0].title}/>

        {
            dataProduct.map((card) => (
                <CardSearch
                    key={card.id}
                    product={card}
                />
            ))
        }
    </section>
)
}

export default CategoryPage
