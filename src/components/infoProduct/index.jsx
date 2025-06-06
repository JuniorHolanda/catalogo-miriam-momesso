import styles from './infoProduct.module.scss';
import { FaArrowUp, FaArrowRight, FaArrowDown, FaArrowLeft } from 'react-icons/fa';
import MediaQuery from '../../utils/MediaQuery/MediaQuery';

const InfoProduct = ({ name, category, measure, text }) => {
	const isMobile = MediaQuery('(max-width: 400px)');

	console.log(category);
	return (
		<section className={styles.wrapper}>
			<div className={styles.containerTitle}>
				<h2 className={styles.title}>{name}</h2>
			</div>

			<div className={styles.containercategory}>
				{category.map((item) => (
					<h2 key={item}>{item}</h2>
				))}
			</div>

			<div className={styles.containerTitleMeasure}>
				<h2>{measure >= 1 ? 'Medidas' : 'Medida'}</h2>
			</div>

			<div className={styles.containerMeasure}>
				{isMobile && (
					<div className={styles.containerIcon}>
						<button className={styles.btnIcon}>
							<FaArrowLeft />
						</button>
					</div>
				)}

				<div className={styles.containerBtn}>
					{measure.map((item) => (
						<span key={item}>{item}</span>
					))}
				</div>

				{isMobile && (
					<div className={styles.containerIcon}>
						<button className={styles.btnIcon}>
							<FaArrowRight />
						</button>
					</div>
				)}
			</div>
			<div className={styles.containerText}>
				<p>{text}</p>
			</div>
		</section>
	);
};

export default InfoProduct;
