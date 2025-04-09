import React from 'react'
import styles from './holiday.module.scss'
import { Link } from 'react-router-dom'

const Holiday = () => {
return (
    <Link to={'/diaDasMaes'} className={styles.wrapper} >
        <h2>Dia das Mães</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus obcaecati, asperiores dolorem, odio optio hic expedita esse libero</p>
        <img src="https://res.cloudinary.com/dnr3wfqyy/image/upload/v1744212746/dia-das-maes_jk8mjs.jpg" alt="fhgfgfgfgfg" />
    </Link>
)
}

export default Holiday
