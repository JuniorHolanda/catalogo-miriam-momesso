import styles from './cardSearch.module.scss';
import { LiaEyeSolid } from 'react-icons/lia';
import { Link } from 'react-router-dom';
import slugify from 'slugify';
import cn from 'classnames';
import BtnInteractive from '../btn/btnInteractive';
import animationLike from '../../animation/animation-like.json';
import animationFavorite from '../../animation/animation-favorite.json';
import animationKit from '../../animation/animation-kit.json';
import { slugfyText } from '../../utils/slugfyText';


const CardSearch = ({ product, imported}) => {
	const slug = slugfyText(product.title)
	const productImported = imported;


	//define a classe do cartão com base na quantidade de like
	const statusClass = cn(styles.containerContent, {
		[styles.status1]: product.like >= 0 && product.like < 5,
		[styles.status2]: product.like >= 5 && product.like < 10,
		[styles.status3]: product.like >= 10 && product.like < 20,
	});

	return (
		<div className={styles.cardItem}>
			<div className={styles.headerCard}>
				<div className={styles.containerCategoryCard}>
					{product.category.map((item, index) => {
						return <span key={`${item}-${index}`} className={styles.categoryCard}>{item}</span>;
					})}
				</div>
				<div className={styles.containerInteractiveBtn}>
					<BtnInteractive
						productId={product._id}
						icon={animationLike}
						isLikeBtn={true}
						type={'like'}
						style={styles.animationBtn}
					/>
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
			<Link
				to={productImported ? `/product/imported-${slug}` : `/product/internal-${slug}`}
				className={styles.containerThunb}>
					<img
						src={product.thumbnail}
						alt={product.altThumbnail}
					/>
			</Link>

			<div className={statusClass}>
				<div className={styles.containerName}>
					<h2 className={styles.title}>{product.title}</h2>
					<p className={styles.text}>{product.smallText}</p>
				</div>
				<Link to={productImported ? `/product/imported-${slug}` : `/product/internal-${slug}`} className={styles.containerBtn}>
					<span>
						<LiaEyeSolid className={styles.icon} />
						Ver Produto
					</span>
				</Link>
			</div>
		</div>
	);
};

export default CardSearch;
