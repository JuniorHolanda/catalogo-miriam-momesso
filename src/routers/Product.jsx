import { useParams } from "react-router-dom"
import ProductSection from "../Pages/Product"

function Product() {
  const { product } = useParams();
  return (
    <ProductSection id={product}/>
  )
}

export default Product
