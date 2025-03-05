import styles from './category.module.scss';
import dataCards from '../../data/DataCardsCategory.json'
import CardCategory from './Card'

// cria o menu de navegação das categorias
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
