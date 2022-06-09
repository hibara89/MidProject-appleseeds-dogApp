import React, { useContext, useEffect, useState } from "react";
import {
  fetchAllBreeds,
  fetchAllBreedsImages,
  fetchdogsProfiles,
} from "../../api/dogs/dogsrequest";

const dogProfileContextTemplate = {
  state: {
    dogsProfiles: [],
  },
  state2: {
    dogsAddedToWishList: [],
  },
  handlers: {
    getDogProfile: (_name) => {},
  },
};

const dogsProfilesContext = React.createContext(null);

export const useDogsProfilesContext = () => {
  return useContext(dogsProfilesContext);
};

export const DogprofileProvider = ({ children }) => {
  const [dogsProfiles, setdogsProfiles] = useState([]);
  const [dogsAddedToWishList, setdogsAdded] = useState([]);

  useEffect(() => {
    async function func() {
      const breeds = await fetchAllBreeds();
      const dogImagesUrl = await fetchAllBreedsImages(breeds);
      const dogsProfiles = await fetchdogsProfiles(dogImagesUrl);
      setdogsProfiles(dogsProfiles);
    }
    func();
  }, []);
  const getDogProfile = (name) => {
    const dogProfile = dogsProfiles.find((dog) => dog.name === name);
    if (dogProfile === undefined) {
      return {};
    } else {
      return dogProfile;
    }
  };

  const state = {
    dogsProfiles,
  };
  const state2 = {
    dogsAddedToWishList,
  };
  const handlers = {
    getDogProfile,
  };

  return (
    <dogsProfilesContext.Provider value={{ state, handlers, state2 }}>
      {children}
    </dogsProfilesContext.Provider>
  );
};
