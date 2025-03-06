import styles from './studioBrin.module.scss'
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const StudioBrin = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.controllPartProduct}>
        <FaArrowLeft className={styles.icon} />
        <div className={styles.containerBtn}>
          <button>Principal</button>
          <button>Vivo</button>
          <button className={styles.active}>Debrum</button>
          <button>Alça</button>
          <button>Base</button>
          <button>Ziper</button>
          <button >Bolso</button>
        </div>
        <FaArrowRight className={styles.icon} />
      </div>

      <div className={styles.mainContent}>
        <div>
          <img src="" alt="" />
        </div>
        <div className={styles.colorControll}>
          <span className={styles.color}></span>
        </div>
      </div>
    </section>
  )
}

export default StudioBrin
