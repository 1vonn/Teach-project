import { Link, useNavigate } from "react-router-dom";
import './header.css';
import useStore from "../../store.js";

const Header = () => {
  const isLoggedIn = useStore((state) => state.isLoggedIn);
  // const setIsLoggedIn = useStore((state) => state.setIsLoggedIn);
  const navigate = useNavigate();

  const handleLogout = () => {
    // setIsLoggedIn(false);  // Update the state to log out the user
    navigate("/getintouch");
    // window.location.reload(); // Refresh the page
  
  };

  return (
    <header>
      <div className="header-content">
        <nav className="header-nav">
          <ol className="header-nav-content">
            <li className="header-nav-item"><Link to="/">Home</Link></li>
            <li className="header-nav-item"><Link to="/getintouch">Get In Touch</Link></li>
            <li className="header-nav-item"><Link to="/adminlogin">Admin Login</Link></li>
            {isLoggedIn && (
              <>
                <li className="header-nav-item"><Link to="/service">Service Providers</Link></li>
                <li className="header-nav-item"><Link to="/shop">Shop</Link></li>
                <button className="header-nav-item" onClick={handleLogout}>Logout</button>
              </>
            )}
          </ol>
        </nav>
      </div>
    </header>
  );
};

export default Header;
