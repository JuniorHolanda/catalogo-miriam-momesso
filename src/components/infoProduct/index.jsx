import styles from './infoProduct.module.scss';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import MediaQuery from '../../utils/MediaQuery/MediaQuery';
import likeAnimation from './Animation - 1748197599976.json'
import Lottie from 'lottie-react';
import { TfiDropbox } from 'react-icons/tfi';

const InfoProduct = ({ name, category, measure, text }) => {
	const isMobile = MediaQuery('(max-width: 400px)');

	console.log(category);
	return (
		<section className={styles.wrapper}>
			<div className={styles.containerCatgory}>
				{category.map((item) => (
					<h2 key={item}>{item}</h2>
				))}
			</div>

			<div className={styles.containerToolBar}>
				<button className={styles.btnKit}>
					<TfiDropbox className={styles.icon}/>
					Montar Kit
				</button>
				<button className={styles.btnLike}>
					<Lottie animationData={likeAnimation} />
				</button>
			</div>

			<div className={styles.containerInfo}>
				<h2 className={styles.title}>{name}</h2>
				<h2>{measure >= 1 ? 'Medidas' : 'Medida'}</h2>
				<div className={styles.containerBtn}>
					{measure.map((item) => (
						<span key={item}>{item}</span>
					))}
				</div>
				<div className={styles.containerText}>
					<p>{text}</p>
				</div>
			</div>

				<div className={styles.containerMeasure}>
					{isMobile && (
						<div className={styles.containerIcon}>
							<button className={styles.btnIcon}>
								<FaArrowLeft />
							</button>
						</div>
					)}

					{isMobile && (
						<div className={styles.containerIcon}>
							<button className={styles.btnIcon}>
								<FaArrowRight />
							</button>
						</div>
					)}
				</div>
		</section>
	);
};

export default InfoProduct;
