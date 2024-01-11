import reviewStyles from './reviews.css'

import reviewBg from '../../assets/img/reviews/review-bg.svg'
import ReviewSlider from '../reviewSwiper/ReviewSlider';

const Review = () => {
    return ( 
        <section className="reviews">
            <div className="container">
                <div className="reviews__body d-flex a-items j-cont">
                    <img className='review__bg' src={reviewBg} alt="reviewBg" />
                    <div className="reviews__textside">
                        <h3>
                        What Our Happy <br />
                        Clients Say
                        </h3>
                        <p>Reviews by ours clients</p>
                    </div>
                    <div className="review__slider">
                        <ReviewSlider />
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Review;