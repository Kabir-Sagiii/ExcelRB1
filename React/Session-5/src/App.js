import logo from "./logo.svg";
import "./App.css";

import Nav from "./components/nav/Nav";
import Section1 from "./components/Section-1/Section1";
import Section2 from "./components/Section-2/Section2";
import Header2 from "./components/FlipkartUI/Header2";
import Counter from "./components/Counter/Counter";
import Image from "./components/images/Image";
import TextColor from "./components/Textcolor/TextColor";
import Input from "./components/Parent-Child/Input";
import Login from "./components/login/Login";
import Home from "./components/Home/Home";
function App() {
  return (
    <div className="App">
      <Nav />
      {/* <Login /> */}
      <Home />
    </div>
  );
}

export default App;
