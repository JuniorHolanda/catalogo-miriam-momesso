import styles from './renderCategory.module.scss';
import { Link, useParams } from 'react-router-dom';
import { slugfyText } from '../../utils/slugfyText';


const RenderCategory = ({ listCategory, isImported, isNav }) => {
		const { imported, category } = useParams();
		const params = imported || category;

	return listCategory.map((item, index) => (
		<li
			key={`${item._id}-${index}`}
			className={`${styles.subMenuItem} ${!isNav &&  slugfyText(item.category) === slugfyText(params) ? styles.subMenuItemActive : '' }`}
		>
			<Link to={isImported ? `/imported/${slugfyText(item.category)}` : `/category/${slugfyText(item.category)}`}
			className={styles.linkSubMenu}>
				<div className={styles.containerImgSubMenu}>
					<img src={item.img} alt={item.altImg} />
				</div>
				<p>{item.category}</p>
			</Link>
		</li>
	));
};

export default RenderCategory;
