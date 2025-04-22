import styles from './cardSearch.module.scss';
import { LiaEyeSolid } from "react-icons/lia";
import { Link } from 'react-router-dom';
import slugify from 'slugify';

const CardSearch = ({product}) => {
    const slug = slugify(product.title, { lower: true, strict: true });
    
    return(
        <>
            <Link to={`/product/${slug}`} className={styles.cardItem}>
                <div className={styles.containerThunb}>
                    <img src={product.thunbnail} alt={product.altThunbnail} />
                </div>

                <div className={styles.containerName}>
                    <h2>{product.title}</h2>
                    <p>{product.smallText}</p>
                </div>

                <div className={styles.containerBtn}>
                    <span>
                        <LiaEyeSolid className={styles.icon} />
                        Ver
                    </span>
                </div>
            </Link>
        </>
    );
}

export default CardSearch
