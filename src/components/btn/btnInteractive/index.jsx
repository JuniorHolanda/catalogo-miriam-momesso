import { likeProduct } from '../../../services/productsMomessoServices';
import styles from './btnLike.module.scss';
import { useEffect, useRef, useState } from 'react';
import Lottie from 'lottie-react';
import { setItemLocalStorage } from '../../../utils/MediaQuery/localStorage/localSorage';

const BtnInteractive = ({ productId, icon, isLikeBtn, type }) => {
	const animationRef = useRef();
	const animation = icon

	const [action, setAction] = useState(() => {
		const getAction = localStorage.getItem(`${type}${productId}`);
		return getAction === 'true'; // converte para booleano
	});

	//verifica o valor de action na montagem do componente
	useEffect(() => {
		if (action) {animationRef.current?.play();}
	}, [action]);

	//incrementa like no banco, (usar essa função apenas no para likes)
	async function incLikeDataBase(action) {
		action
	? await likeProduct(productId, 1)
	: await likeProduct(productId, -1);
	}

	//incrementa e decrementa dados na localStorage
	function incLocalStorage (action) {
		action
	? setItemLocalStorage(`${type}${productId}`, true)
	: setItemLocalStorage(`${type}${productId}`, false)
	}
	// gerencia backend e localStorage
	function manipulationData (action) {
		if (isLikeBtn) {
			incLikeDataBase(action);
		}
		incLocalStorage(action)
	}

	//anima o btn
	function animationBtn(action) {
	action
		? animationRef.current?.play()
		: animationRef.current?.stop();
		}

	//CONTROLADOR PRINCIPAL
	const handleBtn = async () => {
		const currentAction = !action;
		setAction(currentAction);
		animationBtn(currentAction);
		manipulationData(currentAction);
	};

	return (
		<div>
			<Lottie
				lottieRef={animationRef}
				autoplay={false}
				animationData={animation}
				loop={false}
				className={styles.animation}
				onClick={handleBtn}
			/>
		</div>
	);
};

export default BtnInteractive;
