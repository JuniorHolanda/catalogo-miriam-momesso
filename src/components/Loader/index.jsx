import React from 'react';
import animationLoader from './Animation.json';
import Lottie from 'react-lottie-player';

const LoaderData = ({ className }) => {
	return (
		<div className={className}>
			<Lottie animationData={animationLoader} loop={true} play={true} />
		</div>
	);
};

export default LoaderData;

// .container{
//   @include mixins.flex($justify: center, $align: center);
//   width: 100%;
//   height: 100%;
// }
