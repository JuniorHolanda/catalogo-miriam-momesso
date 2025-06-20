import styles from './cardSearch.module.scss';
import { LiaEyeSolid } from 'react-icons/lia';
import { Link } from 'react-router-dom';
import slugify from 'slugify';
import cn from 'classnames';
import BtnLike from '../btn/BtnLike';

const CardSearch = ({ product }) => {
	const slug = slugify(product.title, { lower: true, strict: true });

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
					{product.category.map((item) => {
						return (
							<span className={styles.categoryCard}>
								{item}
							</span>
						);
					})}
				</div>
				<BtnLike productId={product._id} />
			</div>
			<div className={styles.containerThunb}>
				<img src={product.thunbnail} alt={product.altThunbnail} />
			</div>

			<div className={statusClass}>
				<div className={styles.containerName}>
					<h2>{product.title}</h2>
					<p>{product.smallText}</p>
				</div>
				<Link
					to={`/product/${slug}`}
					className={styles.containerBtn}
				>
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
