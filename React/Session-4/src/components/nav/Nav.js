import "./Nav.css";

function Nav() {
  return (
    <div className="navcontainer">
      <div className="title">
        <h2>React Application</h2>
      </div>

      <div className="menu">
        <a href="">Home</a>
        <a href="">Profile</a>
        <a href="">Products</a>
        <a href="">Login</a>
      </div>
    </div>
  );
}

export default Nav;
