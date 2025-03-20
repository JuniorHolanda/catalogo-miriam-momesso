import styles from './category-section.module.scss';
import CardProduct from '../HandleCardProduct';
import { LiaEyeSolid } from "react-icons/lia";
import StoriesInsta from '../Stories';

const CategorySection = ({category, text}) => {
  return (
    <div className={styles.containerCategory}>
      <h2>{category}</h2>
      <p>{text}</p>

      <StoriesInsta filter={category}/>
      <CardProduct filter={category} />
      <button className={styles.btnShowCategory}>
        <LiaEyeSolid className={styles.icon} />
        Ver Categoria
      </button>
    </div>
  );
}

export default CategorySection
