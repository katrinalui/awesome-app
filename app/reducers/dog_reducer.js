import { RECEIVE_DOG } from '../actions/dog_actions';

const DogReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_DOG:
      return { url: action.dog };
    default:
      return state;
  }
};

export default DogReducer;
