import styles from './cardSearch.module.scss';
import { LiaEyeSolid } from 'react-icons/lia';
import { Link } from 'react-router-dom';
import slugify from 'slugify';
import Lottie from 'lottie-react';
import animation from './Animation - 1748197599976.json';
import cn from 'classnames';
import { useEffect, useRef, useState } from 'react';

const CardSearch = ({ product }) => {
	const slug = slugify(product.title, { lower: true, strict: true });
	const animationRef = useRef();

	const [like, setLike] = useState(() => {
		const storedLike = localStorage.getItem(`like${product._id}`);
		return storedLike === 'true'; // converte para booleano
	});

	useEffect(() => {
		if (like) {
			animationRef.current?.play();
		}
	}, []);

	// animação do btn like
	const handleLike = () => {
		const current = !like;
		setLike(current);
		// Se já está rodando, pode parar ou reiniciar:
		if (current) {
			animationRef.current?.play();
			localStorage.setItem(`like${product._id}`, 'true');
		} else {
			animationRef.current?.stop();
			localStorage.removeItem(`like${product._id}`);
		}
	};

	//define a classe do cartão combase na quantidade de like
	const statusClass = cn(styles.containerContent, {
		[styles.status1]: product.like >= 0 && product.like < 5,
		[styles.status2]: product.like >= 5 && product.like < 10,
		[styles.status3]: product.like >= 10 && product.like < 20,
	});

	return (
		<>
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
					<Lottie
						lottieRef={animationRef}
						autoplay={false}
						animationData={animation}
						loop={false}
						className={styles.animation}
						onClick={handleLike}
					/>
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
		</>
	);
};

export default CardSearch;
