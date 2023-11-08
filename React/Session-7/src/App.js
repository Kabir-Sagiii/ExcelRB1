import "./App.css";
import { useState } from "react";

import Nav from "./components/nav/Nav";

import Home from "./components/routing/Home";
import Profile from "./components/routing/Profile";
import Cart from "./components/routing/Cart";
import Products from "./components/routing/Products";
import Electronics from "./components/routing/Nested-Components/Electronics";
import Jewelery from "./components/routing/Nested-Components/Jewelery";
import MensClothing from "./components/routing/Nested-Components/MensClothing";
import WomensClothing from "./components/routing/Nested-Components/WomensClothing";

import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  let [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <div className="App">
      <Nav isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <Routes>
        <Route path="/products" element={<Products />}>
          <Route path="" element={<Navigate to="jewelery" />} />
          <Route path="electronics" element={<Electronics />} />
          <Route path="jewelery" element={<Jewelery />} />
          <Route path="mens" element={<MensClothing />} />
          <Route path="womens" element={<WomensClothing />} />
        </Route>

        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
