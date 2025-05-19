import styles from './heroSectionDesktop.module.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/bundle';

import category from '../../data/DataCardsCategory.json';
import dataHoliday from '../../data/holyDay.json';
import Holiday from '../Holidays';

const HeroSectionDesktop = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.searchBox}>
        <h1>Encontre seu produto ideal</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum rem
          molestiae dicta officiis veniam quam quisquam, sequi tenetur corrupti
          explicabo, doloribus eveniet, incidunt molestias odio unde veritatis
          magni vel. Veritatis?
        </p>
        <input type="text" />
        <div className={styles.filterCategory}>
          {category.map((item) => (
            <button key={item.id}>{item.category}</button>
          ))}
        </div>
      </div>

      <div className={styles.cta}>
        <h2>Confira nossas sugestões para datas e eventos</h2>
        <p>Ou se preferir, solicite sugestões exclusivas para o seu evento.</p>
        <button>Sugestões exclusivas</button>
      </div>

      <div className={styles.swiper}>
        <div className={styles.swiperContainer}>
          <Swiper
            style={{ height: '100%' }}
            slidesPerView={2}
            spaceBetween={1}
            navigation={true}
          >
            {dataHoliday.map((item) => (
              <SwiperSlide>
                <Holiday key={item.id} card={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionDesktop;
