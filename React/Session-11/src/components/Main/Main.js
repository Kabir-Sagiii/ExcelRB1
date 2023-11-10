import Login from "../login/Login";
import Home from "../Home/Home";

function Main({ isLoggedIn, setIsLoggedIn }) {
  return (
    <div>{isLoggedIn ? <Home /> : <Login setIsLoggedIn={setIsLoggedIn} />}</div>
  );
}

export default Main;
