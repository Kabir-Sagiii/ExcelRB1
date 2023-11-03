import "./App.css";
import { useState } from "react";

import Nav from "./components/nav/Nav";

import Main from "./components/Main/Main";
import A from "./components/context/A";
function App() {
  let [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="App">
      {/* <A /> */}
      <Nav isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Main isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    </div>
  );
}

export default App;
