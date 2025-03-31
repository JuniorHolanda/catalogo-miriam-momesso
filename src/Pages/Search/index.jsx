import CardProduct from '../../components/HandleCardProduct'
import styles from './search.module.scss'
import Cards from '../../data/DataProduct.json'

const Search = () => {

  let heading = 'Nenhum vídeo encontrado'

  const count = Cards.length
  console.log((count));
  
  if (count > 0) {
    const nounProduct = count > 1 ? 'vídeos' : 'vídeo'
    heading = `${count} ${nounProduct}`
  }


  return (
    <>
    <h1>{heading}</h1>
      <section className={styles.container}>
        {Cards.map((card) => <CardProduct key={card.id} filter={card.category}/>)}
      </section>
    </>
  )
}

export default Search
