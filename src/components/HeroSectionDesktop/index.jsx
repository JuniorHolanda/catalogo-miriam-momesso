import styles from './heroSectionDesktop.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import dataHoliday from '../../data/holyDay.json';
import Holiday from '../HolidaysCard';

const HeroSectionDesktop = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.cta}>
          <h2 className={styles.title}>Confira nossas sugestões para datas e eventos</h2>
          <p className={styles.text}>Ou se preferir, solicite sugestões exclusivas para o seu evento.</p>
          <button className={styles.btn}>Sugestões exclusivas</button>
        </div>

        <div className={styles.swiper}>
          <div className={styles.swiperContainer}>
            <Swiper
            slidesPerView={3}
            spaceBetween={20}
            navigation={true}>
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
