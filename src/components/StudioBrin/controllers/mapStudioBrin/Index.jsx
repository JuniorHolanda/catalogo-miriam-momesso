import { useState, useEffect } from "react";
import convertUrlInName from "../handleNameToUrl/converUrlInName";
// import styles from '../../colors.module.scss'

function MapDataToElements (data, create, title) {

  let namePartProduct = null;

  // cria classes dinâmicas, baseadas na cor selecionada
  const [colorProduct, setColorProduct] = useState('ffffff');

  function changeColor (hexColor) {
    setColorProduct(hexColor);
  }

  return data.map((item, index,) => {

    if(!item.color){
      // filtra apenas url das imagens
      namePartProduct = convertUrlInName(item);
    }

    if(create === 'img'){
      return (
        <img
          key={`img-${index}`}
          src={item}
          alt={`${namePartProduct} do produto ${title}`}
        />
      );
    }else if (create === 'btn') {
      return !item.color ?
      <button key={`btn-${index}`}>{namePartProduct}</button> :
      <button
        onClick={() => changeColor(item.color)}
        key={`btn-${index}-${item.color}`}
        style={{backgroundColor: item.color}}>
      </button>
    }
  });
}

export default MapDataToElements;