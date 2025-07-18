import styles from './cardImported.module.scss';
import { Link } from 'react-router-dom';
import BtnInteractive from '../btn/btnInteractive';
import animationLike from '../../animation/animation-like.json';
import animationFavorite from '../../animation/animation-favorite.json';
import animationKit from '../../animation/animation-kit.json';

const CardImported = ({ product }) => {
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
			<div className={styles.containerThunb}>
				<img src={product.imageLink} alt={product.descricao} />
			</div>

			<div className={styles.containerName}>
				<h2 className={styles.title}>{product.nome}</h2>
				<p className={styles.text}>{product.descricao}</p>
			</div>
		</div>
	);
};

export default CardImported;
