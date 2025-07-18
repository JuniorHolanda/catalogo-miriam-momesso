import styles from './renderCategory.module.scss';
import { Link } from 'react-router-dom';
import { slugfyText } from '../../utils/slugfyText';

const RenderCategory = ({ listCategory, imported }) => {
	{
		return listCategory.map((item) => (
			<li key={item.id} className={styles.subMenuItem}>
				<Link
					to={imported ? `/imported/${slugfyText(item.category)}` : `/category/${slugfyText(item.category)}`}
					className={styles.linkSubMenu}
				>
					<div className={styles.containerImgSubMenu}>
						<img src={item.img} alt="" />
					</div>
					<p>{item.category}</p>
				</Link>
			</li>
		));
	}
};

export default RenderCategory;
