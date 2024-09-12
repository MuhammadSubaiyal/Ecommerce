import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'


import './hero.css';
const Hero = () => {
    return (
        <div className="main">
            <div className="main-left">
                <h3 className='new_arrival'>NEW ARRIVALS ONLY</h3>
                <div className="main-new">
                    <p>new</p>
                    <img src={hand_icon} alt="" />
                </div>
                <p>collections </p>
                <p>for everyone </p>
                <div className="main-left-btn">
                    <button>Latest Collection</button>
                    <img src={arrow_icon} alt="" />
                </div>
            </div>
            <div className="main-right">
                <img src={hero_image} alt="" />
            </div>
        </div>
    )
}

export default Hero