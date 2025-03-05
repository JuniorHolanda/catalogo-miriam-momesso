import styles from './cardProduct.module.scss';
import cards from '../../data/DataProduct.json'
import { LiaEyeSolid } from "react-icons/lia";

const CardProduct = ({filter}) => {
  const filterCard = cards.filter( card => card.category === filter);
  
  return (
    <div className={styles.containerCard}>
      {filterCard.map((card) => (
        <div key={card.id} className={styles.cardItem}>

          <div className={styles.containerThunb}>
            <img src={card.thunbnail} alt={card.altThunbnail} />
          </div>

          <div className={styles.containerName}>
            <h2>{card.title}</h2>
            <p>{card.smallText}</p>
          </div>

          <div className={styles.containerBtn}>
            <button>
              <LiaEyeSolid className={styles.icon} />
              Ver
            </button>
          </div>
        </div>
      ))}
    </div> 
  )
}
export default CardProduct




// mongodb+srv://mkt:<db_password>@cluster0.b2bu1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

