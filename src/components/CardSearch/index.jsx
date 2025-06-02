import styles from './cardSearch.module.scss';
import { LiaEyeSolid } from 'react-icons/lia';
import { Link } from 'react-router-dom';
import slugify from 'slugify';
import Lottie from 'lottie-react';
import animation from './Animation - 1748197599976.json';
import cn from 'classnames';
import { useEffect, useRef, useState } from 'react';
import {
	deleteSotorage,
	getSotorage,
	setSotorage,
} from '../../utils/MediaQuery/localStorage/localSorage';

const CardSearch = ({ product }) => {
	const slug = slugify(product.title, { lower: true, strict: true });
	const animationRef = useRef();

	const [like, setLike] = useState(() => {
		const storedLike = localStorage.getItem(`like${product._id}`);
		return storedLike === 'true'; // converte para booleano
	});

	const handleLike = () => {
		const current = !like;

		setLike(current);

		// Se já está rodando, pode parar ou reiniciar:
		if (current) {
			animationRef.current?.play();
			console.log('criando valor na localStorage', setSotorage(product._id, current));
		} else {
			animationRef.current?.stop();
			console.log('removendo dados da localStorage', deleteSotorage(product._id));
		}
	};

	useEffect(() => {
		if (!product._id) return; // segurança contra undefined/null

		const valor = getSotorage(product._id);
	}, [product._id]);

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
							return <span className={styles.categoryCard}>{item}</span>;
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
					<Link to={`/product/${slug}`} className={styles.containerBtn}>
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
