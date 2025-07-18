import styles from './cardImported.module.scss';
import { Link } from 'react-router-dom';
import BtnInteractive from '../btn/btnInteractive';
import animationLike from '../../animation/animation-like.json';
import animationFavorite from '../../animation/animation-favorite.json';
import animationKit from '../../animation/animation-kit.json';
import { useState } from 'react';
import { FaArrowDown, FaArrowUp, FaWhatsapp } from 'react-icons/fa';

const CardImported = ({ product }) => {
	const description = product.descricao;
	const [showMorty, setShowMorty] = useState(false);
	const limitedDescription = description.length > 150 ? `${description.slice(0, 120)}...` : description;
	const mensage = `Olá, gostaria de saber mais sobre o produto ${product.codigoAmigavel} `;
	const codedMensage = encodeURIComponent(mensage);

	return (
		<div className={styles.cardItem}>
			<div className={styles.headerCard}>
				<div className={styles.containerInteractiveBtn}>
					<BtnInteractive
						productId={product._id}
						icon={animationFavorite}
						isLikeBtn={false}
						type={'favorite'}
						style={styles.animationBtn}
					/>
					<BtnInteractive
						productId={product._id}
						icon={animationKit}
						isLikeBtn={false}
						type={'kit'}
						style={styles.animationBtn}
					/>
				</div>
			</div>
			<div className={showMorty ? styles.hideContainerThunb : styles.showContainerThunb}>
				<img src={product.imageLink} alt={product.descricao} />
			</div>

			<div className={styles.containerName}>
				<h2 className={styles.title}>{product.nome}</h2>
				<p className={styles.text}>{showMorty ? description : limitedDescription}</p>
				<div className={styles.containerBtn}>
					{description.length > 150 && (
						<button className={styles.btnShowMory} onClick={() => setShowMorty(!showMorty)}>
							{showMorty ? <FaArrowUp /> : <FaArrowDown />}
						</button>
					)}
					<div className={styles.containerWhatsApp}>
						<FaWhatsapp className={styles.icon}/>
						<a href={`https://api.whatsapp.com/send?phone=5511974783545&text=${codedMensage}` }className={styles.link}>
							Orçamento
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardImported;
