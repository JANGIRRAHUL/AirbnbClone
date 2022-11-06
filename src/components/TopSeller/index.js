import { Component } from "react";
import {v4 as uuidv4} from "uuid" 
import TopSellerCard from "../TopSellerCard";

import "./index.css"

const topSellerList = [
    {
        id: uuidv4(),
        imageUrl:"https://a0.muscache.com/im/pictures/lombard/MtTemplate-1610894-active_media/original/1a9f2a4a-e613-4dfe-b871-1a2ec4841f04.jpg?im_w=1440",
        rating:"4.98(3,327).",
        country:"Italy",
        title:"Pasta with the Grandmas",
        rate:"2,694"
    },
    {
        id: uuidv4(),
        imageUrl:"https://a0.muscache.com/im/pictures/lombard/MtTemplate-1718920-media_library/original/ca228931-6da0-4f13-96ec-a4079eaeb6c1.jpg?im_w=1200",
        rating:"4.91(2,596).",
        country:"Spain",
        title:"'No Spain no Game' The Fabulous Game",
        rate:"1,307"
    },
    {
        id: uuidv4(),
        imageUrl:"https://a0.muscache.com/im/pictures/5fbe285c-6649-4215-a4d3-d4972bd75b7b.jpg?im_w=1440",
        rating:"4.97(488).",
        country:"Japan",
        title:"Origami and the Essence of Japan",
        rate:"671"
    },
    {
        id: uuidv4(),
        imageUrl:"https://a0.muscache.com/im/pictures/lombard/MtTemplate-2340325-media_library/original/599c584e-f401-4f67-958a-18277ee7dd10.png?im_w=1200",
        rating:"4.86 (594).",
        country:"Poland",
        title:"Murder Mystery Escape Room Game-Perfect for Halloween",
        rate:"1,306"
    },
    {
        id: uuidv4(),
        imageUrl:"https://a0.muscache.com/im/pictures/lombard/MtTemplate-1671726-media_library/original/b46e34b1-a167-446d-b0b7-b54be0739f8b.jpg?im_w=1440",
        rating:"4.90(2,603).",
        country:"United states",
        title:"Living Room Legends Scavenger Hunt",
        rate:"1,246"
    },
    {
        id: uuidv4(),
        imageUrl:"https://a0.muscache.com/im/pictures/lombard/MtTemplate-2422459-media_library/original/8262d6c7-f0dc-45f0-9610-53f6577cc380.jpeg?im_w=1200",
        rating:"4.82(120).",
        country:"France",
        title:"'From Paris with Laughs' The Scavenger Hunt",
        rate:"1,143"
    },
    {
        id: uuidv4(),
        imageUrl:"https://a0.muscache.com/im/pictures/lombard/MtTemplate-1827402-active_media/original/55396422-e250-4c4d-bbdc-935c96aa7649.jpg?im_w=1440",
        rating:"4.93(1,102).",
        country:"Indonesia",
        title:"Haunted Mansion Escape Room Mystery Game",
        rate:"1,437"
    },
    {
        id: uuidv4(),
        imageUrl:"https://a0.muscache.com/im/pictures/lombard/MtTemplate-2354288-media_library/original/3d92794b-734b-4505-96e0-119534c2db62.jpeg?im_w=1440",
        rating:"4.99(208).",
        country:"United states",
        title:"Drink and Draw, blind contour art fun",
        rate:"2,132"
    }
]

class TopSeller extends Component {
    render(){
        return(
            <div className="top-seller-container">
                <h2 className="top-seller-heading">Top sellers</h2>
                <ul className="unordered-list">
                    {topSellerList.map(eachCard => (<TopSellerCard cardDetails={eachCard} key={eachCard.id}/>))}
                </ul>
            </div>
        )
    }
}
export default TopSeller