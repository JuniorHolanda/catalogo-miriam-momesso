import styles from './inputLogo.module.scss'

import { FaArrowUp } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { TfiArrowTopLeft } from "react-icons/tfi";
import { TfiArrowTopRight } from "react-icons/tfi";
import { FiArrowDownRight } from "react-icons/fi";
import { FiArrowDownLeft } from "react-icons/fi";
import { TfiArrow } from "react-icons/tfi";
import { FaFileUpload } from "react-icons/fa";


const InputLogo = ({printing}) => {

  const listArrows = [
    <TfiArrowTopLeft data-type='northwest'/>,
    <TfiArrowTopRight data-type='northeast'/>,
    <FiArrowDownRight data-type='southwest'/>,
    <FiArrowDownLeft data-type='southeast'/>,
    <FaArrowUp data-type='up'/>,
    <FaArrowRight data-type='right'/>,
    <FaArrowDown data-type='botton'/>,
    <FaArrowLeft data-type='left'/>,
    <TfiArrow data-type='center'/>
  ];

  function btnLogoPosition (position, index) {
    const filteredArrow = listArrows.find(arrow => position.arrow === arrow.props["data-type"]);
    return filteredArrow ? <button>{filteredArrow}</button> : null;
  }

  return (
    <div className={styles.logoControll}>
      <div>
        <label htmlFor="inputLogo">
          <FaFileUpload />
        </label>
        <input type="file" id='inputLogo' />
      </div>
      <div>
        <FaArrowLeft className={styles.icon} />
        <div>
          {printing.map(position => btnLogoPosition(position))}
        </div>
        <FaArrowRight className={styles.icon} />
      </div>
    </div>
  )
}

export default InputLogo
