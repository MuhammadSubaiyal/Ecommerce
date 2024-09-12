import React, { useContext } from 'react'
import { ShopContext } from '../components/Context/ShopContext'
import { useParams } from 'react-router-dom'
import BreadCrumps from '../components/breadcrumps/BreadCrumps'
import ProductDisplay from '../components/productdisplay/ProductDisplay'
import Description from '../components/description/Description'


const Product = () => {
  const { all_product } = useContext(ShopContext)
  const { productId } = useParams()
  const product = all_product.find(item => item.id === Number(productId))
  return (
    <div>
      <BreadCrumps product={product} />
      <ProductDisplay product ={product}/>
      <Description/>
    </div>
  )
}

export default Product