import React from 'react'
import star_dull_icon from '../Assets/star_dull_icon.png'
import star_icon from '../Assets/star_icon.png'
import './ProductDisplay.css'

const ProductDisplay = (props) => {
    const { product } = props;
    return (
        <div className='ProductDisplay'>
            <div className="ProductDisplay-left">
                <div className="ProductDisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="ProductDisplay-img">
                    <img className='ProductDisplay-main-img' src={product.image} alt="" />
                </div>
            </div>
            <div className="ProductDisplay-right">
                <h1>{product.name}</h1>
                <div className="ProductDisplay-right-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className="ProductDisplay-right-prices">
                    <div className="ProductDisplay-right-prices-old">${product.old_price}</div>
                    <div className="ProductDisplay-right-prices-new">${product.new_price}</div>
                </div>
                <div className="ProductDisplay-right-description">
                    A sleek and stylish men's leather jacket, made from premium genuine leather. Featuring a slim-fit design, zip-up front, and multiple pockets, it offers a timeless, rugged look perfect for any occasion.
                </div>
                <button>Buy Now</button>
            </div>
        </div>
    )
}

export default ProductDisplay