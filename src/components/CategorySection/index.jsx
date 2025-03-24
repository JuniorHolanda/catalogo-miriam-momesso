import styles from './category-section.module.scss';
import CardProduct from '../HandleCardProduct';
import { LiaEyeSolid } from "react-icons/lia";
import StoriesInsta from '../Stories';
import React from 'react';


const CategorySection =  React.forwardRef(({ category, text }, ref) => {
  return (
    <div
    className={styles.containerCategory}
    ref={ref}
    >
      <h2>{category}</h2>
      <p>{text}</p>

      <StoriesInsta filter={category}/>
      <CardProduct filter={category} />
      {/* <button className={styles.btnShowCategory}>
        <LiaEyeSolid className={styles.icon} />
        Ver Categoria
      </button> */}
    </div>
  );
});

export default CategorySection
