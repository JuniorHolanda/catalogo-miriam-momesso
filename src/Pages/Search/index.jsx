import styles from './search.module.scss'
import Cards from '../../data/DataProduct.json'
import { useLocation } from "react-router-dom";
import CardProduct from '../../components/HandleCardProduct';

const Search = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const rawQuery = searchParams.get("q") || ''; // sempre vai ser string
  const query = rawQuery.trim().toLowerCase(); // remove espaços e deixa minúsculo

  // Se a busca estiver vazia, não renderiza nada
  if (query === "") return null;

  const filteredCards = Cards.filter(card => 
    card.title.toLowerCase().includes(query)
  );

  console.log(query)

  const count = filteredCards.length;
  const nounProduct = count === 1 ? 'Resultado' : 'Resultados';
  const heading = `${count} ${nounProduct} encontrado${count === 1 ? '' : 's'} para "${rawQuery}"`;

  return (
    <section className={styles.wrapper}>
      <h1>{heading}</h1>
      <div className={styles.container}>
        {filteredCards.map((card) => (
          <div key={card.id}>
            <CardProduct category={card.category} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Search;
