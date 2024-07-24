import { Link, useNavigate } from "react-router-dom";
import './header.css';
import useStore from "../../store.js";
import { RiAdminFill } from "react-icons/ri";

const Header = () => {
  const isLoggedIn = useStore((state) => state.isLoggedIn);
  const isAdmin = useStore((state) => state.isAdmin);
  const setLoggedIn = useStore((state) => state.setLoggedIn);
  const setAdmin = useStore((state) => state.setAdmin);
  const navigate = useNavigate();

  const handleLogout = () => {
    setLoggedIn(false); 
    setAdmin(false); 
    navigate("/getintouch");
  };

  // Hide header if admin is logged in
  if (isAdmin) return null;

  return (
    <header>
      <div className="header-content">
        <nav className="header-nav">
          <ol className="header-nav-content">
            {!isLoggedIn && (
              <>
                <li className="header-nav-item"><Link to="/">Home</Link></li>
                <li className="header-nav-item"><Link to="/getintouch">Get In Touch</Link></li>
                <li className="header-nav-item"><Link to="/adminlogin">Admin<RiAdminFill /></Link></li>
              </>
            )}
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
