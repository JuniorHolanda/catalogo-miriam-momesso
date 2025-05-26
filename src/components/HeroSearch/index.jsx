import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SearchBarDesktop.module.scss';
import { FaSearch } from 'react-icons/fa';
import category from '../../data/DataCardsCategory.json';

const HeroSearch = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);

    // Redireciona para a página de pesquisa passando o termo como query param
    if (value.trim() !== '') {
      navigate(`/search?q=${encodeURIComponent(value)}`);
    }
  };

  return (
    <section className={styles.searchBox}>
      <h1 className={styles.title}>Encontre seu produto ideal</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum rem molestiae dicta
        officiis veniam quam quisquam, sequi tenetur corrupti explicabo, doloribus eveniet, incidunt
        molestias odio unde veritatis magni vel. Veritatis?
      </p>
      <div className={styles.inpt}>
        <FaSearch className={styles.icon} />
        <label className={styles.containerSrc}>
          <input
            type="text"
            className={styles.btnSrc}
            value={search}
            onChange={handleSearch}
            placeholder="Pesquisar"
          ></input>
        </label>
      </div>
      <div className={styles.filterCategory}>
        {category.map((item) => (
          <button className={styles.btnCategory} key={item.id}>
            {item.category}
          </button>
        ))}
      </div>
      <img
        className={styles.geometricStar}
        src="https://res.cloudinary.com/dnr3wfqyy/image/upload/v1740193909/Star_1_bpvrk0.svg"
        alt="forma geométrica abstrata, semelhante a uma estrela"
      />
    </section>
  );
};

export default HeroSearch;
