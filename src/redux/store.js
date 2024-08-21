import { createStore} from 'redux';

// this is where reducer is imported
import rootReducer from './reducers';
const store = createStore(rootReducer);

export default store;