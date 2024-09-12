import React from 'react'
import './BreadCrumps.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'
const BreadCrumps = (props) => {
    const { product } = props;

    return (
        <div className='BreadCrumps'>
            HOME  <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {product.category}  <img src={arrow_icon} alt="" /> {product.name}

        </div>
    )
}

export default BreadCrumps