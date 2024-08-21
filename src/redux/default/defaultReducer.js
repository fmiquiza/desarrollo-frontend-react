import { SET_NAME_MODULE } from "./defaultTypes";

const initialState = {
    name: 'Dev FrontEnd with React - defaultReducer global variable',
};

const defaultReducer = (state = initialState, action)  => {
    switch (action){
        case SET_NAME_MODULE : {
            return {
                ...state,
                name: action.payload,
            }
        }
        default:
            return state;
    }
};

export default defaultReducer;