import styles from './category-section.module.scss';
import dataProduct from '../../data/DataProduct.json';
import StoriesInsta from '../Stories';
import React from 'react';
import { LiaEyeSolid } from "react-icons/lia";
import { data, Link, useNavigate } from "react-router-dom";
import CardSearch from '../CardSearch';
import slugify from 'slugify';



const CategorySection =  React.forwardRef(({ category, text }, ref) => {

  const navigate = useNavigate();

  const categorySlugified = slugify(category, { lower: true, strict: true });

  return(
    <div
    className={styles.containerCategory}
    ref={ref}
    >
        <h2>{category}</h2>
        <p>{text}</p>

        
        <StoriesInsta filter={category}/>

        <div className={styles.containerCard}>
          {dataProduct
            .filter( card =>
              Array.isArray(card.category) &&
              card.category.some(cat =>
                slugify(cat, { lower: true, strict: true }) === categorySlugified
              )
            )

            .map(card => (
              <CardSearch 
                key={card.id}
                product={card}
              />
            ))
          }
        </div>
        
        <Link
        className={styles.btnShowCategory}
        to={`/categorias/${slugify(category,{   
          lower: true,
          strict: true,
          trim: true
        })}`}>
          <LiaEyeSolid className={styles.icon} />
          Ver todas as {category}
        </Link>
      </div>
    );
  });

export default CategorySection
