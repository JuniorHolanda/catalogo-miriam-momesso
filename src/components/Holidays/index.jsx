import React from 'react'
import styles from './holiday.module.scss'
import { Link } from 'react-router-dom'
import slugify from 'slugify'

const Holiday = ({card}) => {
    return (
    <Link
        to={`/categorias/${slugify(card.title,{   
            lower: true,
            strict: true
        })}`}
        className={styles.wrapper}>

        <div className={styles.containerImg}>
            <img src={card.img} alt={card.altImg} />
        </div>

        <div className={styles.containerInfo}>
            <h2>{card.title}</h2>
            <p>{card.description}</p>
        </div>
    </Link>
)
}

export default Holiday