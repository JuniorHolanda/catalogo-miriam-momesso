import styles from './infoProduct.module.scss';
import { FaArrowRight, FaArrowLeft, FaShareAlt } from 'react-icons/fa';
import MediaQuery from '../../utils/MediaQuery/MediaQuery';
import likeAnimation from './Animation - 1748197599976.json';
import Lottie from 'lottie-react';
import { TfiDropbox } from 'react-icons/tfi';
import BtnLike from '../btn/BtnLike';

const InfoProduct = ({ name, category, measure, text, id }) => {
	const isMobile = MediaQuery('(max-width: 700px)');

	return (
		<section className={styles.wrapper}>
			<div className={styles.containerCatgory}>
				{category.map((item) => (
					<h2 key={item}>{item}</h2>
				))}
			</div>

			<div className={styles.containerInfo}>
				<h2 className={styles.title}>{name}</h2>
				<div className={styles.containerMeasure}>
					<h2 className={styles.measure}>
						{measure >= 1 ? 'Medidas:' : 'Medida:'}
					</h2>
					<div className={styles.containerBtnMeasure}>
						{measure.map((item) => (
							<span className={styles.btnMeasure} key={item}>
								{item}
							</span>
						))}
					</div>
				</div>
				<div className={styles.containerText}>
					<p>{text}</p>
				</div>
				<div className={styles.containerCta}>
					<button className={styles.btnCta}>
						Solicitar Orçamento
					</button>
					<button className={styles.btnCta}>
						<FaShareAlt />
					</button>
					<button className={styles.btnCta}>
						{' '}
						<TfiDropbox className={styles.icon} />
					</button>
					<button className={styles.btnCta}>
						<BtnLike productId={id} />
					</button>
				</div>
			</div>
		</section>
	);
};

export default InfoProduct;
