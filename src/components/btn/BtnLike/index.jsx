import { likeProduct } from '../../../services/productsMomessoServices';
import animation from './Animation - 1748197599976.json';
import styles from './btnLike.module.scss';
import { useEffect, useRef, useState } from 'react';
import Lottie from 'lottie-react';
import { setItemLocalStorage } from '../../../utils/MediaQuery/localStorage/localSorage';

const BtnLike = ({ productId }) => {
	console.log(productId);
	const animationRef = useRef();
	const [like, setLike] = useState(() => {
		const storedLike = localStorage.getItem(productId);
		return storedLike === 'true'; // converte para booleano
	});

	//verifica se tem like na montagem do componente
	useEffect(() => {
		if (like) {animationRef.current?.play();}
	}, [like]);

	//persiste dados na localStorage e no Mongo
	async function persistenceLike(isLiked) {
		if (isLiked === true) {
			setItemLocalStorage(productId, true)
			await likeProduct(productId, 1);
		} else {
			setItemLocalStorage(productId, false)
			await likeProduct(productId, -1);
		}
	}

	//anima o btn do Like
	async function animationLike(isLiked) {
		if (isLiked === true) {
			animationRef.current?.play();
		} else {
			animationRef.current?.stop();
		}
	}

	const handleLike = async () => {
		const currentLike = !like;
		setLike(currentLike);
		animationLike(currentLike);
		persistenceLike(currentLike);
	};

	return (
		<div>
			<Lottie
				lottieRef={animationRef}
				autoplay={false}
				animationData={animation}
				loop={false}
				className={styles.animation}
				onClick={handleLike}
			/>
		</div>
	);
};

export default BtnLike;
