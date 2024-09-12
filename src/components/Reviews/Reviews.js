import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Reviews.css'

function Reviews() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    return (
        <div className='reviews'>
            <div className="reviews-1">
                <Slider {...settings}>
                    {data.map((d) => (
                        <div key={d.name} className="reviews-2">
                            <div className='reviews-3'>
                                <img src={d.img} alt="hello" className="reviews-img" />
                            </div>

                            <div className="reviews-4">
                                <p className="reviews-p1">{d.name}</p>
                                <p className="reviews-p2">{d.review}</p>
                                <button className='reviews-button'>Read More</button>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

        </div>
    );
}

const data = [
    {
        name: `John Morgan`,
        img: `/images/image5.jpeg`,
        review: `The quality is excellent, and the service was great! I love the trendy styles and fast shipping. I’ll definitely shop here again..`
    },
    {
        name: `Ellie Anderson`,
        img: `/images/image2.jpeg`,
        review: `Affordable prices, great variety, and easy shopping experience. This is my new favorite store!,i would love to come again.`
    },
    {
        name: `Nia Adebayo`,
        img: `/images/image1.jpeg`,
        review: `The dress I ordered was stunning and beautiful! Perfect fit and fast delivery.I definitly loved that store and i would love to come again .`
    },
    {
        name: `Rigo Louie`,
        img: `/images/image3.jpeg`,
        review: `Stylish clothes and excellent customer service. I’ve had a great experience every time I’ve shopped here, i would love to come again.`
    },
    {
        name: `Mia Williams`,
        img: `/images/image4.jpeg`,
        review: `Unique styles and quick delivery! I’m so happy with my purchase and can’t wait to order more,i would love to come again.`
    },

];

export default Reviews;