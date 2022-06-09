import { DOG_NAMES } from "../../mockData/dogNames.mockData";

export const fetchAllBreeds = async () => {
  const response = await fetch("https://dog.ceo/api/breeds/list/all");
  const breeds = await response.json();
  return Object.keys(breeds.message);
};

export const fetchAllBreedsImages = async (breeds) => {
  const mapBreedsPromises = breeds.map((breed) =>
    fetch(`https://dog.ceo/api/breed/${breed}/images`)
  );
  const dogsImagesResponses = await Promise.all(mapBreedsPromises);

  const dogImagesData = await Promise.all(
    dogsImagesResponses.map((response) => response.json())
  );
  const dogsImagesUrls = dogImagesData.map(({ message: dogs }) => dogs[0]);

  return dogsImagesUrls;
};

export const fetchdogsProfiles = async (dogsImagesUrl) => {
  let dogProfiles = [];

  for (let i = 0; i < dogsImagesUrl.length; i++) {
    if (!dogsImagesUrl[i]) continue;

    dogProfiles.push({ name: DOG_NAMES[i], url: dogsImagesUrl[i] });
  }

  return dogProfiles;
};
