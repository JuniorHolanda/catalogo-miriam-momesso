import CardProduct from '../../components/HandleCardProduct'
import styles from './search.module.scss'
import Cards from '../../data/DataProduct.json'
import { useLocation } from "react-router-dom";
import { useState } from 'react';

let heading = ''

const Search = () => {

  const [src, setSrc] = useState('');

  
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("q");

  const count = Cards.length

  if (count > 0) {
    const nounProduct = count > 1 ? 'Resultado' : 'Resultados'
    heading = `${count} ${nounProduct} encontrado para "${query}"`
  }


  return (
    <section className={styles.wrapper}>
      <h1>{heading}</h1>
      <div className={styles.container}>

      </div>
    </section>
  )
}

export default Search
