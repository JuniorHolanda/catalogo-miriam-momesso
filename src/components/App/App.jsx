import { useState } from 'react';
import HeaderSection from '../HeaderSection';
import styles from './app.module.scss'
import { CiSearch } from "react-icons/ci";
import { PiSunBold } from "react-icons/pi";
import { FaMoon } from "react-icons/fa";

function App() {
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
    <header className={styles.headerSection}>
      <nav>
        <label>
          <div className={styles.containerSrc}>
          <CiSearch className={styles.icon}/>
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
        <HeaderSection title='Catálogo'/>
      </nav>
    </header>
  )
}

export default App
