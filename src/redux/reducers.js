import { combineReducers } from 'redux';

// this is the section where reducers are imported
import defaultReducer from './default/defaultReducer';

const rootReducer = combineReducers({
    default: defaultReducer,

});

export default rootReducer;