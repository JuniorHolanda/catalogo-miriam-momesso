import styles from './cardCategory.module.scss';
import { useRef } from 'react';

const CardCategory = (
  { 
    img,
    altImg,
    category,
    background,
    altBackground,
    onClick 
  }) => {

  const sectionRefs = useRef({});

  const scrollToSection = (id) => {
    const section = sectionRefs.current[id];
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick} 
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
