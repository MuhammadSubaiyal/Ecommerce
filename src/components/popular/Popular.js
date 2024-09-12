import './Popular.css'
import data_product from '../Assets/data'
import Item from '../item/Item'
const Popular = () => {
    return (
        <div className='popular'>
            <h1>POPULAR IN WOMEN</h1>
            <hr />
            <div className="popular-item">
                {data_product.map((item, i) => {
                    return <Item key={i} name={item.name} image={item.image} id={item.id} new_price={item.new_price} old_price={item.old_price}/>
                })}
            </div>
        </div>
    )
}

export default Popular