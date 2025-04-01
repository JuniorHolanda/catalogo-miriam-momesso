import CardProduct from '../../components/HandleCardProduct'
import styles from './search.module.scss'
import Cards from '../../data/DataProduct.json'

let heading = 'Nenhum produto encontrado'

const Search = () => {

  const count = Cards.length

  if (count > 0) {
    const nounProduct = count > 1 ? 'produto' : 'produtos'
    heading = `${count} ${nounProduct}`
  }


  return (
    <section className={styles.wrapper}>
      <h1>{heading}</h1>
      <div className={styles.container}>
        {Cards.map((card) => <CardProduct key={card.id} product={'necessaire'}/>)}
      </div>
    </section>
  )
}

export default Search
