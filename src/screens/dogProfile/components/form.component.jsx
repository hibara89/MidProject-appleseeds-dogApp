import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./styles/dogProfile.style.css";

export const DogProfileForm = () => {
  return (
    <>
      <form>
        <div className="header-form">Application Form</div>
        <br></br>
        <label>firstName</label>
        <br></br>
        <input type={"text"} placeholder="Enter your first name" />
        <br></br>
        <label>lastName</label>
        <br></br>
        <input type={"text"} placeholder="Enter your last name" />
        <br></br>
        <label>Email:</label>
        <input type={"email"} placeholder="Enter your email" />
        <br></br>
        <br></br>
        <div className="check-box">
          <input type={"checkbox"} />
          <label>I would like to add to my wishlist</label>
        </div>
        <br></br>
        <Popup
          trigger={<button type={"submit"}> Submit</button>}
          position="below center"
        >
          <div>
            Thank you for your application, we will update you shortly<br></br>
            <button>Add to wishlist</button>
          </div>
        </Popup>
        {/* <button type={"submit"}>submit</button> */}
        <br></br>
      </form>
    </>
  );
};
