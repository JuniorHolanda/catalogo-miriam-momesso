import styles from './category-section.module.scss';
import dataProduct from '../../data/DataProduct.json';
import StoriesInsta from '../Stories';
import React from 'react';
import { LiaEyeSolid } from "react-icons/lia";
import { data, Link, useNavigate } from "react-router-dom";
import CardSearch from '../CardSearch';
import slugify from 'slugify';
import MediaQuery from '../../utils/MediaQuery/MediaQuery';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

const CategorySection =  React.forwardRef(({ category, text }, ref) => {

  const navigate = useNavigate();

  const categorySlugified = slugify(category, { lower: true, strict: true });

  const isMobile = MediaQuery ("(max-width: 400px)");

  return(
    <div
    className={styles.containerCategory}
    ref={ref}
    >
        <h2>{category}</h2>
        <p>{text}</p>

        
        {isMobile && <StoriesInsta filter={category} />}
        {!isMobile && <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >

            <SwiperSlide><img src="https://res.cloudinary.com/dnr3wfqyy/image/upload/v1745524625/Nec_Ev_-_juta_-_banner_-_site_exyizg.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="https://res.cloudinary.com/dnr3wfqyy/image/upload/v1745525938/Nec_Ev_-_juta_-_banner_-_site_mhfegb.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="https://res.cloudinary.com/dnr3wfqyy/image/upload/v1745526109/Nec_Ev_-_juta_-_banner_-_site_qtgca6.jpg" alt="" /></SwiperSlide>
          </Swiper>}

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
