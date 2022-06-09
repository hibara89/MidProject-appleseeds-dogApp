import React from "react";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { DashBoard } from "../screens/dashboard/DashBoard";
import { DogprofileProvider } from "../providers/dogsProfile/dogProfile.provider";
import { DogProfile } from "../screens/dogProfile/components/DogProfile";
import { CartProvider, useCart } from "react-use-cart";
import Navbar from "../globalComponents/Navbar";
import Wishlist from "../screens/wishlist/Wishlist";

function App() {
  return (
    <div className="App">
      <Navbar />

      <DogprofileProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<DashBoard />} />

          <Route path="/dog-profile/:dogName" element={<DogProfile />} />

          <Route path="/my-wish-list" element={<Wishlist />} />
        </Routes>
      </DogprofileProvider>
    </div>
  );
}

export default App;
