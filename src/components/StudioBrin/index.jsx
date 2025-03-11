import styles from './studioBrin.module.scss'
import { FaArrowUp, FaArrowRight, FaArrowDown, FaArrowLeft } from "react-icons/fa";
import colors from '../../data/colorsNylon.json';
import InputLogo from './controllers/inputLogo';
import MapDataToElements from './controllers/mapStudioBrin/Index';

const StudioBrin = ({studioBrin, title, printing}) => {

  return (
    <section className={styles.wrapper}>
      <div className={styles.controllPartProduct}>
        <FaArrowLeft className={styles.icon} />
        <div className={styles.containerBtn}>
          {MapDataToElements(studioBrin, 'btn')}
        </div>
        <FaArrowRight className={styles.icon} />
      </div>

      <div className={styles.studioBrin}>
        <div className={styles.productStudio}>
          {MapDataToElements(studioBrin, 'img', title)}
        </div>

        <div className={styles.colorControll}>
          <FaArrowUp className={styles.icon} />
          <div className={styles.containerColors}>
            {MapDataToElements(colors, 'btn')}
          </div>
          <FaArrowDown className={styles.icon} />
        </div>
      </div>

      <InputLogo printing={printing} />
    </section>
  );
}

export default StudioBrin;
