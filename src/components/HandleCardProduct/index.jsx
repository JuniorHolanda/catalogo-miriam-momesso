import styles from './cardProduct.module.scss';
import cards from '../../data/DataProduct.json'
import { LiaEyeSolid } from "react-icons/lia";
import { Link } from 'react-router-dom';

const CardProduct = ({filter}) => {
  const filterCard = cards.filter( card => card.category === filter);
  return (
    <div className={styles.containerCard}>
      {filterCard.map((card) => (
        <Link key={card.id}  to={`/product/${card.id}`} className={styles.cardItem}>
          <div className={styles.containerThunb}>
            <img src={card.thunbnail} alt={card.altThunbnail} />
          </div>
          <div className={styles.containerName}>
            <h2>{card.title}</h2>
            <p>{card.smallText}</p>
          </div>
          <div className={styles.containerBtn}>
            <span>
              <LiaEyeSolid className={styles.icon} />
              Ver
            </span>
          </div>
        </Link>
      ))}
    </div>
  )
}
export default CardProduct