import { useState, useEffect } from "react";
import convertUrlInName from "../handleNameToUrl/converUrlInName";

function MapDataToElements (data, create, title) {

  let namePartProduct = null;

  // cria classes dinâmicas, baseadas na cor selecionada
  const [colorProduct, setColorProduct] = useState('a');

  return data.map((item, index,) => {

    if(!item.color){
      // filtra apenas url das imagens
      namePartProduct = convertUrlInName(item);
    }

    if(create === 'img'){
      return (
        <img key={index} src={item} alt={`${namePartProduct} do produto ${title}`}/>
      );
    }else if (create === 'btn') {
      return !item.color ?
      <button key={index}>{namePartProduct}</button> :
      <button onClick={() => ChangeColorProduct(item.name)} key={index} style={{backgroundColor: item.color}}></button>
    }
  });
}

export default MapDataToElements;