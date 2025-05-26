import React, { useRef, useState } from 'react';
import animation from './Animation - 1748131287450.json';
import Lottie from 'lottie-react';
import styles from './error404.module.scss';
import { HiOutlineHome } from 'react-icons/hi';

const Error404 = () => {
  const lottieRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);

  const animationCat = () => {
    lottieRef.current.stop();
    lottieRef.current.play();
  };

  const showBtn = () => {
    setIsPlaying(!isPlaying);
  };

  const touchCat = () => {
    animationCat();
    showBtn();
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.text}>
        <h1 className={styles.errorTitle}>404</h1>
        <h2 className={styles.errorSubTitle}>
          Ops...
          <br />
          Página não encontrada
        </h2>
        <p className={styles.errorText}>
          🐈
          <br />
          Toque na barriga do
          <br />
          gato bem devagar...
        </p>
      </div>

      <div className={styles.containerCat}>
        {isPlaying && (
          <button className={styles.btnHome}>
            <HiOutlineHome className={styles.iconBtn} />
            Início
          </button>
        )}
        <Lottie
          lottieRef={lottieRef}
          animationData={animation}
          loop={false}
          autoplay={false}
          onClick={touchCat}
          className={styles.animation}
        />
      </div>
    </div>
  );
};

export default Error404;
