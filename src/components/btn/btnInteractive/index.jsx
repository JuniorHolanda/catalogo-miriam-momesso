import { likeProduct } from '../../../services/productsMomessoServices';
import { useEffect, useRef, useState } from 'react';
import Lottie from 'react-lottie-player';
import { setItemLocalStorage } from '../../../utils/MediaQuery/localStorage/localSorage';

const BtnInteractive = ({ productId, icon, isLikeBtn, type, style }) => {
	const animationRef = useRef();
	const animation = icon;

	const [action, setAction] = useState(() => {
		const getAction = localStorage.getItem(`${type}${productId}`);
		return getAction === 'true'; // converte para booleano
	});

	//verifica o valor de action na montagem do componente
	useEffect(() => {
		if (action) {
			const fullframe = animationRef.current.getDuration(true);
			animationRef.current.goToAndStop(fullframe - 1, true);
		}
	}, []);

	//incrementa like no banco, (usar essa função apenas no para likes)
	async function incLikeDataBase(action) {
		action ? await likeProduct(productId, 1) : await likeProduct(productId, -1);
	}

	//incrementa e decrementa dados na localStorage
	function incLocalStorage(action) {
		action
			? setItemLocalStorage(`${type}${productId}`, true)
			: setItemLocalStorage(`${type}${productId}`, false);
	}
	// gerencia backend e localStorage
	function manipulationData(action) {
		if (isLikeBtn) {
			incLikeDataBase(action);
		}
		incLocalStorage(action);
	}

	//anima o btn
	function animationBtn(action) {
		if (action) {
			animationRef.current?.setDirection(1);
			animationRef.current.play();
		} else {
			animationRef.current?.setDirection(-1);
			animationRef.current.play();
		}
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
				ref={animationRef}
				play={false}
				animationData={animation}
				loop={false}
				className={style}
				onClick={handleBtn}
				style={{ height: '50px' }}
			/>
		</div>
	);
};

export default BtnInteractive;
