import React, { useState } from "react";
import { CartProvider, useCart } from "react-use-cart";
import { useDogsProfilesContext } from "../../providers/dogsProfile/dogProfile.provider";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./wishlist.css";
import { addToWishList } from "../dogProfile/components/DogProfile";

const Wishlist = () => {
  const { state2, state, setdogsProfiles } = useDogsProfilesContext();
  return (
    <>
      <br></br>
      <div className="dog-list">
        {state2.dogsAddedToWishList.map((dog, index) => (
          <div style={{ backgroundImage: `url(${dog.url})` }}>
            <h1 className="dog-name">{dog.name}</h1>
            <button
              className="remove"
              onClick={() => state2.dogsAddedToWishList.splice(1, index)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Wishlist;
