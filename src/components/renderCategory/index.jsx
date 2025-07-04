import styles from './renderCategory.module.scss';
import slugify from 'slugify';
import { Link } from 'react-router-dom';

const RenderCategory = ({listCategory}) => {
    {
        return listCategory.map((item) => (
            <li key={item.id} className={styles.subMenuItem}>
				<Link
					to={`/category/${slugify(item.category, {
						lower: true,
						strict: true,
						trim: true,
					})}`}
					className={styles.linkSubMenu}
				>
					<div className={styles.containerImgSubMenu}>
						<img src={item.img} alt="" />
					</div>
					<p>{item.category}</p>
				</Link>
			</li>
        ))
    }
}

export default RenderCategory;