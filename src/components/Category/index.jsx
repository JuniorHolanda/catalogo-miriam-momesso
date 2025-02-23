import styles from './category.module.scss';
import dataCards from '../../data/DataCardsCategory.json'
import CardCategory from './Card'

const Category = () => {

  return (
    <nav className={styles.containerCard}>
      {dataCards.map((card) =>(
        <CardCategory key={card.id} {...card}/>
      ))}
    </nav>
  )
}

export default Category
