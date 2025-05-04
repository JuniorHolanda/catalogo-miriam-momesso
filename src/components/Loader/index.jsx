import React from 'react'
import animationLoader from './Animation.json';
import Lottie from 'lottie-react';

const LoaderData = ({className}) => {
  return (
    <div className={className}>
      <Lottie
        animationData={animationLoader}
        loop={true}
        autoplay={true}
      />
    </div>
  )
}

export default LoaderData;

// .container{
//   @include mixins.flex($justify: center, $align: center);
//   width: 100%;
//   height: 100%;
// }