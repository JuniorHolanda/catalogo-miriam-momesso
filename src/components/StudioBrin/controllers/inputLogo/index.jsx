import styles from './inputLogo.module.scss'
import { FaArrowUp, FaArrowLeft, FaArrowDown, FaArrowRight, FaFileUpload } from "react-icons/fa"; // setas de navegação
import { GoArrowDown, GoArrowDownLeft, GoArrowDownRight, GoArrowLeft, GoArrowRight, GoArrowUp, GoArrowUpLeft, GoArrowUpRight, GoScreenFull } from 'react-icons/go';

const InputLogo = ({printing}) => {

  const listArrows = [
    <GoArrowUpLeft data-type='northwest'/>,
    <GoArrowUpRight data-type='northeast'/>,
    <GoArrowDownRight data-type='southwest'/>,
    <GoArrowDownLeft data-type='southeast'/>,
    <GoArrowUp data-type='up'/>,
    <GoArrowRight data-type='right'/>,
    <GoArrowDown data-type='botton'/>,
    <GoArrowLeft data-type='left'/>,
    <GoScreenFull data-type='center'/>
  ];

  function btnLogoPosition (position, index) {
    const filteredArrow = listArrows.find(arrow => position.arrow === arrow.props["data-type"]);
    return filteredArrow ? <button key={index}>{filteredArrow}</button> : null;
  }

  return (
    <div className={styles.logoControll}>
      <div className={styles.uploadLogo}>
        <label htmlFor="inputgLogo">
          <FaFileUpload className={styles.icon} />
        </label>
        <input type="file" id='inputLogo' />
      </div>
      <div className={styles.arrows}>
        <FaArrowLeft className={styles.icon} />
        <div className={styles.containerBtn}>
          {printing.map((position, index) => btnLogoPosition(position, index))}
        </div>
        <FaArrowRight className={styles.icon} />
      </div>
    </div>
  )
}

export default InputLogo
