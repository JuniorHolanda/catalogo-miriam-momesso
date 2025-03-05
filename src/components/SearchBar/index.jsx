import { useState } from 'react';
import styles from './search-bar.module.scss';
import { CiSearch } from "react-icons/ci";
import { PiSunBold } from "react-icons/pi";
import { FaMoon } from "react-icons/fa";
const SearchBar = () => {

   const [valueInput, setValueInput] = useState('')
    const [changeTheme, setChangeTheme] = useState(true);
  
    const showValueInput = (event) =>{
      setValueInput(event.target.value);
    }
  
    function btnTheme() {
      setChangeTheme(!changeTheme);
    }
  

  return (
    <label>
      <div className={styles.containerSrc}>
      <CiSearch className={styles.active}/>
      <input className={styles.inputSrc}
        type='text'
        value={valueInput}
        onChange={showValueInput}
        placeholder='Pesquisar'  
      />
      </div>
      <div className={styles.containerTheme}>
        <PiSunBold className={styles.iconsTheme} />
        <input
          className={styles.inputTheme}
          type='checkbox'
          onChange={btnTheme}
        />
        <FaMoon className={styles.iconsTheme} />
      </div>
    </label>
  );
}

export default SearchBar;
