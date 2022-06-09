import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { DogProfileForm } from "./form.component";
import { CartProvider, useCart } from "react-use-cart";
import { useDogsProfilesContext } from "../../../providers/dogsProfile/dogProfile.provider";

import "./styles/dogProfile.style.css";

export const DogProfile = () => {
  const { state2, state, handlers } = useDogsProfilesContext();
  const { dogName } = useParams();
  const [dogProfile, setDogsProfile] = useState(() =>
    handlers.getDogProfile(dogName)
  );

  const [wishList, setWishlist] = useState([]);

  const addToWishList = (dog) => {
    // state2.dogsAddedToWishList = [];
    state2.dogsAddedToWishList.push(dog);

    return dog;
  };

  return (
    <div className="dog-application-submission">
      <div className="dog-profile-card-wrapper">
        <div className="dog-profile-card">
          <h1>{dogProfile.name}</h1>
          <div
            className="dog-profile-image"
            style={{ backgroundImage: `url(${dogProfile.url})` }}
          ></div>
          <article>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries.<br></br>
              <button
                onClick={() => addToWishList(dogProfile)}
                class="add-button"
              >
                Add to WishList
              </button>
            </p>
          </article>
        </div>
      </div>
      <div className="application-form">
        <DogProfileForm />
      </div>
    </div>
  );
};
