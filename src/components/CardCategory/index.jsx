import { Link } from 'react-router-dom';
import styles from './cardCategory.module.scss';
import { useRef } from 'react';

const CardCategory = (
  { img,
    altImg,
    category,
    background,
    altBackground
  }) => {

  const sectionRef = useRef(null);

  const handleScroll = () => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    };

  return (
    <div
    role="button"
    tabIndex={0}
    onClick={handleScroll}
    className={styles.cardContainer}
    >
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
