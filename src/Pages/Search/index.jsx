import styles from './search.module.scss'
import Cards from '../../data/DataProduct.json'
import { useLocation } from "react-router-dom";
import CardSearch from '../../components/CardSearch';
import HeaderSection from '../../components/HeaderSection';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Search = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const rawQuery = searchParams.get("q") || ''; // sempre vai ser string
  const query = rawQuery.trim().toLowerCase(); // remove espaços e deixa minúsculo

  // Se a busca estiver vazia, não renderiza nada
  if (query === "") return null;

  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get('https://back-end-catalogo-miriam-momesso.onrender.com/product');
        setProducts(response.data); // ajuste aqui dependendo do formato que a API retorna
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    }

    fetchProducts();
  }, []);

  const filteredCards = products.filter(card => 
    card.title.toLowerCase().includes(query)
  );

  const count = filteredCards.length;
  const nounProduct = count === 1 ? 'Resultado' : 'Resultados';
  const heading = `${count} ${nounProduct} encontrado${count === 1 ? '' : 's'} para "${rawQuery}"`;

  return (
    <section className={styles.wrapper}>
      <HeaderSection id={"Pesquisa"}/>
      <h2>{heading}</h2>
      <div className={styles.container}>
        {filteredCards.map((card) => (
            <CardSearch key={card.id} product={card} />
        ))}
      </div>
    </section>
  );
};

export default Search;
