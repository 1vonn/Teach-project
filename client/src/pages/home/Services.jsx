import house from "../../assets/house.jpg";
import dish from "../../assets/dish.jpg";
import { FaRegClock } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import "./service.css";
const Services= () =>{
    return(
<div className="service-content">
{/* <h2>Services we offer</h2> */}
    <div className="service-offered">
        <div className="service-offered-list">
            <img src={house} alt="image"></img>
            <p>Proffesional and quality cleaning</p>
            <h2>House cleaning service</h2>
        </div>
        <div className="service-offered-list">
            <img src={dish} alt="image"></img>
            <p>Best dish washing services</p>
            <h2>Dish washing service</h2>
        </div>
    </div>
<div className="why-us">
    <div className="why-us-list">

        <div className="icon"><IoPeople /></div>
        <p>Highly trained staff.  </p>
    </div>
    <div className="why-us-list">
        
        <div className="icon"><FaRegClock /></div>
        <p>Fast and efficient services</p>
    </div>
    <h2>Why us</h2>
</div>
</div>
    )
}
export default Services;