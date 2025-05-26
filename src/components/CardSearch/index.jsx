import styles from './cardSearch.module.scss';
import { LiaEyeSolid } from 'react-icons/lia';
import { Link } from 'react-router-dom';
import slugify from 'slugify';
import Lottie from 'lottie-react';
import animation from './Animation - 1748197599976.json';
import cn from 'classnames';

const CardSearch = ({ product }) => {
	const slug = slugify(product.title, { lower: true, strict: true });

	const statusClass = cn(styles.containerContent, {
		[styles.status1]: product.like >= 0 && product.like < 5,
		[styles.status2]: product.like >= 5 && product.like < 10,
		[styles.status3]: product.like >= 10 && product.like < 20,
	});

	return (
		<>
			<Link to={`/product/${slug}`} className={styles.cardItem}>
				<div className={styles.headerCard}>
					<div className={styles.containerCategoryCard}>
						{product.category.map((item) => {
							return <span className={styles.categoryCard}>{item}</span>;
						})}
					</div>
					<Lottie animationData={animation} autoplay={true} loop={true} className={styles.animation} />
				</div>
				<div className={styles.containerThunb}>
					<img src={product.thunbnail} alt={product.altThunbnail} />
				</div>

				<div className={statusClass}>
					<div className={styles.containerName}>
						<h2>{product.title}</h2>
						<p>{product.smallText}</p>
					</div>
					<div className={styles.containerBtn}>
						<span>
							<LiaEyeSolid className={styles.icon} />
							Ver Produto
						</span>
					</div>
				</div>
			</Link>
		</>
	);
};

export default CardSearch;
