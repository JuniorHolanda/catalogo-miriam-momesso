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
        <h1 className={styles.title}>Encontre seu produto ideal</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum rem molestiae dicta officiis veniam quam quisquam, sequi tenetur corrupti
          explicabo, doloribus eveniet, incidunt molestias odio unde veritatis magni vel. Veritatis?
        </p>
        <input className={styles.searchInput} type="text" />
        <div className={styles.filterCategory}>
          {category.map((item) => (
            <button className={styles.btnCategory} key={item.id}>
              {item.category}
            </button>
          ))}
        </div>
        <img
          className={styles.geometricStar}
          src="https://res.cloudinary.com/dnr3wfqyy/image/upload/v1740193909/Star_1_bpvrk0.svg"
          alt="forma geométrica abstrata, semelhante a uma estrela"
        />
      </div>

      <div className={styles.content}>
        <div className={styles.cta}>
          <h2 className={styles.title}>Confira nossas sugestões para datas e eventos</h2>
          <p className={styles.text}>Ou se preferir, solicite sugestões exclusivas para o seu evento.</p>
          <button className={styles.btn}>Sugestões exclusivas</button>
        </div>

        <div className={styles.swiper}>
          <div className={styles.swiperContainer}>
            <Swiper slidesPerView={3} spaceBetween={20} navigation={true}>
              {dataHoliday.map((item) => (
                <SwiperSlide>
                  <Holiday key={item.id} card={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionDesktop;
