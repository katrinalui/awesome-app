const getDogImage = breed => {
  return fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
};

export default getDogImage;
