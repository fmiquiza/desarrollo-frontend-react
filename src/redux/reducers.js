import { combineReducers } from 'redux';

// This is where all Reducers are imported
import defaultReducer from "./default/defaultReducer";
import productReducer from "./product/productReducer";
import formReducer from "./form/formReducer";

const rootReducer = combineReducers({
    default: defaultReducer,
    product: productReducer,
    form: formReducer,
});

export default rootReducer;