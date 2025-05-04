
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css/bundle';

import styles from './category-section.module.scss';
import StoriesInsta from '../Stories';
import React, { useEffect, useState } from 'react';
import { LiaEyeSolid } from "react-icons/lia";
import { Link, useNavigate } from "react-router-dom";
import CardSearch from '../CardSearch';
import slugify from 'slugify';
import MediaQuery from '../../utils/MediaQuery/MediaQuery';
import axios from 'axios';
import LoaderData from '../Loader';

const CategorySection =  React.forwardRef(({ category, text }, ref) => {

  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get('https://back-end-catalogo-miriam-momesso.onrender.com/product');
        setProducts(response.data); // ajuste aqui dependendo do formato que a API retorna
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    }

    fetchProducts();
  }, []);

  const navigate = useNavigate();
  const categorySlugified = slugify(category, { lower: true, strict: true });
  const isMobile = MediaQuery ("(max-width: 700px)");

  return(
    <div
    className={styles.containerCategory}
    ref={ref}
    >
        <div className={styles.containerInfo}>
          <h2>{category}</h2>
          <p>{text}</p>
          {!isMobile &&
            <img src="https://res.cloudinary.com/dnr3wfqyy/image/upload/v1740193910/Union-1_vda0lc.svg" alt="símbolos geométricos abstratos" />
          }
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
          
        {(!products || products.length === 0) ? (
    <LoaderData /> // Exibe o loader enquanto 'products' é null ou vazio
  ) : (
    <Swiper
      style={{ height: '100%' }}
      slidesPerView={isMobile ? 2 : 3}
      spaceBetween={isMobile ? 10 : 40}
      navigation={true}
    >
      {products
        .filter(card =>
          Array.isArray(card.category) &&
          card.category.some(cat =>
            slugify(cat, { lower: true, strict: true }) === categorySlugified
          )
        )
        .map(card => (
          <SwiperSlide key={card._id} style={{ height: '100%' }}>
            <CardSearch product={card} />
          </SwiperSlide>
        ))}
    </Swiper>
  )}
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
