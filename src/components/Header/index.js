import {MdOutlineLanguage} from "react-icons/md"
import {GoThreeBars} from "react-icons/go"
import {FaUserCircle} from "react-icons/fa"
import {IoIosArrowBack} from "react-icons/io"

import "./index.css"

const Header = () => (
    <div>
    <div className="heading-container">
        <div className="logo-container">
            <img src="https://res.cloudinary.com/dg4htpr73/image/upload/v1667671490/airbnb-2_w8djua.jpg" alt="logo" className="logo"/>
            <p className="name">airbnb</p>
        </div>
        <div className="host-container">
            <p className="become-host">Become a host</p>
            <MdOutlineLanguage className="language"/>
            <div className="user-container">
                <GoThreeBars className="navbar"/>
                <FaUserCircle className="user"/>
            </div>
        </div>
    </div>
    <div className="heading-container1">
        <IoIosArrowBack/>
    </div>
    </div>
)
export default Header