import { useContext } from 'react'
import './CSS/ShopCategory.css'
import dropdown_icon from '../components/Assets/dropdown_icon.png'
import { ShopContext } from '../components/Context/ShopContext'
import Item from '../components/item/Item'
const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext)
  return (
    <div className="ShopCategory">
      <img className='ShopCategory-banner' src={props.banner} alt="" />
      <div className="ShopCategory-indexSort">
        <p>
          <span>Showing 1-12</span>Out of 36 Products
        </p>
        <div className="ShopCategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="ShopCategory-products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return <Item key={i} name={item.name} image={item.image} id={item.id} new_price={item.new_price} old_price={item.old_price} />

          }
          else {
            return null;
          }
        })}
      </div>
      <div className="ShopCategory-load">
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory