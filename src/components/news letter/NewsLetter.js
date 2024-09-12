import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
    return (
        <div className='news-letter'>
            <h1>Get Exclusive Offers On Your Email</h1>
            <p>Subscribe To Our Newsletter And Stay  Updated</p>
<form action="">
    <input type="email" name="email" placeholder="Enter Your Email"/>
    <button type="submit">Subscribe</button>
</form>
        </div>
    )
}

export default NewsLetter