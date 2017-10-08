import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import DogReducer from '../reducers/dog_reducer';

const configureStore = (preLoadedState = {}) => (
  createStore(DogReducer, preLoadedState, applyMiddleware(thunk))
);

export default configureStore;
