import { useNavigate } from 'react-router-dom';
import dc1 from "../../assets/dc1.jpg";
import dc2 from "../../assets/dc2.jpg";
import dc3 from "../../assets/dc3.jpg";
import dish from "../../assets/dish.jpg";
import hc1 from "../../assets/hc1.jpg";
import hc2 from "../../assets/hc2.jpg";
import hc4 from "../../assets/hc4.jpg";
import house from "../../assets/house.jpg";
import profile from "../../assets/profile.jpg";
import "./service.css";

const ServiceProvider = () => {
    const navigate = useNavigate();

    const handleBookNow = () => {
        navigate('/shop'); 
    };

    return (
        <div className="service-content">
            <div className="service-content-item">
                <img src={house} alt="Service" />
                <div className="profile-picture">
                    <img src={profile} alt="Profile" />
                    <p>Lucy James</p>
                </div>
                <p>House cleaning service</p>
                <p>KSH.5000</p>
                <p>Elevate your workplace Clean</p>
                <button onClick={handleBookNow}>Book Now</button>
            </div>
            <div className="service-content-item">
                <img src={hc2} alt="Service" />
                <div className="profile-picture">
                    <img src={profile} alt="Profile" />
                    <p>Jelly James</p>
                </div>
                <p>House cleaning service</p>
                <p>KSH.6000</p>
                <p>Professional cleaning</p>
                <button onClick={handleBookNow}>Book Now</button>
            </div>
            <div className="service-content-item">
                <img src={hc2} alt="Service" />
                <div className="profile-picture">
                    <img src={profile} alt="Profile" />
                    <p>Ruth James</p>
                </div>
                <p>House cleaning service</p>
                <p>KSH.8000</p>
                <p>Experts cleaners for every need</p>
                <button onClick={handleBookNow}>Book Now</button>
            </div>
            <div className="service-content-item">
                <img src={hc2} alt="Service" />
                <div className="profile-picture">
                    <img src={profile} alt="Profile" />
                    <p>Jasper James</p>
                </div>
                <p>House cleaning service</p>
                <p>KSH.5000</p>
                <p>Elevate your workplace Clean</p>
                <button onClick={handleBookNow}>Book Now</button>
            </div>
            <div className="service-content-item">
                <img src={dish} alt="Service" />
                <div className="profile-picture">
                    <img src={profile} alt="Profile" />
                    <p>Eunice James</p>
                </div>
                <p>Dish washing service</p>
                <p>KSH.5000</p>
                <p>Elevate your workplace Clean</p>
                <button onClick={handleBookNow}>Book Now</button>
            </div>
            <div className="service-content-item">
                <img src={hc1} alt="Service" />
                <div className="profile-picture">
                    <img src={profile} alt="Profile" />
                    <p>Antony James</p>
                </div>
                <p>House cleaning service</p>
                <p>KSH.6000</p>
                <p>Elevate your workplace Clean</p>
                <button onClick={handleBookNow}>Book Now</button>
            </div>
            <div className="service-content-item">
                <img src={hc4} alt="Service" />
                <div className="profile-picture">
                    <img src={profile} alt="Profile" />
                    <p>Paul James</p>
                </div>
                <p>House cleaning service</p>
                <p>KSH.7000</p>
                <p>Elevate your workplace Clean</p>
                <button onClick={handleBookNow}>Book Now</button>
            </div>
            <div className="service-content-item">
                <img src={dc3} alt="Service" />
                <div className="profile-picture">
                    <img src={profile} alt="Profile" />
                    <p>Cynthia James</p>
                </div>
                <p>Dish washing service</p>
                <p>KSH.5000</p>
                <p>Elevate your workplace Clean</p>
                <button onClick={handleBookNow}>Book Now</button>
            </div>
            <div className="service-content-item">
                <img src={dc1} alt="Service" />
                <div className="profile-picture">
                    <img src={profile} alt="Profile" />
                    <p>Jelly James</p>
                </div>
                <p>Dish washing service</p>
                <p>KSH.4000</p>
                <p>Elevate your workplace Clean</p>
                <button onClick={handleBookNow}>Book Now</button>
            </div>
            <div className="service-content-item">
                <img src={dc2} alt="Service" />
                <div className="profile-picture">
                    <img src={profile} alt="Profile" />
                    <p>Vonnie Vee</p>
                </div>
                <p>Dish washing service</p>
                <p>KSH.3000</p>
                <p>Your house with cleanliness</p>
                <button onClick={handleBookNow}>Book Now</button>
            </div>
        </div>
    );
}

export default ServiceProvider;
