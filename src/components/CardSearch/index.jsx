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
		status1: product.like >= 0 && product.like < 10,
		status2: product.like >= 10 && product.like < 20,
		status3: product.like >= 20 && product.like < 50,
	});

	console.log(statusClass);
	return (
		<>
			<Link to={`/product/${slug}`} className={styles.cardItem}>
				<div className={styles.containerAnimation}>
					<span>{product.category}</span>
					<Lottie animationData={animation} autoplay={false} loop={false} className={styles.animation} />
				</div>
				<div className={styles.containerThunb}>
					<img src={product.thunbnail} alt={product.altThunbnail} />
				</div>

				<div className={styles.containerContent}>
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
