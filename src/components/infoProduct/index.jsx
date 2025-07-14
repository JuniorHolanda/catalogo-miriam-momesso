import styles from './infoProduct.module.scss';
import { FaArrowRight, FaArrowLeft, FaShareAlt } from 'react-icons/fa';
import MediaQuery from '../../utils/MediaQuery/MediaQuery';
import { TfiDropbox } from 'react-icons/tfi';
import animationLike from '../../animation/animation-like.json';
import animationFavorite from '../../animation/animation-favorite.json';
import animationKit from '../../animation/animation-kit.json';

import BtnInteractive from '../btn/btnInteractive';
const InfoProduct = ({ name, category, measure, text, id }) => {
const isMobile = MediaQuery('(max-width: 700px)');

const message = `Olá! Tenho interesse no produto: ${name}`;
const whatsappLink = `https://wa.me/5511974783545?text=${encodeURIComponent(message)}`;



	return (
		<section className={styles.wrapper}>
			<div className={styles.containerCatgory}>
				{category.map((item) => (
					<h2 key={item}>{item}</h2>
				))}
			</div>

			<div className={styles.containerBtnInteraction}>
				<button className={styles.btnInteraction}>
					<BtnInteractive
						productId={id}
						icon={animationLike}
						isLikeBtn={true}
						type={'like'}
						style={styles.animationBtn}
					/>
				</button>
				<button className={styles.btnInteraction}>
					<BtnInteractive
						productId={id}
						icon={animationFavorite}
						isLikeBtn={false}
						type={'favorite'}
						style={styles.animationBtn}
					/>
				</button>
				<button className={styles.btnInteraction}>
					<BtnInteractive
						productId={id}
						icon={animationKit}
						isLikeBtn={false}
						type={'kit'}
						style={styles.animationBtn}
					/>
				</button>
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
					<a href={whatsappLink} target='_blank' rel="noopener noreferrer" className={styles.btnCta}>
						Solicitar Orçamento
					</a>
					{/* <button className={styles.btnCta}>
						Compartilhar
						<FaShareAlt />
					</button> */}
				</div>
			</div>
		</section>
	);
};

export default InfoProduct;
