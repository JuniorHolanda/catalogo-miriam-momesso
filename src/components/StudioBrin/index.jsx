import styles from './studioBrin.module.scss'
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import colors from '../../data/colorsNylon.json'

const StudioBrin = ({studioBrin, title}) => {


  function mapDataToElements (data, create) {
    return data.map((item, index) => {
      if(create === 'img'){
        return <img key={index} src={item} alt={`uma parte recurtada de produto ${title}`}/>
      } else if (create === 'btn') {
        return <button key={index}>Principal</button>
      }
    });
  }
  
  return (
    <section className={styles.wrapper}>
      <div className={styles.controllPartProduct}>
        <FaArrowLeft className={styles.icon} />
        <div className={styles.containerBtn}>
          
        </div>
        <FaArrowRight className={styles.icon} />
      </div>

      <div className={styles.studioBrin}>
        <div className={styles.productStudio}>
          {mapDataToElements(studioBrin, 'img')}
        </div>
        <div className={styles.colorControll}>
          {colors.map((color, index) => {
            return <span key={index} style={{backgroundColor: color.color}}></span>
          })}
        </div>
      </div>
    </section>
  )
}

export default StudioBrin
