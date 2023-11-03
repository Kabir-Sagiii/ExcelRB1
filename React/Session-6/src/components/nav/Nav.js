import "./Nav.css";

function Nav({ isLoggedIn, setIsLoggedIn }) {
  return (
    <div className="navcontainer">
      <div className="title">
        <h2>React Application</h2>
      </div>

      <div className="menu">
        <a href="">Home</a>
        <a href="">Profile</a>
        <a href="">Products</a>
        {isLoggedIn ? (
          <button
            onClick={() => {
              setIsLoggedIn(false);
            }}
          >
            Logout
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default Nav;
