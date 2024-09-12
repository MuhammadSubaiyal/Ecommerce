import './NewCollections.css'
import new_collection from '../Assets/new_collections'
import Item from '../item/Item'

const NewCollections = () => {
  return (
    <div className='new-collection'>
        <h1>NEW COLLECTION</h1>
        <hr />
        <div className='collection'>
            {new_collection.map((item,i)=> {
                return <Item key={i} name={item.name} image={item.image} id={item.id} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}

export default NewCollections