import {AiOutlineHeart, AiFillStar} from "react-icons/ai"
import {TbCurrencyRupee} from "react-icons/tb"

import "./index.css"

const PlanTrip = () => (
    <div className="all-trip-container">
        <h1 className="trip-heading">Plan a trip with help from local Hosts around the world</h1>
        <div className="all-trip-card-container">
        <div className="trip-card-container">
            <div className="image-container">
                <AiOutlineHeart className="heart-logo"/>
            </div>
            <div className="rating-container">
                <AiFillStar className="star"/>
                <p>4.99 <span>(153).United states</span></p>
            </div>
            <p>Plan The Perfect New York Vacation</p>
            <div className="price-container">
                <p className="amount">From</p>
                <TbCurrencyRupee className="currency-logo"/>
                <p><span className="amount">1,558</span>/person</p>
            </div>
        </div>
        <div className="trip-card-container">
            <div className="image-container1">
                <AiOutlineHeart className="heart-logo"/>
            </div>
            <div className="rating-container">
                <AiFillStar className="star"/>
                <p>5.0 <span>(19).Spain</span></p>
            </div>
            <p>Design your trip to Barcelona with Gemma</p>
            <div className="price-container">
                <p className="amount">From</p>
                <TbCurrencyRupee className="currency-logo"/>
                <p><span className="amount">3,102</span>/person</p>
            </div>
        </div>
        <div className="trip-card-container">
            <div className="image-container2">
                <AiOutlineHeart className="heart-logo"/>
            </div>
            <div className="rating-container">
                <AiFillStar className="star"/>
                <p>4.97 <span>(60).South Korea</span></p>
            </div>
            <p>Craft a custom trip to Korea with Jay</p>
            <div className="price-container">
                <p className="amount">From</p>
                <TbCurrencyRupee className="currency-logo"/>
                <p><span className="amount">3,504</span>/person</p>
            </div>
        </div>
        <div className="trip-card-container">
            <div className="image-container3">
                <AiOutlineHeart className="heart-logo"/>
            </div>
            <div className="rating-container">
                <AiFillStar className="star"/>
                <p>4.63 <span>(8).Mexico</span></p>
            </div>
            <p>Live Tulum like a local</p>
            <div className="price-container">
                <p className="amount">From</p>
                <TbCurrencyRupee className="currency-logo"/>
                <p><span className="amount">630</span>/person</p>
            </div>
        </div>
        <div className="trip-card-container">
            <div className="image-container4">
                <AiOutlineHeart className="heart-logo"/>
            </div>
            <div className="rating-container">
                <AiFillStar className="star"/>
                <p>4.75 <span>(12).United states</span></p>
            </div>
            <p>Plan a trip to amazing Austin</p>
            <div className="price-container">
                <p className="amount">From</p>
                <TbCurrencyRupee className="currency-logo"/>
                <p><span className="amount">2,050</span>/person</p>
            </div>
        </div>
        <div className="trip-card-container">
            <div className="image-container5">
                <AiOutlineHeart className="heart-logo"/>
            </div>
            <div className="rating-container">
                <AiFillStar className="star"/>
                <p>4.91 <span>(43).Italy</span></p>
            </div>
            <p>Create your Rome itinerary with Debora</p>
            <div className="price-container">
                <p className="amount">From</p>
                <TbCurrencyRupee className="currency-logo"/>
                <p><span className="amount">980</span>/person</p>
            </div>
        </div>
        <div className="trip-card-container">
            <div className="image-container6">
                <AiOutlineHeart className="heart-logo"/>
            </div>
            <div className="rating-container">
                <AiFillStar className="star"/>
                <p>5.0 <span>(16).Italy</span></p>
            </div>
            <p>Plan a Venice venture with Giulia</p>
            <div className="price-container">
                <p className="amount">From</p>
                <TbCurrencyRupee className="currency-logo"/>
                <p><span className="amount">2,449</span>/person</p>
            </div>
        </div>
        <div className="trip-card-container">
            <div className="image-container7">
                <AiOutlineHeart className="heart-logo"/>
            </div>
            <div className="rating-container">
                <AiFillStar className="star"/>
                <p>4.98 <span>(41).United states</span></p>
            </div>
            <p>Plan a Trip To Nashville With a Local Insider</p>
            <div className="price-container">
                <p className="amount">From</p>
                <TbCurrencyRupee className="currency-logo"/>
                <p><span className="amount">984</span>/person</p>
            </div>
        </div>
        <div className="trip-card-container">
            <div className="image-container8">
                <AiOutlineHeart className="heart-logo"/>
            </div>
            <div className="rating-container">
                <AiFillStar className="star"/>
                <p>5.0 <span>(4).United states</span></p>
            </div>
            <p>Plan The Perfect trip to sunny Miami</p>
            <div className="price-container">
                <p className="amount">From</p>
                <TbCurrencyRupee className="currency-logo"/>
                <p><span className="amount">1,722</span>/person</p>
            </div>
        </div>
        </div>
    </div>
)
export default PlanTrip