import styles from './navbar.module.css'
import logo from "../Assets/logo.png"
import cart_icon from "../Assets/cart_icon.png"
import { useState } from 'react'
import { Link } from 'react-router-dom'
function Navbar() {

    const [select, setselect] = useState("shop")

    return (

        <div className={styles.navbar}>
            <Link to='/Shop'> <div className={styles.logo}>
                <img src={logo} alt="" />
                <p>Shopper</p>
            </div></Link>
            <ul className={styles.nav}>
                <li onClick={() => setselect("shop")}><Link style={{ textDecoration: 'none', color: '#626262' }} to='/'>Shop</Link> {select === "shop" ? <hr /> : <></>} </li>
                <li onClick={() => setselect("men")}><Link style={{ textDecoration: 'none', color: '#626262' }} to='/men'>Men</Link>    {select === "men" ? <hr /> : <></>}</li>
                <li onClick={() => setselect("women")}><Link style={{ textDecoration: 'none', color: '#626262' }} to='/women'>Women</Link> {select === "women" ? <hr /> : <></>}</li>
                <li onClick={() => setselect("kids")}><Link style={{ textDecoration: 'none', color: '#626262' }} to='/kids'>Kids</Link> {select === "kids" ? <hr /> : <></>}</li>
            </ul>
            <div className={styles.login}>
                <Link to='/login'> <button>Login</button></Link>
                <div className={styles.cart}>
                    <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                    <span className={styles.number}>0</span>
                </div>
            </div>

        </div>

    )
}

export default Navbar