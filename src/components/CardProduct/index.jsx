import styles from './cardProduct.module.scss';
import cards from '../../data/DataProduct.json'
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { useEffect, useState } from 'react';
import { RiMedal2Fill } from "react-icons/ri";
import { LiaEyeSolid } from "react-icons/lia";

const CardProduct = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('roda a cada')
  }, [count])

  
  return (


    <nav className={styles.containerCard}>
      {cards.map((card) => (
        <div key={card.id} className={styles.cardItem}>
          {count >= 10 &&
            <div className={styles.containerTop50}>
              <p>10+</p>
            </div>
          }

          {count >= 10 && <span></span>}

          <div className={styles.containerBtnLike}>
            <button onClick={() => setCount(prevCount => prevCount + 1) }>
              {count > 0 ? <FaHeart className={styles.icon} /> : <FaRegHeart className={styles.icon} />}
            </button>
            <p>{count}</p> 
          </div>

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
    </nav> 
  )
}

export default CardProduct

