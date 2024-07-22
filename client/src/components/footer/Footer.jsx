import { SiCcleaner } from "react-icons/si";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
// import { IoLocation } from "react-icons/io5";
import './footer.css';
const Footer =() => {
    return(
<div className="footer-content">
<div className="footer-content-item">
    <div className="icon"><SiCcleaner /></div>
    <h2>Make Clean</h2>
    <p>We provide top-quality cleaning and related services </p>
        <p>that meet and exceeds the expectation of todays demanding clients</p>
        <div className="footer-content-items2">
    <h2>Follow Us On</h2>
    <div className="icon"><a href="icon"><FaFacebookSquare /></a></div>
    <div className="icon"><a href="icon"></a><FaLinkedin /></div>
    <div className="icon"><a href="icon"></a><FaXTwitter /></div>
    <div className="icon"><a href="icon"></a><FaGoogle /></div>
</div>
</div>

<div className="footer-content-items">
    <h2>Best Services</h2>
    <p>House cleaning services</p>
    <p>Dish washing services</p>

<div className="footer-content-items2">
    <h2>Get In Touch </h2>
    <div className="footer-content-reach-us">
    <div className="icon"><FaPhoneAlt /> </div>
    <p>Phone Number</p>
    <p>+25467898276</p>
    </div>
    <div className="footer-content-reach-us">
    <div className="icon"><MdEmail /> </div>
    <p>Email</p>
    <p>makeclean@gmail.com</p>
    </div>
    {/* <div className="footer-content-reach-us">
    <div className="icon"><IoLocation /> </div>
    <p>Location</p>
    <p>Afya house Second Floor,</p>
    <p>Thika, Kenya</p>
    </div> */}
    </div>
</div>
</div>
    )
    
}
export default Footer;