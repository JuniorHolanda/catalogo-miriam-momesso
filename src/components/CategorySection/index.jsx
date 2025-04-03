import styles from './category-section.module.scss';
import CardProduct from '../HandleCardProduct';
import StoriesInsta from '../Stories';
import React from 'react';
import { LiaEyeSolid } from "react-icons/lia";
import { Link, useNavigate } from "react-router-dom";


const CategorySection =  React.forwardRef(({ category, text }, ref) => {
const navigate = useNavigate();

  return(
    <div
    className={styles.containerCategory}
    ref={ref}
    >
      <h2>{category}</h2>
      <p>{text}</p>
      
      <StoriesInsta filter={category}/>
      <div className={styles.containerCard}>
        <CardProduct category={category}/>
      </div>
      
      <button
        className={styles.btnShowCategory}
        onClick={() => navigate('search')}
        >
          <LiaEyeSolid className={styles.icon}/>
          Ver Categoria
      </button>
    </div>
  );
});

export default CategorySection
