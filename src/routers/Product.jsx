import { useParams } from "react-router-dom"
import ProductSection from "../Pages/Product"

function Product() {
  const { id } = useParams();
  return (
    <ProductSection id={id}/>
  )
}

export default Product
