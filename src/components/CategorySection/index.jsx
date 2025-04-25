
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css/bundle';

import styles from './category-section.module.scss';
import dataProduct from '../../data/DataProduct.json';
import StoriesInsta from '../Stories';
import React from 'react';
import { LiaEyeSolid } from "react-icons/lia";
import { data, Link, useNavigate } from "react-router-dom";
import CardSearch from '../CardSearch';
import slugify from 'slugify';
import MediaQuery from '../../utils/MediaQuery/MediaQuery';

const CategorySection =  React.forwardRef(({ category, text }, ref) => {

  const navigate = useNavigate();

  const categorySlugified = slugify(category, { lower: true, strict: true });

  const isMobile = MediaQuery ("(max-width: 400px)");

  return(
    <div
    className={styles.containerCategory}
    ref={ref}
    >
        <div className={styles.containerInfo}>
          <h2>{category}</h2>
          <p>{text}</p>
        </div>

        
        {isMobile &&
        <section className={styles.containerStories}>
          <StoriesInsta filter={category} />
        </section>
        }
        {!isMobile &&
        <section className={styles.containerSwiper}>
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            navigation={true}
            pagination={true}
            loop={true}
            modules={[Autoplay]}
            autoplay={{
              delay: 3000, // 3 segundos
              disableOnInteraction: false, // continua mesmo com interações
            }}
          >
            <SwiperSlide><img src="https://res.cloudinary.com/dnr3wfqyy/image/upload/v1745524625/Nec_Ev_-_juta_-_banner_-_site_exyizg.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="https://res.cloudinary.com/dnr3wfqyy/image/upload/v1745525938/Nec_Ev_-_juta_-_banner_-_site_mhfegb.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="https://res.cloudinary.com/dnr3wfqyy/image/upload/v1745526109/Nec_Ev_-_juta_-_banner_-_site_qtgca6.jpg" alt="" /></SwiperSlide>
          </Swiper>
        </section>}

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
