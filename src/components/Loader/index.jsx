import React from 'react'
import styles from './loader.module.scss'
import animationLoader from './Animation.json';
import Lottie from 'lottie-react';

const LoaderData = () => {
  return (
    <div className={styles.container}>
      <Lottie
        animationData={animationLoader}
        loop={true}
        autoplay={true}
      />
    </div>
  )
}

export default LoaderData;
