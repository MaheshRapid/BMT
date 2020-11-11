import { createStore,combineReducers,applyMiddleware} from 'redux';
import rootReducer from "../reducers"
import thunk from 'redux-thunk';

const ConfigureStore = () => {
    const store = createStore(
        rootReducer, applyMiddleware(thunk)
        )
    return store;
  }
  
  export default ConfigureStore;