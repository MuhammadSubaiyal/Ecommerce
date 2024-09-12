import './Item.css'
import { Link } from 'react-router-dom'
const Item = (props) => {
    return (
        <div className="item">
            <div className="imghover">
                <Link to={`/product/${props.id}`}>
                    <img src={props.image} alt="" />
<button>Buy Now</button>
                </Link>
            </div>

            <p>{props.name}</p>
            <div className="item-price">
                <div className="new-price">
                    ${props.new_price}
                </div>
                <div className="old-price">{props.old_price}</div>
            </div>
        </div>
    )
}

export default Item