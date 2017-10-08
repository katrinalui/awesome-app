import getDogImage from '../util/dog_api_util';

export const RECEIVE_DOG = "RECEIVE_DOG";

export const receiveDog = dog => ({
  type: RECEIVE_DOG,
  dog
});

export const requestDog = breed => dispatch => (
  getDogImage(breed).then(dog => dispatch(receiveDog(dog.message)))
);
