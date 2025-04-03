import styles from './search.module.scss'
import Cards from '../../data/DataProduct.json'
import { useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';

let heading = ''

const Search = () => {
  
  
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("q");
  
  const count = Cards.length
  const [src, setSrc] = useState(query);
  
    useEffect(() => {
      setSrc(query);
    }, [query]);

  if (count > 0) {
    const nounProduct = count > 1 ? 'Resultado' : 'Resultados'
    heading = `${count} ${nounProduct} encontrado para "${query}"`
  }

  return (
    <section className={styles.wrapper}>
      <h1>{heading}</h1>
      <div className={styles.container}>
        {Cards.map((card) => {
          return card.title.includes($)? 'sim' : ' não'
        })}
      </div>
    </section>
  )
}

export default Search
