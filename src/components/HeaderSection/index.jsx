import styles from './headerSection.module.scss'
import { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { PiSunBold } from "react-icons/pi";
import { FaMoon } from "react-icons/fa";

const HeaderSection = ({title}) =>{

  const [valueInput, setValueInput] = useState('')
  const [changeTheme, setChangeTheme] = useState(true)

  const showValueInput = (event) =>{
    setValueInput(event.target.value)
  }

  function btnTheme() {
    setChangeTheme(!changeTheme)
    console.log(changeTheme);
  }

  return (
    <>
    <header className={styles.headerSection}>
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

      <div className={styles.titleContainer}>
        <img src="img/logo-momesso-brindes.png" alt="logo da empresa Momesso Brindes" />
        <h1>{title}</h1>
      </div>
    </header>
    </>
  );
}

export default HeaderSection;