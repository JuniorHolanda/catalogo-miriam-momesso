import styles from './cardCategory.module.scss';

const CardCategory = (
  { img,
    altImg,
    category,
    background,
    altBackground
  }) => {

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
