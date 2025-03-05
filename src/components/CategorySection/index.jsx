import styles from './category-section.module.scss';
import CardProduct from '../HandleCardProduct';
import Stories from '../Stories';
import { LiaEyeSolid } from "react-icons/lia";

const CategorySection = ({title, text}) => {

  return (
    <div className={styles.containerCategory}>
      <Stories filter={title} />
      <h2>{title}</h2>
      <p>{text}</p>
      <CardProduct filter={title} />
      <button className={styles.btnShowCategory}>
        <LiaEyeSolid className={styles.icon} />
        Ver Categoria
      </button>
    </div>
  );
}

export default CategorySection
