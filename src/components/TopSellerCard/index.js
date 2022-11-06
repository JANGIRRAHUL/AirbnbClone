import { AiFillStar} from "react-icons/ai"
import {TbCurrencyRupee} from "react-icons/tb"

import "./index.css"

const TopSellerCard = props => {
    const {cardDetails} = props
    console.log(cardDetails)
    return(
        <li className="list-items">
            <div>
                <img src={cardDetails.imageUrl} alt="card" className="image"/>
                {/* <AiOutlineHeart className="heart-logo"/> */}
            </div>
            <div className="rating-container">
                <AiFillStar className="star"/>
                <p>{cardDetails.rating}<span>{cardDetails.country}</span></p>
            </div>
            <p>{cardDetails.title}</p>
            <div className="price-container">
                <p className="amount">From</p>
                <TbCurrencyRupee className="currency-logo"/>
                <p><span className="amount">{cardDetails.rate}</span>/person</p>
            </div>
        </li>
    )
}
export default TopSellerCard