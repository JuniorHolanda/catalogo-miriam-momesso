import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import styles from './search-bar.module.scss';
import { CiSearch } from "react-icons/ci";
import { PiSunBold } from "react-icons/pi";
import { FaMoon } from "react-icons/fa";



const SearchBar = () => {

  const [search , setSearch] = useState('');
  const navigate = useNavigate();




  
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);

    // Redireciona para a página de pesquisa passando o termo como query param
    if (value.trim() !== "") {
      navigate(`/search?q=${encodeURIComponent(value)}`);
    }
  };





  const [valueInput, setValueInput] = useState('')

  //atualiza o valor do input
  const showValueInput = (event) =>{
    setValueInput(event.target.value);
  }
  
  return (
    <div className={styles.wrapper}>
      <label className={styles.containerSrc}>
        <input
          type='text'
          className={styles.btnSrc}
          value={search}
          onChange={handleSearch}
          placeholder='Pesquisar'
          >
        </input>

      </label>













      {/* <label className={styles.containerTheme}>
        <PiSunBold className={styles.iconsTheme} />
        <input
          className={styles.inputTheme}
          type='checkbox'
        />
        <FaMoon className={styles.iconsTheme} />
      </label> */}
    </div>
  );
}

export default SearchBar;
