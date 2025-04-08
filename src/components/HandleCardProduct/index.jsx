import styles from './cardProduct.module.scss';
import cards from '../../data/DataProduct.json';
import { LiaEyeSolid } from "react-icons/lia";
import { Link } from 'react-router-dom';
import DinamicMetaTag from '../DinamicMetaTags';

const CardProduct = ({category}) => {
  
  let filterCard = category;

  filterCard = cards.filter(card => card.category === category);  

  return(
    <>
      {filterCard.map((card) => (
        <Link key={card.id}  to={`/product/${card.id}`} className={styles.cardItem}>

          
          {/* Meta Tags Dinâmicas */}
          <DinamicMetaTag
            title={card.title}
            description={card.text}
            imageUrl={card.thunbnail}
          />



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
    </>
  );
}
export default CardProduct