import "./Nav.css";
import { Link } from "react-router-dom";

function Nav({ isLoggedIn, setIsLoggedIn }) {
  return (
    <div className="navcontainer">
      <div className="title">
        <h2>React Application</h2>
      </div>

      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/products">Products</Link>
        <Link to="/axios">Axios</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </div>
  );
}

export default Nav;
