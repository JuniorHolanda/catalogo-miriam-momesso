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


import colors from '../../data/colorsNylon.json';
import InputLogo from './controllers/inputLogo';

const StudioBrin = ({studioBrin, title, printing}) => {

// função atende aos critérios de url da cloudnary, para outros padrõs reajuste esta função para obter os nomes das partes do produto
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

      <InputLogo printing={printing} />
    </section>
  );
}

export default StudioBrin;
