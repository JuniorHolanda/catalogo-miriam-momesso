import styles from './studioBrin.module.scss'
import { FaArrowUp } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { TfiArrowTopLeft } from "react-icons/tfi";
import { TfiArrowTopRight } from "react-icons/tfi";
import { FiArrowDownRight } from "react-icons/fi";
import { FiArrowDownLeft } from "react-icons/fi";
import { TfiArrow } from "react-icons/tfi";
import colors from '../../data/colorsNylon.json'

// função atende aos critérios de url da cloudnary, para outros padrõs reajuste esta função para obter os nomes das partes do produto

const StudioBrin = ({studioBrin, title, printing}) => {

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
]


function btnLogoPosition (position) {
  // return <button>{listArrows[0]}</button>

  listArrows.find((arrow) =>{
    console.log(position.arrow)
  })
}

;
function convertUrlInName (item) {
  const partsUrl = item.split('/');
  const lastPartUrl = partsUrl.pop();
  const namePartProduct = lastPartUrl.split('_')[0];

  return namePartProduct;
}


function mapDataToElements (data, create) {

  let namePartProduct = null;

  return data.map((item, index) => {

    if(!item.color){
      // filtra apenas url das imagens
      namePartProduct = convertUrlInName(item);
    }

    if(create === 'img'){
      return <img key={index} src={item} alt={`${namePartProduct} do produto ${title}`}/>
    } else if (create === 'btn') {
      return !item.color ?
        <button key={index}>{namePartProduct}</button> :
        <button key={index} style={{backgroundColor: item.color}}></button>
    }
  });
}

  return (
    <section className={styles.wrapper}>
      <div className={styles.controllPartProduct}>
        <FaArrowLeft className={styles.icon} />
        <div className={styles.containerBtn}>
          {mapDataToElements(studioBrin, 'btn')}
        </div>
        <FaArrowRight className={styles.icon} />
      </div>

      <div className={styles.studioBrin}>
        <div className={styles.productStudio}>
          {mapDataToElements(studioBrin, 'img')}
        </div>

        <div className={styles.colorControll}>
          <FaArrowUp className={styles.icon} />
          <div className={styles.containerColors}>
            {mapDataToElements(colors, 'btn')}
          </div>
          <FaArrowDown className={styles.icon} />
        </div>
      </div>

        <div>
          <div></div>
          <div>
            <FaArrowLeft className={styles.icon} />
            <div>
              {printing.map(position => btnLogoPosition(position))}
            </div>
            <FaArrowRight className={styles.icon} />
          </div>
        </div>
    </section>
  )
}

export default StudioBrin
