import { useEffect } from 'react';
import styles from './cardCategory.module.scss';
import dataCard from '../../../data/DataCardsCategory.json'

const CardCategory = ({ img, altImg, category, background, altBackground }) => {


  return (
    <div className={styles.cardContainer}>
      <div className={styles.containerImg}>
        <img src={img} alt={altImg} />
      </div>
      <div className={styles.cardTitle}>
        <h2>{category}</h2>
      </div>
      <div className={styles.symbolBackground}>
        <img src={background} alt={altBackground } />
      </div>
    </div>
  );
}

export default CardCategory;


//mongodb+srv://mkt:<db_password>@cluster0.b2bu1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0