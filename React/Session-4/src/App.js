import logo from "./logo.svg";
import "./App.css";

import Nav from "./components/nav/Nav";
import Section1 from "./components/Section-1/Section1";
import Section2 from "./components/Section-2/Section2";
import Header2 from "./components/FlipkartUI/Header2";
import Counter from "./components/Counter/Counter";
function App() {
  return (
    <div>
      <Nav />
      <Counter />
      {/* <Header2 />
      <Section1 />
      <Section2 /> */}
    </div>
  );
}

export default App;
